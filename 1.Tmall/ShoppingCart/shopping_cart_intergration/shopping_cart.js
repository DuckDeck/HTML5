
function formatMoney(num){
    num = num.toString().replace(/\$|\,/g,'');  
    if(isNaN(num))  
        num = "0";  
    sign = (num == (num = Math.abs(num)));  
    num = Math.floor(num*100+0.50000000001);  
    cents = num%100;  
    num = Math.floor(num/100).toString();  
    if(cents<10)  
    cents = "0" + cents;  
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)  
    num = num.substring(0,num.length-(4*i+3))+','+  
    num.substring(num.length-(4*i+3));  
    return (((sign)?'':'-') + num + '.' + cents);  
}

function syncCreateOrderButton() {
    var selectAny = false
    var allSelected = true
    var allCount = 0
    var sum = 0.0
    $('.productCheck').each(function(){
        if($(this).prop('checked')){
            selectAny = true
            $(this).parent().parent().css('background-color','#eeeeee')
            let oii = $(this).attr('oiid')
            var price = $(".cartProductItemSmallSumPrice[oiid="+oii+"]").text()
            price = price.replace(/,/g,'')
            price = price.replace(/￥/g,'')
            sum += new Number(price)
            count =  $(".orderItemNumberSetting[oiid="+oii+"]").val()
            allCount += new Number(count)
        }
        else{
             allSelected = false
             $(this).parent().parent().css('background-color','white')
        }
    })
    $("span.cartSumPrice").html("￥"+formatMoney(sum));
    $("span.cartTitlePrice").html("￥"+formatMoney(sum));
    $('span.cartSumNumber').text(allCount)
     $('.allCheckbox').prop('checked',allSelected)
    if(selectAny){
        $("button.createOrderButton").css("background-color","#C40000");
        $("button.createOrderButton").removeAttr("disabled");
        $("button.bigCreateOrderButton").css("background-color","#C40000");
        $("button.bigCreateOrderButton").removeAttr("disabled");
    }
    else{
        $("button.createOrderButton").css("background-color","#aaa");
        $("button.createOrderButton").attr("disabled",'disabled');
        $("button.bigCreateOrderButton").css("background-color","#aaa");
        $("button.bigCreateOrderButton").attr("disabled",'disabled');
    }
}

function checkAll(isCheck) { 
     $('.productCheck').each(function(){
            $(this).prop('checked',isCheck)
    })
 }





$(function(){
    $('.productCheck').click(function(){
        syncCreateOrderButton()
    })

    $('.allCheckbox').click(function() {
        let isCheck = $(this).prop('checked')
        checkAll(isCheck)
        syncCreateOrderButton()
    })

    $('.numberMinus').click(function(){
        let pid = $(this).attr('pid')
        let count =new Number($('.orderItemNumberSetting[pid='+pid+']').val())
        var singlePrice =  $('.cartProductItemSmallSumPrice[pid='+pid+']').text()
        singlePrice = singlePrice.replace(/,/g,'')
        singlePrice = singlePrice.replace(/￥/g,'')
        if(count > 0)singlePrice = singlePrice / count
        if(count > 1){
            count --   
        }
        $('.orderItemNumberSetting[pid='+pid+']').val(count)
        $('.cartProductItemSmallSumPrice[pid='+pid+']').text("￥"+formatMoney(singlePrice * count));
        syncCreateOrderButton()
    })
    $('.numberPlus').click(function(){
        let pid = $(this).attr('pid')
        var singlePrice =  $('.cartProductItemSmallSumPrice[pid='+pid+']').text()
        singlePrice = singlePrice.replace(/,/g,'')
        singlePrice = singlePrice.replace(/￥/g,'')
        let count =new Number($('.orderItemNumberSetting[pid='+pid+']').val())
        if(count > 0)singlePrice = singlePrice / count
        let stock =new Number( $(this).attr('stock'))
        if(count <= stock){
            count ++
        }
        $('.orderItemNumberSetting[pid='+pid+']').val(count)
        $('.cartProductItemSmallSumPrice[pid='+pid+']').text("￥"+formatMoney(singlePrice * count));
        syncCreateOrderButton()
    })
})



//这里的交互有点难搞，暂时不搞

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
    var count = 0
    $('.productCheck').each(function(){
        if($(this).prop('checked')){
            selectAny = true
            $(this).parent().parent().css('background-color','#eeeeee')
        
        }
        else{
             allSelected = false
             $(this).parent().parent().css('background-color','white')
        }
    })
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
})



//这里的交互有点难搞，暂时不搞
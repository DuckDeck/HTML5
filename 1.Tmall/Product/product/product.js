$(function(){
    $('.smallImage').mouseover(function(){
        let url = $(this).attr('bigImageURL')
        $('#bigProductImage').attr('src',url)
    })
    //这里还要做预加载的效果
    // $('#bigProductImage').load(function(){
    //   $('.smallImage').each(function(){
    //        let url = $(this).attr('bigImageURL')
    //        img = new Image()
    //        img.src = url
    //        img.onload = function(){
    //            console.log(url)
    //            $('')
    //        }
    //   })
    // })
    //感觉不需要

    var stock = 66
    $('.productNumberSetting').keyup(function(){
        var num = $(this).val()
        num = parseInt(num)
        if(isNaN(num))
            num = 1
        if(num<0)
            num=1
        if(num>stock)
            num = stock
        $(this).val(num)
    })

    $('.increaseNumber').click(function(){
        var num =$('.productNumberSetting').val()
        num ++
        if(num > stock)
            num = stock
        $('.productNumberSetting').val(num)
    })

     $('.decreaseNumber').click(function(){
        var num =$('.productNumberSetting').val()
        num --
        if(num <= 1)
            num = 1
        $('.productNumberSetting').val(num)
    })
})
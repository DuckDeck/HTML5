$(function(){
    $('a[orderstatus]').click(function(){
        var orderstatus = $(this).attr('orderstatus')
        if(orderstatus == 'all'){
            $('table[orderstatus]').show()
        }
        else{
            $('table[orderstatus]').hide()
            $('table[orderstatus='+orderstatus+']').show()
        }
        $('div.orderType div').removeClass('selectedOrderType')
        $(this).parent('div').addClass('selectedOrderType')
    })
})
$(function(){
    $('#sub').click(function (e) { 
        e.preventDefault();
        
        if($("input[name='chanle']:checked").val() == undefined){
            console.log('chanle undefined')
            return;
        }
        if($("input[name='howToKnow']:checked").val() == undefined){
            console.log('howToKnow undefined')
            return;
        }
        if($("input[name='age']:checked").val() == undefined){
            console.log('age undefined')
            return;
        }
        if($("input[name='gender']:checked").val() == undefined){
            console.log('gender undefined')
            return;
        }
        if($("input[name='bussiness']:checked").val() == undefined){
            console.log('bussiness undefined')
            return;
        }
        
        if(!$('.wanjiaAdvise').val()){
            console.log('wanjiaAdvise text nil')
            return;
        }
        
        var data = {'chanle':$("input[name='chanle']:checked+label").text(),
                    'howToKnow':$("input[name='howToKnow']:checked+label").text(),
                   'age':$("input[name='age']:checked+label").text(),
                   'gender':$("input[name='gender']:checked+label").text(),
                   'bussiness':$("input[name='bussiness']:checked+label").text(),
                   'advise':$('.wanjiaAdvise').val()}
        $.post("url", data,
            function (data, textStatus, jqXHR) {
                
            },
            "dataType"
        );
    });
})


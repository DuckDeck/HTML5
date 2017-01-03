$(function () {
    $('#sub').click(function (e) {
        e.preventDefault();
        if ($("input[name='chanle']:checked").val() == undefined) {
            console.log('chanle undefined')
            var data = {
                'action': 'toast', 'data': '请先选择频道'
            }
            toastToiOS(data)
            return;
        }
        if ($("input[name='howToKnow']:checked").val() == undefined) {
            console.log('howToKnow undefined')
            var data = {
                'action': 'toast', 'data': '请先选择怎样了解玩+APP'
            }
            toastToiOS(data)
            return;
        }
        if ($("input[name='age']:checked").val() == undefined) {
            console.log('age undefined')
            var data = {
                'action': 'toast', 'data': '你没有选择出生年代'
            }
            toastToiOS(data)
            return;
        }
        if ($("input[name='gender']:checked").val() == undefined) {
            console.log('gender undefined')
            var data = {
                'action': 'toast', 'data': '你没有选择性别'
            }
            toastToiOS(data)
            return;
        }
        if ($("input[name='bussiness']:checked").val() == undefined) {
            console.log('bussiness undefined')
            var data = {
                'action': 'toast', 'data': '你没有选择行业'
            }
            toastToiOS(data)
            return;
        }

        if (!$('.wanjiaAdvise').val()) {
            console.log('wanjiaAdvise text nil')
            var data = {
                'action': 'toast', 'data': '意见不能为空'
            }
            toastToiOS(data)
            return;
        }

        var data = {
            'chanle': $("input[name='chanle']:checked+label").text(),
            'howToKnow': $("input[name='howToKnow']:checked+label").text(),
            'age': $("input[name='age']:checked+label").text(),
            'gender': $("input[name='gender']:checked+label").text(),
            'bussiness': $("input[name='bussiness']:checked+label").text(),
            'advise': $('.wanjiaAdvise').val()
        }
        $.post("url", data,
            function (data, textStatus, jqXHR) {
                if (true) { //upload success
                    var data = {
                        'action': 'nav', 'data': 'toback'
                    }
                    toastToiOS(data)
                }
                else {success //upload fail
                    var data = {
                        'action': 'toase', 'data': '提交失败，请重新再试'
                    }
                    toastToiOS(data)
                }
            },
            "dataType"
        );
    });

})

function toastToiOS(message) {
    window.webkit.messageHandlers.showMobile.postMessage(message)
}
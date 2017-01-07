export  function urlParams(url) {
            var urlParamsList = {};
            var params
            if (url.search == ''){
                if(url.href.includes('?'))
                  params = url.href.split('?')[1].split('&')
                else
                  return []
            }else{
                params = url.search.replace(/^\?/, "").split('&'); //分开成各个不同的对像，去掉'&'
            }
            if (params.length == 0){
                return []
            }
            for (var i = 0; i < params.length; i++) {
                var param = params[i];
                var temp = param.split("=");
                urlParamsList[temp[0]] = decodeURI(temp[1]);
            }
            return urlParamsList;
}
export function a(key) {
    return 111
}
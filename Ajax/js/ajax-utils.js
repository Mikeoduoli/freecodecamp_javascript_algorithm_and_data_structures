(function (global) {
    var ajaxUtils = {};

    //Returning HTTP request object
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            return(new XMLHttpRequest());
        }
        else if (window.ActiveXObject){
            //For very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        }
        else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }


    //Makes an Ajax GET request to 'requesturl'
    ajaxUtils.sendGetRequest = 
        function (requestUrl, responseHandler) {
            var request = getRequestObject();
            myHandler = responseHandler
            request.onreadystatechange = 
                function () {
                    handleResponse(request, responseHandler);
                };
            request.open("GET", requestUrl, true);
            request.send(null); //for POST only
        };

        function handleResponse(request, responseHandler) {
            if((request.readyState == 4) && (request.status == 200)) {
                responseHandler(request);
            }
        }

        //Expose utility to the global object
        global.$ajaxUtils = ajaUtils;

})(window);
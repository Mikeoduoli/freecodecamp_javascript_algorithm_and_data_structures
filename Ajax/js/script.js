//Event Handling
document.addEventListener("DOMContentLoaded", 
    function (event) {
        //Unobstrussive event binding
        document.querySelector("button")
            .addEventListener("click", function(){
                // var self = this;
                // var name = "";

                //Call Server To get the name
                $ajaxUtils
                    .sendGetRequest("/data/name.txt",
                        function (request) {
                            var name = request.responseText;

                            document.querySelector("#content")
                                    .innerHTML = "<h2>Hello " + name + "!"
                        });
            });
});
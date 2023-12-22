// DOM Manipulation
// console.log(document.getElementById("title"));

document.addEventListener("DOMContentLoaded", 
    function (event) {

        function sayHello (event) {
            this.textContent = "Said it!"
            var name = 
                document.getElementById("name").value;
                // var message = "Hello " + name + "!";
                var message = "<h2>Hello " + name + "!</h2>";
        
            document
                .getElementById("content")
                .innerHTML = message;
        
            if(name === "student"){
                var title =
                document
                    .querySelector("#title")
                    .textContent;
                title += " & Loving It!"
                document.querySelector("#title")
                    .textContent = title;
            }
        } 
    }
    );



//Event Handling
// document.querySelector("button")
//     .addEventListener("click", sayHello);

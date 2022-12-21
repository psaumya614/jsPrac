
//javascript
    // const h1 = document.querySelector("#h1")
    // h1.innerHTML = "<span>hey this is saumya pandey</span>"


//jquery
$("#h1").html("<span>hey this is saumya</span>");




$('#parent').prepend("<p>JQuery is so easy!</p>");

$('#parent').before("So today is <span style='color:red'>monday</span>")


// function myFunc(){
//     $("<h1>I am new</h1>").replaceAll('span')
// }

// function myfunc(){
//     $("<h1>I am new</h1>").replaceAll('span#p')
// }


$("#span1").css("color", "red")

// function newfunc(){
//     $("#newSpan").addClass("greencolor");
// }


// if($('#newSpan').hasClass('greencolor')){
//     console.log("yes it is present");
// }else console.log("no it is not present");


// $("#div1").click(function(){
//     console.log("div is clicked");
// });


//js 

const div = document.querySelector('#div1')
div.addEventListener("click", function(){
    console.log("div is clicked");
});


$(window).resize(function(){
    console.log("you are resizing the window");
});








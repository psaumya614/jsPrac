


//if already have a element then first we need to select the tag(element) then inside that we add any element

    function abc(){
//         //Add DOM
//         const b= document.getElementById("one");
//         b.innerHTML = "<p>hello div</p>"
    

// //a is a child and inside document when we click the button this element will be added 
    
//         const a = document.createElement("p")
//         a.innerHTML = "Hello";
//         document.body.appendChild(a)

//         //how to append more child in html

//         const x = document.createElement("ol")
//         let y;
//         for(let i=0; i<10; i++){
//             //skip
//             if(i == 5){
//                 continue;
//             }
//             y += "<li>" + i + "</li>"; //y = y + value
//         } 
//         // x.innerHTML = "<li>1</li><li>2</li><li>3</li>";
//         x.innerHTML = y;
//         document.body.appendChild(x)


//         //RemoveChild

//         const m = document.getElementById("div1")

//         m.removeChild(m.firstElementChild)

//         // const d = document.getElementById("div1")
//         // document.body.remove(d) // remove all the element

//         const z = document.getElementById("p1")
//         document.body.remove(p1)

        //Modify Attributes

        // const a = document.getElementById("h1")
        // a.innerHTML = "Mercury"
        // a.innerText = "jupiter"
        // a.textContent= "saturn" 
        
        // const b =  document.getElementById("h1")
        // a.setAttribute("title", "Bangalore")

        // const c = document.getElementById("h1")
        // c.title = "Chennai"

        // const a = document.getElementById("h1")
        // a.removeAttribute("title")

        // const b = document.getElementById("h1")
        // a.style= "color:red"

        // const x = document.getElementById("h1")
        // x.setAttribute("style","")

        

       

        
    }

    //Add event


    // document.getElementById("b2").addEventListener("dblclick", function(){alert("heya")})


    // const event = document.getElementById("b1")
    // event.ondblclick = function() {alert("hello")} 

    //CSS

    const a= document.getElementById("p1")
    a.style.color = "red";

    const cssstyle1 = document.getElementById("h1")
    cssstyle1.setAttribute("style","color:Green")
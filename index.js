


//if already have a element then first we need to select the tag(element) then inside that we add any element

    function abc(){
        const b= document.getElementById("one");
        b.innerHTML = "<p>hello div</p>"
    

//a is a child and inside document when we click the button this element will be added 
    
        const a = document.createElement("p")
        a.innerHTML = "Hello";
        document.body.appendChild(a)

        //how to append more child in html

        const x = document.createElement("ol")
        let y;
        for(let i=0; i<10; i++){
            //skip
            if(i == 5){
                continue;
            }
            y += "<li>" + i + "</li>"; //y = y + value
        } 
        // x.innerHTML = "<li>1</li><li>2</li><li>3</li>";
        x.innerHTML = y;
        document.body.appendChild(x)

        
    }
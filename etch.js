let container = document.getElementById("container")
let button = document.getElementById("button")
let input = "";


let userRequest = () =>{   
        
    container.innerHTML = ""
    input = document.getElementById("input").value;  
      //clear the container
    bodyGrid(input)
      
}

button.addEventListener("click",userRequest)



//function to create the grid body when given the input on how much to create
function bodyGrid (count){

    console.log(count);
    
if(count<=16){
    for(let col=0;col<=count-1; col++){    
        const rowDiv = document.createElement("div") 
       
        rowDiv.classList.add("containerCol")
        container.appendChild(rowDiv)
        for(let row= 0; row<=count-1; row++ ){    
            const colDiv = document.createElement("div")                    
            colDiv.classList.add("containerRow")
            rowDiv.appendChild(colDiv)
            
    }    
}

let mouseOver = (event) =>{
    event.target.style.backgroundColor = "black"
       
}


//to call every div with the class containerRow
let gridCells = document.querySelectorAll(".containerRow")
console.log(gridCells);



//forEach is the method for NodeList/Array/object. parameter cell is the nodelist that i had 
//called
gridCells.forEach((cell) =>{

    cell.addEventListener("mouseover", mouseOver);
    console.log("Listener added to ", cell);    
})


}else{
    alert("please put 16 as max")
}


}
    
    
   

















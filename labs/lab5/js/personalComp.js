/*
April Kim
13 February 2023
N220 sp23
Class #23523
*/

/*--Algorithm:----------------------------------------------------------------*/
/*--create a composition that has css linked to it (class, id, tag)-------------*/


let newMyName = document.getElementById("myName");

/*--when mouse does something, change the style------------------*/
function addName() {
    newMyName.innerHTML = "Daisy";
    newMyName.style.backgroundColor = "#f5e942";
    newMyName.style.color = "#000000";
    newMyName.style.textShadow = "3px 3px 5px #a9e1f5";
    newMyName.style.padding = "20px";
    newMyName.style.borderRadius = "60px"
    newMyName.style.width = "auto";
    newMyName.style.borderStyle = "dotted";

}
/*----------------------------------------------------------------------------------*/

/*--Prof Instructions: --Create a composition that, at minimum:
1. Changes the css property of an asset on a mouse interaction (mouse over, mouse out, click)
2. Modifies and changes the inner html of one element
3. Accesses and modifies a variable outside of a local, function scope

 /*----------------------------------------------------------------------------------*/
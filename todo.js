// Approach No (i)
// let btn = document.querySelector("button");

// let ul = document.querySelector("ul");

// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delbtn = document.createElement("button"); // Create a new button for delete
//     delbtn.innerText = "delete";
//     delbtn.classList.add("delete");

//     delbtn.addEventListener("click", function(){
//         ul.removeChild(item); // Remove the item when the delete button is clicked
//     });

//     item.appendChild(delbtn);
//     ul.appendChild(item);
//     inp.value = "";
// });

// // let delbtns = document.querySelectorAll(".delete");
// // for(delBtn of delbtns){
// //     delBtn.addEventListener("click", function(){
// //         let par = this.parentElement;
// //         console.log(par);
// //         par.remove();
// //     });
// // }

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//     }
// });

// Approach No (ii)
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button"); // Create a new button for delete
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    delbtn.addEventListener("click", function() {
        ul.removeChild(item); // Remove the item when the delete button is clicked
    });

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

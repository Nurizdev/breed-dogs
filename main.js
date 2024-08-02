
const  dogImg=document.querySelector(".dogImg");


function getDogs(){
    fetch(`https://dog.ceo/api/breeds/list/all`)
.then((res)=>{
return res.json()
})
.then((data)=>{
    const breeds= data.message;
const greeds =document.querySelector(".greeds");
Object.keys(breeds).forEach((el)=>{
    let button= createButton(el);
    greeds.append(button);
});
})
.catch((error)=>{
    console.log(error);
})
}
function createButton(breed){
    const button=document.createElement("button");
    button.innerHTML = breed
    button.classList.add("breed-button");

    button.addEventListener("click",(e) =>{
        getDogBreed(breed)
    })
    return button
};





            
function getDogBreed( breed){
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res)=> {
return res.json()
    })
.then((data) =>{
    dogImg.src= data.message;

})
.catch((error)=>{
    console.log(error);
})


}
 
getDogs();

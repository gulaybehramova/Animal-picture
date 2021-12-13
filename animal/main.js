let cat=document.getElementById("cats")
let dog=document.getElementById("dogs")
let catButton=document.getElementById("catbtn")
let dogButton=document.getElementById("dogbtn")

catButton.addEventListener('click',function(){
    fetch ("https://aws.random.cat/meow")
    .then(result=>result.json())
    .then(res=>{
        let img=document.createElement("img")
        img.setAttribute("src",res.file)
        img.classList="img"
        cat.innerHTML=""
        cat.appendChild(img)
    })
} )

dogButton.addEventListener('click',function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(result=>result.json())
    .then(res=>{
        let img=document.createElement("img")
        img.setAttribute("src",res.message)
        img.classList="img"
        dog.innerHTML=""
        dog.appendChild(img)
    })
})

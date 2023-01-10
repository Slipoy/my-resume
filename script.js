let readMore = document.querySelector("#readMOre")
let moreText = document.querySelector("#moreTExt")
let isMore = false

readMore.addEventListener("click", ()=>{
    isMore = !isMore
    if (isMore){
        readMore.textContent = "Сховати"
        moreText.style.display = "block"
    }else{
        moreText.style.display = "none"
        readMore.textContent = "Досвід роботи..."
    }


})
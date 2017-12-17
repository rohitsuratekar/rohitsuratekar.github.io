function goBack() {
    window.history.back();
}

function shareBlog() {
    window.location.href = "https://twitter.com/intent/tweet?text=Check out Rohit's blog : https://rohitsuratekar.com/blog "
}

function goHome(){
    window.location.href = "https://rohitsuratekar.com/blog "
}

function clickThis(url){
    console.log(url)
    window.location.href = url
}
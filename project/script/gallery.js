

$(document).ready(function(){

    let ourFavorites = [
        {
            src: "./images/gallery_images/snowyhorses.jpg",
            alt: "Horses in Snow"
        },   
        {
            src: "./images/gallery_images/austin-alan.jpg",
            alt: "Austin and Alan"
        },   
        {
            src: "./images/gallery_images/jan-alan.jpg",
            alt: "Jan and Alan"
        },   
        {
            src: "./images/home_slideshow/CowsEating.jpg",
            alt: "Cows Eating"
        },    
        {
            src: "./images/gallery_images/alan-roping.jpg",
            alt: "Alan Roping"
        },   
        {
            src: "./images/home_slideshow/Barthel-sign.jpg",
            alt: "Metal Barthel Sign"
        },    
        {
            src: "./images/home_slideshow/cow-and-baby.jpg",
            alt: "Mom Cow and Newborn baby"
        },
        {
            src: "./images/home_slideshow/horse-grazing.jpg",
            alt: "Horse Grazing"
        },
    ];
    let leftImg = 0;
    let midImg = 1;
    let rightImg = 2;
    
    $("#leftbtn").click(function(){
        leftImg--;
        midImg--;
        rightImg--;
        if(leftImg<0){
            leftImg=ourFavorites.length-1;
        } else if(midImg<0){
            midImg=ourFavorites.length-1;
        } else if(rightImg<0){
            rightImg=ourFavorites.length-1;
        }
        
        changeImages(leftImg,midImg,rightImg);
    });
    
    $("#rightbtn").click(function(){
        leftImg++;
        midImg++;
        rightImg++;
        if(leftImg>ourFavorites.length-1){
            leftImg=0;
        } else if(midImg>ourFavorites.length-1){
            midImg=0;
        } else if(rightImg>ourFavorites.length-1){
            rightImg=0;
        }
        changeImages(leftImg,midImg,rightImg);
    });
    
    function changeImages(leftImg,midImg,rightImg) {
        $("#left-img").attr("src",ourFavorites[leftImg].src);
        $("#left-img").attr("alt",ourFavorites[leftImg].alt);
        $("#mid-img").attr("src",ourFavorites[midImg].src);
        $("#mid-img").attr("alt",ourFavorites[midImg].alt);
        $("#right-img").attr("src",ourFavorites[rightImg].src);
        $("#right-img").attr("alt",ourFavorites[rightImg].alt);
    }

    $("#hamburger-menu").click(function(){
        $("#top-bar").toggleClass("top-bar")
        $("#mid-bar").toggleClass("mid-bar")
        $("#bot-bar").toggleClass("bot-bar")
        $("#menu").toggleClass("menu-on")
        $("#scroll-down").toggleClass("hide")
        $("html,body").scrollTop(0)
        $("body").toggleClass("body-noscroll")
    });
});


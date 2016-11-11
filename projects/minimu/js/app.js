"use strict";
$(document).ready(function() {
    (function() {
    
        var largeBlock = document.querySelector(".large-block");
        var largeBlockAnimation= document.querySelector(".lg-block-description");
        
        var topBlock = document.querySelector(".top-block");
        var topBlockAnimation = document.querySelector(".top-block-description");
        
        var bottomBlock = document.querySelector(".bottom-block");
        var bottomBlockAnimation = document.querySelector(".bottom-block-description");
        
        //Large-Block Animation Node
        largeBlock.addEventListener("mouseover", function() {
            largeBlockAnimation.classList.add("lg-transition"); 
        });
        largeBlock.addEventListener("mouseleave", function() {
            largeBlockAnimation.classList.remove("lg-transition"); 
        });
        
        //Top-Block Animation Node
        topBlock.addEventListener("mouseover", function() {
            topBlockAnimation.classList.add("top-block-transition"); 
        });
        topBlock.addEventListener("mouseleave", function() {
            topBlockAnimation.classList.remove("top-block-transition"); 
        });
        //Bottom-Block Animation Node
        bottomBlock.addEventListener("mouseover", function() {
            bottomBlockAnimation.classList.add("bottom-block-transition"); 
        });
        bottomBlock.addEventListener("mouseleave", function() {
            bottomBlockAnimation.classList.remove("bottom-block-transition"); 
        });
        if (screen.width < 420) {
            largeBlockAnimation.classList.add("lg-transition"); 
            topBlockAnimation.classList.add("top-block-transition"); 
            bottomBlockAnimation.classList.add("bottom-block-transition"); 
        }
    })();
});

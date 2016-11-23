"use strict";
    $(document).ready(function() {
       //when user hovers over nav transition opacity
       
       (function() {
           var getNavDiv = document.getElementById('catalog-links-'),
               getAllSubNavs = document.querySelectorAll('.catalog-links > .sub-nav'),
               getAllNavItems = document.querySelectorAll('.catalog-links > a'),
               dropDownPosition = 0;
           $("#catalog-links-").addClass("nav-menu");
           var getAllNavItems = document.querySelectorAll('.catalog-links > a');
            $("#catalog-links-").wrapInner("<ul class=bt-nav-menu></ul>");
            $("#catalog-links- ul").css({
                display: "flex",
                listStyleType: "inherit",
                marginBefore: "inherit",
                marginAfter: "inheirt",
                marginStart: "inherit",
                marginEnd: "inherit",
                paddingStart: "inherit",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%"
            })
            //create a function for each category that will have a string that contains all the information for each category drop down
            for (var i = 0; i < getAllNavItems.length; i++) {
                switch($(getAllNavItems[i]).attr('href')) {
                        case "/sc1/brands/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/women/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/shoes/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/handbags-accessories/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/jewelry-watches/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/beauty-fragrance/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/juniors/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/men/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/baby-kids/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/bed-bath/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/home/furniture-24382/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/home/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        case "/sc1/clearance/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])); break;
                        default: break;
                }
            }
            var $set = $('.catalog-links ul').children();    
              for(var i = 0, len = $set.length; i < len; i +=2){
                  $set.slice(i, i+2).wrapAll('<li class="bt-nav-item"></li>');
              }
           $("#catalog-links-").accessibleMegaMenu({
                /* prefix for generated unique id attributes, which are required 
                   to indicate aria-owns, aria-controls and aria-labelledby */
                uuidPrefix: "accessible-megamenu",

                /* css class used to define the megamenu styling */
                menuClass: "bt-nav-menu",

                /* css class for a top-level navigation item in the megamenu */
                topNavItemClass: "bt-nav-item",

                /* css class for a megamenu panel */
                panelClass: "bt-sub-nav",

                /* css class for a group of items within a megamenu panel */
                panelGroupClass: "bt-sub-nav-group",

                /* css class for the hover state */
                hoverClass: "hover",

                /* css class for the focus state */
                focusClass: "focus",

                /* css class for the open state */
                openClass: "open"
            });
       })();
       
    });

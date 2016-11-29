$(document).ready(function() {
    "use strict";
   (function() {
       var getAllNavItems = document.querySelectorAll('.catalog-links > a'),
           getHamburgerItems = document.querySelectorAll("ul#hamburgerMenuList > li");

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
            width: "100%",
            marginLeft: "0",
            marginRight: "0"
        });
       //settimeout is added because featured brands loads after the DOM
       setTimeout(function() {
            for (var i = 0; i < getAllNavItems.length; i++) {
                switch($(getAllNavItems[i]).attr('href')) {
                        case "/sc1/brands/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                        case "/sc1/women/": createSubNav(i); break;
                        case "/sc1/shoes/": createSubNav(i); break;
                        case "/sc1/handbags-accessories/": createSubNav(i); break;
                        case "/sc1/jewelry-watches/": createSubNav(i); break;
                        case "/sc1/beauty-fragrance/": createSubNav(i); break;
                        case "/sc1/juniors/": createSubNav(i); break;
                        case "/sc1/men/": createSubNav(i); break;
                        case "/sc1/baby-kids/": createSubNav(i); break;
                        case "/sc1/bed-bath/": createSubNav(i); break;
                        case "/sc1/home/furniture-24382/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                        case "/sc1/home/": createSubNav(i); break;
                        case "/sc1/clearance/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                        default: break;
                }
            }
           //Wraps every pair of elements within the first ul of catalog-links in a li
           var $set = $('.catalog-links > ul').children();    
              for(var z = 0, len = $set.length; z < len; z +=2){
                  $set.slice(z, z+2).wrapAll('<li class="bt-nav-item"></li>');
              }
          //initialize MegaMenu
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
       }, 200);
       function createSubNav(currentIndex) {
            //After the 6th listitem a style is applied to each item, to move its subNav, to avoid compression
            if (currentIndex >= 7) {
                var createSpace = 20;

                for (var q = currentIndex; q > 7; q--) {
                    createSpace -= 4;
                }
                var subNav = $('<div class="bt-sub-nav"></div>').insertAfter($(getAllNavItems[currentIndex])).css('right', createSpace+'%');
            } else {
                var subNav = $('<div class="bt-sub-nav"></div>').insertAfter($(getAllNavItems[currentIndex]));
            }

    //---After the sub-nav div is created, everything within it is created underneath this comment.--------
            var subNavHeading = $(getHamburgerItems[currentIndex]).find("label:first").text().trim(),//sub-nav Heading
            getWomenList = $(getHamburgerItems[currentIndex]).find("ul:first").children();//Children of Women Listitem 
            $(subNav).append('<h2 class="bt-nav-group-topheading">'+subNavHeading +'</h2>');
    console.log(currentIndex);
    console.log(getWomenList.length);
           
            for (var x = 2; x < getWomenList.length; x++) {
                //creates the first column with a title
                try {
                    var classString = x + 'col',
                        colIn = currentIndex - 1;//This variable is the current sub-nav with columns
                                      //Ex: colIn 0 will be women subnav, because that's the very first subnav with columns

                    $(subNav).append('<ul class="bt-sub-nav-group '+ classString +'"></ul>'); //Column Container
                    $(getWomenList[x]).find('ul:first').children().each(function(index, value) { //All top level items for each sub category
                           if ($(this).children('ul').length) { //checks if a top level item has another list, if it does
                                                                //it will get the first listitem anchor of that second list
                             $('.'+classString+':eq("'+colIn+'")').append('<li class="subcata-item"><a class="subcata-item-link" href="'+$(value).children('ul:first').find('li:first a').attr('href')+'" onclick="'+$(value).children('ul:first').find('li:first a').attr('onclick')+'">'+ $(value).find('label:first').text().trim() +'</a></li>');
                           } 

                           if ($(this).children('a').length) {//checks if a top level item doesn't have a inner list
                             $('.'+classString+':eq("'+colIn+'")').append('<li class="subcata-item"><a class="subcata-item-link" href="'+$(value).children('a').attr('href')+'" onclick="'+$(value).children('a').attr('onclick')+'">'+$(value).children('a').text().trim()+'</a></li>');
                           }
                    });
                    //Adds the title of the category that was newly created
                    $('.'+classString+':eq("'+colIn+'")').prepend('<li class="bt-nav-group-heading">'+'<h2>'+$(getWomenList[x]).find("label:first").text().trim()+'</h2>'+'</li>');

                    //Adds a promo container to the end of column list
                    if (x + 1 >= getWomenList.length) {
                        $('<ul class="bt-sub-nav-group-promo"></ul>').insertAfter('.'+classString);
                    }
                }
                catch(err) {
                    console.log(err);
                }
            }
       }
   })();
});
/*
<link href="/wcsstore/BonTon/text/categories/_shared/2016/11/css/main.css" type="text/css" rel="stylesheet">
<script type="text/javascript" src="/wcsstore/BonTon/text/categories/_shared/2016/11/js/jquery-accessibleMegeMenu.min.js"></script>
<script type="text/javascript" src="/wcsstore/BonTon/text/categories/_shared/2016/11/js/app.js"></script>
test -------------------
var getHamburgerItems = document.querySelectorAll("ul#hamburgerMenuList > li");
var getWomenList = $(getHamburgerItems[1]).find("ul:first").children();
var getAllNavItems = document.querySelectorAll('.catalog-links > a');
$(getWomenList[2]).find('ul:first ul li:first a').attr('href'); gets the anchor of the nested list item under each catagory
*/

"use strict";
$(document).ready(function() {
   (function() {
       var getNavDiv = document.getElementById('catalog-links-'),
           getAllNavItems = document.querySelectorAll('.catalog-links > a'),
           dropDownPosition = 0;

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
        })
        //create a function for each category that will have a string that contains all the information for each category drop down
        for (var i = 0; i < getAllNavItems.length; i++) {
            switch($(getAllNavItems[i]).attr('href')) {
                    case "/sc1/brands/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                    case "/sc1/women/": $(womenSubNav()).insertAfter($(getAllNavItems[i])); break;
                    case "/sc1/shoes/": $(shoesSubNav()).insertAfter($(getAllNavItems[i])); break;
                    case "/sc1/handbags-accessories/": $(hbagsAccessoriesSubNav()).insertAfter($(getAllNavItems[i])); break;
                    case "/sc1/jewelry-watches/": $(jewelryWatchesSubNav()).insertAfter($(getAllNavItems[i])); break;
                    case "/sc1/beauty-fragrance/": $(beautyFragSubNav()).insertAfter($(getAllNavItems[i])); break;
                    case "/sc1/juniors/": $(juniorSubNav()).insertAfter($(getAllNavItems[i])); break;
                    case "/sc1/men/": $(menSubNav()).insertAfter($(getAllNavItems[i])).css('right', '20%'); break;
                    case "/sc1/baby-kids/": $(babyandKidsSubNav()).insertAfter($(getAllNavItems[i])).css('right', '5%'); break;
                    case "/sc1/bed-bath/": $(bedandbathSubNav()).insertAfter($(getAllNavItems[i])).css('right', '0%'); break;
                    case "/sc1/home/furniture-24382/": $(furnitureSubNav()).insertAfter($(getAllNavItems[i])).css('right', '0%'); break;
                    case "/sc1/home/": $(homeSubNav()).insertAfter($(getAllNavItems[i])).css('right', '0%'); break;
                    case "/sc1/clearance/": $("<div class='bt-sub-nav'></div>").insertAfter($(getAllNavItems[i])).css("display","none"); break;
                    default: break;
            }
        }
       //Wraps every pair of elements within the first ul of catalog-links in a li
       var $set = $('.catalog-links > ul').children();    
          for(var i = 0, len = $set.length; i < len; i +=2){
              $set.slice(i, i+2).wrapAll('<li class="bt-nav-item"></li>');
          }
                $('.bt-sub-nav').append('<img alt="Close Button" src="js/ic_clear_black_48dp.png" class="bt-close-menu" width="64" height="64">');
                $('.bt-close-menu').css({position: 'absolute', right: 0, left: '94%', top: 0});
       /*$('.catalog-links > ul > li > a').attr('href', '#');
 
(function($){
    // Determine if we on iPhone or iPad
    var isiOS = false;
    var agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf('iphone') >= 0 || agent.indexOf('ipad') >= 0){
           isiOS = true;
    }
 
    $.fn.doubletap = function(onDoubleTapCallback, onTapCallback, delay){
        var eventName, action;
        delay = delay == null? 500 : delay;
        eventName = isiOS == true? 'touchend' : 'click';
 
        $(this).bind(eventName, function(event){
            var now = new Date().getTime();
            var lastTouch = $(this).data('lastTouch') || now + 1; //the first time this will make delta a negative number
            var delta = now - lastTouch;
            clearTimeout(action);
            if(delta<500 && delta>0){
                if(onDoubleTapCallback != null && typeof onDoubleTapCallback == 'function'){
                    onDoubleTapCallback(event);
                }
            }else{
                $(this).data('lastTouch', now);
                action = setTimeout(function(evt){
                    if(onTapCallback != null && typeof onTapCallback == 'function'){
                        onTapCallback(evt);
                    }
                    clearTimeout(action);   // clear the timeout
                }, delay, [event]);
            }
            $(this).data('lastTouch', now);
        });
    };
})(jQuery);
$('.catalog-links > ul > li > a').doubletap(
    // doubletap-dblclick callback
    function(event){
        alert('double-tap');
    },
    // touch-click callback (touch)
    function(event){
        alert('single-tap');
    },
    //doubletap-dblclick delay (default is 500 ms)
    400
);*/
       function womenSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">women</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/women/womens-designer-brands/">Designer Brands</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Special</h2></li>' +
                '<li><a href="href="/sc1/query/gift50rtw/&facet=price_USD%253A%2528%257B*%2b49.99%257D%2b49.99%2529&orderBy=7"">Gifts Under $50</a><span class="breakline"></span></li>' +
                '<li><a href="/sc1/women/query/ua1123fleece?utm_source=GW&utm_medium=LEFTN&utm_term=161120&utm_content=WMN-UNDERARMOURFLEECE&utm_campaign=BOLDREDLINK&ICID=16-11-20-WMN-GW-BOLDREDLINK-LEFTN-UNDERARMOURFLEECE-PC-OS">Up to 25% off Under Armour Fleece</a></li>' +
                '<li><a href="/sc1/women/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=WMN-WOMENSCLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-WMN-GW-BOLDREDLINK-LEFTN-WOMENSCLEARANCE-NOP-CLR">Clearance</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Special Sizes</h2></li>' +
                '<li><a href="/sc1/women/special-sizes-maternity/">Maternity</a></li>' +
                '<li><a href="/sc1/women/special-sizes-petites/">Petites</a></li>' +
                '<li><a href="/sc1/women/special-sizes-plus-size/">Plus Size</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Apparel</h2></li>' +
                '<li><a href="/sc1/women/womens-activewear/">Activewear</a></li>' +
                '<li><a href="/sc1/women/apparel-bras-panties-shapewear/">Bras, Panties &amp; Shapewear</a></li>' +
                '<li><a href="/sc1/women/apparel-capris/">Capris</a></li>' +
                '<li><a href="/sc1/women/womens-coats/">Coats</a></li>' +
                '<li><a href="/sc1/women/womens-dresses/">Dresses</a></li>' +
                '<li><a href="/sc1/women/apparel-jackets-blazers/">Jackets &amp; Blazers</a></li>' +
                '<li><a href="/sc1/women/womens-jeans/">Jeans</a></li>' +
                '<li><a href="/sc1/women/womens-jumpsuits-rompers/">Jumpsuits &amp; Rompers</a></li>' +
                '<li><a href="/sc1/women/womens-knit-tops-tees/">Knit Tops &amp; Tees</a></li>' +
                '<li><a href="/sc1/women/womens-leggings/">Leggings</a></li>' +
                '<li><a href="/sc1/women/apparel-pajamas-robes/">Pajamas &amp; Robes</a></li>' +
                '<li><a href="/sc1/women/womens-pants/">Pants</a></li>' +
                '<li><a href="/sc1/women/apparel-shirts-blouses/">Shirts &amp; Blouses</a></li>' +
                '<li><a href="/sc1/women/womens-womens-shorts/">Shorts</a></li>' +
                '<li><a href="/sc1/women/apparel-shrugs/">Shrugs</a></li>' +
                '<li><a href="/sc1/women/womens-skirts/">Skirts</a></li>' +
                '<li><a href="/sc1/women/apparel-sports-fan/">Sports Fan</a></li>' +
                '<li><a href="/sc1/women/womens-suits-suit-separates/">Suits &amp; Suit Separates</a></li>' +
                '<li><a href="/sc1/women/womens-sweaters/">Sweaters</a></li>' +
                '<li><a href="/sc1/women/womens-swimwear/">Swimwear</a></li>' +
                '<li><a href="/sc1/women/womens-tunics/">Tunics</a></li>' +
                '<li><a href="/sc1/women/apparel-vests/">Vests</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/brands/lauren-ralph-lauren-44612/women/">Lauren Ralph Lauren</a></li>' +
                '<li><a href="/sc1/brands/calvin-klein-46013/women/">Calvin Klein</a></li>' +
                '<li><a href="/sc1/brands/michael-michael-kors-46050/women/">MICHAEL Michael Kors</a></li>' +
                '<li><a href="/sc1/brands/wacoal-45912">Wacoal</a></li>' +
                '<li><a href="/sc1/brands/jessica-simpson-44484/women/">Jessica Simpson</a></li>' +
                '<li><a href="/sc1/brands/vince-camuto-45895/women/">Vince Camuto</a></li>' +
                '<li><a href="/sc1/brands/karen-kane-44535/women/">Karen Kane</a></li>' +
                '<li><a href="/sc1/brands/nydj-44931/women/">NYDJ</a></li>' +
                '<li><a href="/sc1/brands/silver-jeans-co-45574/women/">Silver Jeans Co.</a></li>' +
                '<li><a href="/sc1/brands/under-armour-63533/women/">Under Armour</a></li>' +
                '<li><a href="/sc1/brands/chaps-46100/women/">Chaps</a></li>' +
                '<li><a href="/sc1/brands/lucky-brand-44682/women/">Lucky Brand</a></li>' +
                '<li><a href="/sc1/brands/nine-west-46053/women/">Nine West</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_3_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_3_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +

            '</ul>' +
        '</div>'
       }
       function shoesSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">shoes</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/shoes/ugg-shoes/">UGG</a></li>' +
                '<li><a href="/sc1/shoes/coach-shoes/">COACH</a></li>' +
                '<li><a href="/sc1/shoes/designer-shoes/">Designer Shoes</a></li>' +
                '<li><a href="/sc1/shoes/shoes-winter-fashion-trends/">Winter Fashion Trends</a></li>' +
                '<li><a href="/sc1/shoes/clarks/">Clarks</a></li>' +
                '<li><a href="/sc1/shoes/skechers/">Skechers</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/shoes/womens-boots/?facet=price_USD%253A%2528%257B*%2b99.99%257D%2b99.99%2529">Boots Under $100</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=SHOE-SHOECLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-SHOE-GW-BOLDREDLINK-LEFTN-SHOECLEARANCE-NOP-CLR">Clearance</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Juniors</h2></li>' +
                '<li><a href="/sc1/shoes/juniors-athletic/">Athletic</a></li>' +
                '<li><a href="/sc1/shoes/juniors-boots/">Boots</a></li>' +
                '<li><a href="/sc1/shoes/juniors-casual/">Casual</a></li>' +
                '<li><a href="/sc1/shoes/juniors-dress/">Dress</a></li>' +
                '<li><a href="/sc1/shoes/juniors-sandals/">Sandals</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Women&rsquo;s</h2></li>' +
                '<li><a href="/sc1/shoes/womens-incredible-value-shoes/">Incredible Value Shoes</a></li>' +
                '<li><a href="/sc1/shoes/womens-athletic/">Athletic</a></li>' +
                '<li><a href="/sc1/shoes/womens-booties/">Booties</a></li>' +
                '<li><a href="/sc1/shoes/womens-boots/">Boots</a></li>' +
                '<li><a href="/sc1/shoes/womens-casual/">Casual</a></li>' +
                '<li><a href="/sc1/shoes/womens-comfort/">Comfort</a></li>' +
                '<li><a href="/sc1/shoes/womens-dress/">Dress</a></li>' +
                '<li><a href="/sc1/shoes/womens-evening-wedding/">Evening &amp; Wedding</a></li>' +
                '<li><a href="/sc1/shoes/womens-flats/">Flats</a></li>' +
                '<li><a href="/sc1/shoes/womens-heels/">Heels</a></li>' +
                '<li><a href="/sc1/shoes/womens-pumps/">Pumps</a></li>' +
                '<li><a href="/sc1/shoes/womens-sandals/">Sandals</a></li>' +
                '<li><a href="/sc1/shoes/womens-slippers/">Slippers</a></li>' +
                '<li><a href="/sc1/shoes/womens-sneakers/">Sneakers</a></li>' +
                '<li><a href="/sc1/shoes/womens-tailored/">Tailored</a></li>' +
                '<li><a href="/sc1/shoes/womens-wedges/"">Wedges</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Men&rsquo;s</h2></li>' +
                '<li><a href="/sc1/shoes/mens-incredible-value-shoes/">Incredible Value Shoes</a></li>' +
                '<li><a href="/sc1/shoes/mens-athletic/"">Athletic</a></li>' +
                '<li><a href="/sc1/shoes/mens-boat-shoes/">Boat Shoes</a></li>' +
                '<li><a href="/sc1/shoes/mens-boots/">Boots</a></li>' +
                '<li><a href="/sc1/shoes/mens-casual/">Casual</a></li>' +
                '<li><a href="/sc1/shoes/mens-comfort/">Comfort</a></li>' +
                '<li><a href="/sc1/shoes/mens-dress/">Dress</a></li>' +
                '<li><a href="/sc1/shoes/mens-flip-flops/">Flip-flops</a></li>' +
                '<li><a href="/sc1/shoes/mens-sandals/">Sandals</a></li>' +
                '<li><a href="/sc1/shoes/mens-slippers/">Slippers</a></li>' +
                '<li><a href="/sc1/shoes/mens-work-boots/">Work Boots</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Kids&rsquo;</h2></li>' +
                '<li><a href="/sc1/shoes/kids-girls-shoes/">Girls&rsquo;</a></li>' +
                '<li><a href="/sc1/shoes/kids-boys-shoes/">Boys&rsquo;</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Shoe Care</h2></li>' +
                '<li><a href="/sc1/shoes/shoe-care-accessories/">Shoe Care &amp; Accessories</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522MICHAEL%2bMichael%2bKors%2522">MICHAEL Michael Kors</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Frye%2522">Frye</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522COACH%2522">Coach</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Birkenstock%2522">Birkenstock</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Donald%2bJ%2bPliner%2522">Donald Pliner</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Lauren%2bRalph%2bLauren%2522">Lauren Ralph Lauren</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Vince%2bCamuto%2522">Vince Camuto</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Dolce%2bVita%2522">Dolce Vita</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Lucky%2bBrand%2522">Lucky Brand</a></li>' +
                '<li><a href="/sc1/shoes/?facet=ads_brand_ntk_cs%253A%2522Calvin%2bKlein%2522">Calvin Klein</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       } 
       function hbagsAccessoriesSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">handbags &amp; accessories</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/handbags-accessories/coach/">COACH</a></li>' +
                '<li><a href="/sc1/handbags-accessories/designer-handbags/">Designer Handbangs</a></li>' +
                '<li><a href="/sc1/handbags-accessories/bags-accessories-winter-fashion-trends/">Winter Fashion Trends</a></li>' +
                '<li><a href="/sc1/handbags-accessories/fossil/">Fossil</a></li>' +
                '<li><a href="/sc1/handbags-accessories/bags-accessories-sports-fan-shop/">Sports Fan Shop</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/handbags-accessories/designer-handbags/?facet=price_USD%253A%2528%257B*%2b99.99%257D%2b99.99%2529">Designer Gifts Under $100</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-cold-weather-accessories/">Cold Weather Accessories</a></li>' +
                '<li><a href="/sc1/handbags-accessories/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=HBAC-HBACCESSCLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-HBAC-GW-BOLDREDLINK-LEFTN-HBACCESSCLEARANCE-NOP-CLR">Clearance</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Handbags &amp; Small Leathers</h2></li>' +
                '<li><a href="/sc1/handbags-accessories/handbags/">Handbags</a></li>' +
                '<li><a href="/sc1/handbags-accessories/small-leathers/">Small Leathers</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Accessories</h2></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-belts/">Belts</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-wedding-accessories/">Wedding Accessories</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-cold-weather-accessories/">Cold Weather Accessories</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-flip-flops/">Flip-flops</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-handbag-charms-key-chains/">Handbag Charms &amp; Key Chains</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-hair-accessories/">Hair Accessories</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-hats/">Hats</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-leggings/">Leggings</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-scarves-wraps/">Scarves &amp; Wrapes</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-slippers/">Slippers</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-socks-hosiery/">Socks &amp; Hosiery</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-stationery-gifts/">Stationery &amp; Gifts</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-sunglasses-eyewear/">Sunglasses &amp; Eyewear</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-tech-accessories/">Tech Accessories</a></li>' +
                '<li><a href="/sc1/handbags-accessories/accessories-umbrellas/">Umbrellas</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/brands/michael-michael-kors-46050/handbags-accessories/">MICHAEL Michael Kors</a></li>' +
                '<li><a href="/sc1/brands/coach-43912">COACH</a></li>' +
                '<li><a href="/sc1/brands/vera-bradley-75348/handbags-accessories/">Vera Bradley</a></li>' +
                '<li><a href="/sc1/brands/dooney-bourke-44063/handbags-accessories/">Dooney &amp; Bourke</a></li>' +
                '<li><a href="/sc1/brands/frye-47137/handbags-accessories/">Frye</a></li>' +
                '<li><a href="/sc1/brands/fossil-44229">Fossil</a></li>' +
                '<li><a href="/sc1/brands/hobo-44367/handbags-accessories/">Hobo</a></li>' +
                '<li><a href="/sc1/brands/calvin-klein-46013/handbags-accessories/">Calvin Klein</a></li>' +
                '<li><a href="/sc1/brands/lauren-ralph-lauren-44612/handbags-accessories/"">Lauren Ralph Lauren</a></li>' +
                '<li><a href="/sc1/brands/ray-ban-48027/handbags-accessories/">Ray-Ban</a></li>' +
                '<li><a href="/sc1/brands/hue-44401/handbags-accessories/">Hue</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       }
       function jewelryWatchesSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">jewelry &amp; watches</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/jewelry-watches/feature-coach/">COACH</a></li>' +
                '<li><a href="/sc1/jewelry-watches/effy-collection/">Effy Collection</a></li>' +
                '<li><a href="/sc1/jewelry-watches/fashion-jewelry/">Fashion Jewelry</a></li>' +
                '<li><a href="/sc1/jewelry-watches/fine-jewelry/">Fine Jewelry</a></li>' +
                '<li><a href="/sc1/jewelry-watches/wedding-shop/">Wedding Shop</a></li>' +
                '<li><a href="/sc1/jewelry-watches/red-box-ivp-fine-jewelry/">Red Box IVP Fine Jewelry</a></li>' +
                '<li><a href="/sc1/jewelry-watches/jewelry-sports-fan-shop/">Sports Fan Shop</a></li>' +
                '<li><a href="/sc1/jewelry-watches/jewelry-winter-fashion-trends/">Winter Fashion Trends</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=price_USD%253A%2528%257B*%2b24.99%257D%2b24.99%2529?utm_source=GW&utm_medium=LEFTN&utm_term=161101&utm_content=JWL-GIFTSUNDER&utm_campaign=BOLDREDLINK&ICID=16-11-01-JWL-GW-BOLDREDLINK-LEFTN-GIFTSUNDER-PR-ALST">Gifts Under $25</a></li>' +
                '<li><a href="/sc1/jewelry-watches/watches/?facet=ads_f19004_ntk_cs%253A%2522Activity%2bTracker%2522&facet=ads_f19004_ntk_cs%253A%2522Smartwatch%2b%2522">Smart Watches &amp; Activity Trackers</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=JWL-JEWELRYCLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-JWL-GW-BOLDREDLINK-LEFTN-JEWELRYCLEARANCE-NOP-CLR">Clearance</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Jewelry and Watches</h2></li>' +
                '<li><a href="/sc1/jewelry-watches/bracelets/">Bracelets</a></li>' +
                '<li><a href="/sc1/jewelry-watches/earrings/">Earrings</a></li>' +
                '<li><a href="/sc1/jewelry-watches/holiday-jewelry/">Holiday Jewelry</a></li>' +
                '<li><a href="/sc1/jewelry-watches/jewelry-boxes/">Jewelry Boxes</a></li>' +
                '<li><a href="/sc1/jewelry-watches/jewelry-gifts-sets/">Jewelry Gifts &amp; Sets </a></li>' +
                '<li><a href="/sc1/jewelry-watches/jewelry-extras/">Jewelry Extras</a></li>' +
                '<li><a href="/sc1/jewelry-watches/kids-jewelry/">Kid&rsquo;s Jewelry</a></li>' +
                '<li><a href="/sc1/jewelry-watches/mens-jewelry/">Men&rsquo;s Jewelry</a></li>' +
                '<li><a href="/sc1/jewelry-watches/necklaces-pendants/">Necklaces &amp Pendants</a></li>' +
                '<li><a href="/sc1/jewelry-watches/pins/">Pins</a></li>' +
                '<li><a href="/sc1/jewelry-watches/rings/">Rings</a></li>' +
                '<li><a href="/sc1/jewelry-watches/watches/">Watches</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Fossil%2522#">Fossil</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Michael%2bKors%2522">Michael Kors</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Kate%2bSpade%2bNew%2bYork%2522">kate spade new york</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Swarovski%2522">Swarovski</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Vince%2bCamuto%2522">Vince Camuto</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522COACH%2522">COACH</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Betsey%2bJohnson%2522">Betsey Johnson</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Lauren%2bRalph%2bLauren%2522">Lauren Ralph Lauren</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Guess%2522">Guess</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Givenchy%2522">Givenchy</a></li>' +
                '<li><a href="/sc1/jewelry-watches/?facet=ads_brand_ntk_cs%253A%2522Skagen%2bDenmark%2522">Skagen Denmark</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       }
       function beautyFragSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">beauty &amp; fragrance</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/beauty-fragrance/beauty-station/">Beauty Station</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/allure-best-of-beauty/">Allure Best of Beauty</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/splash/?campaign=Beauty-And-Fragrance-Promotions">Gifts With Purchase</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/fragrance/?utm_source=GW&utm_medium=LEFTN&utm_term=161109&utm_content=BTY-FRAGRANCES&utm_campaign=SPOTLIGHTON&ICID=16-11-09-BTY-GW-SPOTLIGHTON-LEFTN-FRAGRANCES-NON-NON">Fragrance</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-clarins/">Clarins</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-clarisonic/">Clarisonic</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-clinique/">Clinique</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-deborah-lippmann/">Deborah Lippmann</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-dermablend/">Dermablend</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-dior/">Dior</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-elizabeth-arden/">Elizabeth Arden</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-essie/">essie</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-estee-lauder/">Estee Lauder</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-fashion-fair/">Fashion Fair</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-lancome/">Lancome</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-origins/">Origins</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-philosophy/">philosophy</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-prevage/">PREVAGE</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-re-nutriv/">Re-Nutriv</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-strivectin/">StriVectin</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-studio-gear/">Studio Gear</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-thebalm/">theBalm</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/featured-brands-viktor-rolf/">Viktor &amp Rolf</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Shop by Department</h2></li>' +
                '<li><a href="/sc1/beauty-fragrance/gifts-value-sets/">Gifts &amp; Value Sets</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/travel-size/">Travel Size</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/fragrance/">Fragrance</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/skincare/">Skincare</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/makeup/">Makeup</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/bath-body/">Bath &amp; Body</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/hair-care/">Hair Care</a></li>' +
                '<li><a href="/sc1/beauty-fragrance/mens-grooming/">Men&rsquo;s Grooming</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       }
       function juniorSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">juniors</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/juniors/juniors-plus/">Juniors&rsquo; Plus</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/juniors/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=JRS-JUNIORSCLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-JRS-GW-BOLDREDLINK-LEFTN-JUNIORSCLEARANCE-NOP-CLR">Clearance</a></li>' +
                '<li><a href="/sc1/juniors/query/jrs25/?facet=price_USD%253A%2528%257B*%2B24.99%257D%2B24.99%2529/?orderBy=4">Gifts Under $25</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Apparel</h2></li>' +
                '<li><a href="/sc1/juniors/apparel-activewear/">Activewear</a></li>' +
                '<li><a href="/sc1/juniors/apparel-coats/">Coats</a></li>' +
                '<li><a href="/sc1/juniors/apparel-dresses/">Dresses</a></li>' +
                '<li><a href="/sc1/juniors/apparel-bras-panties/">Bras &amp; Panties</a></li>' +
                '<li><a href="/sc1/juniors/apparel-jackets-vests/">Jackets &amp; Vests</a></li>' +
                '<li><a href="/sc1/juniors/apparel-jeans/">Jeans</a></li>' +
                '<li><a href="/sc1/juniors/apparel-jumpsuits-rompers/">Jumpsuits &amp Rompers</a></li>' +
                '<li><a href="/sc1/juniors/apparel-leggings/">Leggings</a></li>' +
                '<li><a href="/sc1/juniors/apparel-pajamas/">Pajamas</a></li>' +
                '<li><a href="/sc1/juniors/apparel-pants/">Pants</a></li>' +
                '<li><a href="/sc1/juniors/apparel-shorts-crops/">Shorts &amp Crops</a></li>' +
                '<li><a href="/sc1/juniors/apparel-skirts/">Skirts</a></li>' +
                '<li><a href="/sc1/juniors/wear-to-work/">Wear to Work</a></li>' +
                '<li><a href="/sc1/juniors/apparel-sweaters/">Sweaters</a></li>' +
                '<li><a href="/sc1/juniors/apparel-swimwear/">Swimwear</a></li>' +
                '<li><a href="/sc1/juniors/apparel-tops/">Tops</a></li>' +
                '<li><a href="/sc1/juniors/apparel-tunics/">Tunics</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/juniors/?facet=ads_brand_ntk_cs%253A%2522Silver%2bJeans%2bCo.%2522">Silver Jeans Co.</a></li>' +
                '<li><a href="/sc1/juniors/?facet=ads_brand_ntk_cs%253A%2522Jessica%2bSimpson%2522">Jessica Simpson</a></li>' +
                '<li><a href="/sc1/juniors/?facet=ads_brand_ntk_cs%253A%2522Hippie%2bLaundry%2522">Hippie Laundry</a></li>' +
                '<li><a href="/sc1/juniors/?facet=ads_brand_ntk_cs%253A%2522Kensie%2522">Kensie</a></li>' +
                '<li><a href="/sc1/juniors/?facet=ads_brand_ntk_cs%253A%2522Levi%2527s%2522">Levi&rsquo;s</a></li>' +
                '<li><a href="/sc1/brands/skylar-jade-81491/juniors">Skylar &amp; Jade</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       }
       function menSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">men</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/men/big-tall/">Big &amp; Tall</a></li>' +
                '<li><a href="/sc1/men/guys/">Guys</a></li>' +
                '<li><a href="/sc1/men/slim-fit-shop/">Slim Fit Shop</a></li>' +
                '<li><a href="/sc1/men/mens-designer-brands/">Designer Brands</a></li>' +
                '<li><a href="/sc1/men/mens-sports-fan-shop/">Sports Fan Shop</a></li>' +
                '<li><a href="/sc1/splash/?campaign=How-To-Wear-Flannel-Shirts&utm_source=GW&utm_medium=LEFTN&utm_term=161123&utm_content=MEN-HOWTOWEAR-FLANNEL&utm_campaign=SPOTLIGHTON&ICID=16-11-23-MEN-GW-SPOTLIGHTON-LEFTN-HOWTOWEAR-FLANNEL-NON-NON/">How to Wear It</a></li>' +
                '<li><a href="/sc1/splash/?campaign=Holiday-Dresswear-Essentials-Men&utm_source=GW&utm_medium=LEFTN&utm_term=161123&utm_content=MEN-HOLDRESSWRESSNTLS&utm_campaign=SPOTLIGHTON&ICID=16-11-23-MEN-GW-SPOTLIGHTON-LEFTN-HOLDRESSWRESSNTLS-NON-NON">Holiday Dresswear Essentials</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/men/accessories-shoes-gifts/?facet=price_USD%253A%2528%257B*%2b25.00%257D%2b25.00%2529&utm_source=GW&utm_medium=LEFTN&utm_term=161101&utm_content=MEN-GIFTSUNDER25&utm_campaign=BOLDREDLINK&ICID=16-11-01-MEN-GW-BOLDREDLINK-LEFTN-GIFTSUNDER25-PR-ALST">Gifts Under $25</a></li>' +
                '<li><a href="/sc1/brands/under-armour-63533/men/query/ua1123fleece?utm_source=GW&utm_medium=LEFTN&utm_term=161120&utm_content=MEN-UNDERARMOURFLEECE&utm_campaign=BOLDREDLINK&ICID=16-11-20-MEN-GW-BOLDREDLINK-LEFTN-UNDERARMOURFLEECE-PC-OS">Up to 25% off Under Armour</a></li>' +
                '<li><a href="/sc1/men/mens-sweaters/?facet=price_USD%253A%2528%257B*%2b30.00%257D%2b30.00%2529?orderBy=2&utm_source=GW&utm_medium=LEFTN&utm_term=161101&utm_content=MEN-SWEATERS30UNDER&utm_campaign=BOLDREDLINK&ICID=16-11-01-MEN-GW-BOLDREDLINK-LEFTN-SWEATERS30UNDER-PR-ALST">Sweaters $30 &amp; Under</a></li>' +
                '<li><a href="/sc1/men/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=MEN-MENSCLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-MEN-GW-BOLDREDLINK-LEFTN-MENSCLEARANCE-NOP-CLR">Clearance</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Apparel</h2></li>' +
                '<li><a href="/sc1/men/apparel-athletic/">Athletic</a></li>' +
                '<li><a href="/sc1/men/apparel-blazers-sportcoats/">Blazers & Sportscoats</a></li>' +
                '<li><a href="/sc1/men/apparel-casual-shirts/">Casual Shirts</a></li>' +
                '<li><a href="/sc1/men/apparel-coats-jackets/">Coats &amp; Jackets</a></li>' +
                '<li><a href="/sc1/men/apparel-dress-shirts/">Dress Shirts</a></li>' +
                '<li><a href="/sc1/men/apparel-hoodies-fleece/">Hoodies &amp; Fleece</a></li>' +
                '<li><a href="/sc1/men/mens-jeans/">Jeans</a></li>' +
                '<li><a href="/sc1/men/mens-pants/">Pants</a></li>' +
                '<li><a href="/sc1/men/apparel-polos/">Polos</a></li>' +
                '<li><a href="/sc1/men/mens-shorts/">Shorts</a></li>' +
                '<li><a href="/sc1/men/apparel-sleepwear-loungewear/">Sleepwear &amp; Loungewear</a></li>' +
                '<li><a href="/sc1/men/apparel-socks/">Socks</a></li>' +
                '<li><a href="/sc1/men/mens-suits-suit-separates/">Suits & Suit Separates</a></li>' +
                '<li><a href="/sc1/men/mens-sweaters/">Sweaters</a></li>' +
                '<li><a href="/sc1/men/apparel-swimwear-accessories/">Swimwear &amp; Accessories</a></li>' +
                '<li><a href="/sc1/men/apparel-ties/">Ties</a></li>' +
                '<li><a href="/sc1/men/apparel-underwear/">Underwear</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Accessories &amp; Shoes</h2></li>' +
                '<li><a href="/sc1/men/accessories-shoes-accessories/">Accessories</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-bags/">Bags</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-belts/">Belts</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-gifts/">Gifts</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-grooming/">Grooming</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-hats-gloves-scarves/">Hats, Gloves &amp; Scarves</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-jewelry-cufflinks/">Jewelry &amp; Cufflinks</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-slippers/">Slippers</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-shoes/">Shoes</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-sunglasses/">Sunglasses</a></li>' +
                '<li><a href="/sc1/men/accessories-shoes-wallets/">Wallets</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/brands/ralph-lauren-46019/men/?orderBy=2">Polo Ralph Lauren</a></li>' +
                '<li><a href="/sc1/brands/calvin-klein-46013/men/">Calvin Klein</a></li>' +
                '<li><a href="/sc1/brands/nautica-46022/men/">Nautica</a></li>' +
                '<li><a href="/sc1/brands/under-armour-63533/men/">Under Armour</a></li>' +
                '<li><a href="/sc1/brands/tommy-hilfiger-45785/men/">Tommy Hilfiger</a></li>' +
                '<li><a href="/sc1/brands/kenneth-cole-reaction-46043/men/">Kenneth Cole REACTION</a></li>' +
                '<li><a href="/sc1/brands/michael-kors-46021/men/">Michael Kors</a></li>' +
                '<li><a href="/sc1/brands/chaps-46100/men/">Chaps</a></li>' +
                '<li><a href="/sc1/brands/levi-s-44637/men/">Levi&rsquo;s</a></li>' +
                '<li><a href="/sc1/brands/hart-schaffner-marx-44340/men/?orderBy=1">Hart Schaffner Marx</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       }
       function babyandKidsSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">baby &amp; kids</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/baby-kids/dresswear-shop/">Dresswear Shop</a></li>' +
                '<li><a href="/sc1/baby-kids/outerwear-shop/">Outerwear Shop</a></li>' +
                '<li><a href="/sc1/baby-kids/slumber-party/">Pajama Shop</a></li>' +
                '<li><a href="/sc1/baby-kids/mix-match/">Mix &amp; Match</a></li>' +
                '<li><a href="/sc1/baby-kids/carters-little-baby-basics/">Carter&rsquo;s	&reg; Little Baby Basics</a></li>' +
                '<li><a href="/sc1/baby-kids/sports-fan/">Sports Fan</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/baby-kids/toys-games-toys/?utm_source=GW&utm_medium=LEFTN&utm_term=161107&utm_content=KIDS-TOYS&utm_campaign=BOLDREDLINK&ICID=16-11-07-KIDS-GW-BOLDREDLINK-LEFTN-TOYS-NON-NON">Toys</a></li>' +
                '<li><a href="/sc1/baby-kids/query/ua1123fleece%201119k16ua/?searchType=1000&utm_source=GW&utm_medium=LEFTN&utm_term=161120&utm_content=KIDS-UNDERARMOURFLEECE&utm_campaign=BOLDREDLINK&ICID=16-11-20-KIDS-GW-BOLDREDLINK-LEFTN-UNDERARMOURFLEECE-PC-OS">Up to 25% off Under Armour</a></li>' +
                '<li><a href="/sc1/baby-kids/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=KIDS-KIDSCLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-KIDS-GW-BOLDREDLINK-LEFTN-KIDSCLEARANCE-NOP-CLR">Clearance</a></li>' +
                '<li><a href="/sc1/query/KGU2016?facet=price_USD%253A%2528%257B*%2b19.99%257D%2b19.99%2529&utm_source=GW&utm_medium=LEFTN&utm_term=161103&utm_content=KIDS-GIFTSUNDER20&utm_campaign=BOLDREDLINK&ICID=16-11-03-KIDS-GW-BOLDREDLINK-LEFTN-GIFTSUNDER20-PR-ALST">Gifts under $20</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Baby</h2></li>' +
                '<li><a href="/sc1/baby-kids/baby-baby-boys-apparel/">Baby Boys&rsquo; Apparel</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-baby-girls-apparel/">Baby Girls&rsquo; Apparel</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-neutral-baby-apparel/">Neutral Baby Apparel</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-baby-gear/">Baby Gear</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-baby-gifts-essentials/">Baby Gifts &amp; Essentials</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-christening/">Christening</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-holiday-apparel/">Holiday Apparel</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-baby-costumes/">Baby Costumes</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-nursery-furniture-accessories/">Nursery Furniture &amp; Accessories</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Girls</h2></li>' +
                '<li><a href="/sc1/baby-kids/girls-girls-sizes-2-6x/">Girls&rsquo; Sizes 2-6X</a></li>' +
                '<li><a href="/sc1/baby-kids/girls-girls-sizes-7-16/">Girls&rsquo; Sizes 7-16</a></li>' +
                '<li><a href="/sc1/baby-kids/girls-girls-basics/">Girls&rsquo; Basics</a></li>' +
                '<li><a href="/sc1/baby-kids/girls-first-communion/">First Communion</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Shoes &amp; Accessories</h2></li>' +
                '<li><a href="/sc1/baby-kids/baby-kids-shoes/">Shoes</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-kids-backpacks/">Backpacks</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-kids-cold-weather-accessories/">Cold Weather Accessories</a></li>' +
                '<li><a href="/sc1/baby-kids/baby-kids-hats-and-scarves/">Headwear and Scarves</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Toys &amp Games</h2></li>' +
                '<li><a href="/sc1/baby-kids/toys-games-toys/">Toys</a></li>' +
                '<li><a href="/sc1/baby-kids/toys-games-playroom-storage-accessories/">Playroom Storage &amp; Accessories</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Boys</h2></li>' +
                '<li><a href="/sc1/baby-kids/boys-boys-sizes-2-7/">Boys&rsquo; Sizes 2-7</a></li>' +
                '<li><a href="/sc1/baby-kids/boys-boys-sizes-8-20/">Boys&rsquo; Sizes 8-20</a></li>' +
                '<li><a href="/sc1/baby-kids/boys-boys-basics/">Boys&rsquo; Basics</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522Ralph%2bLauren%2bChildrenswear%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522Ralph%2bLauren%2bChild_2";return this.s_oc?this.s_oc(e):true">Ralph Lauren Childrenswear</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522Carter%2527s%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522Carter%2527s%2522_2";return this.s_oc?this.s_oc(e):true">Carter&rsquo;s</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522OshKosh%2bB%2527Gosh%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522OshKosh%2bB%2527Gosh%2_2";return this.s_oc?this.s_oc(e):true">Oshkosh B&rsquo;Gosh</a></li>' +
                   
                '<li><a href="/sc1/brands/mix-match-77917" onclick="s_objectID="http://www.stage.bonton.com/sc1/brands/mix-match-77917_2";return this.s_oc?this.s_oc(e):true">mix&amp;Match</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522adidas%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522adidas%2522_2";return this.s_oc?this.s_oc(e):true">Adidas</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522Levi%2527s%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522Levi%2527s%2522_2";return this.s_oc?this.s_oc(e):true">Levi&rsquo;s</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522PUMA%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522PUMA%2522_2";return this.s_oc?this.s_oc(e):true">Puma</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522Under%2bArmour%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522Under%2bArmour%2522_2";return this.s_oc?this.s_oc(e):true">Under Armour</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522Chaps%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522Chaps%2522_2";return this.s_oc?this.s_oc(e):true">Chaps</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522Melissa%2b%2526%2bDoug%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522Melissa%2b%2526%2bDoug_2";return this.s_oc?this.s_oc(e):true">Melissa and Doug</a></li>' +
                   
                '<li><a href="/sc1/baby-kids/?facet=ads_brand_ntk_cs%253A%2522Columbia%2522" onclick="s_objectID="http://www.stage.bonton.com/sc1/baby-kids/_facet=ads_brand_ntk_cs%253A%2522Columbia%2522_2";return this.s_oc?this.s_oc(e):true">Columbia</a></li>' +
                   
                 '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       }
       function bedandbathSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">bed &amp; bath</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="/sc1/bed-bath/special-shops-cold-weather-bedding/">Cold-weather Bedding</a></li>' +
                '<li><a href="/sc1/bed-bath/bed-bath-sports-fan-shop/">Sports Fan Shop</a></li>' +
                '<li><a href="/sc1/home/holidays-seasons-holiday-shop/?utm_source=GW&utm_medium=LEFTN&utm_term=161123&utm_content=BB-HOLIDAYSHOP&utm_campaign=SPOTLIGHTON&ICID=16-11-23-BB-GW-SPOTLIGHTON-LEFTN-HOLIDAYSHOP-NON-NON">Holiday Shop</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_prodprom_ntk_cs%253A%2522Clearance%2522&facet=ads_prodprom_ntk_cs%253A%2522Yellow_Dot%2522&utm_source=GW&utm_medium=LEFTN&utm_term=161115&utm_content=BB-BEDBATHCLEARANCE&utm_campaign=BOLDREDLINK&ICID=16-11-15-BB-GW-BOLDREDLINK-LEFTN-BEDBATHCLEARANCE-NOP-CLR">Clearance</a></li>' +
                '<li><a href="/sc1/query/gift25hm#ctx=facet%3Aprice_USD%25253A%252528%25257B*%252b24.99%25257D%252b24.99%252529%26pageSize%3A60%26orderBy%3A1&pos=0">Gifts under $25</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Bath</h2></li>' +
                '<li><a href="/sc1/bed-bath/bathroom-accessories/">Bathroom Accessories</a></li>' +
                '<li><a href="/sc1/bed-bath/bathroom-storage/">Bathroom Storage</a></li>' +
                '<li><a href="/sc1/bed-bath/bathroom-hardware/">Bathroom Hardware</a></li>' +
                '<li><a href="/sc1/bed-bath/bathroom-rugs-mats/">Bathroom Rugs &amp; Mats</a></li>' +
                '<li><a href="/sc1/bed-bath/bath-towels/">Bath Towels</a></li>' +
                '<li><a href="/sc1/bed-bath/beach-towels/">Beach Towels</a></li>' +
                '<li><a href="/sc1/bed-bath/shower-curtains/">Shower Curtains</a></li>' +
                '<li><a href="/sc1/bed-bath/kids-bathroom/">Kids Bathroom</a></li>' +
                '<li><a href="/sc1/bed-bath/personal-care/">Personal Care</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Bed</h2></li>' +
                '<li><a href="/sc1/bed-bath/air-mattresses/">Air Mattresses</a></li>' +
                '<li><a href="/sc1/bed-bath/baby-bedding/">Baby Bedding</a></li>' +
                '<li><a href="/sc1/bed-bath/bedding-collections/">Bedding Collections</a></li>' +
                '<li><a href="/sc1/bed-bath/bedspreads/">Bedspreads</a></li>' +
                '<li><a href="/sc1/bed-bath/bed-skirts-shams/">Bed Skirts &amp; Shams</a></li>' +
                '<li><a href="/sc1/bed-bath/blankets/">Blankets</a></li>' +
                '<li><a href="/sc1/bed-bath/comforter-sets/">Comforter Sets</a></li>' +
                '<li><a href="/sc1/bed-bath/down-alternative-comforters/">Down-Alternative Comforters</a></li>' +
                '<li><a href="/sc1/bed-bath/down-comforters/">Down Comforters</a></li>' +
                '<li><a href="/sc1/bed-bath/duvets/">Duvets</a></li>' +
                '<li><a href="/sc1/bed-bath/featherbeds-fiberbeds/">Featherbeds &amp; Fiberbeds</a></li>' +
                '<li><a href="/sc1/bed-bath/flannel-fleece-sheets/">Flannel &amp; Fleece Sheets</a></li>' +
                '<li><a href="/sc1/bed-bath/heated-bedding/">Heated Bedding</a></li>' +
                '<li><a href="/sc1/bed-bath/kids-teen-bedding/">Kids &amp; Teen Bedding</a></li>' +
                '<li><a href="/sc1/bed-bath/kids-sleeping-bags/">Kids Sleeping Bags</a></li>' +
                '<li><a href="/sc1/bed-bath/mattresses/">Mattresses</a></li>' +
                '<li><a href="/sc1/bed-bath/mattress-pads/">Mattresses Pads</a></li>' +
                '<li><a href="/sc1/bed-bath/mattress-toppers/">Mattresses Toppers</a></li>' +
                '<li><a href="/sc1/bed-bath/pillows/">Pillows</a></li>' +
                '<li><a href="/sc1/bed-bath/quilts/">Quilts</a></li>' +
                '<li><a href="/sc1/bed-bath/sheets/">Sheets</a></li>' +
                '<li><a href="/sc1/bed-bath/throws/">Throws</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522Ralph%2bLauren%2522">Ralph Lauren</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522Kate%2bSpade%2bNew%2bYork%2522">kate spade new york</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522Waverly%2522">Waverly</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522Tommy%2BHilfiger%2522">Tommy Hilfiger</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522Calvin%2bKlein%2522">Calvin Klein</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522Croscill%2522">Croscill</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522CASA%2bby%2bVictor%2bAlfaro%2522">CASA by Victor Alfaro</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522Jessica%2bSimpson%2522">Jessica Simpson</a></li>' +
                '<li><a href="/sc1/bed-bath/?facet=ads_brand_ntk_cs%253A%2522LivingQuarters%2522">LivingQuarters</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
       }
       function furnitureSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">furniture</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Specials</h2></li>' +
                '<li><a href="#">Jewelry Armoires</a></li>' +
                '<li><a href="#">Area Rugs</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Additional</h2></li>' +
                '<li><a href="#">Baby &amp Kids Furniture</a></li>' +
                '<li><a href="#">Bedroom</a></li>' +
                '<li><a href="#">Dining &amp Kitchen</a></li>' +
                '<li><a href="#">Home Office</a></li>' +
                '<li><a href="#">Living &amp Family Room</a></li>' +
                '<li><a href="#">Lamps &amp; Lighting</a></li>' +
                '<li><a href="#">Mattresses</a></li>' +
                '<li><a href="#">Outdoor Furniture</a></li>' +
                '<li><a href="#">Recreation Room Furniture</a></li>' +
                '<li><a href="#">Small Scale Furniture</a></li>' +
                '<li><a href="#">More Rooms</a></li>' +
                '<li><a href="#">Find a store</a></li>' +
                '<li><a href="#">Custom Furniture</a></li>' +
            '</ul>' +
        '</div>'
       }
       function homeSubNav() {
               return '<div class="bt-sub-nav">' +
                   '<h2 class="bt-nav-group-topheading">home</h2>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Spotlight On...</h2></li>' +
                '<li><a href="#">Sports Fan Shop</a></li>' +
                '<li><a href="#">As Seen On TV</a></li>' +
                '<li><a href="#">Holiday Shop</a></li>' +
                '<li><a href="#">Close to Home</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="#">Holiday Entertaining Guide</a></li>' +
                '<li><a href="#">Santa&rsquo;s Pantry</a></li>' +
                '<li><a href="#">Clearance</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Shop by Department</h2></li>' +
                '<li><a href="#">Dining &amp Entertaining</a></li>' +
                '<li><a href="#">Electronics</a></li>' +
                '<li><a href="#">Furniture</a></li>' +
                '<li><a href="#">Gourmet Gifts and Treats</a></li>' +
                '<li><a href="#">Health &amp; Wellness</a></li>' +
                '<li><a href="#">Holidays &amp; Seasons</a></li>' +
                '<li><a href="#">Home Decor</a></li>' +
                '<li><a href="#">Household Items</a></li>' +
                '<li><a href="#">Kitchen</a></li>' +
                '<li><a href="#">Lamps &amp; Lighting</a></li>' +
                '<li><a href="#">Outdoor Living</a></li>' +
                '<li><a href="#">Party &amp; Special Occasions</a></li>' +
                '<li><a href="#">Pet</a></li>' +
                '<li><a href="#">Rugs</a></li>' +
                '<li><a href="#">Storage &amp; Organization</a></li>' +
                '<li><a href="#">Travel &amp; Luggage</a></li>' +
                '<li><a href="#">Vacuums &amp; Floor Care</a></li>' +
                '<li><a href="#">Window Treatments</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="#">Anolon</a></li>' +
                '<li><a href="#">Cuisinart</a></li>' +
                '<li><a href="#">Fiesta</a></li>' +
                '<li><a href="#">Kate Spade New York</a></li>' +
                '<li><a href="#">Keurig</a></li>' +
                '<li><a href="#">KitchenAid</a></li>' +
                '<li><a href="#">Living Quarters</a></li>' +
                '<li><a href="#">Ninja</a></li>' +
                '<li><a href="#">Rachael Ray</a></li>' +
                '<li><a href="#">Shark</a></li>' +
                '<li>' +
                '<div class="applyFilters row">' +
                    '<input class="appliedFilters" type="hidden" id="appliedFilters" name="appliedFilters" value=""/>' +
                    '<input type="hidden" class="pageSize" id="pageSize" name="pageSize" value="60"/>' +
                    '<input type="hidden" class="orderBy" id="orderBy" name="orderBy" value=""/>' +
                    '<input type="hidden" class="currentURL" id="currentURL" name="currentURL" value="/sc1/women/?pageSize=60"/>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" id="applyFilters" name="applyFilters" class="form-button-grey nodisplay" href="#">APPLY FILTERS</a>' +
                '</div>' +
                '<div class="showMoreBox">' +
                    '<div id="icon_search" class="search_plus"></div>' +
                    '<a data-for="section_list_2_5_3074457345618260605_3074457345618265123" class="showMoreFacetPop" id="showMore_Brand" href="#">' +
                        '<span>SHOW MORE</span>' +
                    '</a>' +
                '</div>' +
                '</li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group-promo">' +
                   
            '</ul>' +
        '</div>'
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
   })();
});
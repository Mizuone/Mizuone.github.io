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
                '<li><a href="#">Beauty Station</a></li>' +
                '<li><a href="#">Allure Best of Beauty</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="#">Gifts With Purchase</a></li>' +
                '<li><a href="#">Fragrance</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="#">Clarins</a></li>' +
                '<li><a href="#">Clarisonic</a></li>' +
                '<li><a href="#">Clinique</a></li>' +
                '<li><a href="#">Deborah Lippmann</a></li>' +
                '<li><a href="#">Dermablend</a></li>' +
                '<li><a href="#">Dior</a></li>' +
                '<li><a href="#">Elizabeth Arden</a></li>' +
                '<li><a href="#">essie</a></li>' +
                '<li><a href="#">Estee Lauder</a></li>' +
                '<li><a href="#">Fashion Fair</a></li>' +
                '<li><a href="#">Lancome</a></li>' +
                '<li><a href="#">Origins</a></li>' +
                '<li><a href="#">philosophy</a></li>' +
                '<li><a href="#">PREVAGE</a></li>' +
                '<li><a href="#">Re-Nutriv</a></li>' +
                '<li><a href="#">StriVectin</a></li>' +
                '<li><a href="#">Studio Gear</a></li>' +
                '<li><a href="#">theBalm</a></li>' +
                '<li><a href="#">Viktor &amp Rolf</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Shop by Department</h2></li>' +
                '<li><a href="#">Gifts &amp; Value Sets</a></li>' +
                '<li><a href="#">Travel Size</a></li>' +
                '<li><a href="#">Fragrance</a></li>' +
                '<li><a href="#">Skincare</a></li>' +
                '<li><a href="#">Makeup</a></li>' +
                '<li><a href="#">Bath &amp; Body</a></li>' +
                '<li><a href="#">Hair Care</a></li>' +
                '<li><a href="#">Men&rsquo;s Grooming</a></li>' +
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
                '<li><a href="#">Juniors&rsquo; Plus</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="#">Clearance</a></li>' +
                '<li><a href="#">Gifts Under $25</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Apparel</h2></li>' +
                '<li><a href="#">Activewear</a></li>' +
                '<li><a href="#">Coats</a></li>' +
                '<li><a href="#">Dresses</a></li>' +
                '<li><a href="#">Bras &amp; Panties</a></li>' +
                '<li><a href="#">Jackets &amp; Vests</a></li>' +
                '<li><a href="#">Jeans</a></li>' +
                '<li><a href="#">Jumpsuits &amp Rompers</a></li>' +
                '<li><a href="#">Leggings</a></li>' +
                '<li><a href="#">Pajamas</a></li>' +
                '<li><a href="#">Pants</a></li>' +
                '<li><a href="#">Shorts &amp Crops</a></li>' +
                '<li><a href="#">Skirts</a></li>' +
                '<li><a href="#">Wear to Work</a></li>' +
                '<li><a href="#">Sweaters</a></li>' +
                '<li><a href="#">Swimwear</a></li>' +
                '<li><a href="#">Tops</a></li>' +
                '<li><a href="#">Tunics</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="#">Silver Jeans Co.</a></li>' +
                '<li><a href="#">Jessica Simpson</a></li>' +
                '<li><a href="#">Hippie Laundry</a></li>' +
                '<li><a href="#">Kensie</a></li>' +
                '<li><a href="#">Levi&rsquo;s</a></li>' +
                '<li><a href="#">Skylar &amp; Jade</a></li>' +
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
                '<li><a href="#">Big &amp; Tall</a></li>' +
                '<li><a href="#">Guys</a></li>' +
                '<li><a href="#">Slim Fit Shop</a></li>' +
                '<li><a href="#">Designer Brands</a></li>' +
                '<li><a href="#">Sports Fan Shop</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="#">Gifts Under $25</a></li>' +
                '<li><a href="#">Up to 25% off Under Armour</a></li>' +
                '<li><a href="#">Sweaters $30 &amp; Under</a></li>' +
                '<li><a href="#">Clearance</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Apparel</h2></li>' +
                '<li><a href="#">Athletic</a></li>' +
                '<li><a href="#">Blazers & Sportscoats</a></li>' +
                '<li><a href="#">Casual Shirts</a></li>' +
                '<li><a href="#">Coats &amp; Jackets</a></li>' +
                '<li><a href="#">Dress Shirts</a></li>' +
                '<li><a href="#">Hoodies &amp; Fleece</a></li>' +
                '<li><a href="#">Jeans</a></li>' +
                '<li><a href="#">Pants</a></li>' +
                '<li><a href="#">Polos</a></li>' +
                '<li><a href="#">Shorts</a></li>' +
                '<li><a href="#">Sleepwear &amp; Loungewear</a></li>' +
                '<li><a href="#">Socks</a></li>' +
                '<li><a href="#">Suits & Suit Separates</a></li>' +
                '<li><a href="#">Sweaters</a></li>' +
                '<li><a href="#">Swimwear &amp; Accessories</a></li>' +
                '<li><a href="#">Ties</a></li>' +
                '<li><a href="#">Underwear</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="#">Polo Ralph Lauren</a></li>' +
                '<li><a href="#">Calvin Klein</a></li>' +
                '<li><a href="#">Nautica</a></li>' +
                '<li><a href="#">Under Armour</a></li>' +
                '<li><a href="#">Tommy Hilfiger</a></li>' +
                '<li><a href="#">Kenneth Cole REACTION</a></li>' +
                '<li><a href="#">Michael Kors</a></li>' +
                '<li><a href="#">Chaps</a></li>' +
                '<li><a href="#">Levi&rsquo;s</a></li>' +
                '<li><a href="#">Hart Schaffner Marx</a></li>' +
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
                '<li><a href="#">Dresswear Shop</a></li>' +
                '<li><a href="#">Outerwear Shop</a></li>' +
                '<li><a href="#">Pajama Shop</a></li>' +
                '<li><a href="#">Mix &amp; Match</a></li>' +
                '<li><a href="#">Carter&rsquo;s	&reg; Little Baby Basics</a></li>' +
                '<li><a href="#">Sports Fan</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="#">Toys</a></li>' +
                '<li><a href="#">Up to 25% off Under Armour</a></li>' +
                '<li><a href="#">Clearance</a></li>' +
                '<li><a href="#">Gifts under $20</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Baby</h2></li>' +
                '<li><a href="#">Baby Boys&rsquo; Apparel</a></li>' +
                '<li><a href="#">Baby Girls&rsquo; Apparel</a></li>' +
                '<li><a href="#">Neutral Baby Apparel</a></li>' +
                '<li><a href="#">Baby Gear</a></li>' +
                '<li><a href="#">Baby Gifts &amp; Essentials</a></li>' +
                '<li><a href="#">Christening</a></li>' +
                '<li><a href="#">Holiday Apparel</a></li>' +
                '<li><a href="#">Baby Costumes</a></li>' +
                '<li><a href="#">Nursery Furniture &amp; Accessories</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Girls</h2></li>' +
                '<li><a href="#">Girls&rsquo; Sizes 2-6X</a></li>' +
                '<li><a href="#">Girls&rsquo; Sizes 7-16</a></li>' +
                '<li><a href="#">Girls&rsquo; Basics</a></li>' +
                '<li><a href="#">First Communion</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Shoes &amp; Accessories</h2></li>' +
                '<li><a href="#">Shoes</a></li>' +
                '<li><a href="#">Backpacks</a></li>' +
                '<li><a href="#">Cold Weather Accessories</a></li>' +
                '<li><a href="#">Headwear and Scarves</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Toys &amp Games</h2></li>' +
                '<li><a href="#">Toys</a></li>' +
                '<li><a href="#">Playroom Storage &amp; Accessories</a></li>' +
                '<li><a href="#">Michael Kors</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Boys</h2></li>' +
                '<li><a href="#">Boys&rsquo; Sizes 2-7</a></li>' +
                '<li><a href="#">Boys&rsquo; Sizes 8-20</a></li>' +
                '<li><a href="#">Boys&rsquo; Basics</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="#">Ralph Lauren Childrenswear</a></li>' +
                '<li><a href="#">Carter&rsquo;s</a></li>' +
                '<li><a href="#">Oshkosh B&rsquo;Gosh</a></li>' +
                '<li><a href="#">mix&amp;Match</a></li>' +
                '<li><a href="#">Adidas</a></li>' +
                '<li><a href="#">Levi&rsquo;s</a></li>' +
                '<li><a href="#">Puma</a></li>' +
                '<li><a href="#">Under Armour</a></li>' +
                '<li><a href="#">Chaps</a></li>' +
                '<li><a href="#">Melissa and Doug</a></li>' +
                '<li><a href="#">Columbia</a></li>' +
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
                '<li><a href="#">Cold-weather Bedding</a></li>' +
                '<li><a href="#">Sports Fan Shop</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Specials&rsquo;</h2></li>' +
                '<li><a href="#">Clearance</a></li>' +
                '<li><a href="#">Gifts under $25</a></li>' +
                '<li class="bt-nav-group-heading"><h2>Bath</h2></li>' +
                '<li><a href="#">Bathroom Accessories</a></li>' +
                '<li><a href="#">Bathroom Storage</a></li>' +
                '<li><a href="#">Bathroom Hardware</a></li>' +
                '<li><a href="#">Bathroom Rugs &amp; Mats</a></li>' +
                '<li><a href="#">Bath Towels</a></li>' +
                '<li><a href="#">Beach Towels</a></li>' +
                '<li><a href="#">Shower Curtains</a></li>' +
                '<li><a href="#">Kids Bathroom</a></li>' +
                '<li><a href="#">Personal Care</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Bed</h2></li>' +
                '<li><a href="#">Air Mattresses</a></li>' +
                '<li><a href="#">Baby Bedding</a></li>' +
                '<li><a href="#">Bedding Collections</a></li>' +
                '<li><a href="#">Bedspreads</a></li>' +
                '<li><a href="#">Bed Skirts &amp; Shams</a></li>' +
                '<li><a href="#">Blankets</a></li>' +
                '<li><a href="#">Comforter Sets</a></li>' +
                '<li><a href="#">Down-Alternative Comforters</a></li>' +
                '<li><a href="#">Down Comforters</a></li>' +
                '<li><a href="#">Duvets</a></li>' +
                '<li><a href="#">Featherbeds &amp; Fiberbeds</a></li>' +
                '<li><a href="#">Flannel &amp; Fleece Sheets</a></li>' +
                '<li><a href="#">Heated Bedding</a></li>' +
                '<li><a href="#">Kids &amp; Teen Bedding</a></li>' +
                '<li><a href="#">Kids Sleeping Bags</a></li>' +
                '<li><a href="#">Mattresses</a></li>' +
                '<li><a href="#">Mattresses Pads</a></li>' +
                '<li><a href="#">Mattresses Toppers</a></li>' +
                '<li><a href="#">Pillows</a></li>' +
                '<li><a href="#">Quilts</a></li>' +
                '<li><a href="#">Sheets</a></li>' +
                '<li><a href="#">Throws</a></li>' +
            '</ul>' +
            '<ul class="bt-sub-nav-group">' +
                '<li class="bt-nav-group-heading"><h2>Featured Brands</h2></li>' +
                '<li><a href="#">Ralph Lauren</a></li>' +
                '<li><a href="#">kate spade new york</a></li>' +
                '<li><a href="#">Waverly</a></li>' +
                '<li><a href="#">Tommy Hilfiger</a></li>' +
                '<li><a href="#">Calvin Klein</a></li>' +
                '<li><a href="#">Croscill</a></li>' +
                '<li><a href="#">CASA by Victor Alfaro</a></li>' +
                '<li><a href="#">Jessica Simpson</a></li>' +
                '<li><a href="#">LivingQuarters</a></li>' +
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

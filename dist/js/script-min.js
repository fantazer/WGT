$(document).ready(function(){$(".get-rating .star-row__el").hover(function(){$(this).parent().hasClass("fix-rating")||($(".get-rating .star-row__el").removeClass("star--active"),$(this).addClass("star--active"),$(this).prevAll(".star-row__el").addClass("star--active"))}),$(".get-rating .star-row__el").click(function(){$(this).parent().toggleClass("fix-rating"),$(this).addClass("star--active"),$(this).prevAll(".star-row__el").addClass("star--active")}),$(".main-slider").slick({slidesToShow:1,dots:!1}),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")});var e=250,o=$(".header-menu-wrap").height();$(window).scroll(function(){var t=$(this).scrollTop();t>=e?($("body").css("paddingTop",o),$(".header-menu-wrap").addClass("shrink")):($("body").css("paddingTop",0),$(".header-menu-wrap").removeClass("shrink"))}),$(window).resize(function(){o=$(".header").height()});var t={isModalShow:!1,scrollPos:0};$(".modal-content").click(function(e){e.stopPropagation()});var s=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),t.scrollPos=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"hidden",top:-t.scrollPos,width:"100%"})),t.isModalShow=!0},l=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:t.scrollPos}),$(window).scrollTop(t.scrollPos),$(".modal").removeClass("modal__show"),t.isModalShow=!1},i=function(e){s(),$(".modal").each(function(){$(this).data("modal")===e?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var o=$(window).height();$(".modal-filter").height(o)};$(".modal-get").click(function(){var e=$(this).data("modal");i(e)}),$(".modal-layer , .modal-close").click(function(){l()}),$(".loader").length>0&&$("body").addClass("body--fix"),$(".head-toggle--open").click(function(){$("body").css({overflow:"",position:"",top:""})}),$(".head-toggle").click(function(e){console.log("clc"),e.stopPropagation(),$(this).toggleClass("head-toggle--open"),$(".slide-menu").toggleClass("slide-menu--open"),$("body").toggleClass("body-fix")}),$(".slide-menu").on("click",function(e){e.stopPropagation()});var a=function(){$(".head-toggle").removeClass("head-toggle--open"),$(".slide-menu").removeClass("slide-menu--open"),$("body").removeClass("body-fix"),console.log("close slide menu")};$(document).on("click",function(){a()}),$(".slide-menu-cont .header-auth__enter").click(function(){a()});var n=function(){$(".item-footer__get-btn").click(function(){$(this).closest(".item-footer__get").addClass("item-footer__get--active")}),$(".item-count__el--minus").click(function(){var e=1*$(this).closest(".item-footer__get").find(".item-count-val").val()-1;0===e&&$(this).closest(".item-footer__get").removeClass("item-footer__get--active"),console.log(e)}),$(".item-count__el--plus").click(function(){var e=1*$(this).closest(".item-footer__get").find(".item-count-val").val()+1;0===e&&$(this).closest(".item-footer__get").removeClass("item-footer__get--active")}),$(".header-menu__basket").click(function(){t.scrollPos=$(window).scrollTop()}),$(".modal-layer").click(function(){$(window).scrollTop(t.scrollPos),$("body").removeClass("cart-open")}),$(".cart-item").click(function(e){e.stopPropagation()}),$(".label-row-field input").each(function(){$label=$(this).parent().parent().find(".label-row-text").text(),$(this).attr("placeholder",$label.substring(0,$label.length-1))}),$(".label-row-field textarea").each(function(){$label=$(this).parent().parent().find(".label-row-text").text(),$(this).attr("placeholder",$label.substring(0,$label.length-1))})};window.jStoreEvents=window.jStoreEvents?window.jStoreEvents:[],jStoreEvents.push(["ready",function(e){var o=function(){if(jStoreApp.user.isAuthorised()){var e=jStoreApp.user.get("wallets");e&&e.length?(console.table(e),$(".header .bonus").text(Math.floor(e[0].balance)+"Б")):$(".header .bonus").text("Бонусы"),console.log("Auth status: authorized"),$(".user").text(jStoreApp.user.getName())}else console.log("Auth status: not authorized"),$(".user").text("Войти")};jStoreApp.user.on("change:authorized change:wallets",o),o(),$(".loader").remove(),$("body").removeClass("body--fix"),$(".slide-menu__title").click(function(){$(this).toggleClass("slide-menu__title--active"),$(".slide-menu__list .lsp-block-menu-tree").slideToggle()}),n()}]),jStoreEvents.push(["pageChanged",null,function(e){n(),a(),$("body").removeClass("cart-open"),$(".modal-layer").removeClass("modal-layer-show");var o=e.newPage;"order"==o?($(window).scrollTop(t.scrollPos),$(".main-slider").hide(),$(".page").addClass("page--white"),$(".container").addClass("container--order")):($(".main-slider").show(),$(".page").removeClass("page--white"),$(".container").removeClass("container--order"))}]),jStoreEvents.push(["popupOpen",function(e,o){t.scrollPos=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"hidden",top:-t.scrollPos,width:"100%"})}]),jStoreEvents.push(["popupClose",function(e,o){$("body").css({overflow:"",position:"",top:t.scrollPos}),$(window).scrollTop(t.scrollPos)}])});
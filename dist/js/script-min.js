$(document).ready(function(){$(".main-slider").slick({slidesToShow:1,dots:!1}),$(".slider-control--right").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickNext")}),$(".slider-control--left").click(function(){$(this).closest(".slider-wrap").find(".slider-item").slick("slickPrev")});var o=250,e=$(".header-menu-wrap").height();$(window).scroll(function(){var t=$(this).scrollTop();t>=o?($("body").css("paddingTop",e),$(".header-menu-wrap").addClass("shrink")):($("body").css("paddingTop",0),$(".header-menu-wrap").removeClass("shrink"))}),$(window).resize(function(){e=$(".header").height()});var t={isModalShow:!1,scrollPos:0};$(".modal-content").click(function(o){o.stopPropagation()});var s=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),t.scrollPos=$(window).scrollTop(),$("body").css({overflow:"hidden",position:"fixed",overflowY:"hidden",top:-t.scrollPos,width:"100%"})),t.isModalShow=!0},l=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:t.scrollPos}),$(window).scrollTop(t.scrollPos),$(".modal").removeClass("modal__show"),t.isModalShow=!1},i=function(o){s(),$(".modal").each(function(){$(this).data("modal")===o?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var e=$(window).height();$(".modal-filter").height(e)};$(".modal-get").click(function(){var o=$(this).data("modal");i(o)}),$(".modal-layer , .modal-close").click(function(){l()}),$(".loader").length>0&&$("body").addClass("body--fix");var a=function(){$(".item-footer__get-btn").click(function(){$(this).closest(".item-footer__get").addClass("item-footer__get--active")}),$(".item-count__el--minus").click(function(){var o=1*$(this).closest(".item-footer__get").find(".item-count-val").val()-1;0===o&&$(this).closest(".item-footer__get").removeClass("item-footer__get--active"),console.log(o)}),$(".item-count__el--plus").click(function(){var o=1*$(this).closest(".item-footer__get").find(".item-count-val").val()+1;0===o&&$(this).closest(".item-footer__get").removeClass("item-footer__get--active")})};window.jStoreEvents=window.jStoreEvents?window.jStoreEvents:[],jStoreEvents.push(["ready",function(){var o=function(){if(jStoreApp.user.isAuthorised()){var o=jStoreApp.user.get("wallets");o&&o.length?(console.table(o),$(".header .bonus").text(Math.floor(o[0].balance)+"Б")):$(".header .bonus").text("Бонусы"),console.log("Auth status: authorized"),$(".user").text(jStoreApp.user.getName())}else console.log("Auth status: not authorized"),$(".user").text("Войти")};jStoreApp.user.on("change:authorized change:wallets",o),o(),console.log("ready"),$(".loader").remove(),$("body").removeClass("body--fix"),a()}])});
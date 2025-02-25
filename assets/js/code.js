(function ($) {
  "use strict";

  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        // Añade eventos para mostrar el dropdown al pasar el ratón
        $(".navbar .dropdown")
          .on("mouseenter", function () {
            $(this).addClass("show");
            $(this).find(".dropdown-menu").addClass("show");
          })
          .on("mouseleave", function () {
            $(this).removeClass("show");
            $(this).find(".dropdown-menu").removeClass("show");
          });
      } else {
        // Elimina los eventos en movil
        $(".navbar .dropdown").off("mouseenter mouseleave");
      }
    }

    // Ejecutar la función en el inicio y en cada cambio de tamaño de pantalla
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);

    // Carrusel de Slick
    $(".slider").slick({
      slidesToShow: 4, // Muestra 4 tarjetas a la vez
      slidesToScroll: 1,
      lazyLoad: "ondemand",
      autoplay: true,
      autoplaySpeed: 2500,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });

    // Poner la foto del producto en grande al hacer clic
    $(".img-fluid.mini").click(function () {
      let this_src = $(this).attr("src"); // Obtener la fuente de la miniatura clickeada
      $("#product-detail").attr("src", this_src); // Cambiar la imagen principal
    });

    // Cambiar cantidad
    $("#btn-minus").click(function () {
      let val = $("#var-value").html();
      val = val == "1" ? val : val - 1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $("#btn-plus").click(function () {
      let val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    //Cambiar Cantidad en el carrito
    $(".quantity .btn-sel-plus").click(function () {
      let val = $(this).siblings(".quantity-val").html();
      val++;
      $(this).siblings(".quantity-val").html(val);
    });
    $(".quantity .btn-sel-minus").click(function () {
      let val = $(this).siblings(".quantity-val").html();
      val = val == "1" ? val : val - 1;
      $(this).siblings(".quantity-val").html(val);
    });
    // Seleccionar talla
    $(".btn-size").click(function () {
      $(".btn-size").removeClass("btn-pink-checked");
      $(".btn-size").addClass("btn-pink");
      $(this).removeClass("btn-pink");
      $(this).addClass("btn-pink-checked");
    });
    // Función que comprueba si ya está guardada la cookie
    function obtenerCookie(nombre) {
      let cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === nombre) return cookie[1];
      }
      return null;
    }

    // Si la cookie ya existe, oculta el banner de cookies
    if (obtenerCookie("cookie_consent") !== null) {
      $(".cookies").hide();
    }

    // Evento para aceptar cookies
    $(".cookiesSi").click(function () {
      document.cookie =
        "cookie_consent=true; path=/; max-age=" + 60 * 60 * 24 * 365;
      $(".cookies").hide();
    });

    // Evento para denegar cookies
    $(".cookiesNo").click(function () {
      document.cookie = "cookie_consent=false; path=/; max-age=" + 60 * 60 * 24;
      $(".cookies").hide();
    });
  });
})(jQuery);

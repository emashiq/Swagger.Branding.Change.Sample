(function () {
    window.addEventListener("load", function () {
        setTimeout(function () {
            var logo = document.getElementsByClassName('link'); //For Changing The Link On The Logo Image
            logo[0].href = "https://otpzone.com";
            logo[0].target = "_blank";
            logo[0].children[0].alt = "OTPZone_API";
            logo[0].children[0].src = '/swagger-content/logo.png';
            var body = document.getElementsByName('body');
            console.log(body);
        });
    });
})();





$(function () {
    var sliderRun = false;
    var sliderLock = false;
    var sliderAcc = 0;
    var sliderLeft = false;
    var lastSliderRunValue = 0;
    var sliderTimer = undefined;

    var player = document.getElementById('video-element');

    var SlideRun = function () {
        if (sliderRun === false) {
            player.play();
            sliderTimer = undefined;
            return;
        }

        var sliderRunValue = $("#slide-range").val();
        
        if (sliderLeft && sliderRunValue > 0 ){
            sliderAcc = 0;
        }
        
        if (!sliderLeft && sliderRunValue < 0) {
            sliderAcc = 0;
        }

        if (lastSliderRunValue != sliderRunValue){
            sliderAcc = 0;
        }
        lastSliderRunValue = sliderRunValue;
        
        sliderLeft = (sliderRunValue < 0);

        sliderAcc = sliderRunValue * 0.10;
        // if (sliderAcc > 2){
        //     sliderAcc = 2;
        // }
        // else if (sliderAcc < -2) {
        //     sliderAcc = -2;
        // }
        var timeValue = player.currentTime + sliderAcc;
        if (timeValue >= player.duration){
            timeValue = 0;
        }
        else if (timeValue <= 0){
            timeValue = player.duration;
        }
        player.currentTime = timeValue;
        // console.log(player.duration+'/' + timeValue);

        sliderTimer = setTimeout(function () {
            SlideRun();
        }, 100);
    }

    //custom slider

    $("#slide-range").bind("mouseup touchend", function (e) {
        sliderRun = false;
        sliderLock = true;
        $("#slide-range").stop();
        $({ someValue: $("#slide-range").val() }).animate({ someValue: 0 }, {
            duration: 200,
            step: function () {
                $("#slide-range").val(this.someValue);
            },
            complete : function(){
                sliderLock = false;
                console.log('vvvv');
                player.playback = 1;
                player.play(); 
            }
        } );
        
        if (sliderTimer !== undefined){
            clearTimeout(sliderTimer);
            sliderTimer = undefined;
        }

        
    });

    $("#slide-range").on("input change", function () {
        if (sliderLock){
            return ;
        }
        if(sliderRun === false){
            // console.log('vvvv' + $(this).val());
            sliderAcc = 0;
            sliderRun = true;
            SlideRun();
        }
        // if ($(this).val() > 0) {
        //   // console.log('1111');
        //   player.currentTime = player.duration-0.1;
        // }
        // else if ($(this).val() < 0) {
        //   // onsole.log('2222');
        //   player.currentTime = 0;
        // }
        // else {
        //   onsole.log('3333');
        // }
        // player.currentTime += $(this).val() * 0.1;
    });


});

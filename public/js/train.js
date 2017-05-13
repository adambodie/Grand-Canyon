$(document).ready(function() {
            $("#move").click(function() {
                $("#train").animate({
                        left: '+=100px'
                    });
            });
            $("#reverse").click(function() {
                $("#train").animate({
                        left: '-=100px'
                    });
            });
        });
function firstframe() {

    $(".gifi-white")
        .animate({ top: "5vw" }, function () {          // SLIDE GIFI-WHITE
                $(".text-house")
                    .animate({ top: "80vw" }, "fast")   // SLIDE HOUSE+TEXT
                    .animate({ top: "75vw" })           // MAKE THE BOUNCY 
                    .animate({ top: "80vw" });          // EFFECT FOR HOUSE+TEXT   
        })
        .animate({ top: "1vw" }, function () {          // BOUNCY EFFECT FOR GIFI-WHITE

    })                              
        .animate({ top: "5vw" }, function () {          // BOUNCY EFFECT FOR GIFI-WHITE
        $(".firstFrameOut")
            .delay(500)                                 //ADD DELAY BEFORE GETTING
            .animate({ top: "250em" }, "fast");         //THE FIRST FRAME OUT
    });
}

function secondframe() {

    $(".bottom-container")                              
    .animate({ bottom: "0"}, function(){                // SLIDE TREE TO BOTTOM OF DIV
        $(".text-logo")                                 
            .animate({top: "3vw"}, function(){          // SLIDE LOGO+TEXT
                $(".gifi-white2")                        
                    .animate({ top: "1vw" })            // BOUNCY EFFECT FOR GIFI-WHITE2
                    .animate({ top: "2vw" });           // BOUNCY EFFECT FOR GIFI-WHITE2
                $(".text")
                    .animate({ top: "27vw" })           // BOUNCY EFFECT FOR TEXT
                    .animate({ top: "30vw" });          // BOUNCY EFFECT FOR TEXT 
        });
    });

$(".btn").delay(800)
    .animate({ bottom: "3em" })                         // SLIDE BUTTON
    .animate({ bottom: "2em" })                         // BOUNCY EFFECT FOR BUTTON
    .animate({ bottom: "3em" });                        // BOUNCY EFFECT FOR BUTTON

$(".torche").delay(1500)
    .animate({ left: "0" })                             // SLIDE TORCHE
    .animate({ left: "-3em" })                          // BOUNCY EFFECT FOR TORCHE
    .animate({ left: "0" });                            // BOUNCY EFFECT FOR TORCHE
}


firstframe();
setTimeout(function () { secondframe(); }, 2500);       // AFTER 2.5S CALL FUNCTION SECONDFRAME()

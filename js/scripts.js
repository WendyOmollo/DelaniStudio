$(document).ready(function(){
    $("#designer").click(function(){
        $("#designer").hide();
        $("#designing").fadeIn();
    });
});
$(document).ready(function(){
    $("#designing").click(function(){
        $("#designing").hide();
        $("#designer").fadeIn();
    });
});
$(document).ready(function(){
    $("#developer").click(function(){
        $("#developer").hide();
        $("#developing").fadeIn();
    });
});
$(document).ready(function(){
    $("#developing").click(function(){
        $("#developing").hide();
        $("#developer").fadeIn();
    });
});
$(document).ready(function(){
    $("#producer").click(function(){
        $("#producer").hide();
        $("#production").fadeIn();
    });
});
$(document).ready(function(){
    $("#production").click(function(){
        $("#production").hide();
        $("#producer").fadeIn();
    });
});
$(document).ready(function(){
    $("#onework").mouseenter(function(){
    $("#workone").show();
    }).mouseleave(function(){
        $("#workone").hide();
    });
    $("#twowork").mouseenter(function(){
    $("#worktwo").show();
    }).mouseleave(function(){
        $("#worktwo").hide();
        });
    $("#threework").mouseenter(function(){
    $("#workthree").show();
    }).mouseleave(function(){
        $("#workthree").hide();
            });


 });
// $(document).ready(function(){
// $("form#entry").submit(function(event){

//     var informations = ["name","email","output"];
//     informations.forEach(function(information){
//         var getInfo = $("input#" + information).val();
//     }
//         if(getInfo!==""){
//         alert("Please enter your name");
//     }
//     else{
//         alert("We have received your message.Thank you" + name + email );
//         }

//     event.preventDefault();
//     });
// });

// Toggling the 'What we Do' images
$(document).ready(function(){
    $("#designer").click(function(){
        $("#designer").hide();
        $("#designing").fadeIn();
    });
    $("#designing").click(function(){
        $("#designing").hide();
        $("#designer").fadeIn();
    });
    $("#developer").click(function(){
        $("#developer").hide();
        $("#developing").fadeIn();
    });
    $("#developing").click(function(){
        $("#developing").hide();
        $("#developer").fadeIn();
    });
    $("#producer").click(function(){
        $("#producer").hide();
        $("#production").fadeIn();
    });
    $("#production").click(function(){
        $("#production").hide();
        $("#producer").fadeIn();
    });
});
// Hovering over the porfolio images
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
    $("#fourwork").mouseenter(function(){
    $("#workfour").show();
    }).mouseleave(function(){
        $("#workfour").hide();
            });
    $("#fivework").mouseenter(function(){
    $("#workfive").show();
    }).mouseleave(function(){
        $("#workfive").hide();
            });
    $("#sixwork").mouseenter(function(){
    $("#worksix").show();
    }).mouseleave(function(){
        $("#worksix").hide();
            });
    $("#sevenwork").mouseenter(function(){
    $("#workseven").show();
    }).mouseleave(function(){
        $("#workseven").hide();
            });
    $("#eightwork").mouseenter(function(){
    $("#workeight").show();
    }).mouseleave(function(){
        $("#workeight").hide();
            });


 });
// $(document).ready(function(){
// $("form#entry").submit(function(event){
//     var userName = $("input#name").val();
//     var userEmail = $("input#email").val();
//     var message = $("input#output").val();
//         alert("Thank you" +  + ".   We have received your message");
            
//         event.preventDefault();
//         });
    
// });

        

$(document).ready(function () {
$("form#entry").submit(function(event){
        var userName = $("input#name").val();
        var userEmail = $("input#email").val();
        var message = $("input#output").val();

       alert("Thank you" + userName + userEmail + ".We have received your message.");  
        event.preventDefault();
    });
});
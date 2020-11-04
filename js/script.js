
function refactor(){
    var slides = document.getElementsByClassName("work-sheet");
    var activeSlidesNr = 0;
    var activeSlidesIds = new Array();
    var gridAreas = "";
    for(var i = 0; i < slides.length; i++){
        var id = "#" + $(slides[i]).attr('id');
        if($(id).css('display') == "block"){
            activeSlidesNr++;
            activeSlidesIds.push(id);
            gridAreas += " " + id.substring(1);
        }
    }
    if(activeSlidesNr == 0){
        return false;
    }

    var grid = (100 / activeSlidesNr) - 0.2;
    console.log(grid);
    var gridDisplay = grid + "%";
  
    for(var i = 0; i < activeSlidesIds.length; i++) {

        $(activeSlidesIds[i]).css("width", gridDisplay);

    }


    return true;
}

$(".editor-btn").click(function() {

    btnID = "#" + $(this).attr("id");
    editorID = btnID.substring(0, btnID.length - 4);

    if($(editorID).css("display") != "block") {
        $("#coding").css("display", "none");
        $(editorID).css("display", "block");
        $(btnID).removeClass("btn-non-active")
        $(btnID).addClass("btn-active");

        refactor();
        borders();
    }     
     else {
        $(editorID).css("display", "none");

        $(btnID).removeClass("btn-active")
        $(btnID).addClass("btn-non-active");
        if(!refactor()) {
            $("#coding").css("display", "block");
        }
    }
    
});

$("textarea").on('change keyup paste', function() {
    $("iframe").contents().find("html").html($("<html><head><style type='text/css'>" + $('#css-papper').val() + "</style></head><body>" + $("#html-papper").val() + "</body></html>"));
    document.getElementById("output-papper").contentWindow.eval($('#javascript-papper').val());
})



$(".work-sheet").height($(window).height() - $("#top-bar").height() - 2);

$(".editor-border").height($(window).height() - $("#top-bar").height() - 3);




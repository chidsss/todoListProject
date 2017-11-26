//check off done todo with clicks
$("ul").on("click", "li" ,function(){
   $(this).toggleClass("completed");
      
})

$("#pencil").click(function(){
    $(this).toggleClass("input");
})

//click on X to delete
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
   event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which ===13){
//grabbing input content
        var todoText= $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>" );
    }   
});

$(".fa-pencil").click(function(){
    $("input[type='text']").fadeToggle();
})
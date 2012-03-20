$(function(){
function round(fValue, iDecimals) {
    var iPow = Math.pow(10, iDecimals);
    return Math.round(fValue * iPow) / iPow;
}

function div(fNumerator, fDenominator) {
    return (fDenominator == 0 ? 0 : fNumerator / fDenominator);
}

$(document).ready(function() {
   
$(function(){
    $("#result").submit(function(e) {
        e.preventDefault();
       
        var ele = $("#element").val(),
            target = parseInt($("#target").val(), 10) || 0,
            context = parseInt($("#context").val(), 10) || 0,
            border = parseInt($("#border").val(), 10) || 0,
            margin = parseInt($("#margin").val(), 10) || 0,
            padding = parseInt($("#padding").val(), 10) || 0;

        console.log(ele, target, context, border, margin, padding);

        var DoubleMargin = margin * 2;
        var DoublePadding = padding * 2;
        var DoubleBorder = border * 2;
        
        
        var ActualTarget = target - DoubleBorder - DoubleMargin - DoublePadding * 1;
        var result3 = target - DoubleMargin * 1;
        var MarginResult = round(div(margin, target) * 100, 5);
        var PaddingResult = round(div(padding, target) * 100, 5);
        var OriginalResult = round(div(ActualTarget, context) * 100, 5);
        var BoxSizingResult = round(div(target, context) * 100, 5);                
        
        var BorderResult = target - border * 1;
        
if ($("#boxsizing").is(":checked")) {      
 //    
      // not the box-sizing result
            $("<p></p>", {
            html: ele + " {<br><span>width: " + BoxSizingResult + "%;" + " /* " + target + " / " + context + " */ " + "<br>border: " + border + "px; " + "<br>margin: " + MarginResult + "%; " + "<br>padding: " + PaddingResult+ "%;" + "<br> </span>}"
        }).hide().appendTo("#code-results").fadeIn();

    }
else {   


    // the box sizing

            $("<p></p>", {
            html: ele + " {<br><span>width: " + OriginalResult + "%;" + " /* " + ActualTarget + " (originally " + target + ") / " + context + " */ " + "<br>border: " + border + "px; " + "<br>margin: " + MarginResult + "%; " + "<br>padding: " + PaddingResult+ "%;" + "<br> </span>}"
        }).hide().appendTo("#code-results").fadeIn();
}
//   
  
    });

}); 
    
});
        //Hide div w/id extra
       $("#boxsizingcss").css("display","none");

        // Add onclick handler to checkbox w/id checkme
       $("#boxsizing").click(function(){

        // If checked
        if ($("#boxsizing").is(":checked"))
        {
            //show the hidden div
            $("#boxsizingcss").show("slow");
        }        else
        {
            //otherwise, hide it
            $("#boxsizingcss").hide("fast");
        }
      });


      
});//]]> 

$(function() {
    var input = $('input[type=text]');

    input.focus(function() {
         $(this).val('');
    }).blur(function() {
         var el = $(this);

         /* use the elements title attribute to store the 
            default text - or the new HTML5 standard of using
            the 'data-' prefix i.e.: data-default="some default" */
         if(el.val() == '')
             el.val(el.attr('title'));
    });
 });
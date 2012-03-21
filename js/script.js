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
        var MarginResult = round(div(margin, target) * 100, 9);
        var PaddingResult = round(div(padding, target) * 100, 9);
        var OriginalResult = round(div(ActualTarget, context) * 100, 9);
        var BoxSizingResult = round(div(target, context) * 100, 9);                
        
        var BorderResult = target - border * 1;
        
if ($("#boxsizing").is(":checked")) {      
      // not the box-sizing result
	$("<p></p>", {
     html: ele + " {<br><span>width: " + BoxSizingResult + (BoxSizingResult > 0 ? "%;" : "") + " /* " + target + " / " + context + " */ " + "<br>border: " + border + (border > 0 ? "px" : "") + "; " + "<br>margin: " + MarginResult + (MarginResult > 0 ? "%" : "") + "; " + "<br>padding: " + PaddingResult + (PaddingResult > 0 ? "%" : "") + ";" + "<br> </span>}"
     }).hide().appendTo("#coderesults").fadeIn();
    }
else {   
     // the box sizing
    $("<p></p>", {
      html: ele + " {<br><span>width: " + OriginalResult + (OriginalResult > 0 ? "%;" : "") + ";" + " /* " + ActualTarget + " (originally " + target + ") / " + context + " */ " + "<br>border: " + border + (border > 0 ? "px" : "") + "; " + "<br>margin: " + MarginResult + (MarginResult > 0 ? "%" : "") + "; " + "<br>padding: " + PaddingResult + (PaddingResult > 0 ? "%" : "") + ";" + "<br> </span>}"
      }).hide().appendTo("#coderesults").fadeIn();
     }
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
            $("#boxsizingcss").fadeIn();
        }        else
        {
            //otherwise, hide it
            $("#boxsizingcss").fadeOut();
        }
      });      
});


  // clear the results function
 $("#clear").click(function () {
   $("#coderesults p").remove();
   return false;
 });
  // clear last result function
 $("#last").click(function () {
   $("#coderesults p:last-child").remove();
   return false;
 });
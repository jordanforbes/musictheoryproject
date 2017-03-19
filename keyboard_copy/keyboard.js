
var animation = "jello"
majorSpacing = [0,4,7,12,16,19]
minorSpacing = [0,3,7,12,15,19]
majorSpacing = [0,4,7,12,16,19]
majorScale = [0,2,4,5,7,9,11,12]
minorScale = [0,2,3,5,7,8,10,12]
var majorMinor
var lowerCaseMaMi
var maMiThird
var scaleString
var noteScale = []
function reset(){
	$(".blackKey").css("background-color","black")
	$(".whiteKey").css("background-color","white")
	$(".blackKeySpace").css("background-color","white")
}
function displayVals() {
  	var rootNote = $( "#rootnoteselect" ).val();
	var chordType= $("#chordtypeselect").val();
 	func= chordType + "(rootNote)"
  	eval(func)
}

$(document).ready(function() {

													//maybe later - for now this doesn't work


														  //    $('.keyboardContainer').hover(function(){

														  //    		for(i=0;i<24;i++){



																// 		if ($(".abs"+i+":hover").length > 0){

																// 			// console.log(i);

																// 			$('.displayAbs'+((i%24).toString())).show();

																// 		}

																// 	}

																// },function(){

																// 	for(i=0;i<24;i++){

																// 		$('.displayAbs'+((i%24).toString())).hide();

																// 	}


																// });


	// white key notes appear on hover

        
    $('.lowC').hover(function(){
				$('.lowCDisp').show();
			},function(){
				$('.lowCDisp').hide();
				});
    $('.lowD').hover(function(){
				$('.lowDDisp').show();
			},function(){
				$('.lowDDisp').hide();
				});
    $('.lowE').hover(function(){
				$('.lowEDisp').show();
			},function(){
				$('.lowEDisp').hide();
				});
    $('.lowF').hover(function(){
				$('.lowFDisp').show();
			},function(){
				$('.lowFDisp').hide();
				});
    $('.lowG').hover(function(){
				$('.lowGDisp').show();
			},function(){
				$('.lowGDisp').hide();
				});
    $('.lowA').hover(function(){
				$('.lowADisp').show();
			},function(){
				$('.lowADisp').hide();
				});
    $('.lowB').hover(function(){
				$('.lowBDisp').show();
			},function(){
				$('.lowBDisp').hide();
				});
    $('.midC').hover(function(){
				$('.midCDisp').show();
			},function(){
				$('.midCDisp').hide();
				});
    $('.highD').hover(function(){
				$('.highDDisp').show();
			},function(){
				$('.highDDisp').hide();
				});
    $('.highE').hover(function(){
				$('.highEDisp').show();
			},function(){
				$('.highEDisp').hide();
				});
    $('.highF').hover(function(){
				$('.highFDisp').show();
			},function(){
				$('.highFDisp').hide();
				});
    $('.highG').hover(function(){
				$('.highGDisp').show();
			},function(){
				$('.highGDisp').hide();
				});
    $('.highA').hover(function(){
				$('.highADisp').show();
			},function(){
				$('.highADisp').hide();
				});
    $('.highB').hover(function(){
				$('.highBDisp').show();
			},function(){
				$('.highBDisp').hide();
				});

    // black key notes appear on hover

    $('.lowCSharp').hover(function(){
				$('.lowCSharpDisp').show();
			},function(){
				$('.lowCSharpDisp').hide();
				});
    $('.lowDSharp').hover(function(){
				$('.lowDSharpDisp').show();
			},function(){
				$('.lowDSharpDisp').hide();
				});
    $('.lowFSharp').hover(function(){
				$('.lowFSharpDisp').show();
			},function(){
				$('.lowFSharpDisp').hide();
				});
    $('.lowGSharp').hover(function(){
				$('.lowGSharpDisp').show();
			},function(){
				$('.lowGSharpDisp').hide();
				});
    $('.lowASharp').hover(function(){
				$('.lowASharpDisp').show();
			},function(){
				$('.lowASharpDisp').hide();
				});
    $('.midCSharp').hover(function(){
				$('.midCSharpDisp').show();
			},function(){
				$('.midCSharpDisp').hide();
				});
    $('.highDSharp').hover(function(){
				$('.highDSharpDisp').show();
			},function(){
				$('.highDSharpDisp').hide();
				});
    $('.highFSharp').hover(function(){
				$('.highFSharpDisp').show();
			},function(){
				$('.highFSharpDisp').hide();
				});
    $('.highGSharp').hover(function(){
				$('.highGSharpDisp').show();
			},function(){
				$('.highGSharpDisp').hide();
				});
    $('.highASharp').hover(function(){
				$('.highASharpDisp').show();
			},function(){
				$('.highASharpDisp').hide();
				});

    // dropdown

    $(".dropdown-toggle").dropdown("toggle");

    // selecting major or minor

    $('.majMinDrop').click(function(){

																					// debugger
 			
			majorMinor = $(this).text();
			if(majorMinor=="Major"){
				spacingArray = majorSpacing
				maMiThird = "major"
			}else{
				spacingArray = minorSpacing
				maMiThird = "flat"
			}
			$(".maMi").html(majorMinor);
			$(".thirdClass").html(maMiThird);
			lowerCaseMaMi = majorMinor.toLowerCase();
			$(".maMiClass").html(lowerCaseMaMi);

																					// debugger
	
	});

    // shows chords on hover in dropdown

    $('.dropChord').hover(function(){
      	for(i=0;i<12;i++){
      		if($(".note"+i).is(':hover')==true){
      			$('.displayAbs'+(((i+spacingArray[0])%24).toString())).show();
				$('.displayAbs'+(((i+spacingArray[1])%24).toString())).show();
				$('.displayAbs'+(((i+spacingArray[2])%24).toString())).show();
				$('.displayAbs'+(((i+spacingArray[3])%24).toString())).show();
				$('.displayAbs'+(((i+spacingArray[4])%24).toString())).show();
				$('.displayAbs'+(((i+spacingArray[5])%24).toString())).show();
      		}
      	}		
	},function(){
		for(i=0;i<24;i++){
	      	$('.displayAbs'+((i%24).toString())).hide();	
	    }
	});

 	// moves keyboard on chord selection

 	$('.dropChord').click(function(){
 		$(".keyboardContainer").removeClass(animation);
 		$("#content").removeClass("fadeOut");

 																					// debugger

 		setTimeout(function() {
	 		$(".keyboardContainer").animate({
	            "margin-left": "58%",
	            "margin-top": "6%",
	            height: "25%",
	            width: "40%",
	            "font-size": "50%",
	        }, 600);
	        $(".keyboardContainer").addClass(animation);
	        $("#content").show();
	        $("#content").addClass("fadeIn")
	    }, 2*1000)
	});

 	// shows content on chord selection

 	var n
 	$('.dropChord').click(function(){
 		scaleString=""
 		n = $(this).text().toLowerCase();
 		if(n.length==2){
			n=(n[0]+"s")
 		}

																				// debugger

		name= "."+ n + majorMinor
		if(majorMinor=="Major"){
 			noteScale[0]=n;
 			for(i=1;i<8;i++){
 				var j = (notes.indexOf(n)+majorScale[i])%12
 				noteScale[i]=notes[j];
 			}
 			noteScale[8]=n
 		}else{
 			noteScale[0]=n;
 			for(i=1;i<8;i++){
 				var j = (notes.indexOf(n)+minorScale[i])%12
 				noteScale[i]=notes[j];
 			}
 		}

 																				// debugger

 		for(i=0;i<8;i++){
 			if(noteScale[i].length==2){
 				noteScale[i] = noteScale[i][0]+"#";
 				noteScale[i] = (noteScale[i]).toUpperCase();
 			}else{
				noteScale[i] = (noteScale[i]).toUpperCase();		
 			}
 			var next
 			if(i==6){
 				next=" and "
 			}else if(i==7){
 				next="."
 			}else{
				next=", "
 			}
			scaleString = scaleString+noteScale[i]+next
 		}

																					// debugger
		
		$(".Chordname").html(noteScale[0] +" "+ majorMinor)
		$(".rootNote").html(noteScale[0])
		$(".thirdNote").html(noteScale[2])
		$(".fifthNote").html(noteScale[4])
		$(".noteScaleClass").html(scaleString)
		for(let i=0;i<Maj(n).length;i++){
			if(majorMinor=="Minor"){
				setTimeout(function() {
					clsnm= "."+Min(n)[i]+"note"
					if(i==0){
						$(clsnm).css("background-color","#1e88e5");
					}else if(i==1){
						$(clsnm).css("background-color","#9575cd");
					}else{
						$(clsnm).css("background-color","#ff4081");
					}
				}, i*500)
			}else{
				setTimeout(function() {
					clsnm= "."+Maj(n)[i]+"note"
					if(i>0){
						$(clsnm).css("background-color","#ff4081");
					}else{
						$(clsnm).css("background-color","#1e88e5")
					}
				}, i*500)
			}
		}
 	})


 	// moves keyboard back


 	$('.back').click(function(){
 		$(".keyboardContainer").removeClass(animation);
 		$("#content").removeClass("fadeIn");

 																						// debugger

 		majorMinor = "";
 		$(".maMi").html(majorMinor);
 		$(".keyboardContainer").animate({
            "margin-left": "10%",
            "margin-right": "10%",
			"margin-top": "10%",
			width: "80%",
			height: "40%",
			"font-size": "100%",
        } , 600);
        reset();
 		$(".keyboardContainer").addClass(animation);
 		$("#content").hide();
 		$("#content").addClass("fadeOut");
	}); 
});


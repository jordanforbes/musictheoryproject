
	var animation = "jello"

	var tester 


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


	// white keys
        
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


     // black keys

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


      // shows chords on hover

      $('.dropChord').hover(function(){
      		for(i=0;i<12;i++){
      				if($(".note"+i).is(':hover')==true){
      					$('.displayAbs'+((i%24).toString())).show();
						$('.displayAbs'+(((i+4)%24).toString())).show();
						$('.displayAbs'+(((i+7)%24).toString())).show();
						$('.displayAbs'+(((i+12)%24).toString())).show();
						$('.displayAbs'+(((i+16)%24).toString())).show();
						$('.displayAbs'+(((i+19)%24).toString())).show();
      				}
      		}		
		},function(){
				for(i=0;i<24;i++){
	      			$('.displayAbs'+((i%24).toString())).hide();	
	      		}
		});



 		// moves keyboard


 		$('.dropChord').click(function(){


 				$(".keyboardContainer").removeClass(animation);
 				$("#content").removeClass("fadeOut");

 				setTimeout(function() {

	 				$(".keyboardContainer").animate({

	                "margin-left": "58%",
	                "margin-top": "6%",
	                height: "25%",
	                width: "40%",
	                "font-size": "50%",


	                } , 600);

	                $(".keyboardContainer").addClass(animation);


	                $("#content").show();
	                $("#content").addClass("fadeIn")},

	                2*1000)

                


			
				});

 		// moves keyboard back


 		$('.back').click(function(){


 				$(".keyboardContainer").removeClass(animation);
 				$("#content").removeClass("fadeIn");



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


 		// shows content

 			var n


 			$('.dropChord').click(function(){



 				n = $(this).text().toLowerCase();


 				console.log(n);


 				name= "."+ n +"Major"


 				capN = n.toUpperCase();


 				var first, third, fifth

 				

 				if(Maj(n)[0].length==2){
 					first = (Maj(n)[0][0]).toUpperCase()+"#"
 				}else{
 					first = (Maj(n)[0][0]).toUpperCase()	
 				}

 				if(Maj(n)[1].length==2){
 					third = (Maj(n)[1][0]).toUpperCase()+"#"
 				}else{
 					third = (Maj(n)[1][0]).toUpperCase()	
 				}

 				if(Maj(n)[2].length==2){
 					fifth = (Maj(n)[2][0]).toUpperCase()+"#"
 				}else{
 					fifth = (Maj(n)[2][0]).toUpperCase()	
 				}

		
				$(".Chordname").html(capN + " Major")

				$(".rootNote").html(first)

				$(".thirdNote").html(third)

				$(".fifthNote").html(fifth)




			
			

			for(let i=0;i<Maj(n).length;i++){

				setTimeout(function() {

					clsnm= "."+Maj(n)[i]+"note"
					console.log(clsnm)
					//$('.low'+Maj(n)[i].toUpperCase()+'Disp').show()
					//$('.high'+Maj(n)[i].toUpperCase()+'Disp').show()
					if(i>0){
						$(clsnm).css("background-color","#ff4081");
					}else{
						$(clsnm).css("background-color","#1e88e5")
					}

				}, i*500)
				

			}

		

		console.log(name)




 			})

 			





        
    });


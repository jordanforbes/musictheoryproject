
	var animation = "jello"


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



      // chords

      $('.cChord').hover(function(){
				$('.lowCDisp').show();
				$('.lowEDisp').show();
				$('.lowGDisp').show();
				$('.midCDisp').show();
				$('.highEDisp').show();
				$('.highGDisp').show();

			},function(){
				$('.lowCDisp').hide();
				$('.lowEDisp').hide();
				$('.lowGDisp').hide();
				$('.midCDisp').hide();
				$('.highEDisp').hide();
				$('.highGDisp').hide();
				});

      $('.dChord').hover(function(){
				$('.lowDDisp').show();
				$('.lowFSharpDisp').show();
				$('.lowADisp').show();
				$('.highDDisp').show();
				$('.highFSharpDisp').show();
				$('.highADisp').show();

			},function(){
				$('.lowDDisp').hide();
				$('.lowFSharpDisp').hide();
				$('.lowADisp').hide();
				$('.highDDisp').hide();
				$('.highFSharpDisp').hide();
				$('.highADisp').hide();
				});

       $('.eChord').hover(function(){
				$('.lowEDisp').show();
				$('.lowGSharpDisp').show();
				$('.lowBDisp').show();
				$('.highEDisp').show();
				$('.highGSharpDisp').show();
				$('.highBDisp').show();

			},function(){
				$('.lowEDisp').hide();
				$('.lowGSharpDisp').hide();
				$('.lowBDisp').hide();
				$('.highEDisp').hide();
				$('.highGSharpDisp').hide();
				$('.highBDisp').hide();
				});

       $('.fChord').hover(function(){
				$('.lowCDisp').show();
				$('.lowFDisp').show();
				$('.lowADisp').show();
				$('.midCDisp').show();
				$('.highFDisp').show();
				$('.highADisp').show();

			},function(){
				$('.lowCDisp').hide();
				$('.lowFDisp').hide();
				$('.lowADisp').hide();
				$('.midCDisp').hide();
				$('.highFDisp').hide();
				$('.highADisp').hide();
				});

       $('.gChord').hover(function(){
				$('.lowDDisp').show();
				$('.lowGDisp').show();
				$('.lowBDisp').show();
				$('.highDDisp').show();
				$('.highGDisp').show();
				$('.highBDisp').show();

			},function(){
				$('.lowDDisp').hide();
				$('.lowGDisp').hide();
				$('.lowBDisp').hide();
				$('.highDDisp').hide();
				$('.highGDisp').hide();
				$('.highBDisp').hide();
				});

 		$('.aChord').hover(function(){
				$('.lowCSharpDisp').show();
				$('.lowEDisp').show();
				$('.lowADisp').show();
				$('.midCSharpDisp').show();
				$('.highEDisp').show();
				$('.highADisp').show();

			},function(){
				$('.lowCSharpDisp').hide();
				$('.lowEDisp').hide();
				$('.lowADisp').hide();
				$('.midCSharpDisp').hide();
				$('.highEDisp').hide();
				$('.highADisp').hide();
				});

 		$('.bChord').hover(function(){
				$('.lowDSharpDisp').show();
				$('.lowFSharpDisp').show();
				$('.lowBDisp').show();
				$('.highDSharpDisp').show();
				$('.highFSharpDisp').show();
				$('.highBDisp').show();

			},function(){
				$('.lowDSharpDisp').hide();
				$('.lowFSharpDisp').hide();
				$('.lowBDisp').hide();
				$('.highDSharpDisp').hide();
				$('.highFSharpDisp').hide();
				$('.highBDisp').hide();
				});


 		// moves keyboard


 		$('.dropChord').click(function(){


 				$(".keyboardContainer").removeClass(animation);
 				$("#content").removeClass("fadeOut");



 				$(".keyboardContainer").animate({

                "margin-left": "60%",
                "margin-top": "3%",
                height: "25%",
                width: "40%",
                "font-size": "50%",


                } , 600);

                $(".keyboardContainer").addClass(animation);


                $("#content").show();
                $("#content").addClass("fadeIn");

                


			
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

 				$(".keyboardContainer").addClass(animation);


 				$("#content").hide();
 				$("#content").addClass("fadeOut");
			
				});


 		// shows content

 			var chord

 			$('.cChord').click(function(){


        		chord = "C";
        		console.log(chord);



        	});

        	$('.dChord').click(function(){


        		chord = "D";
        		console.log(chord);



        	});

        	$('.eChord').click(function(){


        		chord = "E";
        		console.log(chord);



        	});

        	$('.fChord').click(function(){


        		chord = "F";
        		console.log(chord);



        	});

        	$('.gChord').click(function(){


        		chord = "G";
        		console.log(chord);



        	});


        	$('.aChord').click(function(){


        		chord = "A";
        		console.log(chord);



        	});

        	$('.bChord').click(function(){


        		chord = "B";
        		console.log(chord);



        	});





        
    });


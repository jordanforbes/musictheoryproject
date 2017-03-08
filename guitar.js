
var notes= ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]

var scale= [ [0,2,4,5,7,9,11],[0,2,3,5,7,9,10],[0,1,3,5,7,8,10],
            [0,2,4,5,7,8,10,11],[0,2,4,5,7,9,10],[0,2,3,5,7,9,10],[0,1,3,5,6,8,10] ]


var ionian= scale[0];
var dorian= scale[1];
var phrygian= scale[2];
var lydian= scale[3];
var Mixolydian= scale[4];
var aeolian= scale[5];
var locrian= scale[6];




function modeNoteList(x,mode){
  console.log(x.toUpperCase() + " " + mode + " notes")
  mode = eval(mode)

  var x = notes.indexOf(x)

  mode.forEach(function(element) {

    element=element + x;

    if(element<12){
    console.log(notes[element]);
    element=element - x

  }else if(element>=12){
    element=element-12;
    console.log(notes[element]);
    element=element+x+12
 
  }

  });
  console.log("end")
}

modeNoteList("a","aeolian")







//var majorTri= [scale([0][0]), scale([0][2]), scale([0][4]),]
//var majorSev= majorTri + scale([0][6])

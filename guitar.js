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


function ionianList(){
  scale[0].forEach(function(x) {
    console.log(notes[element]);
  });
}

function dorianList(){
  scale[1].forEach(function(element) {
    console.log(notes[element]);
  });
}

function phrygianList(){
  scale[2].forEach(function(element) {
    console.log(notes[element]);
  });
}

function mixoLydianList(){
  scale[3].forEach(function(element) {
    console.log(notes[element]);
  });
}

function lydianList(){
  scale[4].forEach(function(element) {
    console.log(notes[element]);
  });
}

function aeolianList(){
  scale[5].forEach(function(element) {
    console.log(notes[element]);
  });
}

function locrianList(){
  scale[6].forEach(function(element) {
    console.log(notes[element]);
  });
}

function gIonianList(){
  console.log("G Ionian")
  scale[0].forEach(function(element) {

    element=element + 7;

    if(element<12){
    console.log(notes[element]);
    element=element - 7

  }else if(element>=12){
    element=element-12;
    console.log(notes[element]);
    element=element+7+12
 
  }

  });
  console.log("end")
}



function xIonianList(x){
  var x = notes.indexOf(x)

  console.log("Ionian")
  ionian.forEach(function(element) {

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

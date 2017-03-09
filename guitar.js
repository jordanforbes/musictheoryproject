
var notes= ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]

var scale= [ [0,2,4,5,7,9,11],[0,2,3,5,7,9,10],[0,1,3,5,7,8,10],
            [0,2,4,5,7,8,10,11],[0,2,4,5,7,9,10],[0,2,3,5,7,9,10],[0,1,3,5,6,8,10] ]

//scale list 
var ionian= scale[0];
var dorian= scale[1];
var phrygian= scale[2];
var lydian= scale[3];
var mixolydian= scale[4];
var aeolian= scale[5];
var locrian= scale[6];

var tri = [0,2,4]
var augTri= [0,2,5]
var sev = [0,2,4,6]

var majorScales = ["ionian", "lydian", "mixolydian"]
var minorScales = ["dorian", "phrygian", "aeolian", "locrian"]



function modeNoteList(n,modeName,chord){
  
  mode = eval(modeName)
 

  var scaleArr=[]

  var x = notes.indexOf(n)
//mode notes finder
  mode.forEach(function(element) {

    element=element + x;

    if(element<12){
    scaleArr.push(notes[element]); 
    element=element - x

  }else if(element>=12){
    element=element-12;
    scaleArr.push(notes[element]);
    element=element+x+12
 
  }

  });
  

//chord notes finder
if(chord != undefined){
  var chordArr=[]
  

  chord.forEach(function(element){

    chordArr.push(scaleArr[element]);
  })
  console.log(chordArr)
  }else{
    console.log(n.toUpperCase() + " "+ modeName + " scale")
    console.log(scaleArr)
  }
}


modeNoteList("e#", majorScales[1])
Maj7("c")
Maj("c")
AugTri("c")
DimTri("a#")

//chord list

function Maj7(n){
  console.log(n.toUpperCase() + " Major 7")
  modeNoteList(n,majorScales[0],sev)
}

function Maj(n){
  console.log(n.toUpperCase() + " Major")
  modeNoteList("c",majorScales[0],tri)
}

function AugTri(n){
  console.log(n.toUpperCase() + " Augmented")
  modeNoteList(n,majorScales[1],augTri)
}

function DimTri(n){
  console.log(n.toUpperCase() + " Diminished")
  modeNoteList(n,minorScales[3],tri)
}


//var majorTri= [scale([0][0]), scale([0][2]), scale([0][4]),]
//var majorSev= majorTri + scale([0][6])

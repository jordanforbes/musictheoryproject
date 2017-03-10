

//notes
var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]


//scale list 
var scale= [ [0,2,4,5,7,9,11,"ionian"],[0,2,3,5,7,9,10,"dorian"],[0,1,3,5,7,8,10,"phrygian"],
            [0,2,4,5,7,8,10,11,"lydian"],[0,2,4,5,7,9,10,"mixolydian"],[0,2,3,5,7,9,10,"aeolian"],[0,1,3,5,6,8,10,"locrian"] ]

    //modes
var ionian= scale[0];
var dorian= scale[1];
var phrygian= scale[2];
var lydian= scale[3];
var mixolydian= scale[4];
var aeolian= scale[5];
var locrian= scale[6];


//chord list
var chord= [[0,2,4],[0,2,5],[0,2,4,6],[0,4]]

    //chord types
var tri = chord[0]
var augTri= chord[1]
var sev = chord[2]
var fi = chord[3]

var majorScales = ["ionian", "lydian", "mixolydian"];
var minorScales = ["dorian", "phrygian", "aeolian", "locrian"];

//notes finder
function noteFinder(n,modeName,chord){
  
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
      finArr= chordArr
    }else{
      console.log(n.toUpperCase() + " "+ modeName + " scale")
      console.log(scaleArr)
    }
  
}

//chord list


function Maj7(n){
  console.log(n.toUpperCase() + " Major 7")
  noteFinder(n,majorScales[0],chord[2])
}

function Maj(n){
  finArr=[]
  //return n.toUpperCase() + " Major"
  noteFinder(n,majorScales[0],chord[0])
  console.log(finArr)
  return finArr
}

function AugTri(n){
  console.log(n.toUpperCase() + " Augmented")
  noteFinder(n,majorScales[1],chord[1])
}

function DimTri(n){
  console.log(n.toUpperCase() + " Diminished")
  noteFinder(n,minorScales[3],chord[0])
}

function fiveDyad(n){
  console.log(n.toUpperCase() + " Power Chord")
  noteFinder(n,majorScales[0],chord[3])
}

/*
noteFinder("e", majorScales[0])
Maj7("c")
Maj("c")
AugTri("c")
DimTri("a#")
fiveDyad("c")
*/

function findNoteIndex(n){
  //console.log(n)
  thisChord= []

  for(i=0;i<n.length;i++){
    d= notes.indexOf(n[i])
    thisChord.push(d)
  }

  //console.log(thisChord)
  return thisChord

}

function findModeIndex(n){
  findNoteIndex(n)
  console.log(thisChord)
  console.log(scale[0])
  for(i=0; i<8; i++){

  }
  
}

//findModeIndex(["c","e","g"])

function chordFinder(n){
  findNoteIndex(n)
}


  

//var majorTri= [scale([0][0]), scale([0][2]), scale([0][4]),]
//var majorSev= majorTri + scale([0][6])

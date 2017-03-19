

//notes
var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]
var chromatic= [0,1,2,3,4,5,6,7,8,9,10,11]

//scale list 
var scale= [ [0,2,4,5,7,9,11,"ionian"],[0,2,3,5,7,9,10,"dorian"],[0,1,3,5,7,8,10,"phrygian"],
            [0,2,4,6,7,9,11,"lydian"],[0,2,4,5,7,9,10,"mixolydian"],[0,2,3,5,7,9,10,"aeolian"],[0,1,3,5,6,8,10,"locrian"],
            [0,1,3,4,6,8,9,11,"diminished"]]

    //modes
var ionian= scale[0];
var dorian= scale[1];
var phrygian= scale[2];
var lydian= scale[3];
var mixolydian= scale[4];
var aeolian= scale[5];
var locrian= scale[6];
var diminished= scale[7]
var aug7s= [0,2,4,6,8,9,10,"aug7"]
var chromatic= [0,1,2,3,4,5,6,7,8,9,10,11]



//chord list
var chord= [[0,2,4],[0,2,5],[0,2,4,6],[0,4],[0,1,4],[0,3,4],[0,2,4,5]]

    //chord types
var tri = chord[0]
var augTri= chord[1]
var sev = chord[2]
var fi = chord[3]

var majorScales = ["ionian", "lydian", "mixolydian"];
var minorScales = ["dorian", "phrygian", "aeolian", "locrian"];
var dimScale = ["diminished"]
var aug7scale =["aug7s"]
var chromatic = ["chromatic"]
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
return scaleArr
  });
    //chord notes finder
  if(chord != undefined){
    var chordArr=[]
  

    chord.forEach(function(element){

      chordArr.push(scaleArr[element]);
    })
      finArr= chordArr
    }else{
      return scaleArr
      
    }
  
}

//chord list


function Maj7(n){
  finArr=[]
  noteFinder(n,majorScales[0],chord[2])
  console.log(finArr)
  return finArr
}

function Dom7(n){
  finArr=[]
  noteFinder(n,majorScales[2],chord[2])
  console.log(finArr)
  return finArr
}

function HalfDim7(n){
  finArr=[]
  noteFinder(n,minorScales[3],chord[2])
  console.log(finArr)
  return finArr
}

function Dim7(n){
  finArr=[]
  noteFinder(n,dimScale[0],chord[2])
  return finArr
}

function Dom7Sus4(n){
  finArr=[]
  noteFinder(n,majorScales[2],[0,3,4,6])
  console.log(finArr)
  return finArr
}

function Maj7Sus2(n){
  finArr=[]
  noteFinder(n,majorScales[0],[0,1,4,6])
  console.log(finArr)
  return finArr
}

function Maj7Sus4(n){
  finArr=[]
  noteFinder(n,majorScales[0],[0,3,4,6])
  console.log(finArr)
  return finArr
}

function Maj(n){
  finArr=[]
  //return n.toUpperCase() + " Major"
  noteFinder(n,majorScales[0],chord[0])
  console.log(finArr)
  return finArr
}

function Min7(n){
  finArr=[]
  noteFinder(n,minorScales[2],chord[2])
  console.log(finArr)
  return finArr
}


function Min(n){
  finArr=[]
  noteFinder(n,minorScales[2],chord[0])
  console.log(finArr)
  return finArr
}

function AugTri(n){
  finArr=[]
  noteFinder(n,majorScales[1],chord[1])
  console.log(finArr)
  return finArr
}
function Aug7(n){
  finArr=[]
  noteFinder(n,aug7s,chord[2])
  return finArr
}

function DimTri(n){
  finArr=[]
  noteFinder(n,minorScales[3],chord[0])
  console.log(finArr)
  return finArr
}

function fiveDyad(n){
  finArr=[]
  console.log(n.toUpperCase() + " Power Chord")
  noteFinder(n,majorScales[0],chord[3])
  return finArr
}

function sus2(n){
  finArr=[]
  noteFinder(n,majorScales[0],chord[4])
  return finArr
}

function sus4(n){
  finArr=[]
  noteFinder(n,majorScales[0],chord[5])
  return finArr
}

function Maj6(n){
  finArr=[]
  noteFinder(n,majorScales[0],chord[6])
  return finArr
}

function Min6(n){
  finArr=[]
  noteFinder(n,minorScales[2],chord[6])
  return finArr
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

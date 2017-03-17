//notes
var notes= ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]


//scale list 
var scale= [ [0,2,4,5,7,9,11,"ionian"],[0,2,3,5,7,9,10,"dorian"],[0,1,3,5,7,8,10,"phrygian"],
            [0,2,4,6,7,9,11,"lydian"],[0,2,4,5,7,9,10,"mixolydian"],[0,2,3,5,7,9,10,"aeolian"],[0,1,3,5,6,8,10,"locrian"] ]

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

//mode notes finder
function modeNotes(n,arr){
  mode.forEach(function(element) {

        element=element + n;

        if(element<12){
        arr.push(notes[element]); 
        element=element - n

      }else if(element>=12){
        element=element-12;
        arr.push(notes[element]);
        element=element+n+12
     
      }

      })
}

//notes finder
function noteFinder(n,modeName,chord){
  
      mode = eval(modeName)
     

      var scaleArr=[]

      var x = notes.indexOf(n)

        //mode notes finder
  modeNotes(x,scaleArr)

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


//chord list


function Maj7(n){
  console.log(n.toUpperCase() + " Major 7")
  noteFinder(n,"ionian",chord[2])
}

function Maj(n){
  console.log(n.toUpperCase() + " Major")
  noteFinder(n,"ionian",chord[0])
}

function AugTri(n){
  console.log(n.toUpperCase() + " Augmented")
  noteFinder(n,"lydian",chord[1])
}

function DimTri(n){
  console.log(n.toUpperCase() + " Diminished")
  noteFinder(n,"locrian",chord[0])
}

function fiveDyad(n){
  console.log(n.toUpperCase() + " Power Chord")
  noteFinder(n,"ionian",chord[3])
}



//note index finder
function findNoteIndex(n){
      //console.log(n)
      thisChord= []

      for(i=0;i<n.length;i++){
        d= notes.indexOf(n[i])
        thisChord.push(d)
      }

      return thisChord

}


//mode finder only works for the key of c right now. I'll probably have to loop 
//throught the notes finder function 
function cFindModeIndex(n){
      var checker= 0
      var containingMode=[]
      findNoteIndex(n)
     
      for(j=0;j<7;j++){
        for(i=0;i<3;i++){
          k= scale[j].indexOf(thisChord[i])

          if(k<0){
            checker -=1
          }else{
            checker +=0
          }

        }
        if(checker==0){
          containingMode.push(scale[j][7])
        }else{
          checker = 0
        }
      }
      console.log(containingMode)

}

//make one for c sharp
function csFindModeIndex(n){
      var checker= 0
      var containingMode=[]
      findNoteIndex(n)
     
      for(j=0;j<7;j++){
        for(i=0;i<3;i++){
          k= scale[j].indexOf(thisChord[i])

          if(k<0){
            checker -=1
          }else{
            checker +=0
          }

        }
        if(checker==0){
          containingMode.push(scale[j][7])
        }else{
          checker = 0
        }
      }
      console.log(containingMode)

}




function chordFinder(n){
  findNoteIndex(n)
}

/*
noteFinder("e", "ionian")
Maj7("c")
Maj("d")
AugTri("c")
DimTri("a#")
fiveDyad("c")
Maj("g")
*/


//cFindModeIndex(["c","e","g"])
cFindModeIndex(["a","c","e"])




/*
var majorScales = ["ionian", "lydian", "mixolydian"];
var minorScales = ["dorian", "phrygian", "aeolian", "locrian"];
*/

let audioContext = new (window.AudioContext || window.webkitAudioContext);
let oscList = [];
let masterGainNode = null;
let keyboard = document.querySelector(".keyboard");
let wavePicker = document.querySelector("select[name='waveform']");
let volumeControl = document.querySelector("input[name='volume']");
let noteFreq = null;
let customWaveform = null;
let sineTerms = null;
let cosineTerms = null;

      	
function createNoteTable() {
  let noteFreq = [];
  for (let i=0; i< 9; i++) {
    noteFreq[i] = [];
  }


  noteFreq[4]["C"] = 261.625565300598634;
  noteFreq[4]["C#"] = 277.182630976872096;
  noteFreq[4]["D"] = 293.664767917407560;
  noteFreq[4]["D#"] = 311.126983722080910;
  noteFreq[4]["E"] = 329.627556912869929;
  noteFreq[4]["F"] = 349.228231433003884;
  noteFreq[4]["F#"] = 369.994422711634398;
  noteFreq[4]["G"] = 391.995435981749294;
  noteFreq[4]["G#"] = 415.304697579945138;
  noteFreq[4]["A"] = 440.000000000000000;
  noteFreq[4]["A#"] = 466.163761518089916;
  noteFreq[4]["B"] = 493.883301256124111;

  return noteFreq;
}
if (!Object.entries) {
    Object.entries = function entries(O) {
        return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
    };
}
function setup() {
  noteFreq = createNoteTable();
 
  //volumeControl.addEventListener("change", changeVolume, false);
 
  masterGainNode = audioContext.createGain();
  masterGainNode.connect(audioContext.destination);
  //masterGainNode.gain.value = volumeControl.value;
 
  // Create the keys; skip any that are sharp or flat; for
  // our purposes we don't need them. Each octave is inserted
  // into a <div> of class "octave".
 
  noteFreq.forEach(function(keys, idx) {
    let keyList = Object.entries(keys);
    let octaveElem = document.createElement("div");
    octaveElem.className = "octave";
    
    keyList.forEach(function(key) {
    	var cIonian = 
      	key[0]=="C" || 
      	key[0]=="D" ||
      	key[0]=="E" ||
      	key[0]=="F" ||
      	key[0]=="G"	||
      	key[0]=="A"	||
      	key[0]=="B" 

      if (
      	cIonian
      	){
        octaveElem.appendChild(createKey(key[0], idx, key[1]));
      }
    });




    keyboard.appendChild(octaveElem);
  });

  document.querySelector("div[data-note='B'][data-octave='5']").scrollIntoView(false);
 
  sineTerms = new Float32Array([0, 0, 1, 0, 1]);
  cosineTerms = new Float32Array(sineTerms.length);
  customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);
 
  for (i=0; i<9; i++) {
      oscList[i] = [];
  }
}

setup();function createKey(note, octave, freq) {
  let keyElement = document.createElement("div");
  let labelElement = document.createElement("div");
 
  keyElement.className = "key";
  keyElement.dataset["octave"] = octave;
  keyElement.dataset["note"] = note;
  keyElement.dataset["frequency"] = freq;
 
  labelElement.innerHTML = note + "<sub>" + octave + "</sub>";
  keyElement.appendChild(labelElement);

  keyElement.addEventListener("mousedown", notePressed, false);
  keyElement.addEventListener("mouseup", noteReleased, false);
  keyElement.addEventListener("mouseover", notePressed, false);
  keyElement.addEventListener("mouseleave", noteReleased, false);

  return keyElement;
}
function playTone(freq) {
  let osc = audioContext.createOscillator();
  osc.connect(masterGainNode);
 
  let type = wavePicker.options[wavePicker.selectedIndex].value;
 
  if (type == "custom") {
    osc.setPeriodicWave(customWaveform);
  } else {
    osc.type = type;
  }

  osc.frequency.value = freq;
  osc.start();
 
  return osc;
}
function notePressed(event) {
  if (event.buttons & 1) {
    let dataset = event.target.dataset;

    if (!dataset["pressed"]) {
      oscList[dataset["octave"][dataset["note"]]] = playTone(dataset["frequency"]);
      dataset["pressed"] = "yes";
    }
  }
}
function noteReleased(event) {
  let dataset = event.target.dataset;

  if (dataset && dataset["pressed"]) {
    oscList[dataset["octave"][dataset["note"]]].stop();
    oscList[dataset["octave"][dataset["note"]]] = null;
    delete dataset["pressed"];
  }
}
function changeVolume(event) {
  masterGainNode.gain.value = volumeControl.value
}

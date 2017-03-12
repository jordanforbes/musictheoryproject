var notes= ["c", "cs", "d", "ds", "e", "f", "fs", "g", "gs", "a", "as", "b"]


//scale list 
var scale= [ [0,2,4,5,7,9,11,"ionian"],[0,2,3,5,7,9,10,"dorian"],[0,1,3,5,7,8,10,"phrygian"],
            [0,2,4,6,7,9,11,"lydian"],[0,2,4,5,7,9,10,"mixolydian"],[0,2,3,5,7,9,10,"aeolian"],[0,1,3,5,6,8,10,"locrian"] ]

var ionian= scale[0];
var dorian= scale[1];
var phrygian= scale[2];
var lydian= scale[3];
var mixolydian= scale[4];
var aeolian= scale[5];
var locrian= scale[6];

function getNoteList(n,c){

	x = notes.indexOf(n)
	y = notes.indexOf(c)
	console.log(x)
	console.log(y)

	for(i=0;i<7;i++){
		var mode = scale[i]
		var scaleArr=[]
		var modeArr=[]

		mode.forEach(function(element) {

	    element=element + x;

	    if(element<12){
	    scaleArr.push(element); 
	    element=element - x

	  	}else if(element>=12){
	    element=element-12;
	    scaleArr.push(element);
	    element=element+x+12
		}
		
		
		if(mode.indexOf(y)>=0){
			modeArr.push(mode[7])
		}
		
	})
scaleArr.push(scale[i][7])
console.log(scaleArr)

console.log(modeArr)
}
}

getNoteList("e","d")



function modeFind(n){
	modeArr=[]
	ni= notes.indexOf(n)
	console.log(ni)
	
	//mode cycler
	for(i=0;i<7;i++){
		mi = scale[i].indexOf(ni)
		console.log(mi)

		if(mi>=0){
			console.log(true)
			modeArr.push("C " + scale[i][7])
		}else{
			console.log(false)
		}
	}
	console.log(modeArr)
}


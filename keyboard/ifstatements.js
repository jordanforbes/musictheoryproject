function ScaleReader(k,i,arr,stArr){
	l=scale[k].length-1 //this is so that scales with more or less than 7 notes get labelled with their names.
	if(arr.length==1){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0){
			$(".vomit").append("<br><strong>"+scale[k][l]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")	
		}
	}else if(arr.length==2){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0
		){
			$(".vomit").append("<br><strong>"+scale[k][l]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==3){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0
		){
			$(".vomit").append("<br><strong>"+scale[k][l]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==4){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 
		){
			$(".vomit").append("<br><strong>"+scale[k][l]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==5){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[4]])>=0 
		){
			$(".vomit").append("<br><strong>"+scale[k][l]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==6){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[4]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[5]])>=0 
		){
			$(".vomit").append("<br><strong>"+scale[k][l]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==7){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[4]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[5]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[6]])>=0
		){
			$(".vomit").append("<br><strong>"+scale[k][l]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}
}

function ChordReader(y,rootNote,chordObj,thisArr){
	if(y.length==1){
		if(thisArr.indexOf(y[0])>=0){
				$(".chordvomit").append("<p>"+rootNote+" "+ chordObj[j].name +" "+ thisArr+"</p>")
		}
	}else if(y.length==2){
		if(thisArr.indexOf(y[0])>=0 &&
			thisArr.indexOf(y[1])>=0){
				$(".chordvomit").append("<p>"+rootNote+" "+ chordObj[j].name +" "+ thisArr+"</p>")
		}
	}else if(y.length==3){
		if(thisArr.indexOf(y[0])>=0 &&
			thisArr.indexOf(y[1])>=0 &&
			thisArr.indexOf(y[2])>=0){
				$(".chordvomit").append("<p>"+rootNote+" "+ chordObj[j].name +" "+ thisArr+"</p>")
		}
	}else if(y.length==3){
		if(thisArr.indexOf(y[0])>=0 &&
			thisArr.indexOf(y[1])>=0 &&
			thisArr.indexOf(y[2])>=0 &&
			thisArr.indexOf(y[3])>=0){
				$(".chordvomit").append("<p>"+rootNote+" "+ chordObj[j].name +" "+ thisArr+"</p>")
		}
	}
}
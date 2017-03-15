function ScaleReader(k,i,arr,stArr){
	if(arr.length==1){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0){
			$(".vomit").append("<br><strong>"+scale[k][7]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")	
		}
	}else if(arr.length==2){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0
		){
			$(".vomit").append("<br><strong>"+scale[k][7]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==3){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0
		){
			$(".vomit").append("<br><strong>"+scale[k][7]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==4){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 
		){
			$(".vomit").append("<br><strong>"+scale[k][7]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==5){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[4]])>=0 
		){
			$(".vomit").append("<br><strong>"+scale[k][7]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==6){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[4]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[5]])>=0 
		){
			$(".vomit").append("<br><strong>"+scale[k][7]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}else if(arr.length==7){
		if(noteFinder(notes[i],scale[k]).indexOf(notes[stArr[0]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[1]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[2]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[3]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[4]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[5]])>=0 &&
			noteFinder(notes[i],scale[k]).indexOf(notes[stArr[5]])>=0
		){
			$(".vomit").append("<br><strong>"+scale[k][7]+":</strong> ["+noteFinder(notes[i],scale[k])+"] ")
		}
	}
}
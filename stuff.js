function reStart(){
 alert("taking a break?"); setup();
}

function length1(){
 val1=document.getElementById("ran1").valueAsNumber;
}

function length2(){
 val2=document.getElementById("ran2").valueAsNumber;
}

function length3(){
 val3=document.getElementById("ran3").valueAsNumber;
}

function weigths(){
  let str=document.getElementById("inp1").value;
  let strAr=[];
  strAr=str.split(',');
  w1a=strAr[0];w2a=strAr[1];w3a=strAr[2];
  
}

function intro(){
	document.getElementById("par2").innerHTML=strintro;
	
}
let strintro="this is a test";
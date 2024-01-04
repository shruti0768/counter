let count=0

document.getElementById('decrease').onclick=function(){
    
 count-=1
 document.getElementById('countlabel').innerHTML=count;
 if(count<0){
 document.body.style.backgroundColor="lightblue" 
 }
}

document.getElementById('reset').onclick=function(){
    
    count=0
    document.getElementById('countlabel').innerHTML=count;  
    document.body.style.backgroundColor="gray" 
}

document.getElementById('increase').onclick=function(){
    
    count+=1
    document.getElementById('countlabel').innerHTML=count;
    if(count>0){
    document.body.style.backgroundColor="lightgreen" 
    }
}
let num=12345678

let n1= 5;

 while(n1<10){
    console.log(n1);
    n1++;
 }
 console.log(n1);

 for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    if(i%2!=0){
        console.log(i);
    }
 }
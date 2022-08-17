const form = document.getElementById("submit");
const message = document.getElementById("message");
submit.addEventListener ("submit", (e) => {
    event.preventDefault();
    let input1 = document.getElementById("width").value;
    let input2  = document.getElementById("height").value;
    console.log(input1);
    console.log(input2);

    message.innerHTML = `la superficie est ${input1 * input2}`;})

    let result=null;
    console.log(result);
    result=2;
    console.log(result);
    result='vera';
    console.log(result);


 var parent=document.querySelector('#parent');
 var enfant=document.querySelector('#enfant');
 window.addEventListener('click', function (a) {
 if (parent.contains(a.target)){
    console.log('click parent');
 }else{
    console.log('je suis de endeur');
 } 
 });
 window.addEventListener('mousemove', function (p){
   let y = '';
   let x = '';
     y = p.clientY
     x = p.clientX
    console.log(`Y :${y}.`)
    console.log(`X : ${x}.`)
 })
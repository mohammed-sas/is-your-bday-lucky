const dob = document.querySelector("#date-of-birth");
const luckyNum = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-button");
const para = document.querySelector("#paragraph-result");

para.style.display="none";
checkBtn.addEventListener("click",function(){
    let dobValue = parseInt(dob.value.replaceAll("-",""));
    if(luckyNum.value <0){
        alert('Enter lucky number 0 or greater than 0');
        return
    }
    checkBirthdateIsLucky(dobValue,luckyNum.value);
    
});

function checkBirthdateIsLucky(dbValue,luckyValue){

    let sum = 0;
    while(dbValue > 0){
        sum = sum + (dbValue%10);
        dbValue = Math.trunc(dbValue/10);
    }
    if(sum%luckyValue ===0){
        para.style.display="block";
        para.innerText ="You are a lucky person 😍!!!";
    }else{
        para.style.display="block";
        para.innerText= luckyValue+" is not that lucky for you 😐 ";
    }
}
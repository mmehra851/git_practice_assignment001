let num = 12121

let StrVal = num.toString();
    let RevVal = num.toString().split("").reverse().join("");
    
    if (StrVal == RevVal){
        console.log("Yes");
    }else {
        console.log("No");
    }
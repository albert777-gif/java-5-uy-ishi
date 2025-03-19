
let name = prompt("Ismingizni kiriting:");



let harf = prompt("Bironta harf kiriting:");


if(name.toLowerCase().includes(harf.toLowerCase())){
    alert(`Siz kiritgan ${harf} ${name} ismida bor`)
}
else{
    alert(`Siz kiritgan ${harf} ${name} ismida mavjud emas`)
}




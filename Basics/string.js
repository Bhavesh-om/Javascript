const name = "om";
const gamename = new String("Bhavesh1128e");
console.log(gamename);
console.log(name)

const score = 96
// console.log(name + score + gamename+ "is status");
// another way
console.log(`Hello my name is ${name} and my status id playerID ${gamename} has score ${score}`);

// string properties and function
console.log(gamename.length);
console.log(gamename.toUpperCase())
console.log(gamename.toLocaleLowerCase())
console.log(gamename.charAt(3))
console.log(gamename.indexOf("e"))

const newStr0 = gamename.substring(0,5)
console.log(newStr0)
const newStr1 = gamename.slice(-3)
console.log(newStr1)
const newSter3 = new String("   Digvijay   ")
console.log(newSter3)
console.log(newSter3.trim())

const url = "https://git$$$.com/Bhavesh-om"
console.log(url.replace('$$$','hub'))
//lyy ur..include('  ') and gamename.split('-')


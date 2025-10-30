// datatypes are generally of two types
// premetive and non premetive 
// premetive: not mutable
// number, boolean, bigint, string, undefined , null , symbole
// non premetive: reference type or mutable
// objects,arrays

///******** ///

// Stack {primitive} and , Heap {Non-premetive}

let myID = "Bhavesh123"

let anotherID = myID
anotherID = "om123"
console.log(myID);
console.log(anotherID);
// o/p shows that myId do not change while changing directly anotherID
// premetive or non mutable

let userOne = {
    email: "userone@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email= "om@gmail.com"

console.log(userOne)
console.log(userTwo)

//in both value updaated  due to reference method 
//mutable
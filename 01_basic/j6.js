// memory Stack(Primitive) value ni copy made che and =>Heap(Non-Primitive) memory value ni  Refarans value made che

let manav="manavsatvara"

let vivek=manav;

vivek= "viveksathavar";

console.log("manavsatvara");
console.log("viveksathavar");

//Heap(Non-primitive)

let userOne = {
    email: "manav@satavra.com",
    upi: "user@bl"
}

let usertwo= userOne

usertwo.email="vivek@sathavra.com"

console.log(userOne.email);
console.log(usertwo.email);

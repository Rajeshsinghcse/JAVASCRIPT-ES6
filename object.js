// objects
var mcars ={
  "pi":"350kmph",
  "gallardo": "320kmph",
  "vejron" : "409kmph",
  "agera" : "429kmph"
}
console.log(mcars)
console.log(typeof(mcars))

var magera ={
  name : "agera",
  manufacturer : {
    name: "koenins",
    location : "sweden"
  },
  topspeed : 429 ,
  color : "black",
  spoilers : false,
  applybrakes : function() {
    settimeout  ( function (){
      console.log('car stopped');
    },5000)
  }
}

console.log(magera.name)
console.log(magera.topspeed)
console.log(magera.manufacturer)
console.log(magera.manufacturer.name)
console.log(magera.applybrakes())
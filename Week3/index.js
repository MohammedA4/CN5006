function StudentInfo(name, studentNumber){
    console.log("Old Function Style")
    console.log("Name:", name, "Student Number", studentNumber);
}

function StudentInfo1(name, studentNumber) {
    console.log("New function style -> arrow function");
    console.log("Name:", name, "Student Number", studentNumber);
}

let randomName = "Mo"
let studentNumber = 2397134

randomName = "Ant"
studentNumber = 2369134

StudentInfo("Mo", 2397134)

StudentInfo1(randomName, studentNumber)

//Learning to use Modules

const studentRecords = require("./studentInfo")

console.log(studentRecords.getName())
console.log(studentRecords.Location())
console.log(studentRecords.db)
console.log(studentRecords.grades(40))

const person = require("./person")

const personOne = new person("Mo", 20, "mo@gmail.com")

console.log(personOne.getPersonInfo())

os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
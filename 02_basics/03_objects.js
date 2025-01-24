// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Vaibhav",
    "full name": "Vaibhav Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "vaibhav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//  console.log(JsUser.email)
//  console.log(JsUser["email"]) 
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])



 JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)  helps in prevention of any further changes in object
 JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser["email"]);

JsUser.greeting = function(){
   console.log("Hello JS user");
 }
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
 }
 console.log(JsUser.greeting());
   console.log(JsUser.greetingTwo());
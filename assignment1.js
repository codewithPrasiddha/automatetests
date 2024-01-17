/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Prasiddha Thapaliya Student ID:121569230  Date:16th Jan, 2023
*
********************************************************************************/ 
//arrays for specific verbs and path with respective reponses
let serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
let serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
let serverResponses = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Prasiddha Thapaliya", "Prasiddha Thapaliya: pthapaliya@myseneca.ca", "User Logged In", "Main Panel", "Logout Complete"];
//arrays with testverbs and testpaths to randomly test the function
let testVerbs = ["GET", "POST"];
let testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];
//function to get random values
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
//function with for if loop to return httprequest responses as valid or not
function httpRequest(httpVerb, path){
    for(let i=0; i<serverPaths.length; i++){
        if(serverVerbs[i]=== httpVerb && serverPaths[i]=== path){
            return '200:' + serverResponses[i];
        }
    }
    return '400: Unable to process' + httpVerb + ' request for ' + path;
}
//testing "httpRequest" Function individually
// console.log(httpRequest("GET", "/")); 
// console.log(httpRequest("GET", "/about")); 
// console.log(httpRequest("GET", "/contact"));
// console.log(httpRequest("POST", "/login")); 
// console.log(httpRequest("GET", "/panel"));
// console.log(httpRequest("POST", "/logout")); 
// console.log(httpRequest("POST", "/logot")); 

//function to use randomverbs and randompaths with httpRequest function
function randomRequest() {
    let randVerb = getRandomInt(testVerbs.length);
    let randPath = getRandomInt(testPaths.length);
    let result = httpRequest(testVerbs[randVerb], testPaths[randPath]);
    console.log(result);
}
//function to test with data in 1 second interval
function automateTests(){
    setInterval(randomRequest, 1000);
}
//invoking the final function which has no loop end
automateTests();
// Getting input via STDIN
const  readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here{
let resume={
     
    "personal details": {
    "name": "MOHAMED SALAHUDEEN J",
    "age" : "26",
    "email": "writetosala10@gmail.com",
    "phone": "9659339624",
    "date of birth" : "1995-10-04",
    "nationality" : "Indian",
    "degree": "B.E - Mechanical Engineering"
    },
    
    "location": {
    "address": "1/3006-1,nehru nagar 6th street",
    "city": "Ramanathapuram",
    "postalCode": "623503",
    "state" : "tamilnadu",
    "country" : "india",
    },
   
  
  "experience":
    {
      "company"         : "Tech and Mech, Engineers and Erectors",
      "working station" : "Valuthur Gas Turbine Power Station,Ramanathapuram",
      "position"        : "Mechanical Maintenance Engineer",
      "capacity"        :   " 92.2 MW * 2  (58.5 + 33.7)",
      "company make"    :  [  "GTG - ANSALDO ENERGIA",        
                             "STG - QINGDO JIENENG STEAM TURBINE"],
      "startDate"       : "2018-9-14",
      "endDate"         : "till date",
      "summary": "A one-sentence to one-paragraph summary of this employer or position"
    },
 
  
  "education": [ {
     "education 1" :
    {
      "institution": "Syed Ammal Higher Secondary School",
      "area": "Ramanathapuram",
      "studyType" : "SSLC",
      "startDate": "2010-06-01",
      "endDate": "2011-04-25",
      "percentage": "79.2"
    },
    "education 2" :
    {
      "institution": "Syed Ammal Higher Secondary School",
      "area": "Ramanathapuram",
      "studyType" : "HSC",
      "startDate": "2012-06-01",
      "endDate": "2013-04-25",
      "percentage": "77.75"
    },
   "education 3" :
    {
      "institution": "Jansons Institute of Technology",
      "area": "coimbatore",
      "studyType" : "Bachelors in Engineering",
      "startDate": "2013-08-01",
      "endDate": "2017-05-25",
      "cgpa": "64.48"
    }
  }
  ],
 
  "languages": [
    {
      "language": "Tamil,English",
      "fluency": "fluency in speak,read and write"
    }
  ],
  "interests": [
    {
      "interest 1": "sports",
      "interested sports": ["hockey,cricket"]
    }
]
};

   for(let key in resume){
  console.log(key,resume[key]) 
 }
    
 });
 



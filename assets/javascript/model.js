 // This is where all the data and global variables will 
 // live for the project

 // Initialize Firebase
var config = {
apiKey: "AIzaSyApIvO1MNIvE_WNeyS7jFrDHuI4BQ56rFE",
authDomain: "train-scheduler-f365b.firebaseapp.com",
databaseURL: "https://train-scheduler-f365b.firebaseio.com",
projectId: "train-scheduler-f365b",
storageBucket: "",
messagingSenderId: "471705960814"
};
firebase.initializeApp(config);

var database = firebase.database();

// Form Variables to be passed between objects
var trainNumber;
var trainLine;
var trainDestination;
var trainDeparture;
var trainFrequency;
var trainPlatform;


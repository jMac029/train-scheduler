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
var trainTiming = 20;
var trainPlatform;

// model object with functions for pulling/pushing new data to the database

var model = {

	pushNewTrain: () => {


		database.ref().push({

			trainDeparture: trainDeparture,
		    trainDestination: trainDestination,
		    trainFrequency: trainFrequency,
		    trainLine: trainLine,
		    trainNumber: trainNumber,
		    trainPlatform: trainPlatform

		});

	},

	pullDatabase: () => {

		database.ref().on("value", function(snapshot) {

			var trains = snapshot.val();

			console.log(trains);

			for (var index in trains){
				trainNumber = trains[index].trainNumber
				trainLine = trains[index].trainLine
				trainDestination = trains[index].trainDestination
				trainDeparture = trains[index].trainDeparture
				trainFrequency = trains[index].trainFrequency
				trainPlatform = trains[index].trainPlatform

				console.log(trainNumber, trainLine, trainDestination, trainDeparture, trainFrequency, trainPlatform)
				view.updateTrainScheduleTable();
			};
			// view.updateTrainScheduleTable();

		}, function(errorObject) {
      		console.log("Errors handled: " + errorObject.code);

		});
	}

}


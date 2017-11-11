 // This is where all the javascript will
 // live for the project that connects the view and model

// controller object
 let controller = {

 	// capture all the fields in the form area
 	captureFormFields: () => {
 		$('body').on("click", ".button-add", () => {
 			// prevent form from submitting
      		event.preventDefault();

      		// variables from the form field values
 			trainNumber = $('#train-number').val().trim();
 			trainLine = $('#train-line').val().trim();
 			trainDestination = $('#train-destination').val().trim();
 			trainDeparture = $('#train-departure').val().trim();
 			trainFrequency = $('#train-frequency').val().trim();
 			trainPlatform = $('#train-platform').val().trim();

 			// console log all the entries for testing
 			console.log(trainNumber)
 			console.log(trainLine)
 			console.log(trainDestination)
 			console.log(trainDeparture)
 			console.log(trainFrequency)
 			console.log(trainPlatform)

 			// clear all the fields in the form
 			$('.form-control').val("");

 			view.updateTrainScheduleTable();

 		});
 	}
 };
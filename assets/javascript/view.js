 // This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

 // On Page Load
$(document).ready(function(){

	controller.captureFormFields();
	model.initialDatabasePull();

});

// view object
var view = {

	// function to update the Train Schedule Table

	updateTrainScheduleTable: () => {

		$('#train-schedule-body').append(
			'<tr>'+
				'<th scope="row">' + trainNumber + '</th>' +
				'<td>' + trainLine + '</td>' +
				'<td>' + trainDestination + '</td>' +
				'<td>' + trainDeparture + '</td>' +
				'<td>' + trainFrequency + '</td>' +
				'<td>' + trainTiming + '</td>' +
				'<td>' + trainPlatform + '</td>' +
			'</tr>'
			);
	}
};

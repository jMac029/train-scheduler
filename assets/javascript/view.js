 // This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

 // On Page Load
$(document).ready(function(){

	controller.captureFormFields();
	model.initialDatabasePull();
	setInterval(function() {model.initialDatabasePull()}, 60000);
	view.updateCurrentTime();
	setInterval(function() {view.updateCurrentTime()}, 1000);

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
				'<td>' + nextTrain + '</td>' +
				'<td>' + minutesAway + '</td>' +
				'<td>' + moment().startOf('day').add(trainFrequency, 'minutes').format('HH:mm') + '</td>' +
				'<td>' + trainPlatform + '</td>' +
			'</tr>'
			);
	},
	updateCurrentTime: () => {
		$('.currentTime').text(moment().format('h:mm:ss A'))
	}
};

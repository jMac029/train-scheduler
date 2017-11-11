 // This is where most of the JS & jQuery will live
 // for the project that will manipulate our webpage

 // On Page Load
$(document).ready(function(){

	controller.captureFormFields();

});

// view object
var view = {

	// function to update the Train Schedule Table

	updateTrainScheduleTable: () => {

		// var trainScheduleBody = $('.train-schedule-body');
		// var tableRow = $('<tr>');
		// var tableRowHead = $('<th>').attr('scope', 'row');
		// var tableData = $('<td>');

		$('#train-schedule-body').append(
			'<tr>'+
				'<th scope="row">' + trainNumber + '</th>' +
				'<td>' + trainLine + '</td>' +
				'<td>' + trainDestination + '</td>' +
				'<td>' + trainDeparture + '</td>' +
				'<td>' + trainFrequency + '</td>' +
				'<td>20</td>' +
				'<td>' + trainPlatform + '</td>' +
			'</tr>'
			);

		// tableRowHead.text(trainNumber);
		


		// tableRow.append(tableRowHead)
		// 		.append(tableData).text(trainLine)
		// 		.append(tableData).text(trainDestination)
		// 		.append(tableData).text(trainDeparture)
		// 		.append(tableData).text(trainFrequency)
		// 		.append(tableData).text(trainPlatform);
		// // tableRow.append(tableData).text(trainLine);
		// // tableRow.append(tableData).text(trainLine);
		// // tableRow.append(tableData).text(trainDestination);
		// // tableRow.append(tableData).text(trainDeparture);
		// // tableRow.append(tableData).text(trainFrequency);
		// // tableRow.append(tableData).text(trainPlatform);
		
		// trainScheduleBody.append(tableRow)

	}
};

function doGet(e) {
  console.log(e)
  return HtmlService.createHtmlOutputFromFile('Tracker');
}

function processForm(formObject){
  var url= "https://docs.google.com/spreadsheets/d/1r1n5u4XfqwWmrbjjAUtkg7rJew3AvgkIvpr6Azj539A/edit?usp=sharing";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws= ss.getSheetByName("MAIN");
  var date=  Utilities.formatDate(new Date(), "GMT+1", "MM/dd/yyyy");

  ws.appendRow([date,
    formObject.employee,
    formObject.location,
    formObject.position,
    formObject.shift,
    formObject.working1,
    formObject.taskdescribe1,
    formObject.taskdescribe2,
  ]);
}


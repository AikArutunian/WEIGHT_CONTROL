// Load the Visualization API and the piechart package.
google.load('visualization', '1', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(function () {
    drawChart()
});


var mainArray = [
    ['date', 'Айк'],
    ["27/04", 65.1],
    ["20/05", 65.2],
    ["4/5", 65.2],
    ["11/5", 66.0],
    ["18/5", 67.0],
    ["25/5", 68.5],
    ["1/6", 68.7],
    ["7/6", 68.4],
    ["15/6", 68.2],
    ["23/6", 68.2],
    ["29/6", 67.6],
    ["13/7", 67.6],
    ["20/7", 67.7],
    ["27/7", 67.0],
    ["3/8", 66.7],
    ["17/8", 66.0],
    ["25/8", 66.3],
    ["31/8", 66.8],
    ["7/9", 66.9],
    ["14/9", 66.6],
    ["21/9", 67.2],
    ["29/9", 66.7],
    ["9/11", 65.9]
];

var dateArray;


function drawChart() {
    var data = google.visualization.arrayToDataTable(mainArray);

    var options = {
        title: 'СЛЕДИМ ЗА ВЕСОМ'
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

    chart.draw(data, options)
}


$('#addButton').on('click', function () {
    if($('#inputDate').val() != ''){
        var todayDate = $('#inputDate').val();
        var todayWeight = $('#inputWeight').val();
        mainArray.push([todayDate, todayWeight]);
        drawChart();
        $('#inputDate').val('');
        $('#inputWeight').val('');
    }


});

function findDate(a, b) {
    for (i = 0; i < mainArray.length; i++) {
        if (mainArray[i].indexOf(a) >= 0) {
            var startDate = i
            console.log(mainArray[i]);
        }
        if (mainArray[i].indexOf(b) >= 0) {
            console.log(mainArray[i]);
            var endDate = i
        }
    }
    dateArray = mainArray.slice(startDate, endDate)
    console.log(dateArray);
}

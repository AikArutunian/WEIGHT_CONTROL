// Load the Visualization API and the piechart package.
google.load('visualization', '1', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(function () {
    drawChart(mainArray)
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
    ["9/11", 65.9],
    ["16/11", 66.3],
    ["23/11", 66.7]
];


function drawChart(array) {
    var data = google.visualization.arrayToDataTable(array);
    var options = {
        title: 'СЛЕДИМ ЗА ВЕСОМ'
    };
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options)
}


$('#addButton').on('click', function () {
    if ($('#inputDate').val() != '') {
        var todayDate = $('#inputDate').val();
        var todayWeight = $('#inputWeight').val();
        mainArray.push([todayDate, todayWeight]);
        drawChart(mainArray);
        $('#inputDate').val('');
        $('#inputWeight').val('');

    }

});

$('#showStats').on('click', function () {
    if ($('#startDate').val() != '') {
        var startDate = $('#startDate').val();
        var endDate = $('#endDate').val();
        var newArr = getPeriod(startDate, endDate);
        newArr.unshift(['date', 'Айк']);
        console.log(newArr);
        drawChart(newArr);
        $('#startDate').val('');
        $('#endDate').val('');
    }

});


function getPeriod(periodStart, periodEnd) {
    for (var i = 0; i < mainArray.length; i++) {
        if (mainArray[i][0].indexOf(periodStart) >= 0) {
            var startCount = i;
            console.log(mainArray[i], i)
        }
        if (mainArray[i][0].indexOf(periodEnd) >= 0) {
            var endCount = i;
            console.log(mainArray[i], i)
        }
    }
    var periodArr = mainArray.slice(startCount, endCount+1);
    console.log(periodArr);
    return periodArr;

}


//======УДАЛИТЬ ИЗМЕРЕНИЕ!===================

$('#deleteLast').on('click', function () {
    drawChart()
    periodArr = mainArray.splice(mainArray.length - 1);
    //alert(periodArr);
    drawChart()

});


//================кличество измерений
//
var myCount = mainArray.length;
$("<p>Сделано</p>" + mainArray.length + "<p> измерений</p>").appendTo('#counter');


//================
//================
//================


//
//var count = 0;
//while(count<100) {
//    var num = prompt("введите число");
//    num=num.charAt(num.length-1);
//    var ending = "измерен";
//    switch (num) {
//        case "1":
//            ending += "ие";
//            break;
//        case "2":
//            ending += "ия";
//            break;
//        case "3":
//            ending += "ия";
//            break;
//        case "4":
//            ending += "ия";
//            break;
//        default:
//            ending += "ий";
//            break;
//    };
//
//    if(num.charAt(num.length-1))==("1" || "2" || "3" || "4" && num.charAt(num.length-2)=="1" || "2" || "3" || "4")
//    {
//        var ending += "ий";
//    }
//    count++;
//    alert(ending);
//}

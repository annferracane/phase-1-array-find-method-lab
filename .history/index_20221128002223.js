// code your solution here

function superbowlWin(records) {
    let winYear;
    records.find(function (record) {
        if (record.result == "W"){
            console.log(record.year);
            winYear = record.year;
            break;
        }
    });

    return winYear;
}

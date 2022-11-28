// code your solution here

function superbowlWin(records) {
    records.find(function (record) {
        console.log
        if (record.result === "W"){
            return record.year;
        }
    });
}

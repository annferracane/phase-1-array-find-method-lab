// code your solution here

function superbowlWin(records) {
    records.find(function (record) {
        if (record.result === "W"){
            console.log(record.result);
            return record.year;
        }
    });
}

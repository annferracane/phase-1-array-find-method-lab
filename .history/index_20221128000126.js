// code your solution here

function superbowlWin(records) {
    records.find(function (record) {
        console.log(record.result)
        if (record.result === "W"){
            return record.year;
        }
    });
}

// code your solution here

const test = function superbowlWin(records) {
    records.find(function (record) {
        if (record.result === "W"){
            console.log(record.year);
            return record.year;
        }
    });
}


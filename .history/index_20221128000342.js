// code your solution here

const function superbowlWin(records) {
    records.find(function (record) {
        if (record.result === "W"){
            console.log(record.year);
            return record.year;
        }
    });
}

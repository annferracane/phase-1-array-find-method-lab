// code your solution here

function superbowlWin(records) {
    let year 
    records.find(function (record) {
        if (record.result === "W"){
            console.log(record.year);
            return record.year;
        }
    });
}

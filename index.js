function superbowlWin(record){
    let team = record.find(function(element){
    return element.result === "W"
    })
    if (team) {
        return team.year
    }
    else {
        return undefined
    }
}

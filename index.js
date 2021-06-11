// Code your solution here

const { match } = require("sinon")

function findMatching(drivers, string){
    return drivers.filter( search => 
        search.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( search => 
        search.toLowerCase().indexOf(string.toLowerCase()) === 0
        )


}




function matchName(drivers, string) {
    return drivers.filter( record => record.name === string )
}
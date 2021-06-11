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






// function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
//         )
// }

// function matchName(source, soughtName) {
//     return source.filter( record => record.name === soughtName )
// }
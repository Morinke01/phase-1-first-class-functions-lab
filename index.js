//Declaring a variable and returning the first two variables in a new array
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function () {

    let copyDrivers = [...drivers]
    let newDrivers = copyDrivers.splice(0, 2);
    return (newDrivers);
}
returnFirstTwoDrivers();

//Declaring a variable and returning the last two elements
const returnLastTwoDrivers = function () {

    let copyDrivers = [...drivers]
    let newDrivers = copyDrivers.slice(2);
    return (newDrivers);
}
returnLastTwoDrivers();

//Allowing either functions to be invoked from the array
const selectingDrivers = function () {
    selectingDrivers[0] = returnFirstTwoDrivers;
    selectingDrivers[1] = returnLastTwoDrivers;
    return selectingDrivers[0, 1];
}
selectingDrivers();

//Returning a function multiplier
const createFareMultiplier = function (a) {
    const fareMultiplier = function () {
        return a*5;
    }
    return fareMultiplier;
}
createFareMultiplier();

const fareDoubler = function(b){
    return b*2;

}
fareDoubler();

const fareTripler = function(c){
    return c*3;

}
fareTripler();

const selectDifferentDrivers = function(array,f){
    return f(array);
}
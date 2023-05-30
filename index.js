// Write your solution in this file!
const employee = {
    name: "Sam", 
    streetAdress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    const newObj = { ...employee};
    newObj[name] = streetAddress;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newObj = { ...employee};
    delete newObj[key];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
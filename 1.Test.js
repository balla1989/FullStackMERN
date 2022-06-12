
// #region REf0
function helloInNepali(name){
    //thi is a function scope
    var greeting ="Namaste ";
    return(greeting+name);
}
console.log('Ref 0');
console.log(helloInNepali('suman'));
// #endregion




// #region Ref1
    // Var has scope creep: Ref 1
    for(var i = 0;i<10;i++){
        //loop
    };
    console.log('Ref 1');
    console.log(i);
// #endregion


// #region Ref2
// Let limits the scope creep: Ref 2
for(let i = 0;i<10;i++){
    //loop
};
console.log('Ref 2');
console.log(i);
//#endregion





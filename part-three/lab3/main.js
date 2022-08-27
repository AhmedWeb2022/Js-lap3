/**
 * In this functino the inner function can read and print the variable that was diclared in the outer function
 * that means the the inner function can access to the outer function scope but not the oposite
 *  the outer function can;t access the inner function scope
 * that calle lexical
 */
function lStrr() {
  let name = "ahmed";
  function lDisplayName() {
    console.log(name);
    // let iName = "mohammed";
  }
  // console.log(iName);
  lDisplayName();
}
lStrr();
/**
 *  this example do the same as the first one but the differnce here is innerfunction is returned from the outer function
 * before being execute
 * so here is a combination of a function and the lexical environmen
 * that called closure
 */
function cStrr() {
  let cName = "Mohammed";
  function cDisplayName() {
    console.log(cName);
  }
  return cDisplayName;
}
let refFun = cStrr();
refFun();

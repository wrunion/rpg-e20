export class Gameboard {
 constructor() {
  this.redSquare = [1,4,8,12,15,20,23,25,29,35];
  this.greenSquare = [2,3,6,9,10,14,17,21,26,30,31];
  this.specialEventSquares = [5,7,10,16,25,32];
 }
 rollDice() {
  return(Math.floor(Math.random()*6+1));
 }

 isRedSquare(square) {
  return this.redSquare.includes(square); 
 }
 isGreenSquare(square) {
  return this.greenSquare.includes(square);
 }

 isSpecialEventSquare(square) {
  return this.specialEventSquares.includes(square);
 }

}
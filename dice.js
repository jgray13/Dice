function rollTheDice(){
  highest_number = 6;
  lowest_number = 1;
  dice1 = Math.floor((Math.random()*highest_number)+lowest_number);   
  dice2 = Math.floor((Math.random()*highest_number)+lowest_number);   
  document.getElementById('output').innerHTML = 'Dice 1: ' + dice1 + '<br>Dice 2: ' + dice2;   
  document.getElementById('totalRoll').innerHTML = 'Total: '+(dice1+dice2);
}



/*


Math.floor((Math.random()*highest_number)+lowest_number)

above code processed in this order:

1   Math.random() * highest_number
2   Add lowest number
3   Round down ( with Math.floor ) the result of steps 1 and 2
4   Assign the rounded value to dice1


*/
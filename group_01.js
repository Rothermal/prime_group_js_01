var bonus =[];
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var zero =["zero",'1333','20000.44',3];
var employees = [atticus, jem, boo, scout,zero];

var stiBonus=function(x){
  for(var i = 0; i<x.length; i++){
    var array =[];
    
      if (x[i][3]==3){
          array.push(x[i][0]);
        if (x[i][1].length ==4){
          array.push("9 percent");
          array.push(Math.round(1.09 *x[i][2]));        
          array.push(Math.round(.09 *x[i][2])); 
        } else if (x[i][2] * 1.04 > 65000){
          array.push("3 percent");
          array.push(Math.round(1.03 *x[i][2]));     
          array.push(Math.round(.03 *x[i][2])); 
        } else {
          array.push("4 percent");
          array.push(Math.round(1.04 * x[i][2]));
          array.push(Math.round(0.04 * x[i][2]));  
        }
        bonus.push(array); 

        //calculates income and bonus, if employee rating is 3

      } else if(x[i][3]==4){
        array.push(x[i][0]);
        if (x[i][1].length ==4){
          array.push("11 percent");
          array.push(Math.round(1.11 *x[i][2]));      
          array.push(Math.round(.11 *x[i][2])); 
        } else if (x[i][2] * 1.06 > 65000){
          array.push("5 percent");
          array.push(Math.round(1.05 *x[i][2]));     
          array.push(Math.round(.05 *x[i][2])); 
        } else {
          array.push("6 percent");
          array.push(Math.round(1.06 * x[i][2]));
          array.push(Math.round(0.06 * x[i][2]));
        }
        bonus.push(array);
      } else if(x[i][3]==5){
        array.push(x[i][0]);
        if (x[i][1].length ==4){
          array.push("13 percent");
          array.push(Math.round(1.13 *x[i][2]));      
          array.push(Math.round(.13 *x[i][2])); 
        } else if (x[i][2] * 1.09 > 65000){
          array.push("3 percent");
          array.push(Math.round(1.09 *x[i][2]));     
          array.push(Math.round(.09 *x[i][2])); 
        } else {
          array.push("10 percent");
          array.push(Math.round(1.1 * x[i][2]));
          array.push(Math.round(0.1 * x[i][2]));
        }
        bonus.push(array);
    } else {
      array.push(x[i][0]);
      array.push("no soup for you");
      array.push( x[i][2]);
      array.push(0);
      bonus.push(array);
  }
  }
  console.log(bonus);
};
  
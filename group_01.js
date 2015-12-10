var bonus =[];
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var employees = [atticus, jem, boo, scout];

var stiBonus=function(arrayOfEmployees){
  for(var i = 0; i<arrayOfEmployees.length; i++){
    
    adjustSti(arrayOfEmployees[i][0],arrayOfEmployees[i][1],arrayOfEmployees[i][2],arrayOfEmployees[i][3]);
  }
  };
 
var adjustSti = function (name,id,salary,review){
  var array = []; 
  array.push(name);
    switch(review){
      case 2:
          array.push("no soup for you");
          array.push(salary);
          array.push(0);
          bonus.push(array);      
          break;
      case 3:if (id.length == 4){
          array.push("9 percent");
          array.push(Math.round(1.09 *salary));        
          array.push(Math.round(0.09 *salary)); 
        } else if (salary > 65000){
          array.push("3 percent");
          array.push(Math.round(1.03 *salary));     
          array.push(Math.round(0.03 *salary)); 
        } else {
          array.push("4 percent");
          array.push(Math.round(1.04 * salary));
          array.push(Math.round(0.04 * salary));  
        }
        bonus.push(array);
          break;
      case 4:if (id.length == 4){
          array.push("11 percent");
          array.push(Math.round(1.11 *salary));      
          array.push(Math.round(0.11 *salary)); 
        } else if (salary > 65000){
          array.push("5 percent");
          array.push(Math.round(1.05 *salary));     
          array.push(Math.round(0.05 *salary)); 
        } else {
          array.push("6 percent");
          array.push(Math.round(1.06 * salary));
          array.push(Math.round(0.06 * salary));
        }
        bonus.push(array);
         break;
      case 5:if (id.length ==4){
          array.push("13 percent");
          array.push(Math.round(1.13 *salary));      
          array.push(Math.round(0.13 *salary)); 
        } else if (salary > 65000){
          array.push("3 percent");
          array.push(Math.round(1.09 *salary));     
          array.push(Math.round(0.09 *salary)); 
        } else {
          array.push("10 percent");
          array.push(Math.round(1.1 * salary));
          array.push(Math.round(0.1 * salary));
        }
        bonus.push(array);
        break;         
    }  
   };
stiBonus(employees);
console.log(bonus);
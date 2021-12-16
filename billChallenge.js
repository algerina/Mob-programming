function bonAppetit(bill, k, b) {
    // Write your code here
 let total = 0;
  bill.forEach((num, i) => {
      if (i !== k) {
           total += num;
      }   
    
      });
      let res = Math.floor(total/2);
      console.log(res === b ? "Bon Appetit" : Math.abs(b-res))
  }

bonAppetit([4, 6, 7], 2, 1);
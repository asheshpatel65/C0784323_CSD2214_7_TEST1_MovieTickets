function payment(){
             var active = document.getElementById("Card Number").value;
             if(active=="") {
	         alert("Error, Please enter Card Number");
             return false;
             }
              if(isNaN(active)){
             alert("Error, Please enter only numbers in card number");
             return false;
             }
            
            
             var boost = document.getElementById("Card Holder Name").value;
             if(boost=="") {
	         alert("Error, Please enter Card Holder Name");
             return false;
             }
             
             var check = document.getElementById("CVV").value;
             if(check=="") {
	         alert("Error, Please enter CVV");
             return false;
             }
             if(check.length<3){
             alert("Error, Please enter 3 digit CVV");
             return false;
             } 
             if(check.length>3){
             alert("Invalid, Please enter 3 digit CVV");
             return false;
             }
             
        }

function payment(){
             var a = document.getElementById("Card Number").value;
             if(a=="") {
	         alert("Error, Please enter Card Number");
             return false;
             }
              if(isNaN(a)){
             alert("Error, Please enter only numbers in card number");
             return false;
             }
             var b = document.getElementById("Card Holder Name").value;
             if(b=="") {
	         alert("Error, Please enter Card Holder Name");
             return false;
             }
             
             var c = document.getElementById("CVV").value;
             if(c=="") {
	         alert("Error, Please enter CVV");
             return false;
             }
             if(c.length<3){
             alert("Error, Please enter 3 digit CVV");
             return false;
             } 
             if(c.length>3){
             alert("Invalid, Please enter 3 digit CVV");
             return false;
             } 
             var d = document.getElementById("Expiration Date").value;
                
             if(d=="") {
	         alert("Invalid, Please select expiration month and year");
             return false;
             }
             
           }


function selectmovie(){

	var a = document.getElementById("moviename").value;
	document.getElementById('movie_name').innerHTML = '';
	document.getElementById('movie_name').innerHTML = a;
	if(a=="MS Dhoni")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "9$";
  document.getElementById('no_seat').innerHTML = '';

	}
	else if(a=="Milkha singh")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "6$";
  document.getElementById('no_seat').innerHTML = '';

	}
	else{
		document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "3$";
  document.getElementById('no_seat').innerHTML = '';

	}
}

function darkMode(){
	var checkBox = document.getElementById("boxbox");
	if(checkBox.checked == true){
		document.body.style.backgroundColor = "#083754";
		document.body.style.color = "#FFFFFF";
	}
	else{
		document.body.style.backgroundColor = "#FFFFFF";
		document.body.style.color = "#000000";
	}
}
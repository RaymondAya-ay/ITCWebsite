function darkMode(){
	var checkBox = document.getElementById("boxbox");
	if(checkBox.checked == true){
		document.body.style.backgroundColor = "#083754";
		document.body.style.color = "#FFFFFF";

		document.getElementById("homelink").href = "indexDark.html";
		document.getElementById("phonelink").href = "phoneWallpapersDark.html";
		document.getElementById("desktoplink").href = "desktopWallpapersDark.html";
		document.getElementById("profilelink").href = "profilePicturesDark.html";
		document.getElementById("artistlink").href = "artistsPageDark.html";
	}
	else{
		document.body.style.backgroundColor = "#FFFFFF";
		document.body.style.color = "#000000";
		document.getElementById("homelink").href = "index.html";
		document.getElementById("phonelink").href = "phoneWallpapers.html";
		document.getElementById("desktoplink").href = "desktopWallpapers.html";
		document.getElementById("artistlink").href = "artistsPage.html";
	}
}
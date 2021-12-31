let header = 
"<div id='header' class='header'>" +
"<div class='logo_container'><p class='logo'>MOTHERSHIP</p><p class='sublogo'>SCI-FI HORROR RPG</p></div>" +
"<div style='flex-grow: 1;'></div>" +
"<div onclick='headerButtonsClick()' class='menu_button' id='menu_button'><img class='button_image' src='./images/menu_button.png'></img></div>" +
"<div onclick='headerButtonsClick()' class='close_button' id='close_button'><img class='button_image' src='./images/close_button.png'></img></div>" +
"</div>"
document.body.innerHTML = header;
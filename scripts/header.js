let header = 
"<div id='header' class='header'>" +
"<div class='logo_container'><p class='logo'>MOTHERSHIP</p><p class='sublogo'>SCI-FI HORROR RPG</p></div>" +
"<div style='flex-grow: 1;'></div>" +
"<div onclick='menuButtonClick()' class = 'mobile menu_button'>" +
"<div id='menu_button'><img class='button_image' src='./images/menu_button.png'></img></div>" +
"<div class='inactive' id='close_button'><img class='button_image' src='./images/close_button.png'></img></div>" +
"</div>" +
"</div>"
document.body.innerHTML = header;
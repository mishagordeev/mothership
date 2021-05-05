 let header = 
 "<div id='header' class='header'>" +
    "<div>" +
        "<img class='logo' src='logo.png'></img>" +  
        "<div onclick='headerButtonsClick()' class='menu_button' id='menu_button'>" +
            "<img class='button_image' src='menu.png'></img>" +
        "</div>" +
        "<div onclick='headerButtonsClick()' class='close_button' id='close_button'>" +
            "<img class='button_image' src='close.png'></img>" +
        "</div>" +
    "</div>" +   
"</div>" 
document.body.innerHTML = header;
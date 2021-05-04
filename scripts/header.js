 let header = 
 "<div id='header' class='header'>" +
    "<div>" +
        "<img class='logo' src='logo.png'></img>" +  
        "<div onclick='headerButtonsClick()' class='menu_button' id='menu_button'>" +
        "</div>" +
        "<div onclick='headerButtonsClick()' class='close_button' id='close_button'>" +
        "</div>" +
    "</div>" +   
"</div>" 
document.body.innerHTML = header;
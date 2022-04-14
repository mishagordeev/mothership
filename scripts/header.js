let header =
`<header>
    <div class='logo'>
        <div style="flex-grow: 1;"></div>
        <span><a>МАЗЕРШИП</a></span>
        <div style="flex-grow: 1;"></div>
    </div>
    <div style='flex-grow: 1;'></div>
    <div class="desktop">
        <div class="menu">
            <p><a href="creation.html">ПРАВИЛА</a></p>
            <p><a href="modules.html">МОДУЛИ</a></p>
            <p><a href="lists.html">ЛИСТЫ</a></p>
            <p><a href="additions.html">ДОПОЛНЕНИЯ</a></p>
            <p><a href="video.html">ВИДЕО</a></p>
        </div>
    </div>
    <div style='flex-grow: 1;'></div>
    <div onclick='menuButtonClick()' class = 'mobile menu_button'>
        <img id='menu_button' class='button_image' src='./images/menu.svg'></img>
        <img id='close_button' class='button_image inactive' src='./images/close.svg'></img>
    </div>
</header>`
document.body.innerHTML = header;
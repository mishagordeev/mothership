let header =
`<header>
    <div class='logo'>
        <div style="flex-grow: 1;"></div>
        <span>МАЗЕРШИП</span>
        <div style="flex-grow: 1;"></div>
    </div>
    <div style='flex-grow: 1;'></div>
    <div class="desktop">
        <div class="menu">
            <p>ПРАВИЛА</p>
            <p>МОДУЛИ</p>
            <p>ЛИСТЫ</p>
            <p>ДОПОЛНЕНИЯ</p>
            <p>ВИДЕО</p>
        </div>
    </div>
    <div style='flex-grow: 1;'></div>
    <div onclick='menuButtonClick()' class = 'mobile menu_button'>
        <img id='menu_button' class='button_image' src='./images/menu.svg'></img>
        <img id='close_button' class='button_image inactive' src='./images/close.svg'></img>
    </div>
</header>`
document.body.innerHTML = header;
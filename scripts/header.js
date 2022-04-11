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
        <div id='menu_button'><img class='button_image' src='./images/menu_button.png'></img></div>
        <div class='inactive' id='close_button'><img class='button_image' src='./images/close_button.png'></img></div>
    </div>
</header>`
document.body.innerHTML = header;
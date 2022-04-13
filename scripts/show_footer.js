function showFooter() {
    let footer =
    `<footer>
        <div>
            <div>
                <p>
                    © 2021-2022 Mothershiprpg.ru
                </p>
                <div style="font-size: 0.6rem">
                    <br>
                    <p>
                        Mothershiprpg.ru не связан, не поддерживается, не спонсирован и не одобрен Tuesday Knight Games, LLC 
                    </p>
                    <p>
                        Название Mothership и логотипы игры являются зарегистрированнными товарными знаками Tuesday Knight Games, LLC 
                    </p>
                    <br>
                    <p>
                        Все права на опубликованные материалы принадлежат их авторам 
                    </p> 
                </div>
            </div>
            <div style="flex-grow: 1;"></div>
            <div class="social">
                <p>
                    Следи за обновлениями 
                </p> 
                <p style="padding-top: 12px;">
                    <a href='https://t.me/mothershiprpgru' target='_blank'><img src="../images/tg.svg"></a>
                    <a href='https://vk.com/mothershiprpgru' target='_blank'><img src="../images/vk.svg"></a>
                    <a href='https://discord.gg/CNmnVHRazJ' target='_blank'><img src="../images/discord.svg"></a>
                </p> 
                <br>      
            </div>  
        </div>
    </footer>`
    document.body.innerHTML += footer
}

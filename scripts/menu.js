let menu = "<div id='menu' class='menu inactive'>" +
"<h3>Руководство по выживанию</h3>" +
"<ul>" +
"<li><a href='./'>Создание персонажа</a></li>" +
"<li><a href='./basic-rules.html'>Основные правила</a></li>" +
"<li><a href='./skills.html'>Навыки</a></li>" +
"<li><a href='./saves.html'>Испытания</a></li>" +
"<li><a href='./survival.html'>Выживание</a></li>" +
"<li><a href='./combat.html'>Бой</a></li>" +
"<li><a href='./weapons.html'>Оружие</a></li>" +
"<li><a href='./armor.html'>Броня</a></li>" +
"<li><a href='./equipment.html'>Предметы</a></li>" +
"<li><a href='./trinkets.html'>Безделушки</a></li>" +
"<li><a href='./patches.html'>Нашивки</a></li>" +
"<li><a href='./mercenaries.html'>Наёмники</a></li>" +
"<li><a href='./stress.html'>Стресс, паника, решимость</a></li>" +
"<li><a href='./space-travel.html'>Путешествия в космосе</a></li>" +
"<li><a href='./ship-design.html'>Проектирование кораблей</a></li>" +
"<li><a href='./ship-combat.html'>Космические сражения</a></li>" +
"<li><a href='./experience.html'>Опыт и уровни</a></li>" +
"</ul>" +
"<h3>Дополнительные материалы</h3>" +
"<ul>" +
"<li><a class='download' href='./files/Mothership_Character_Sheet_Ru.pdf' target='_blank'>Лист персонажа</a></li>" + 
"<li><a class='download' href='./files/Mothership_Mercenaries_Sheet_Ru.pdf' target='_blank'>Листы наёмников</a></li>" +
"<li><a class='download' href='./files/Mothership_Ship_Sheet_Ru.pdf' target='_blank'>Лист корабля</a></li>" +
"</ul>" +
"</div>"
let wrapper = document.getElementById("wrapper");
wrapper.innerHTML = menu;
let menu = "<div id='menu' class='menu'>" +
"<h3>Руководство по выживанию</h3>" +
"<ul>" +
"<li><a class='internal' href='./'>Создание персонажа</a></li>" +
"<li><a class='internal' href='./basic-rules.html'>Основные правила</a></li>" +
"<li><a class='internal' href='./skills.html'>Навыки</a></li>" +
"<li><a class='internal' href='./saves.html'>Испытания</a></li>" +
"<li><a class='internal' href='./survival.html'>Выживание</a></li>" +
"<li><a class='internal' href='./combat.html'>Бой</a></li>" +
"<li><a class='internal' href='./weapons.html'>Оружие</a></li>" +
"<li><a class='internal' href='./armor.html'>Броня</a></li>" +
"<li><a class='internal' href='./equipment.html'>Предметы</a></li>" +
"<li><a class='internal' href='./trinkets.html'>Безделушки</a></li>" +
"<li><a class='internal' href='./patches.html'>Нашивки</a></li>" +
"<li><a class='internal' href='./mercenaries.html'>Наёмники</a></li>" +
"<li><a class='internal' href='./stress.html'>Стресс</a></li>" +
"<li><a class='internal' href='./panic.html'>Паника и решимость</a></li>" +
"<li><a class='internal' href='./space-travel.html'>Путешествия в космосе</a></li>" +
"<li><a class='internal' href='./ship-design.html'>Проектирование корабля</a></li>" +
"<li><a class='internal' href='./ship-combat.html'>Космические сражения</a></li>" +
"<li><a class='internal' href='./experience.html'>Опыт и уровни</a></li>" +
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
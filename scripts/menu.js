let menu = "<div id='menu' class='menu'>" +
"<h3>Руководство по выживанию</h3>" +
"<div class='list'>" + 
"<p><a class='internal' href='./'>Создание персонажа</a></p>" +
"<p><a class='internal' href='./basic-rules.html'>Основные правила</a></p>" +
"<p><a class='internal' href='./skills.html'>Навыки</a></p>" +
"<p><a class='internal' href='./saves.html'>Испытания</a></p>" +
"<p><a class='internal' href='./survival.html'>Выживание</a></p>" +
"<p><a class='internal' href='./combat.html'>Бой</a></p>" +
"<p><a class='internal' href='./weapons.html'>Оружие</a></p>" +
"<p><a class='internal' href='./armor.html'>Броня</a></p>" +
"<p><a class='internal' href='./equipment.html'>Предметы</a></p>" +
"<p><a class='internal' href='./trinkets.html'>Безделушки</a></p>" +
"<p><a class='internal' href='./patches.html'>Нашивки</a></p>" +
"<p><a class='internal' href='./mercenaries.html'>Наёмники</a></p>" +
"<p><a class='internal' href='./stress.html'>Стресс</a></p>" +
"<p><a class='internal' href='./panic.html'>Паника и решимость</a></p>" +
"<p><a class='internal' href='./space-travel.html'>Путешествия в космосе</a></p>" +
"<p><a class='internal' href='./experience.html'>Опыт и уровни</a></p>" +
"</div>" +
"<h3>Дополнительные материалы</h3>" +
"<div class='list'>" + 
"<p><a class='download' href='./files/Mothership_Character_Sheet_Ru_v1.5.pdf' target='_blank'>Лист персонажа</a></p>" +
"<p><a class='download' href='./files/Mothership_Mercenaries_Sheet_Ru_v1.0.pdf' target='_blank'>Листы наёмников</a></p>" +
"</div>" +
"</div>"
let wrapper = document.getElementById("wrapper");
wrapper.innerHTML = menu;
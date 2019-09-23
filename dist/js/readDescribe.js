const header = document.querySelector('.secondscreen__develophdr');					// заголовок в среднем экране
const descr = document.querySelector('.secondscreen__developdescr');				// описание в стреднем экране 
const mobapp = document.querySelector('#mobapp');									// элемент списка меню - мобильные приложения
const webapp = document.querySelector('#webapp');									// элемент списка меню - веб-приложения
const siteintegration = document.querySelector('#siteintegration');					// элемент списка меню - Сайты и их интеграция
const personcrm = document.querySelector('#personcrm');								// элемент списка меню - Разработка персональных CRM-систем
const integr = document.querySelector('#integr');									// элемент списка меню - Интеграция
const freesettng = document.querySelector('#freesettng');							// элемент списка меню - Бесплатная настройка
const systrefinem = document.querySelector('#systrefinem');							// элемент списка меню - Доработка СRM
const uxui = document.querySelector('#uxui');										// элемент списка меню - UX / UI 
const businesslogic = document.querySelector('#businesslogic');						// элемент списка меню - Разработка бизнес-логики


function readDataJson(n) {															// ф-ия считывания и преобразования данных из json файла
  const xhr = new XMLHttpRequest();
  const url = 'https://raw.githubusercontent.com/picpoint/purpleplain/master/dist/data.json';	// url json файла
  xhr.open('GET', url);																// посылаем методом ГЕТ
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');		// указываем обязательно urlencoded стоб не было CORS блокировки
  xhr.addEventListener('readystatechange', () => {									// добавляем событие по готовности ответа от сервака
    if(xhr.readyState == 4 && xhr.status == 200) {									// если текущее состояние объекта 4-завершено и статус 200
      let jsonData = JSON.parse(xhr.responseText);									// парсим json и пишем его в переменную
      
      for(let i = 0; i < jsonData.length; i++) {									// пробегаемся по массиву 
        if(i == n) {																// если i-й элемент == значениею которое передали в ф-ию
          for(let key in jsonData[i]) {												// берём данный элемент - объект
            header.innerHTML = key;													// в заголовок вставляем ключь
            descr.innerHTML = jsonData[i][key];										// в описание - значение
          }
        }
      }

    }
  })
  xhr.send();																		// выполняем запрос
}



mobapp.addEventListener('click', () => {											// вешаем события на элементы
  readDataJson(0)																	// с передачей значения в ф-ию
});

webapp.addEventListener('click', () => {
  readDataJson(1)
});

siteintegration.addEventListener('click', () => {
  readDataJson(2);
});

personcrm.addEventListener('click', () => {
  readDataJson(3);
});

integr.addEventListener('click', () => {
  readDataJson(4);
});

freesettng.addEventListener('click', () => {
  readDataJson(5);
});

systrefinem.addEventListener('click', () => {
  readDataJson(6);
});

uxui.addEventListener('click', () => {
  readDataJson(7);
});

businesslogic.addEventListener('click', () => {
  readDataJson(8);
});
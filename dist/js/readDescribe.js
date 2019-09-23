const header = document.querySelector('.secondscreen__develophdr');
const descr = document.querySelector('.secondscreen__developdescr');
const devlist = document.querySelector('.secondscreen__devlist');
const devUl = devlist.firstElementChild.childNodes;
const mobapp = document.querySelector('#mobapp');
const webapp = document.querySelector('#webapp');
const siteintegration = document.querySelector('#siteintegration');
const personcrm = document.querySelector('#personcrm');
const integr = document.querySelector('#integr');
const freesettng = document.querySelector('#freesettng');
const systrefinem = document.querySelector('#systrefinem');
const uxui = document.querySelector('#uxui');
const businesslogic = document.querySelector('#businesslogic');


function readDataJson(n) {
  let jsonData = '';
  const xhr = new XMLHttpRequest();  
  const url = 'https://raw.githubusercontent.com/picpoint/purpleplain/master/dist/data.json';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      jsonData= JSON.parse(xhr.responseText);
      
      for(let i = 0; i < jsonData.length; i++) {
        if(i == n) {
          for(let key in jsonData[i]) {
            header.innerHTML = key;
            descr.innerHTML = jsonData[i][key];
          }
        }
      }

    }
  })
  xhr.send();
}



mobapp.addEventListener('click', () => {
  readDataJson(0)
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
const header = document.querySelector('.secondscreen__develophdr');
const descr = document.querySelector('.secondscreen__developdescr');
const devlist = document.querySelector('.secondscreen__devlist');
const devUl = devlist.firstElementChild.childNodes;
const mobapp = document.querySelector('#mobapp');
const webapp = document.querySelector('#webapp');
const siteintegration = document.querySelector('#siteintegration');



function readDataJson() {
  let str = '';
  const xhr = new XMLHttpRequest();  
  const url = 'https://raw.githubusercontent.com/picpoint/purpleplain/master/dist/data.json';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      str = JSON.parse(xhr.responseText);
      
      console.log(typeof str);
      console.log(str);

      
      // for(let key in jsonData) {
      //   console.log(jsonData[key]);
      // }

    }
  })
  xhr.send();
}



mobapp.addEventListener('click', function() {
  readDataJson();

});


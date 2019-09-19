const header = document.querySelector('.secondscreen__develophdr');
const descr = document.querySelector('.secondscreen__developdescr');
const devlist = document.querySelector('.secondscreen__devlist');
const devUl = devlist.firstElementChild.childNodes;
let jsonData = '';

console.log(devUl);


function readDataJson() {
  const xhr = new XMLHttpRequest();  
  const url = 'https://raw.githubusercontent.com/picpoint/purpleplain/master/dist/data.json';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      jsonData = JSON.parse(xhr.responseText);

      for(let i = 0; i < jsonData.length; i++) {
        //console.log(jsonData[i]);
        for(let n = 0; n < devUl.length; n++) {
          if(i == n - 1) {
            for(let key in jsonData[i]) {
              header.innerHTML = key;
              descr.innerHTML = jsonData[i][key];
            }
          }
        }
      }
    }
  })
  xhr.send();
}

//readDataJson();

devUl[0].addEventListener('click', readDataJson);
devUl[1].addEventListener('click', readDataJson);
devUl[2].addEventListener('click', readDataJson);
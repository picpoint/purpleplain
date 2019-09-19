const devlist = document.querySelector('.secondscreen__devlist');
const devUl = devlist.firstElementChild.childNodes;
const devModile = devUl[0];
const devWeb = devUl[1];
const devSite = devUl[2];


function readDataJson() {
  const xhr = new XMLHttpRequest();  
  const url = 'https://raw.githubusercontent.com/picpoint/purpleplain/master/dist/data.json';
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  })

  xhr.send();
}

readDataJson;


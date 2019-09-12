export const Request = function() {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://next.json-generator.com/api/json/get/41ORKNZDU');
    xhr.send(null);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject('errp de requiosocao');
        }
      }
    }
  });
}
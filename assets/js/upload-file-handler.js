// Documentation: https://developers.google.com/drive/v2/reference/files/insert#examples
//                https://developers.google.com/drive/v2/web/manage-uploads#simple


function start() {
    var file = document.getElementById('fileToUpload');
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': 'AIzaSyCmPTK8AgVwYld1lrCzoP_KOw9SH88mZ9U',
      // clientId and scope are optional if auth is not required.
    //   'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    //   'scope': 'profile',
    }).then(uploadFile((file, callback) {
      // 3. Initialize and make the API request.
      
      })
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };

  gapi.load('client', start);


/**
 * Insert new file.
 *
 * @param {File} fileData File object to read data from.
 * @param {Function} callback Function to call when the request is complete.
 */
function uploadFile(fileData, callback) {
    const boundary = '-------314159265358979323846';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";
  
    var reader = new FileReader();
    reader.readAsBinaryString(fileData);
    reader.onload = function(e) {
      var contentType = fileData.type || 'application/octet-stream';
      var metadata = {
        'title': fileData.fileName,
        'mimeType': contentType
      };
  
      var base64Data = btoa(reader.result);
      var multipartRequestBody =
          delimiter +
          'Content-Type: application/json\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n' +
          'Content-Transfer-Encoding: base64\r\n' +
          '\r\n' +
          base64Data +
          close_delim;
  
      var request = gapi.client.request({
          'path': '/upload/drive/v2/files',
          'method': 'POST',
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody});
      if (!callback) {
        callback = function(file) {
          console.log(file)
        };
      }
      request.execute(callback);
    }
  }
  
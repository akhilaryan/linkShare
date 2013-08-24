// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://192.168.1.130:3000", true);
// xhr.send();

var link = document.URL;
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      console.log(tabs[0]);
   }
);

$.post("http://192.168.1.130:3000",
  {
  	user_post:link,
  },
  function(works){
    alert("This works!!");
  });



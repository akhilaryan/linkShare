// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://192.168.1.130:3000", true);
// xhr.send();

var link = document.URL;
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, function(tabs){
    	var currentTab = tabs[0];
		$.post("http://192.168.1.130:3000",
		  {
		  	user_url: currentTab.url, 
		  	user_pagetitle: currentTab.title,
		  	console.log(user_url),
		  	console.log(user_pagetitle),
		  },
		  function(works){
		    alert("This works!!");
		  });

   }
);




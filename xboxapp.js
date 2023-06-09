
function start() {

  ////CONFIG////

  var link = "https://frosted-secret-frown.glitch.me/uv/service/hvtrs8%2F-wuw%2Cx%60oz.aoo%2Fgn%2Fuq%2Frlcy"; // link to app webpage
  var title = "XboxCG"; // title shown in navbar
  var id = "https://github.com/WaddlesM-bot/clockwork/main/xboxapp.js"; // set this to the url location of your script
 
  ////SCRIPT////
  
  var ExampleLink = document.createElement("a");
  var ExampleIFrame = document.createElement("iframe");
  
  ExampleIFrame.style = "display: none;";
  ExampleIFrame.className = "app "+id;
  ExampleIFrame.id = id;
  ExampleIFrame.src = "about:blank";
  
  ExampleLink.href = "javascript:openapp('"+ ExampleIFrame.id +"','" + link + "');" ;
  ExampleLink.innerHTML = title; 
  ExampleLink.className = id; 
  ExampleLink.addEventListener('dblclick', (e) => {
    uninstallApp(ExampleIFrame.id);
  });
  ExampleLink.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    closeApp(ExampleIFrame.id);
  });
  
  document.getElementById("navbar").appendChild(ExampleLink);
  document.getElementById("main").appendChild(ExampleIFrame);
}

start();

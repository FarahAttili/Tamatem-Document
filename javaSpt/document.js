function showList(divID)
{
    let Id = divID.toString();
    var list = document.getElementById(Id);
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
}
function getCurrentYear()
{
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("currentYear").innerHTML = year.toString();
}
function openTab(event, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("viewPage");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("navItem");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function testfunc (path) {
  document.getElementById("viewPage").href =path;
}
function loadContent(path) {
  // console.log(path)
  fetch(path)  // Fetch the content of content.html
      .then(response => response.text())  // Convert the response to text
      .then(data => {
          document.getElementById('viewPage').innerHTML = data;  // Insert the content into the div
      })
      .catch(error => {
          console.error('Error loading this page:', error);
      });
}

const mainFrame = document.getElementById("main-frame");

function navigate(path) {
  document.getElementById("main-frame").setAttribute('src', path);
}
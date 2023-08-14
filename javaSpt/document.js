function showList(e, divID) {
  e.stopPropagation();
  let arrowImg;
  if (e.target.tagName === "IMG") {
    arrowImg = e.target.closest(".downArrow")
  } else {
   arrowImg = e.target.childNodes[1];
  }
  //  let arrowImg= e.target.closest(".downArrow") || e.target.nextElementSibling;
 const isRotated = arrowImg.classList.contains("rotate")
  if (!isRotated) {
    arrowImg.classList.add("rotate");
  } else {
    arrowImg.classList.remove("rotate")
  }
  
  let Id = divID.toString();
  let list = document.getElementById(Id);
  if (list.style.display === "none") {
    list.style.display = "block";
  } else {
    list.style.display = "none";
  }
}

// function getCurrentYear() {}
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
//! Main Navigation Function
function navigate(url) {
  const container = document.getElementById('viewPage');

  window.scrollTo(0, 0);

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response Error');
      }
      return response.clone().text();
    })
    .then(content => {
      container.innerHTML = content;
    })
    .catch(error => {
      console.error(error);
    });
}

const mainFrame = document.getElementById("main-frame");

// function navigate(path) {
//   document.getElementById("main-frame").setAttribute('src', path);
// }

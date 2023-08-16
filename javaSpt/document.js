function showList(e, divID) {
  e.stopPropagation();
  let arrowImg;
  if (e.target.tagName === "IMG") {
    arrowImg = e.target.closest(".downArrow")
  } else {
   arrowImg = e.target.childNodes[1];
  }
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
function getCurrentYear()
{
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("currentYear").innerHTML = year.toString();
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
      Prism.highlightAll();
    })
    .catch(error => {
      console.error(error);
    });
}
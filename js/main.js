var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var siteList = [];
var subBtn = document.getElementById("subBtn")


// For validation
function vladtionName(){
var regex = /^[a-zA-Z]{3,}$/;

var text=siteName.value;


if (regex.test(text )) {
  siteName.classList.add("is-valid")
      siteName.classList.remove("is-invalid")
  
        
           subBtn.removeAttribute("data-bs-toggle");
        subBtn.removeAttribute("data-bs-target");


        return true

  
} else {
    
    siteName.classList.add("is-invalid")
    subBtn.setAttribute("data-bs-toggle", "modal");
        subBtn.setAttribute("data-bs-target", "#exampleModal");


  return false
}

}
function vladtionUrl(){
var regex = /^(https:\/\/)?(www\.)?[a-zA-Z0-9-]+\.(com|net|org)(\/.*)?$/;
var url=siteUrl.value;


if (regex.test(url )) {
 
  siteUrl.classList.add("is-valid")
      siteUrl.classList.remove("is-invalid")
        subBtn.removeAttribute("data-bs-toggle");
        subBtn.removeAttribute("data-bs-target");
        
        return true

  
} else {
    
    siteUrl.classList.add("is-invalid")
 subBtn.setAttribute("data-bs-toggle", "modal");
        subBtn.setAttribute("data-bs-target", "#exampleModal");

  return false
}

}



// For local storage check
if (localStorage.getItem("siteContainer") !== null) {

 siteList = JSON.parse(localStorage.getItem("siteContainer"));

 displayData()
}




// Add site
function addSite() {

if (vladtionName()&&vladtionUrl()) {
    var site = {
    name: siteName.value,
    url: siteUrl.value,
  };

  siteList.push(site);

  localStorage.setItem("siteContainer", JSON.stringify(siteList));

  displayData()
  console.log(siteList);
clearData()


}

  
}



function displayData(){


var cartona="";
for (let i = 0; i < siteList.length; i++) {
   


cartona+=`  <tr>
      <th scope="row">${i+1}</th>
      <td>${siteList[i].name}</td>
      <td> <a href="https://${siteList[i].url}"><button class="visit-btn" id="visitBtn"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
      <td><button onclick="delData(${i})" class="del-btn" id="delBtn"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
    </tr>`



}

document.getElementById("tableData").innerHTML=cartona;


}

function clearData(){
    siteName.value=null
    siteUrl.value=null


}


function delData(index){

siteList.splice(index , 1)

localStorage.setItem("siteContainer", JSON.stringify(siteList));

console.log(siteList)


displayData()



}



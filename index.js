
let myLeadNames = []
let myLeadCompany = []
let myLeadLinks = []
let myLeadPosition = 0
let myLeadPositionArray = []

const nameInputEl = document.getElementById("name-input-el")
const companyInputEl = document.getElementById("company-input-el")
const linkInputEl = document.getElementById("link-input-el")

const ulElName = document.getElementById("ul-el-name")
const ulElCompany = document.getElementById("ul-el-company")
const ulElLink = document.getElementById("ul-el-link")
const ulElPosition = document.getElementById("ul-el-position")

const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const exportBtn = document.getElementById("export-btn")
const deleteBtn = document.getElementById("delete-btn")

const nameFromLocalStorage = JSON.parse(localStorage.getItem("myLeadNames"))
const companyFromLocalStorage = JSON.parse(localStorage.getItem("myLeadCompany"))
const linkFromLocalStorage = JSON.parse(localStorage.getItem("myLeadLinks"))
const positionFromLocalStorage = JSON.parse(localStorage.getItem("myLeadPositionArray"))

if (nameFromLocalStorage) {
    myLeadNames = nameFromLocalStorage
    renderName(myLeadNames)
}

if (companyFromLocalStorage) {
    myLeadCompany = companyFromLocalStorage
    renderCompany(myLeadCompany)
}

if (linkFromLocalStorage) {
    myLeadLinks = linkFromLocalStorage
    renderLink(myLeadLinks)
}
if (positionFromLocalStorage){
    myLeadPositionArray = positionFromLocalStorage
    renderPosition(myLeadPositionArray)
}



// Output input information when clicked input button
inputBtn.addEventListener("click", function(){
    if(nameInputEl.value){
        myLeadNames.push(nameInputEl.value)
        nameInputEl.value = ""
        localStorage.setItem("myLeadNames", JSON.stringify(myLeadNames))
        renderName(myLeadNames)
    } else if (nameInputEl.value != true){
        myLeadNames.push("N/A")
        localStorage.setItem("myLeadNames", JSON.stringify(myLeadNames))
        renderName(myLeadNames)
    }

    if (companyInputEl.value){
        myLeadCompany.push(companyInputEl.value)
        companyInputEl.value = ""
        localStorage.setItem("myLeadCompany", JSON.stringify(myLeadCompany))
        renderCompany(myLeadCompany)
    } else if (companyInputEl.value != true){
        myLeadCompany.push("N/A")
        localStorage.setItem("myLeadCompany", JSON.stringify(myLeadCompany))
        renderCompany(myLeadCompany)
    }

    if (linkInputEl.value){
        myLeadPositionArray.push(myLeadPosition)
        localStorage.setItem("myLeadPositionArray", JSON.stringify(myLeadPositionArray))
        renderPosition(myLeadPositionArray)

        myLeadLinks.push(linkInputEl.value)
        linkInputEl.value = ""
        localStorage.setItem("myLeadLinks", JSON.stringify(myLeadLinks))
        renderLink(myLeadLinks)
    } else if (linkInputEl.value != true){
        myLeadLinks.push("N/A")
        localStorage.setItem("myLeadLinks", JSON.stringify(myLeadLinks))
        renderLink(myLeadLinks)
    }
    
    
})

// render position, name, company
function renderPosition(position){
    myLeadPosition ++
    let listItemsPosition = ""
    for (let i = 0; i < position.length; i ++){
        listItemsPosition += `
                <p id="child">${position[i]+1}</i>
        `
    }
    ulElPosition.innerHTML = listItemsPosition
}


function renderName(name){
    let listItemsName = ""
    for (let i = 0; i < name.length; i++) {
        listItemsName += `
                <p id="child-one">${name[i]}</p>
        ` 
    }
    ulElName.innerHTML = listItemsName
}

function renderCompany(company){
    let listItemsCompany = ""
    for (let i = 0; i < company.length; i++) {
        listItemsCompany += `
                <p id="child-two">${company[i]}</p>
        ` 
    }
    ulElCompany.innerHTML = listItemsCompany
}


// render lead's link
function renderLink(links){
    let listItemsLink = ""
    for (let i = 0; i < links.length; i++) {
        listItemsLink += `
                <a target='_blank' href='${links[i]}' id="child-three">
                    ${links[i]}
                </a>
        ` 
    }
    ulElLink.innerHTML = listItemsLink
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeadNames = []
    myLeadCompany = []
    myLeadLinks = []
    myLeadPositionArray = []
    myLeadPosition = -1
    renderName(myLeadNames)
    renderCompany(myLeadCompany)
    renderLink(myLeadLinks)
    renderPosition(myLeadPositionArray)
})

document.getElementById("export-btn").addEventListener("click", exportListToCSV);

function exportListToCSV() {
    var listItems = document.getElementsByTagName("td");
    var listArray = Array.from(listItems).map(function (item) {
        return  item.textContent;
    });
    console.log(listArray)
    var csvString = listArray.join(" ,");
  
    function downloadCSV(csv) {
      var filename = "list.csv";
      var link = document.createElement("a");
      link.style.display = "none";
      link.setAttribute("target", "_blank");
      link.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(csv));
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    downloadCSV(csvString);
  }
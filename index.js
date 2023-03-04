
let myLeadNames = []
let myLeadCompany = []
let myLeadLinks = []
let myLeadPosition = 0

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

inputBtn.addEventListener("click", function(){
    myLeadNames.push(nameInputEl.value)
    myLeadCompany.push(companyInputEl.value)
    myLeadLinks.push(linkInputEl.value) 

    nameInputEl.value = ""
    companyInputEl.value = ""
    linkInputEl.value = ""

    renderPosition()
    renderName(myLeadNames)
    renderCompany(myLeadCompany)
    renderLink(myLeadLinks)
})
function renderPosition(){
    myLeadPosition ++
    ulElPosition.innerHTML += `
            <p id="lead-position">${myLeadPosition}</p>
    `
}


function renderName(name){
    let listItemsName = ""
    for (let i = 0; i < name.length; i++) {
        listItemsName += `
                <p id="lead-name">${name[i]}</p>
        ` 
    }
    ulElName.innerHTML = listItemsName
}

function renderCompany(company){
    let listItemsCompany = ""
    for (let i = 0; i < company.length; i++) {
        listItemsCompany += `
                <p id="lead-company">${company[i]}</p>
        ` 
    }
    ulElCompany.innerHTML = listItemsCompany
}


// render lead's link
function renderLink(links){
    let listItemsLink = ""
    for (let i = 0; i < links.length; i++) {
        listItemsLink += `
                <a target='_blank' href='${links[i]} id="lead-link'>
                    ${links[i]}
                </a>
        ` 
    }
    ulElLink.innerHTML = listItemsLink
}
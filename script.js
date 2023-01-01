









var myData1 = [
    ["MAHARASTRA", "kolhapur district"],
    ["MAHARASTRA", "nanded district"],
    ["MAHARASTRA", "pune district"],
    ["MAHARASTRA", "pune city"],
    ["MAHARASTRA", "sangli district"],
    ["MAHARASTRA", "solapur district"],
    ["MAHARASTRA", "thane district"],
    ["MAHARASTRA", "satara district"],
    ["MAHARASTRA", "nagpur district"],
    ["ODISHA", "ganjam district"],
    ["ODISHA", "gajapathi district"],
    ["ODISHA", "kurdha district"],
    ["ODISHA", "raygad district"],
    ["GUJARAT", "ahmedabad district"],
    ["GUJARAT", "ahmedabad city"],
    ["GUJARAT", "bharuch district"],
    ["GUJARAT", "bhavnagar district"],
    ["GUJARAT", "rajkot district"],
    ["GUJARAT", "surat district"],
    ["GUJARAT", "gandhinagar district"],
    ["GUJARAT", "vadodara district"],
    ["GUJARAT", "valsad district"],
    ["MADHYA PRADESH", "INDORE district"],
    ["TAMILNADU", "chennai city"],
    ["TAMILNADU", "coimbatore district"],
    ["TAMILNADU", "coimbatore city"],
    ["TAMILNADU", "tirupur city"],
    ["TAMILNADU", "cuddalore district"],
    ["TAMILNADU", "dandigul district"],
    ["TAMILNADU", "dharmapuri district"],
    ["TAMILNADU", "erode district"],
    ["TAMILNADU", "kancheepuram district"],
    ["TAMILNADU", "karur district"],
    ["TAMILNADU", "madurai city"],
    ["TAMILNADU", "namakkal district"],
    ["TAMILNADU", "salem district"],
    ["KARNATAKA", "bangalore city"],
    ["KARNATAKA", "bangalore rural district"],
    ["KARNATAKA", "ramanagaram district"],
    ["KARNATAKA", "bagalkot district"],
    ["KARNATAKA", "bellary city"],
    ["KARNATAKA", "bidar district"],
    ["KARNATAKA", "bijapur district"],
    ["KARNATAKA", "chikballapur district"],
    ["KARNATAKA", "hubbali city"],
    ["KARNATAKA", "koppal district"],
    ["KARNATAKA", "mysore district"],
    ["KARNATAKA", "raichur district"],
    ["KARNATAKA", "raichur town"],
    ["KARNATAKA", "shimoga district"],
    ["KARNATAKA", "devanagere district"],
    ["TELANGANA", "Adilabad district"],
    ["TELANGANA", "bhadradri district"],
    ["TELANGANA", "hydrabad city"],
    ["TELANGANA", "secunderabad district"],
    ["TELANGANA", "jagtial district"],
    ["TELANGANA", "jangon district"],
    ["TELANGANA", "karimnagar district"],
    ["TELANGANA", "kamareddy district"],
    ["TELANGANA", "khammam district"],
    ["TELANGANA", "komaram bheem district"],
    ["TELANGANA", "mahabubabad district"],
    ["TELANGANA", "mahabub nagar district"],
    ["TELANGANA", "mancherial district"],
    ["TELANGANA", "medak district"],
    ["TELANGANA", "rangareddy district"],
    ["TELANGANA", "sangareddy district"],
    ["TELANGANA", "nalgonda district"],
    ["TELANGANA", "nizamabad district"],
    ["TELANGANA", "siddipet district"],
    ["TELANGANA", "suryapet district"],
    ["TELANGANA", "warangal rural district"],
    ["TELANGANA", "warangal-urban district"],
    ["TELANGANA", "yadagiri district"],
    ["TELANGANA", "peddapalli district"],
    ["ANDHRA PRADESH", "ananthapur district"],
    ["ANDHRA PRADESH", "chittoor district"],
    ["ANDHRA PRADESH", "chittoor city"],
    ["ANDHRA PRADESH", "tirupati district"],
    ["ANDHRA PRADESH", "guntur district"],
    ["ANDHRA PRADESH", "guntur city"],
    ["ANDHRA PRADESH", "krishna district"],
    ["ANDHRA PRADESH", "east godavari district"],
    ["ANDHRA PRADESH", "vijayawada district"],
    ["ANDHRA PRADESH", "kurnool district"],
    ["ANDHRA PRADESH", "kurnool city"],
    ["ANDHRA PRADESH", "kadapa city"],
    ["ANDHRA PRADESH", "rajhamundry district"]

]

function stateList(data, stateName) {
    var selectstate = data.filter(r => r[0] === stateName);
    console.log(selectstate);
    document.getElementById("state-name").value = stateName;

    var selectDist = new Set();
    selectstate.forEach(r => selectDist.add(r[1]));
    var uniqueList = [...selectDist]
    console.log(uniqueList);

    var level2 = document.getElementById("district-drop-down");
    level2.innerHTML = "";
    uniqueList.forEach(item => {

        var option = document.createElement("option");
        option.textContent = item;
        level2.appendChild(option);
    })


}

function applyDropdown() {

    var dropdown1 = document.getElementById("state-drop-down").value;
    stateList(myData1, dropdown1);


}

document.getElementById("state-drop-down").addEventListener("change", applyDropdown);
document.addEventListener("DOMContentLoaded", applyDropdown)


var myData2 = [
    ["kolhapur district", "Select..", "", ""],
    ["kolhapur district", "ichalkaranji", "9246436360", "ICKJ"],
    ["kolhapur district", "kolhapur shiroji", "9225520361", "KPSH"],
    ["kolhapur district", "kolhapur gandhi nagar", "7264007743", "KPGN"],
    ["nanded district", "Select..", "", ""],
    ["nanded district", "nanded", "7995545417", "NDED"],
    ["pune district", "Select..", "", ""],
    ["pune district", "chakan", "09225302449", "PNCK"],
    ["pune district", "wagholi", "09225400391", "PNWG"],
    ["pune district", "phursungi", "09225066494", "PNPG"],
    ["pune city", "Select..", "", ""],
    ["pune city", "nigidi", "7264007767", "PNGD"],
    ["pune city", "shukrawarpet", "9225400975", "PNSP"],


]
function branchDropDown(data2, dist) {
    var distName = data2.filter(r => r[0] === dist);
    console.log(distName);
    document.getElementById("dist-name").value = dist;
    var uniqueoptions = new Set();
    var dist = distName.forEach(r => uniqueoptions.add(r[1]));
    arraylist = [...uniqueoptions]
    console.log(arraylist);

    var level3 = document.getElementById("branch-drop-down");
    level3.innerHTML = "";

    arraylist.forEach(item2 => {


        var branchOption = document.createElement("option");
        branchOption.value = item2;
        branchOption.textContent = item2;
        level3.appendChild(branchOption);



    });

}


function applyBranch() {
    var distValue = document.getElementById("district-drop-down").value;
    console.log(distValue)

    branchDropDown(myData2, distValue);
}

document.getElementById("district-drop-down").addEventListener("change", applyBranch);
document.addEventListener("DOMContentLoaded", applyBranch);

function branch() {
    var branchName = document.getElementById("branch-drop-down").value;
    document.getElementById("branch-name").value = branchName;

    phoneNumber(myData2, branchName);


}



document.getElementById("branch-drop-down").addEventListener("change", branch);

document.addEventListener("DOMContentLoaded", branch)



function phoneNumber(data, branch) {
    var distFilter = data.filter(r => r[1] === branch);
    var filter = new Set();
    var filter2 = new Set();
    distFilter.forEach(r => filter.add(r[2]));
    distFilter.forEach(r => filter2.add(r[3]))

    var numberArray = [...filter];
    var numberArray2 = [...filter2];

    console.log(numberArray2);

    codeNumber(numberArray, numberArray2);
    document.querySelector("#code").value = numberArray2;

}
function codeNumber(number, code) {
    var level4 = document.querySelector(".phone_number");

    level4.innerHTML = "";
    level4.innerHTML = number;
    var level5 = document.querySelector(".code");
    level5.innerHTML = "";
    level5.innerHTML = code;
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbw6CclFbIXTqyLr4k6xTMpUg7SvfxJs4SmWynv-o1Iy9xX9POgO2bWRmt3f2L-vJw/exec';
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })

        .catch(error => console.error('Error!', error.message))

});


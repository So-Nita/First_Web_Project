let btnSubmit = document.querySelector('.btn-submit')
let table = document.querySelector('table')
let Name = document.querySelector('#name')
let math = document.querySelector('#math')
let phisic = document.querySelector('#phy')
let bio = document.querySelector('#bio')
let chemistry = document.querySelector('#che')
let Khmer = document.querySelector('#khm')


var selectRow=null;
btnSubmit.addEventListener('click', () => {
  let N = Name.value
  let M = math.value
  let P = phisic.value
  let B = bio.value
  let C = chemistry.value
  let K = Khmer.value

  let total = +M + +P + +B + +C + +K;
  let avg = parseFloat(total / 5);
  let newRow;
  if(selectRow){
    selectRow.cells[1].innerHTML=N;
    selectRow.cells[2].innerHTML=M;
    selectRow.cells[3].innerHTML=P;
    selectRow.cells[4].innerHTML=B;
    selectRow.cells[5].innerHTML=C;
    selectRow.cells[6].innerHTML=K;
    selectRow=null;
    clearInput();
  }
  else{
    if (avg > 100 || avg < 0){
      alert('Worng number')
      return false;
    } else if (avg < 50){
      newRow = `<tr id="tr" style="background-color: red;">
                  <td><input id="checkbox" type="checkbox"/></td>
                  <td>${N}</td>
                  <td>${M}</td>
                  <td>${P}</td>
                  <td>${B}</td>
                  <td>${C}</td>
                  <td>${K}</td>
                  <td>${avg} </td>
                  <td>${getGrade(avg)}</td>
                  <td>
                      <button id="edit" onclick="onEdit(this)" style="background-color: blue; height: 30px;">Edit</button>
                      <button onclick="Delete(this)" style="background-color:crimson; height: 30px;">Delete</button>
                  </td>
                </tr>`
    } else {
      newRow = `<tr id="tr" style="background-color: green">
                  <td><input id="checkbox" type="checkbox"/></td>
                  <td>${N}</td>
                  <td>${M}</td>
                  <td>${P}</td>
                  <td>${B}</td>
                  <td>${C}</td>
                  <td>${K}</td>
                  <td>${avg}</td>
                  <td>${getGrade(avg)}</td>
                  <td>
                      <button id="edit" class="edit" onclick="onEdit(this)" style="background-color: blue; height: 30px;">Edit</button>
                      <button onclick="Delete(this)" style="background-color:crimson; height: 30px;">Delete</button>
                  </td>
                </tr>`
    }
    table.innerHTML += newRow;
    clearInput();
    numStd();
  }
})

function getGrade(s) {
  if (s > 95 && s <= 100) {
    return 'A'
  } else if (s > 80 && s <= 95) {
    return 'B'
  } else if (s > 70 && s <= 80) {
    return 'C'
  } else if (s >= 60 && s <= 70) {
    return 'D'
  } else {
    return 'F'
  }
}

function clearInput(){
  Name.value=""
  math.value=""
  phisic.value=""
  bio.value=""
  chemistry.value=""
  Khmer.value=""
}
function Delete(row){
  alert("Are you sure to delete?")
  var i = row.parentElement.parentElement.rowIndex;
  table.deleteRow(i)
}

function onEdit(td) {
  selectRow= td.parentElement.parentElement;
  document.getElementById("name").value = selectRow.cells[1].innerHTML;
  document.getElementById("math").value = selectRow.cells[2].innerHTML;
  document.getElementById("phy").value = selectRow.cells[3].innerHTML;
  document.getElementById("che").value = selectRow.cells[4].innerHTML;
  document.getElementById("bio").value = selectRow.cells[5].innerHTML;
  document.getElementById("khm").value = selectRow.cells[6].innerHTML;
}

function deleteCheckBox(){
  alert("Hi")
  // let 
  // if()
}


// function validateName(){
  
// }
// document.getElementById('numStudent').innerHTML="0";
// 
// let tableRow = document.getElementById('numStudent')
// tableRow.innerHTML = table.rows.length-1; 
// function numStd(){
//     if(){
//       tableRow.innerHTML = table.rows.length+1; 
//     }else{
//       tableRow.innerHTML = table.rows.length-1; 
//     }
// }


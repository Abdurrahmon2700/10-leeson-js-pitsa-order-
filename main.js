// left order list
let orderLeft = document.querySelector(".order");
let elSelect = document.querySelector("select");
let elRadioPart = document.querySelector(".order__radiobox-part");
let elCheckboxPart = document.querySelector(".order__checkbox-part");
let elAdditionalCheckboxPart = document.querySelector(".order__additional-part");

// ready order list
let elBreadSituation = document.querySelector(".bread__situation");
let elBreadSize = document.querySelector(".bread__size");
let elPitsaOnProducts = document.querySelector(".pitsa__on");
let elAdditionalList = document.querySelector(".addational__list");


// Arrays
let radioBoxArray = ["25sm", "30sm", "35sm"];
let selectArray = ["Yupqa", "O'rta", "Qalin"];
let productsNamesArr = ["Pomidor", "Kurka go'shti", "Zaytun", "Tuzlangan bodring", "Qo'ziqorin", "Qazi"];
let addtionalProductNameArray = ["Achchiq", "Sosikali"];
let checkedProductNameArr = [];
let checkedAdditonalArray = [];

// fetch select from array process
for (let i = 0; i < selectArray.length; i++) {

  let newOption = document.createElement("option");
  newOption.textContent = selectArray[i];
  newOption.value = selectArray[i];

  elSelect.appendChild(newOption);
  elBreadSituation.textContent = selectArray[0];

  elSelect.addEventListener("change", function (evt) {

    evt.preventDefault();
    elBreadSituation.textContent = elSelect.value;

  })

}

// fetch radio button array
for (let i = 0; i < radioBoxArray.length; i++) {
  
  let newLi = document.createElement("li");
  let elNewRadiobox = document.createElement("input");
  let newLabel = document.createElement("label");
  
  newLabel.textContent = radioBoxArray[i];
  newLabel.setAttribute("for", radioBoxArray[i]);

  newLi.append(newLabel);
  elNewRadiobox.type = "radio";
  elNewRadiobox.name = "radio";

  elNewRadiobox.className = "checkbox-size"
  elNewRadiobox.id = radioBoxArray[i]
  elRadioPart.append(elNewRadiobox, newLi)
  elBreadSize.textContent = radioBoxArray[1]

  let elChecked = document.querySelectorAll('.checkbox-size');

  for (let i = 0; i < elChecked.length; i++) {

    elChecked[i].addEventListener("change", function (evt) {
      evt.preventDefault();
      elBreadSize.textContent = "";
      elBreadSize.textContent = elChecked[i].id;
    })
  }
}


// fetch checkbox array
for (let i = 0; i < productsNamesArr.length; i++) {

  let elNewCheckBox = document.createElement("input");
  let newLi = document.createElement("li");
  let newLabel = document.createElement("label");

  elNewCheckBox.type = "checkbox";
  newLabel.textContent = productsNamesArr[i]
  newLabel.setAttribute("for", i);
  newLabel.setAttribute("class", "label-size");
  elNewCheckBox.setAttribute("class", "primary"); 

  elNewCheckBox.id = i;
  newLi.append(elNewCheckBox, newLabel);

  elNewCheckBox.addEventListener('change', function(evt) {
    evt.preventDefault();

    if(checkedProductNameArr.includes(newLabel.textContent)){

      let index = checkedProductNameArr.indexOf(this.value);
      checkedProductNameArr.splice(index, 1);

    }

    else {

      checkedProductNameArr.push(newLabel.textContent);

    }

    elPitsaOnProducts.innerHTML = " ";

    for(let i = 0; i < checkedProductNameArr.length; i++){

      let elNewLi = document.createElement("li");
      elNewLi.textContent = checkedProductNameArr[i];
      elPitsaOnProducts.appendChild(elNewLi);

    }

  })
  elCheckboxPart.append(newLi);
}





// qo'shimcha mahsulotlar feetch qilish 
for (let i = 0; i < addtionalProductNameArray.length; i++) {

  let eladdNewCheckBox = document.createElement("input");
  let newLii = document.createElement("li");
  let newLabell = document.createElement("label");

  eladdNewCheckBox.type = "checkbox";
  newLabell.textContent = addtionalProductNameArray[i]
  newLabell.setAttribute("for", addtionalProductNameArray[i]);

  newLabell.setAttribute("class", "label-size");
  eladdNewCheckBox.setAttribute("class", "primary"); 
  eladdNewCheckBox.id = i
  newLii.append(eladdNewCheckBox, newLabell);
  elAdditionalCheckboxPart.append(newLii);

  eladdNewCheckBox.addEventListener('change', function(evt) {
    
    evt.preventDefault();

    // belgilangan mahsulotni order listga qo'shishi kerak edi lekin qo'shmayapti
    if(addtionalProductNameArray.includes(newLabell.textContent)){

      let index = addtionalProductNameArray.indexOf(this.value);
      addtionalProductNameArray.splice(index, 1);

    }else {

      addtionalProductNameArray.push(newLabell.textContent);
      this.name = "retseps-adds";

    }

    elAdditionalList.innerHTML = " ";
    for(i = 0; i < checkedAdditonalArray.length; i++){

      let newLii = document.createElement("li");
      newLii.textContent = checkedAdditonalArray[i];
      elAdditionalList.appendChild(newLii);
      
    }  

  })
  
}
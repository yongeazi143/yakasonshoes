const initApp = () => {
  const buyersName = document.querySelector("#buyers_name");
  const busName = document.querySelector("#business_name");
  const emailId = document.querySelector("#email_id");
  const phoneNo = document.querySelector("#phone_no");
  const selectedShoes = document.querySelector("#shoe_type");
  const otherShoes = document.querySelector("#orders");
  const fileImg = document.querySelector("#file_id");
  const quantity = document.querySelector("#quantity");
  const checkWrap = document.querySelector("[check-container]");
  const checkedSizes = Array.from(
    document.querySelectorAll("input[type='checkbox'][name='sizes[]']")
  );
  const textArea = document.querySelector("textarea");
  const delivery = document.querySelector("#delivery_method");
  const orderBtn = document.querySelector("[data-submit-form]");
  const errorMessage = [...document.querySelectorAll("[error-message]")];

  // console.log(checkedSizes);

  // Resetting Focus styles for elements
  const errorBorder = (element) => {
    element.style.border = `1px solid rgb(185 28 28)`;
    element.classList.remove("valid");
  };
  const validBorder = (element) => {
    element.style.border = `1px solid rgb(209 213 219)`;
    element.classList.add("valid");
  };
  // Error Message Alert
  const error = (element, index) => {
    element.classList.add("error");
    errorMessage[index].classList.add("error-message");
  };
  function validateForm() {
    let isChecked = checkedSizes.some((check) => check.checked);
    // BuyersName Validation
    if (buyersName.value.trim() === "") {
      error(buyersName, 0);
      errorBorder(buyersName);
    } else {
      handleErrors();
    }
    // SchoolName Validation
    if (busName.value.trim() === "") {
      error(busName, 1);
      errorBorder(busName);
    } else {
      handleErrors();
    }
    // Email Validation
    if (emailId.value.trim() === "") {
      error(emailId, 2);
      errorBorder(emailId);
    } else {
      handleErrors();
    }
    //Phone no Validation
    if (phoneNo.value.trim() === "") {
      error(phoneNo, 3);
      errorBorder(phoneNo);
    } else {
      handleErrors();
    }
    // ShoeType Validation
    if (selectedShoes.value.trim() === "") {
      error(selectedShoes, 4);
      errorBorder(selectedShoes);
    } else {
      handleErrors();
    }
    // Other ShoeType Validation
    if (!(otherShoes.value.trim() === "")) {
      error(fileImg, 5);
      errorBorder(fileImg);
    } else {
      handleErrors();
    }
    // Quantity Validation
    if (quantity.value.trim() === "") {
      error(quantity, 6);
      errorBorder(quantity);
    } else {
      handleErrors();
    }

    // Selected sizes validation
    if (!isChecked) {
      error(checkWrap, 7);
      checkWrap.classList.remove("valid");
    } else {
      checkWrap.classList.remove("error");
      checkWrap.classList.add("valid");
    }

    // sizes quantity validation
    if (textArea.value.trim() === "") {
      error(textArea, 8);
      errorBorder(textArea);
    } else {
      handleErrors();
    }

    // Delivery Method Validation
    if (delivery.value.trim() === "") {
      error(delivery, 9);
      errorBorder(delivery);
    } else {
      handleErrors();
    }
    //  Reseting the class for error animation
    setTimeout(function () {
      buyersName.classList.remove("error");
      busName.classList.remove("error");
      emailId.classList.remove("error");
      phoneNo.classList.remove("error");
      selectedShoes.classList.remove("error");
      fileImg.classList.remove("error");
      quantity.classList.remove("error");
      textArea.classList.remove("error");
      delivery.classList.remove("error");
    }, 1000);

    function handleErrors() {
      let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      //Buyers Name
      if (!(buyersName.value.length < 3)) {
        buyersName.classList.remove("error");
        errorMessage[0].classList.remove("error-message");
        validBorder(buyersName);
      } else {
        error(buyersName, 0);
        buyersName.classList.add("error");
        errorBorder(buyersName);
      }
      //Business Name
      if (!(busName.value.length < 5)) {
        busName.classList.remove("error");
        errorMessage[1].classList.remove("error-message");
        validBorder(busName);
      } else {
        error(busName, 1);
        busName.classList.add("error");
        errorBorder(busName);
      }
      //Email Address
      if (emailId.value.match(pattern)) {
        emailId.classList.remove("error");
        errorMessage[2].classList.remove("error-message");
        validBorder(emailId);
      } else {
        emailId.classList.add("error");
        errorMessage[2].classList.add("error-message");
        // errorMessage[2].innerHTML = `Invalid Email Address `;
        errorBorder(emailId);
      }
      //Phone Number
      if (!(phoneNo.value.length < 11)) {
        phoneNo.classList.remove("error");
        errorMessage[3].classList.remove("error-message");
        validBorder(phoneNo);
      } else {
        error(phoneNo, 3);
        phoneNo.classList.add("error");
        errorBorder(phoneNo);
      }
      //Shoe Type
      if (!(selectedShoes.value.trim() === "")) {
        selectedShoes.classList.remove("error");
        errorMessage[4].classList.remove("error-message");
        validBorder(selectedShoes);
      } else {
        error(selectedShoes, 4);
        selectedShoes.classList.add("error");
        errorBorder(selectedShoes);
      }
      //Other Shoe Type
      if (otherShoes.value !== "" && otherShoes.value.length > 5) {
        let file = fileImg.files;
        if (file.length === 1) {
          fileImg.classList.remove("error");
          errorMessage[5].classList.remove("error-message");
          validBorder(fileImg);
        } else {
          error(fileImg, 5);
          errorBorder(fileImg);
        }
      } else {
        fileImg.classList.remove("error");
        fileImg.style.border = "";
        errorMessage[5].classList.remove("error-message");
      }
      //Quantity
      if (quantity.value !== "0" && quantity.value !== "") {
        quantity.classList.remove("error");
        errorMessage[6].classList.remove("error-message");
        validBorder(quantity);
      } else {
        // errorMessage[6].remove("error-message");
        error(quantity, 6);
        errorBorder(quantity);
      }

      //selected sizes
      if (!(textArea.value.length < 11)) {
        textArea.classList.remove("error");
        errorMessage[8].classList.remove("error-message");
        validBorder(textArea);
      } else {
        error(textArea, 8);
        textArea.classList.add("error");
        errorBorder(textArea);
      }
      //delivery
      if (delivery.value.length > 3) {
        delivery.classList.remove("error");
        errorMessage[9].classList.remove("error-message");
        validBorder(delivery);
      } else {
        error(delivery, 9);
        delivery.classList.add("error");
        errorBorder(delivery);
      }
    }

    // Keyup Event to Handle Errors
    buyersName.addEventListener("keyup", handleErrors);
    busName.addEventListener("keyup", handleErrors);
    emailId.addEventListener("keyup", handleErrors);
    phoneNo.addEventListener("keyup", handleErrors);
    selectedShoes.addEventListener("click", handleErrors);
    otherShoes.addEventListener("keyup", handleErrors);
    fileImg.addEventListener("change", handleErrors);
    quantity.addEventListener("keyup", handleErrors);
    checkedSizes.forEach((check) => {
      check.addEventListener("change", function () {
        //selected Sizes
        if (check.checked) {
          errorMessage[7].classList.remove("error-message");
          // checkWrap.classList.remove("error");
          // checkWrap.classList.add("valid");
        }
      });
    });
    textArea.addEventListener("keyup", handleErrors);
    delivery.addEventListener("keyup", handleErrors);
    if (
      buyersName.classList.contains("valid") &&
      busName.classList.contains("valid") &&
      emailId.classList.contains("valid") &&
      phoneNo.classList.contains("valid") &&
      selectedShoes.classList.contains("valid") &&
      quantity.classList.contains("valid") &&
      checkWrap.classList.contains("valid") &&
      textArea.classList.contains("valid") &&
      delivery.classList.contains("valid")
    ) {
      displayMessage();
      return;
    }
  }
  orderBtn.addEventListener("click", validateForm);
};

document.addEventListener("DOMContentLoaded", initApp);

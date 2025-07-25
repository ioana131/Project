function validateForm() {
    let salutation = document.querySelector("select[name='salutation']").value;
    let firstName = document.querySelector("input[name='firstName']").value;
    let lastName = document.querySelector("input[name='lastName']").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let email = document.querySelector("input[name='email']").value;
    let birthDate = document.querySelector("input[name='birthDate']").value;
    let address = document.querySelector("textarea[name='address']").value;
    let profilePic = document.querySelector("input[name='profilePic']").files;
    let cv = document.querySelector("input[name='cv']").files;
    let interests = document.querySelectorAll("input[type='checkbox']:checked");
    let contactMethods = document.querySelectorAll("input[name='contactMethods']:checked");
  
    let correct = 1;
  
    if (firstName == "" || lastName == "" || email == "" || address == "") {
      alert("Please fill out all the required fields.");
      correct = 0;
      return false;
    }
  
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      correct = 0;
      return false;
    }
      if (profilePic.length > 0) {
      if (!profilePic[0].type.startsWith("image/")) {
        alert("Please upload a valid image file for the profile picture.");
        correct = 0;
        return false;
      }
    }
  
    if (cv.length > 0) {
      if (cv[0].type !== "application/pdf") {
        alert("Please upload a valid PDF file for the CV.");
        correct = 0;
        return false;
      }
    }
  
    if (interests.length == 0) {
      alert("Please select at least one interest.");
      correct = 0;
      return false;
    }
  
    if (contactMethods.length == 0) {
      alert("Please select at least one contact method.");
      correct = 0;
      return false;
    }
  
    if (correct == 1) {
      alert("Success! Your form has been submitted.");
    }
  
    return correct == 1;
  }
  
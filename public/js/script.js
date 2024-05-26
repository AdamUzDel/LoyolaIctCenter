function showAlert() {
    alert("Thank you for contacting us! We will get back to you as soon as possible.");
  }
  
  function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;
    if (name == "" || email == "" || message == "") {
      alert("All fields are required. Please fill out the form completely.");
      return false;
    }
    return true;
  }
  
  function toggleMenu() {
    var menu = document.getElementById("navMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  
window.onscroll = () => {
  //searchForm.classList.remove("active");

  if (window.scrollY > 100) {
    document.querySelector("nav").classList.add("fixed");
    document.querySelector(".nav-logo").classList.remove("d-none");
  } else {
    document.querySelector("nav").classList.remove("fixed");
    document.querySelector(".nav-logo").classList.add("d-none");
  }
};
  
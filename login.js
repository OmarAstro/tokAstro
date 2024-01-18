function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ((password === "26/5" && username === "toka")) {
    window.location.href = "index1.html";
  }else if ((password === "112020" && username === "astro")) {
    window.location.href = "index1.html";
  }else {
    alert("كلمة المرور غير صحيحة");
  }
}

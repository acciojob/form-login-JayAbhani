function getFormvalue() {
  event.preventDefault(); // prevent reload

  const fname = document.querySelector('input[name="fname"]').value.trim();
  const lname = document.querySelector('input[name="lname"]').value.trim();

  alert(fname + " " + lname);
}

function validateForm() {
  let empID = document.getElementById("empID").value;
  let fName = document.getElementById("fName").value;
  let email = document.getElementById("email").value;
  let dept = document.getElementById("dept").value;
  let joinDate = document.getElementById("joinDate").value;
  let genderInput = document.querySelector('input[name="gender"]:checked');
  const gender = genderInput ? genderInput.value : "Not selected";
  let empType = Array.from(
    document.querySelectorAll('#empType input[type="checkbox"]:checked')
  ).map((cb) => cb.value);

  let empIDError = document.getElementById("empIDError");
  let fNameError = document.getElementById("fNameError");
  let emailError = document.getElementById("emailError");

  empIDError.innerText = "";
  fNameError.innerText = "";
  emailError.innerText = "";

  let isValid = true;

  let empIDPattern = /^EMP\d{3}$/;
  let fNamePattern = /^[A-Za-z ]+$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!empIDPattern.test(empID)) {
    empIDError.innerText = " * Employee ID not valid.";
    isValid = false;
  }
  if (!fNamePattern.test(fName)) {
    fNameError.innerText = " * Name can only contain alphabets and spaces";
    isValid = false;
  }
  if (!emailPattern.test(email)) {
    emailError.innerText = " * Enter a valid email address";
    isValid = false;
  }

  if (isValid) {
    const result = document.getElementById("result");
    result.innerHTML = `
        <table>
            <tr>
                <td><h4>Employee ID: </h4></td>
                <td><h4>${empID}</h4></td>
            </tr>
            <tr>
                <td><h4>Full Name: </h4></td>
                <td><h4>${fName}</h4></td>
            </tr>
            <tr>
                <td><h4>Email: </h4></td>
                <td><h4>${email}</h4></td>
            </tr>
            <tr>
                <td><h4>Department: </h4></td>
                <td><h4>${dept}</h4></td>
            </tr>
            <tr>
                <td><h4>Joining Date: </h4></td>
                <td><h4>${joinDate}</h4></td>
            </tr>
            <tr>
                <td><h4>Gender: </h4></td>
                <td><h4>${gender}</h4></td>
            </tr>
            <tr>
                <td><h4>Employee Type: </h4></td>
                <td><h4>${empType}</h4></td>
            </tr>
        </table>   
    `;
  }

  return false;
}

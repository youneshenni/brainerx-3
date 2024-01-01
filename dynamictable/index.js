document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = e.target[0].value;
  const lastName = e.target[1].value;
  const email = e.target[2].value;
  const number = e.target[3].value;

  const tableBody = document.querySelector("#myTable > tbody");
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.innerText = firstName;
  const td2 = document.createElement("td");
  td2.innerText = lastName;
  const td3 = document.createElement("td");
  td3.innerText = email;
  const td4 = document.createElement("td");
  td4.innerText = number;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tableBody.appendChild(tr);
  e.target.reset();
});

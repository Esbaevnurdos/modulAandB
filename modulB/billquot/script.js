document.addEventListener("DOMContentLoaded", function () {
  // Fetch bills data from the server
  fetch("/bills")
    .then((response) => response.json())
    .then((data) => {
      displayBills(data);
    })
    .catch((error) => console.error("Error:", error));

  // Function to display bills on the page
  function displayBills(bills) {
    const billsList = document.getElementById("bills-list");
    bills.forEach((bill) => {
      const billDiv = document.createElement("div");
      billDiv.classList.add("bill");
      billDiv.innerHTML = `
        <h3>${bill.month} ${bill.year}</h3>
        <p>User: ${bill.user}</p>
        <p>Total Cost: $${bill.totalCost}</p>
        <ul>
          ${bill.details
            .map(
              (item) => `
            <li>
              API: ${item.api}, Token: ${item.token}, Usage: ${item.usage} seconds, Price per Second: $${item.pricePerSecond}
            </li>
          `
            )
            .join("")}
        </ul>
      `;
      billsList.appendChild(billDiv);
    });
  }
});

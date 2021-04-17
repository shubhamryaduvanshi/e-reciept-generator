
document.querySelector('#btn').addEventListener('click', (e) => {
  e.preventDefault();
  const number = document.querySelector('#numeric').value;
  document.querySelector('.details').innerHTML = ''
  db.collection('receipts').onSnapshot(snapshot => {
    const receipts = snapshot.docs.filter(doc => {
      return doc.data().mob === number
    })
    receipts.forEach(receipt => {
      const receiptData = receipt.data()

      document.querySelector('.details').innerHTML += `
        <div class="receipts">
            <div class="receipt">
                <table style="width:100%">
                    <tr>
                        <th>${receiptData.currentDate}</th>
                    </tr>
                    <tr>
                      <td>Customer Name:</td>
                      <td>${receiptData.custname}</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>${receiptData.address}</td>
                    </tr>
                    <tr>
                      <td>Toy ID:</td>
                      <td>${receiptData.toyid}</td>
                    </tr>
                    <tr>
                      <td>Toy Name:</td>
                      <td>${receiptData.tname}</td>
                    </tr>
                    <tr>
                      <td>Quantity:</td>
                      <td>${receiptData.qty}</td>
                    </tr>
                    <tr>
                      <td>M.R.P.:</td>
                      <td>${receiptData.mrp}</td>
                    </tr>
                    <tr>
                      <td>Discount: </td>
                      <td>${receiptData.dis}</td>
                    </tr>
                    <tr>
                      <td>Price: </td>
                      <td>${receiptData.price}</td>
                    </tr>
                    <tr>
                      <td>Savings :- </td>
                      <td>${receiptData.savings}</td>
                    </tr>
                    <tr>
                      <td>Price to be paid:-  </td>
                      <td>${receiptData.totalprice}</td>
                    </tr>
                </table> <br>
            </div>
        </div>
        `
    })
  })
})


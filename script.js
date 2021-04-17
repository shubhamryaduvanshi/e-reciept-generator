

//dom
function showdetails(){
    var d=new Date();
    var custname=document.getElementById("cname").value;
    var mob=document.getElementById("cmob").value;
    var address=document.getElementById("caddr").value;
    var toyid=document.getElementById("toyid").value;
    var tname=document.getElementById("toyname").value;
    var qty = document.getElementById("toyqty").value;
    var mrp= document.getElementById("toymrp").value;
    var dis=document.getElementById("toydisc").value;
    var price=qty*mrp;
    var totalprice=(price-(price*dis/100));
    var savings=totalprice-price;

    db.collection('receipts').add({
        currentDate: d.toDateString(),
        custname,
        mob,
        address,
        toyid,
        tname,
        qty,
        mrp,
        dis,
        price,
        totalprice,
        savings,
    })

    document.getElementById("reciept-content").innerHTML=`Date:-<b> ${d.toDateString()}</b><br><br><br>
    Customer Name :<b>&nbsp;&nbsp;&nbsp;&nbsp;${custname}</b> <br> Mobile Number:<b>&nbsp;&nbsp;&nbsp;&nbsp;${mob}</b><br>
     Address:<b>&nbsp;&nbsp;&nbsp;&nbsp;${address}</b><br> <br> Toy ID: <b>&nbsp;&nbsp;&nbsp;&nbsp;${toyid}</b><br> Toy Name: <b>&nbsp;&nbsp;&nbsp;&nbsp;${tname}</b><br>
     Quantity: <b>&nbsp;&nbsp;&nbsp;&nbsp;${qty}</b><br>M.R.P.: <b>&nbsp;&nbsp;&nbsp;&nbsp;${mrp}</b><br>Discount: <b>&nbsp;&nbsp;&nbsp;&nbsp;${dis}%</b>
     <br><br>Total Price :-<b>&nbsp;&nbsp;&nbsp;&nbsp;${price}</b><br>Savings :<b>-&nbsp;&nbsp;&nbsp;&nbsp;${savings}</b><br><hr>Price to be paid:- <b>&nbsp;&nbsp;&nbsp;&nbsp;${totalprice}</b><br><br>`;
    
    document.getElementById("cname").value = '';
    document.getElementById("cmob").value = '';
    document.getElementById("caddr").value = '';
    document.getElementById("toyid").value = '';
    document.getElementById("toyname").value = '';
    document.getElementById("toyqty").value = '';
    document.getElementById("toymrp").value = '';
    document.getElementById("toydisc").value = '';
}  
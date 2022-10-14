var itemSelected = false;
var customerSelected = false;
var dateSelected = false;
var insertOrderId = false;
var insertOrderQty = false;

let amount = 0;
let orders = [];

$("#txtCustomer").change(function () {
    let id = $("#txtCustomer").val();

    for (const customer of customers) {
        if(customer.id == id){
            $("#txtCustomerIdOrderForm").val(customer.id);
            $("#txtName").val(customer.name);
            $("#txtSalary").val(customer.salary);
            $("#txtAddress").val(customer.address);
        }
    }
    customerSelected = true;
    checkValidity();
    $("#txtItem").focus();
});


$("#txtItem").change(function () {
    let itemCode = $("#txtItem").val();

    for (const item of items) {
        if(item.itemCode == itemCode){
            $("#txtItemCodeOrderForm").val(item.itemCode);
            $("#txtItemNameOrderForm").val(item.itemName);
            $("#txtPrice").val(item.itemPrice);
            $("#txtQtyOnH").val(item.itemQuantity);
        }
    }

    itemSelected = true;
    checkValidity();
    $("#txtOrderQty").focus();
});

function checkValidity() {

    if(itemSelected && customerSelected && dateSelected && insertOrderId && insertOrderQty){
        $("#btnAdd").attr("disabled",false);

    }else {
        $("#btnAdd").attr("disabled",true);

    }
}

$("#txtOrderQty").on("keyup",function () {
    insertOrderQty = true;

    checkValidity();
})

$("#btnAdd").click(function () {


    let qtyOnH = parseInt($("#txtQtyOnH").val());

    let orderQty = parseInt($("#txtOrderQty").val());

    if(qtyOnH<orderQty){
        alert("Not enough Quantity : (");
    }else{
        let price = $("#txtPrice").val() * $("#txtOrderQty").val();

        let row = "<tr><td>"+$("#txtItemCodeOrderForm").val()+"</td>"+"<td>"+$("#txtItemNameOrderForm").val()+"</td>"+"<td>"+$("#txtPrice").val()+"</td>"+"<td>"+$("#txtOrderQty").val()+"</td>"+"<td>"+price+"</td></tr>";

        $("#itemTable").append(row);

        var order = {
            itemCode : $("#txtItemCodeOrderForm").val(),
            itemName : $("#txtItemNameOrderForm").val(),
            itemPrice : $("#txtPrice").val(),
            orderQuantity : $("#txtOrderQty").val(),
            total : price
        }

        orders.push(order);

        viewFullAmount(orders);

        setQuantity($("#txtItemCodeOrderForm").val(),$("#txtOrderQty").val())

        clearAll();
    }


   /* let price = $("#txtPrice").val() * $("#txtOrderQty").val();

    let row = "<tr><td>"+$("#txtItemCodeOrderForm").val()+"</td>"+"<td>"+$("#txtItemNameOrderForm").val()+"</td>"+"<td>"+$("#txtPrice").val()+"</td>"+"<td>"+$("#txtOrderQty").val()+"</td>"+"<td>"+price+"</td></tr>";

    $("#itemTable").append(row);

    clearAll();*/

});

$("#txtOrderId").on("keyup",function (event) {
    /*coloredTextField("orderId");*/

    let regExp = /^(OD)[0-9]{3}$/;
    let correct = regExp.test($("#txtOrderId").val());
    if(!correct){
        $("#txtOrderId").css("border","2px solid red");
        $("#orderIdH5").text("OrderId is a required field : Pattern OD001");

        if(event.key == "Enter"){
            $("#txtOrderId").focus();
        }
    }else{
        $("#txtOrderId").css("border","2px solid green");
        $("#orderIdH5").text("");

        checkValidity();

        insertOrderId = true;

        if(event.key == "Enter"){
            $("#dateDate").focus();
        }
    }


});

$("#dateDate").change(function (event) {
    checkValidity();

    dateSelected = true;

    $("#txtCustomer").focus();

});
/*
function coloredTextField(textField,type){
    switch (type) {
       case "orderId" :
           let regExp = /^(OD)[0-9]{3}$/;
           let correct = regExp.test($("#txtOrderId").val());
           if(!correct){
               $("#txtOrderId").css("border","2px solid red");
               $("#orderIdH5").text("OrderId is a required field : Pattern OD001");
           }else{
               $("#txtOrderId").css("border","2px solid green");
               $("#orderIdH5").text("");
           }
           break;
        case "orderQuantity" :
            let regEx = /^[0-9]{1,}$/;
            let ok = regEx.test($("#txtOrderQty").val());
            if(!ok){
                $("#txtOrderQty").css("border","2px solid red");
                $("#orderQTYH5").text("Order Quantity is a required field ");
            }else{
                $("#txtOrderQty").css("border","2px solid green");
                $("#orderQTYH5").text("");
            }
            break;
    }
}*/

function setQuantity(codeItem, orderQty) {
    for (const item of items) {
        if(item.itemCode == codeItem){
            item.itemQuantity = item.itemQuantity-orderQty;
            break;
        }
    }
}

$("#txtOrderQty").on("keyup",function (event) {


    let regEx = /^[0-9]{1,}$/;
    let ok = regEx.test($("#txtOrderQty").val());
    if(!ok){
        $("#txtOrderQty").css("border","2px solid red");
        $("#orderQTYH5").text("Order Quantity is a required field ");
    }else{
        $("#txtOrderQty").css("border","2px solid green");
        $("#orderQTYH5").text("");

        if(event.key == "Enter"){

            let qtyOnH = parseInt($("#txtQtyOnH").val());

            let orderQty = parseInt($("#txtOrderQty").val());

            if(qtyOnH<orderQty){
                alert("Not enough Quantity : (");
            }else{
                let price = $("#txtPrice").val() * $("#txtOrderQty").val();

                let row = "<tr><td>"+$("#txtItemCodeOrderForm").val()+"</td>"+"<td>"+$("#txtItemNameOrderForm").val()+"</td>"+"<td>"+$("#txtPrice").val()+"</td>"+"<td>"+$("#txtOrderQty").val()+"</td>"+"<td>"+price+"</td></tr>";

                $("#itemTable").append(row);

                var order = {
                    itemCode : $("#txtItemCodeOrderForm").val(),
                    itemName : $("#txtItemNameOrderForm").val(),
                    itemPrice : $("#txtPrice").val(),
                    orderQuantity : $("#txtOrderQty").val(),
                    total : price
                }

                orders.push(order);

                viewFullAmount(orders);

                setQuantity($("#txtItemCodeOrderForm").val(),$("#txtOrderQty").val())

                clearAll();
            }
        }
    }


});


function disableTextFields() {
    $("#dateDate").attr("disabled",true);
    $("#txtOrderId").attr("disabled",true);
    $("#txtCustomer").attr("disabled",true);
    $("#txtCustomerIdOrderForm").attr("disabled",true);
    $("#txtName").attr("disabled",true);
    $("#txtSalary").attr("disabled",true);
    $("#txtAddress").attr("disabled",true);
}

function enableTextFields() {
    $("#dateDate").attr("disabled",false);
    $("#txtOrderId").attr("disabled",false);
    $("#txtCustomer").attr("disabled",false);
    $("#txtCustomerIdOrderForm").attr("disabled",false);
    $("#txtName").attr("disabled",false);
    $("#txtSalary").attr("disabled",false);
    $("#txtAddress").attr("disabled",false);
}

$(document).ready(function () {
    $("#btnAdd").attr("disabled",true);
    $("#btnPurchase").attr("disabled",true);
});

function viewFullAmount(orders) {
    let amount = 0;
    for (const order of orders) {
       amount += parseInt(order.total);
    }

    $("#txtTotal").text(amount);
}

function clearAll(){
  /*  $("#txtOrderId").val("");
    $("#txtCustomerIdOrderForm").val("");
    $("#txtName").val("");
    $("#txtSalary").val("");*/

    disableTextFields();

    $("#txtItemCodeOrderForm").val("");
    $("#txtItemNameOrderForm").val("");
    $("#txtPrice").val("");
    $("#txtQtyOnH").val("");
    $("#txtOrderQty").val("");

    itemSelected = false;
    insertOrderQty = false;

    $("#btnPurchase").attr("disabled",false);

    $("#txtItem").focus()

}

$("#txtDiscount").on("keyup",function (event) {
    if(event.key == "Enter"){
        let discount = parseInt($("#txtDiscount").val());
        let total = parseInt($("#txtTotal").text());

        let fullAmount = total - discount;

        $("#txtFullAmount").text(fullAmount);

        $("#txtCash").focus();
    }
});

$("#txtCash").on("keyup",function (event) {
    if(event.key == "Enter"){
        let fullAmount = parseInt($("#txtFullAmount").text());
        let cash = parseInt($("#txtCash").val());

        let balance = cash - fullAmount;

        $("#txtBalance").text(balance);

        $("#btnPurchase").focus();

    }
})







var itemSelected = false;
var customerSelected = false;
var dateSelected = false;
var insertOrderId = false;
var insertOrderQty = false;

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

    checkValidity();
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

    checkValidity();
});

function checkValidity() {
    let selected = $("#txtCustomer").selected;
    let selected1 = $("#txtItem").selected;

    if(selected){
        $("#btnAdd").attr("disabled",false);
        alert("disable button");
    }else {
        $("#btnAdd").attr("disabled",false);
        alert("enable button");
    }
}

$("#txtOrderQty").on("keyup",function () {
   /* checkValidity();*/
})

$("#btnAdd").click(function () {
   /* disableTextFields();*/

    checkValidity();

});

$("#txtOrderId").on("keyup",function () {
  /*  checkValidity();*/
});

$("#dateDate").change(function () {
    /*checkValidity();*/
})

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

/*
$(document).ready(function () {
    $("#btnAdd").attr("disabled",true);
    $("#btnPurchase").attr("disabled",true);
})
*/



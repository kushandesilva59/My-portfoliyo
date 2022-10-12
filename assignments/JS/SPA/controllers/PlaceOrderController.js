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
    customerSelected = true;
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

    itemSelected = true;
    checkValidity();
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
    disableTextFields();

    let price = $("#txtPrice").val() * $("#txtOrderQty").val();

    let row = "<td><td>"+$("#txtItemCodeOrderForm").val()+"</td>"+"<td>"+$("#txtItemNameOrderForm").val()+"</td>"+"<td>"+$("#txtPrice").val()+"</td>"+"<td>"+$("#txtOrderQty").val()+"</td>"+"<td>"+price+"</td></tr>";

    $("#itemTable").append(row);

});

$("#txtOrderId").on("keyup",function () {
    checkValidity();

    insertOrderId = true;
});

$("#dateDate").change(function () {
    checkValidity();

    dateSelected = true;
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





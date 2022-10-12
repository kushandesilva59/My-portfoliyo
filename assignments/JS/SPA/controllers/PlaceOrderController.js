

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
});


$("#txtItem").change(function () {
    let itemCode = $("#txtItem").val();

    for (const item of items) {
        if(item.itemCode == itemCode){
            $("#txtItemCodeOrderForm").val(item.itemCode);
            $("#txtItemNameOrderForm").val(item.itemName);
            $("#txtPrice").val(item.itemPrice);
            $("#txtOrderQty").val(item.itemQuantity);
        }
    }
});

function checkValidity() {
    if($("#txtCustomer").selected() && $("#txtItem").selected() && $("#txtOrderId").val() != "" && $("#dateDate").val() != ""){
        $("#btnAdd").attr("disabled",false);
    }else {
        $("#btnAdd").attr("disabled",true);
    }
}

$("#btnAdd").click(function () {
   /* disableTextFields();

    checkValidity();*/

    alert($("#dateDate").val());
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

})



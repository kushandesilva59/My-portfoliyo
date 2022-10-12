/*
$("#txtCustomer").change(function () {
   let id = $(this);

    for (const customer of customers) {
        if(id == customer.id){
            $("#txtCustomerIdOrderForm").val(customer.id);
            $("#txtName").val(customer.name);
            $("#txtSalary").val(customer.salary);
            $("#txtAddress").val(customer.address);
        }
    }
});*/

/*$(function () {
    $("#txtCustomer").change(function (){
        let element = $(this).find('option:selected');


       /!* for (const customer of customers) {
            if(id == customer.id){
                $("#txtCustomerIdOrderForm").val(customer.id);
                $("#txtName").val(customer.name);
                $("#txtSalary").val(customer.salary);
                $("#txtAddress").val(customer.address);
            }
        }*!/
    });
});*/

$("#txtCustomer").change(function () {
    var id = $("#txtCustomer").val();

    for (const customer of customers) {
        if(customer.id == id){
            $("#txtCustomerIdOrderForm").val(customer.id);
            $("#txtName").val(customer.name);
            $("#txtSalary").val(customer.salary);
            $("#txtAddress").val(customer.address);
        }
    }
});


/*
$("#txtCustomerIdOrderForm").val("p");
$("#txtName").val("k");
$("#txtSalary").val("10");
$("#txtAddress").val("a");*/

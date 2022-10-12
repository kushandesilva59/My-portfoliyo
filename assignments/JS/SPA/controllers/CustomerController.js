var customers = [];

$("#btnAddC").click(function () {
    var customer = {
        id : $("#txtCustomerID").val(),
        name : $("#txtCustomerName").val(),
        address : $("#txtCustomerAddress").val(),
        salary: $("#txtCustomerSalary").val()
    }

    alert("Do you really need to add this customer...?");

    customers.push(customer);

    clearTextFields();

    getAllCustomers();

    $("#txtCustomerID").focus();

});

$("#txtCustomerID").on("keyup",function (event) {
    let regEx = /^(C)[0-9]{3}$/;
    let ifCorrect = regEx.test($("#txtCustomerID").val());

    if(!ifCorrect){
        $("#txtCustomerID").css("border","1px solid red");
        $("#idH5").text("Cus Id is a required field : Pattern C001");

        if(event.key=="Enter"){
            $("#txtCustomerID").focus();
        }
    }else {
        $("#txtCustomerID").css("border","1px solid green");
        $("#idH5").text("");

        if(event.key=="Enter"){

            let searchCustomer1 = searchCustomer($("#txtCustomerID").val());


            if(searchCustomer1!=null){
                $("#txtCustomerName").val(searchCustomer1.name);
                $("#txtCustomerAddress").val(searchCustomer1.address);
                $("#txtCustomerSalary").val(searchCustomer1.salary);
            }else {
                $("#txtCustomerName").focus();
            }
        }
    }

    buttonDisable();


});

$("#txtCustomerName").on("keyup",function (event) {
    let regEx =  /^[A-z ]{4,}$/;
    let ifCorrect = regEx.test($("#txtCustomerName").val());

    if(!ifCorrect){
        $("#txtCustomerName").css("border","1px solid red");
        $("#nameH5").text("Cus name is a required field : Minimum 4, Max 20 Spaces allowed");

        if(event.key=="Enter"){
            $("#txtCustomerName").focus();
        }
    }else {
        $("#txtCustomerName").css("border","1px solid green");
        $("#nameH5").text("");

        if(event.key=="Enter"){
            $("#txtCustomerAddress").focus();
        }
    }

    buttonDisable();

});

function buttonDisable(){
    if($("#txtCustomerID").val()=="" || $("#txtCustomerName").val()=="" || $("#txtCustomerAddress").val()=="" || $("#txtCustomerSalary").val()=="" || $("#idH5").text()!="" || $("#nameH5").text()!="" || $("#addressH5").text()!="" || $("#salaryH5").text()!=""){
        $("#btnAddC").attr("disabled",true);
        return true;
    }else{
        $("#btnAddC").attr("disabled",false);
        return false;
    }
}

$("#btnUpdateC").click(function () {

    let ifUpdated = updateCustomer($("#txtCustomerID").val());

    if(ifUpdated){
        alert("Updated!..");
        clearTextFields();
    }else {
        alert("Something went wrong!..");
    }
});

$("#btnDeleteC").click(function () {

    let id = $("#txtCustomerID").val();
    let yesToDelete = confirm("Are you sure ?");

    if(yesToDelete){
        let ifDeleted = deleteCustomer(id);
        if(ifDeleted){
            alert("Deleted!..");
            clearTextFields();
        }else {
            alert("Something went wrong!..")
        }
    }else {

    }


});

function updateCustomer(cusId){
    let cus = searchCustomer(cusId);

    if(cus != null){

        cus.id = $("#txtCustomerID").val();
        cus.name = $("#txtCustomerName").val();
        cus.address = $("#txtCustomerAddress").val();
        cus.salary = $("#txtCustomerSalary").val();

        getAllCustomers();
        return true;
    }else {
        return false;
    }
}

function deleteCustomer(cusId){
    let cus = searchCustomer(cusId);

    if (cus != null) {
        let indexNumber = customers.indexOf(cus);
        customers.splice(indexNumber, 1);
        getAllCustomers();
        return true;
    } else {
        return false;
    }
}

$("#txtCustomerAddress").on("keyup",function (event) {
    let regEx = /^[A-z,-/0-9 ]{7,}$/;
    let ifCorrect = regEx.test($("#txtCustomerAddress").val());

    if(!ifCorrect){
        $("#txtCustomerAddress").css("border","1px solid red");
        $("#addressH5").text("Cus address is a required field : Minimum 7");

        if(event.key=="Enter"){
            $("#txtCustomerAddress").focus();

        }
    }else {
        $("#txtCustomerAddress").css("border","1px solid green");
        $("#addressH5").text("");

        if(event.key=="Enter"){
            $("#txtCustomerSalary").focus();

        }
    }

    buttonDisable();


});

$("#txtCustomerSalary").on("keyup",function (event) {
    let regEx = /^[.0-9]{3,}$/;
    let ifCorrect = regEx.test($("#txtCustomerSalary").val());

    if(!ifCorrect){
        $("#txtCustomerSalary").css("border","1px solid red");
        $("#salaryH5").text("Cus salary is a required field : Pattern 100.00 or 100");
    }else {
        $("#txtCustomerSalary").css("border","1px solid green");
        $("#salaryH5").text("");
    }

    let correct = buttonDisable();

    if(event.key=="Enter") {
        if (!correct) {
            var customer = {
                id: $("#txtCustomerID").val(),
                name: $("#txtCustomerName").val(),
                address: $("#txtCustomerAddress").val(),
                salary: $("#txtCustomerSalary").val()
            }

            alert("Do you really need to add this customer...?");

            customers.push(customer);
            getAllCustomers();

            clearTextFields();

            $("#txtCustomerID").focus();
        } else {
            alert("Something went wrong!..");
        }

    }
});

function bindClickEvent(){
    $("#tblCustomers>tr").click(function () {
        $("#txtCustomerID").val($(this).children(":eq(0)").text());
        $("#txtCustomerName").val($(this).children(":eq(1)").text());
        $("#txtCustomerAddress").val($(this).children(":eq(2)").text());
        $("#txtCustomerSalary").val($(this).children(":eq(3)").text());
    });
}



$("#btnGetAllC").click(function () {
    getAllCustomers()
});

function getAllCustomers() {
    $("#tblCustomers").empty();

    $("#txtCustomer").empty();

    for (let customer of customers) {
        let row = "<tr><td>"+customer.id+"</td> <td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>";
        $("#tblCustomers").append(row);


        let option = "<option value="+customer.id+">"+customer.id+"</option>>"
        $("#txtCustomer").append(option);
    }

    bindClickEvent();
}

function clearTextFields() {
    $("#txtCustomerID").val("").css("border","1px solid #ced4da");
    $("#txtCustomerName").val("").css("border","1px solid #ced4da");
    $("#txtCustomerAddress").val("").css("border","1px solid #ced4da");
    $("#txtCustomerSalary").val("").css("border","1px solid #ced4da");

    $("#idH5").text("");
    $("#nameH5").text("");
    $("#addressH5").text("");
    $("#salaryH5").text("");


}

function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id == cusID) {
            return customer;
        }
    }
    return null;

}
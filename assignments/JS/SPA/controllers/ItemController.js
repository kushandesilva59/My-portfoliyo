var items = [];

$("#btnAddI").click(function () {
    let itemCode = $("#txtItemCode").val();
    let itemName = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQuantity = $("#txtItemQuantity").val();

    var item = {
        itemCode : itemCode,
        itemName : itemName,
        itemPrice : itemPrice,
        itemQuantity : itemQuantity
    }


    alert("Do you really need to add this Item...?");

    items.push(item);

    clearTextFields();

    getAllItems();

    $("#txtItemCode").focus();

});

$("#btnGetAllI").click(function () {
    getAllItems();
});

$("#btnClearI").click(function () {
    clearTextFields();
});

$("#btnUpdateI").click(function () {
    let ifUpdated = updateItem($("#txtItemCode").val());

    if(ifUpdated){
        alert("Updated!..");
        clearTextFields();
    }else {
        alert("Something went wrong!..");
    }
});

function updateItem(itemCode) {
    let item = searchItem(itemCode);

    if(item != null){

        item.itemCode = $("#txtItemCode").val();
        item.itemName = $("#txtItemName").val();
        item.itemPrice = $("#txtItemPrice").val();
        item.itemQuantity = $("#txtItemQuantity").val();

        getAllItems();
        return true;
    }else {
        return false;
    }
}

function searchItem(itemCode) {
    for (let item of items) {
        if (item.itemCode == itemCode) {
            return item;
        }
    }
    return null;
}



function getAllItems() {
    $("#tblItems").empty();
    $("#txtItem").empty();

    for (let item of items) {
        let row = "<tr><td>"+item.itemCode+"</td> <td>"+item.itemName+"</td><td>"+item.itemPrice+"</td><td>"+item.itemQuantity+"</td></tr>";
        $("#tblItems").append(row);

        let option = "<option value="+item.itemCode+">"+item.itemCode+"</option>>"
        $("#txtItem").append(option);
    }

    bindClickEvent();
}

function bindClickEvent(){
    $("#tblItems>tr").click(function () {
        $("#txtItemCode").val($(this).children(":eq(0)").text());
        $("#txtItemName").val($(this).children(":eq(1)").text());
        $("#txtItemPrice").val($(this).children(":eq(2)").text());
        $("#txtItemQuantity").val($(this).children(":eq(3)").text());
    });
}


$("#txtItemCode").on("keyup",function (event) {
    let regExp = /^(I)[0-9]{3}$/;
    let ifCorrect = regExp.test($("#txtItemCode").val());

    if(!ifCorrect){
        $("#txtItemCode").css("border","1px solid red");
        $("#itemCodeH5").text("Item Code is a required field : Pattern I001");

        if(event.key=="Enter"){
            $("#txtItemCode").focus();
        }
    }else {
        $("#txtItemCode").css("border", "1px solid green");
        $("#itemCodeH5").text("");

        if (event.key == "Enter") {

            let searchItem1 = searchItem($("#txtItemCode").val());


            if (searchItem1 != null) {
                $("#txtItemName").val(searchItem1.itemName);
                $("#txtItemPrice").val(searchItem1.itemPrice);
                $("#txtItemQuantity").val(searchItem1.itemQuantity);
            } else {
                $("#txtItemName").focus();
            }
        }
    }

    buttonDisable();

});

$("#txtItemName").on("keyup",function (event) {
    let regExp = /^[A-z ]{3,}$/;
    let ifCorrect = regExp.test($("#txtItemName").val());

    if(!ifCorrect){
        $("#txtItemName").css("border","1px solid red");
        $("#itemNameH5").text("Item Name is a required field : Minimum 3");
    }else {
        $("#txtItemName").css("border","1px solid green");
        $("#itemNameH5").text("");
    }


    if(event.key=="Enter"){
        $("#txtItemPrice").focus();
    }

    buttonDisable();
})

$("#txtItemPrice").on("keyup",function (event) {
    let regExp = /^[0-9.]{2,}$/;
    let ifCorrect = regExp.test($("#txtItemPrice").val());

    if(!ifCorrect){
        $("#txtItemPrice").css("border","1px solid red");
        $("#itemPriceH5").text("Item Price is a required field : 10.00 or 10");
    }else {
        $("#txtItemPrice").css("border","1px solid green");
        $("#itemPriceH5").text("");
    }


    if(event.key=="Enter"){
        $("#txtItemQuantity").focus();
    }

    buttonDisable();

});

$("#txtItemQuantity").on("keyup",function (event) {
    let regExp = /^[0-9]{1,}$/;
    let ifCorrect = regExp.test($("#txtItemQuantity").val());

    if(!ifCorrect){
        $("#txtItemQuantity").css("border","1px solid red");
        $("#itemQuantityH5").text("Item Quantity is a required field");
    }else {
        $("#txtItemQuantity").css("border","1px solid green");
        $("#itemQuantityH5").text("");
    }


    if(event.key=="Enter"){
        var item = {
            itemCode: $("#txtItemCode").val(),
            itemName: $("#txtItemName").val(),
            itemPrice: $("#txtItemPrice").val(),
            itemQuantity: $("#txtItemQuantity").val()
        }

        alert("Do you really need to add this Item...?");

        items.push(item);
        getAllItems();

        //clear text fields
        clearTextFields();

        $("#txtItemCode").focus();
    }

    buttonDisable();

})

function clearTextFields() {
    $("#txtItemCode").val("").css("border","1px solid #ced4da");
    $("#txtItemName").val("").css("border","1px solid #ced4da");
    $("#txtItemPrice").val("").css("border","1px solid #ced4da");
    $("#txtItemQuantity").val("").css("border","1px solid #ced4da");

    $("#itemCodeH5").text("");
    $("#itemNameH5").text("");
    $("#itemPriceH5").text("");
    $("#itemQuantityH5").text("");

}



$("#btnDeleteI").click(function () {
    let id = $("#txtItemCode").val();
    let yesToDelete = confirm("Are you sure ?");

    if(yesToDelete){
        let ifDeleted = deleteItem(id);
        if(ifDeleted){
            alert("Deleted!..");
            clearTextFields();
        }else {
            alert("Something went wrong!..")
        }
    }else {

    }
});

function deleteItem(itemCode) {
    let item = searchItem(itemCode);

    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        getAllItems();
        return true;
    } else {
        return false;
    }
}

function buttonDisable(){
    if($("#txtItemCode").val()=="" || $("#txtItemName").val()=="" || $("#txtItemPrice").val()=="" || $("#txtItemQuantity").val()=="" || $("#idH5").text()!="" || $("#nameH5").text()!="" || $("#addressH5").text()!="" || $("#salaryH5").text()!=""){
        $("#btnAddI").attr("disabled",true);
        return true;
    }else{
        $("#btnAddI").attr("disabled",false);
        return false;
    }
}

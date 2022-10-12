let items = [];
let itemCodeFilled = false;
let itemNameFilled = false;
let itemPriceFilled = false;
let itemQuantityFilled = false;

$("#btnAddI").click(function () {
    let itemCode = $("#txtItemCodeItem").val();
    let itemName = $("#txtItemNameItem").val();
    let itemPrice = $("#txtItemPriceItem").val();
    let itemQuantity = $("#txtItemQuantityItem").val();

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

    $("#txtItemCodeItem").focus();

});

$("#btnGetAllI").click(function () {
    getAllItems();
});

$("#btnClearI").click(function () {
    clearTextFields();
});

$("#btnUpdateI").click(function () {
    let ifUpdated = updateItem($("#txtItemCodeItem").val());

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

        item.itemCode = $("#txtItemCodeItem").val();
        item.itemName = $("#txtItemNameItem").val();
        item.itemPrice = $("#txtItemPriceItem").val();
        item.itemQuantity = $("#txtItemQuantityItem").val();

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
        $("#txtItemCodeItem").val($(this).children(":eq(0)").text());
        $("#txtItemNameItem").val($(this).children(":eq(1)").text());
        $("#txtItemPriceItem").val($(this).children(":eq(2)").text());
        $("#txtItemQuantityItem").val($(this).children(":eq(3)").text());
    });
}


$("#txtItemCodeItem").on("keyup",function (event) {
    let regExp = /^(I)[0-9]{3}$/;
    let ifCorrect = regExp.test($("#txtItemCodeItem").val());

    if(!ifCorrect){
        $("#txtItemCodeItem").css("border","2px solid red");
        $("#itemCodeH5").text("Item Code is a required field : Pattern I001");

        if(event.key=="Enter"){
            $("#txtItemCodeItem").focus();
        }
    }else {
        $("#txtItemCodeItem").css("border", "2px solid green");
        $("#itemCodeH5").text("");

        if (event.key == "Enter") {

            let searchItem1 = searchItem($("#txtItemCodeItem").val());


            if (searchItem1 != null) {
                $("#txtItemNameItem").val(searchItem1.itemName);
                $("#txtItemPriceItem").val(searchItem1.itemPrice);
                $("#txtItemQuantityItem").val(searchItem1.itemQuantity);
            } else {
                itemCodeFilled = true;
                $("#txtItemNameItem").focus();
            }
        }
    }

    buttonDisable();

});

$("#txtItemNameItem").on("keyup",function (event) {
    let regExp = /^[A-z ]{3,}$/;
    let ifCorrect = regExp.test($("#txtItemNameItem").val());

    if(!ifCorrect){
        $("#txtItemNameItem").css("border","2px solid red");
        $("#itemNameH5").text("Item Name is a required field : Minimum 3");
    }else {
        $("#txtItemNameItem").css("border","2px solid green");
        $("#itemNameH5").text("");
    }


    if(event.key=="Enter"){
        itemNameFilled = true;
        $("#txtItemPriceItem").focus();
    }

    buttonDisable();
})

$("#txtItemPriceItem").on("keyup",function (event) {
    let regExp = /^[0-9.]{2,}$/;
    let ifCorrect = regExp.test($("#txtItemPriceItem").val());

    if(!ifCorrect){
        $("#txtItemPriceItem").css("border","1px solid red");
        $("#itemPriceH5").text("Item Price is a required field : 10.00 or 10");
    }else {
        $("#txtItemPriceItem").css("border","1px solid green");
        $("#itemPriceH5").text("");
    }


    if(event.key=="Enter"){
        itemPriceFilled = true;
        $("#txtItemQuantityItem").focus();
    }

    buttonDisable();

});

$("#txtItemQuantityItem").on("keyup",function (event) {
    let regExp = /^[0-9]{1,}$/;
    let ifCorrect = regExp.test($("#txtItemQuantityItem").val());

    if(!ifCorrect){
        $("#txtItemQuantityItem").css("border","2px solid red");
        $("#itemQuantityH5").text("Item Quantity is a required field");
    }else {
        $("#txtItemQuantityItem").css("border","2px solid green");
        $("#itemQuantityH5").text("");
    }

    itemQuantityFilled = true;

    let correct = buttonDisable();

    if(event.key=="Enter") {
        if (correct) {
            var item = {
                itemCode: $("#txtItemCodeItem").val(),
                itemName: $("#txtItemNameItem").val(),
                itemPrice: $("#txtItemPriceItem").val(),
                itemQuantity: $("#txtItemQuantityItem").val()
            }

            alert("Do you really need to add this customer...?");

            items.push(item);
            getAllItems();

            clearTextFields();

            $("#txtItemCodeItem").focus();
        } else {
            alert("Something went wrong!..");
        }

    }

    /*if(event.key=="Enter"){
        var item = {
            itemCode: $("#txtItemCodeItem").val(),
            itemName: $("#txtItemNameItem").val(),
            itemPrice: $("#txtItemPriceItem").val(),
            itemQuantity: $("#txtItemQuantityItem").val()
        }

        let confirmation = confirm("Do you really need to add this Item...?");

       if (confirmation){
           items.push(item);
           getAllItems();

           //clear text fields
           clearTextFields();
       }

        $("#txtItemCodeItem").focus();
    }

    buttonDisable();*/

})

function clearTextFields() {
    $("#txtItemCodeItem").css("border","1px solid #ced4da");
    $("#txtItemNameItem").css("border","1px solid #ced4da");
    $("#txtItemPriceItem").css("border","1px solid #ced4da");
    $("#txtItemQuantityItem").css("border","1px solid #ced4da");

    $("#txtItemCodeItem").val("");
    $("#txtItemNameItem").val("");
    $("#txtItemPriceItem").val("");
    $("#txtItemQuantityItem").val("");

   /* $("#txtItemCodeItem").val("").css("border","1px solid #ced4da");
    $("#txtItemNameItem").val("").css("border","1px solid #ced4da");
    $("#txtItemPriceItem").val("").css("border","1px solid #ced4da");
    $("#txtItemQuantityItem").val("").css("border","1px solid #ced4da");
*/
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
    if(itemCodeFilled && itemNameFilled && itemPriceFilled && itemQuantityFilled){
        $("#btnAddI").attr("disabled",false);
        return true;
    }else{
        $("#btnAddI").attr("disabled",true);
        return false;
    }
}

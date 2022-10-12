$("#itemsContent").css("display","none");
$("#customersContent").css("display","none");
$("#ordersContent").css("display","none");

$("#home").click(function () {
    $("#itemsContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#homeContent").css("display","inline");


});

$("#items").click(function () {
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#itemsContent").css("display","inline");
});

$("#customers").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#customersContent").css("display","inline");

});

$("#orders").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","inline");
});

$("#customerImage").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#customersContent").css("display","inline");

});

$("#itemImage").click(function () {
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#itemsContent").css("display","inline");
});

$("#ordersImage").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","inline");
});

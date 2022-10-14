$("#itemsContent").css("display","none");
$("#customersContent").css("display","none");
$("#ordersContent").css("display","none");
$("#orderDetailContent").css("display","none");

$("#home").click(function () {
    $("#itemsContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#orderDetailContent").css("display","none");
    $("#homeContent").css("display","inline");

});

$("#orderDetails").click(function () {
    $("#itemsContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#orderDetailContent").css("display","inline");
    $("#homeContent").css("display","none");

});

$("#items").click(function () {
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#orderDetailContent").css("display","none");
    $("#itemsContent").css("display","inline");
});

$("#customers").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#orderDetailContent").css("display","none");
    $("#customersContent").css("display","inline");

});

$("#orders").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#orderDetailContent").css("display","none");
    $("#ordersContent").css("display","inline");
});

$("#customerImage").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#orderDetailContent").css("display","none");
    $("#customersContent").css("display","inline");

});

$("#itemImage").click(function () {
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#ordersContent").css("display","none");
    $("#orderDetailContent").css("display","none");
    $("#itemsContent").css("display","inline");
});

$("#ordersImage").click(function () {
    $("#itemsContent").css("display","none");
    $("#homeContent").css("display","none");
    $("#customersContent").css("display","none");
    $("#orderDetailContent").css("display","none");
    $("#ordersContent").css("display","inline");
});

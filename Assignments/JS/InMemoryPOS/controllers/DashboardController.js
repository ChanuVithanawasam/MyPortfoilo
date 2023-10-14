// $(document).ready(function () {
//     $("#HomeSection").css('display', 'block');
//     $("#CustomerSection").css('display', 'none');
//     $("#ItemSection").css('display', 'none');
//     $("#OrderSection").css('display', 'none');
//     $("#OrderDetails").css('display', 'none');
// });

// $("#homeBtn").click(function () {
//     $("#HomeSection").css('display', 'block');
//     $("#CustomerSection").css('display', 'none');
//     $("#ItemSection").css('display', 'none');
//     $("#OrderSection").css('display', 'none');
//     $("#OrderDetails").css('display', 'none');
// });

// $("#customerBtn").click(function () {
//     $("#HomeSection").css('display', 'none');
//     $("#CustomerSection").css('display', 'block');
//     $("#ItemSection").css('display', 'none');
//     $("#OrderSection").css('display', 'none');
//     $("#OrderDetails").css('display', 'none');

//     $("#txtCustomerId").val(generateCustomerID());
// });

// $("#itemBtn").click(function () {
//     $("#HomeSection").css('display', 'none');
//     $("#CustomerSection").css('display', 'none');
//     $("#ItemSection").css('display', 'block');
//     $("#OrderSection").css('display', 'none');
//     $("#OrderDetails").css('display', 'none');

//     $("#txtItemsId").val(generateItemID());

// });

// $("#orderBtn").click(function () {
//     $("#HomeSection").css('display', 'none');
//     $("#CustomerSection").css('display', 'none');
//     $("#ItemSection").css('display', 'none');
//     $("#OrderSection").css('display', 'block');
//     $("#OrderDetails").css('display', 'none');

//     $("#orderId").val( generateOrderID());
//     setCurrentDate();
// });

// $("#orderDetailsBtn").click(function () {
//     $("#HomeSection").css('display', 'none');
//     $("#CustomerSection").css('display', 'none');
//     $("#ItemSection").css('display', 'none');
//     $("#OrderSection").css('display', 'none');
//     $("#OrderDetails").css('display', 'block');

//     loadAllOrders();
//     loadAllOrderDetails();
// });
$('#navCustomer').css('display','none');
$('#navItem').css('display','none');
$('#navOrder').css('display','none');

$('#CustomerSection').css('display','none');
$('#ItemsSection').css('display','none');
$('#OrderSection').css('display','none');

$('#btnCustomerViewMore').click(function (){
  $('#navHome').css('display','none');
  $('#navCustomer').css('display','');
  $('#navItem').css('display','none');
  $('#navOrder').css('display','none');

  $('#CustomerSection').css('display','');
  $('#HomeSection').css('display','none');
  $('#ItemsSection').css('display','none');
  $('#OrderSection').css('display','none');

});

$('#btnItemsViewMore').click(function (){
  $('#navItem').css('display','block');
  $('#navOrder').css('display','none');
  $('#navHome').css('display','none');
  $('#navCustomer').css('display','none');

  $('#CustomerSection').css('display','none');
  $('#HomeSection').css('display','none');
  $('#ItemsSection').css('display','');
  $('#OrderSection').css('display','none');

});
$('#btnOrderViewMore').click(function (){

  $('#navOrder').css('display','block');
  $('#navItem').css('display','none');
  $('#navHome').css('display','none');
  $('#navCustomer').css('display','none');

  $('#CustomerSection').css('display','none');
  $('#HomeSection').css('display','none');
  $('#ItemsSection').css('display','none');
  $('#OrderSection').css('display','');

});

$('.Home').click(function (){
  $('#navHome').css('display','block');
  $('#navCustomer').css('display','none');
  $('#navItem').css('display','none');
  $('#navOrder').css('display','none');

  $('#CustomerSection').css('display','none');
  $('#HomeSection').css('display','');
  $('#ItemsSection').css('display','none');
  $('#OrderSection').css('display','none');


});

$('.Customers').click(function (){
  $('#navHome').css('display','none');
  $('#navCustomer').css('display','block');
  $('#navItem').css('display','none');
  $('#navOrder').css('display','none');

  $('#CustomerSection').css('display','');
  $('#HomeSection').css('display','none');
  $('#ItemsSection').css('display','none');
  $('#OrderSection').css('display','none');


});

$('.Items').click(function (){
  $('#navItem').css('display','block');
  $('#navOrder').css('display','none');
  $('#navHome').css('display','none');
  $('#navCustomer').css('display','none');

  $('#CustomerSection').css('display','none');
  $('#HomeSection').css('display','none');
  $('#ItemsSection').css('display','');
  $('#OrderSection').css('display','none');

});
$('.Order').click(function (){

  $('#navOrder').css('display','block');
  $('#navItem').css('display','none');
  $('#navHome').css('display','none');
  $('#navCustomer').css('display','none');

  $('#CustomerSection').css('display','none');
  $('#HomeSection').css('display','none');
  $('#ItemsSection').css('display','none');
  $('#OrderSection').css('display','');

});
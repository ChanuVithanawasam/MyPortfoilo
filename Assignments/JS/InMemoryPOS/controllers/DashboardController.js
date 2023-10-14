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
/**
 * @ Global Scope
 */
var items = [];

/**
 * load all customers Button
 * */
$("#btnViewAllCustomer").click(function () {
    loadAllCustomers();
});

/**
 * Table Listener Click and Load textFields
 * */
function blindClickEvents() {
    $("#customerTable>tr").click(function () {
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();
        console.log(id, name, address, salary);

        $("#searchCustomerId").val(id);
        $("#nameUpdate").val(name);
        $("#addressUpdate").val(address);
        $("#salaryUpdate").val(salary);

        $("#searchCIdDelete").val(id);
        $("#disabledNameDelete").val(name);
        $("#disabledAddressDelete").val(address);
        $("#disabledSalaryDelete").val(salary);
    });
}

/**
 * Table Listener double click and Click and Remove textFields
 * */
function dblRowClickEventsCus() {
    $("#customerTable>tr").on('dblclick', function () {
        let deleteCusID = $(this).children().eq(0).text();
        yesNoAlertDelete(deleteCusID);
    });
}


/**
 * Search id and Load Table
 * */
$("#btnSearchCus").click(function () {
    var result = customers.find(({id}) => id === $("#searchCusId").val());
    console.log(result);

    if (result != null) {
        $("#customerTable").empty();
        var row = `<tr><td>${result.id}</td><td>${result.name}</td><td>${result.address}</td><td>${result.salary}</td></tr>`;
        $("#customerTable").append(row);

        $("#searchCustomerId").val(result.id);
        $("#nameUpdate").val(result.name);
        $("#addressUpdate").val(result.address);
        $("#salaryUpdate").val(result.salary);

        $("#searchCIdDelete").val(result.id);
        $("#disabledNameDelete").val(result.name);
        $("#disabledAddressDelete").val(result.address);
        $("#disabledSalaryDelete").val(result.salary);

    } else {
        emptyMassage();
        clearCDTextFields();
    }
});

/**
 * Auto Forces Input Fields Search
 * */
$('#searchCusId').keypress(function (event) {
    if (event.which === 13) {
        $('#btnSearchCus').focus();
    }
});
$('#btnSearchCus').keypress(function (event) {
    if (event.which === 13) {
        $('#searchCusId').focus();
    }
});


/**
 * clear Search input fields Values Button
 * */
$("#clearSearchCus").click(function () {
    searchCusId.value = '';
    clearCDTextFields();
    clearCUTextFields();
    loadAllCustomers();
});


/**
 * Save Model
 * */

/**
 * Save Model
 * Customer ID
 * */
function generateCustomerID() {
    if (customers.length > 0) {
        let lastId = customers[customers.length - 1].id;
        let digit = lastId.substring(6);
        let number = parseInt(digit) + 1;
        return lastId.replace(digit, number);
    } else {
        return "C00-001";
    }
}

/**
 * Button Add New Customer
 * */
$("#btnCSave").click(function () {

    //create object
    let CustomerArray = new customer(
        $("#txtCustomerId").val(),
        $("#txtCustomerName").val(),
        $("#txtCustomerAddress").val(),
        $("#txtCustomerSalary").val());

    clearTextFieldsC();

    //Alert Save
    saveUpdateAlert("Customer", "saved.");

    //Add the customer object to the array
    customers.push(CustomerArray);

    /* console.log(customers);*/
    $("#txtCustomerId").val(generateCustomerID());
    loadAllCustomers();
});

/**
 * Auto Forces Input Fields Save
 * */
$("#txtCustomerId").focus();
const regExCusID = /^(C00-)[0-9]{3,4}$/;
const regExCusName = /^[A-z ]{3,20}$/;
const regExCusAddress = /^[A-z0-9/ ]{4,30}$/;
const regExSalary = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];
customerValidations.push({
    reg: regExCusID,
    field: $('#txtCustomerId'),
    error: 'Customer ID Pattern is Wrong : C00-001'
});
customerValidations.push({
    reg: regExCusName,
    field: $('#txtCustomerName'),
    error: 'Customer Name Pattern is Wrong : A-z 3-20'
});
customerValidations.push({
    reg: regExCusAddress,
    field: $('#txtCustomerAddress'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidations.push({
    reg: regExSalary,
    field: $('#txtCustomerSalary'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

//disable tab key of all four text fields using grouping selector in CSS
$("#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keydown', function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});

$("#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keyup', function (event) {
    checkValidity(customerValidations);
});

$("#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('blur', function (event) {
    checkValidity(customerValidations);
});

$("#txtCustomerId").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusID, $("#txtCustomerId"))) {
        $("#txtCustomerName").focus();
    } else {
        focusText($("#txtCustomerId"));
    }
});


$("#txtCustomerName").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusName, $("#txtCustomerName"))) {
        focusText($("#txtCustomerAddress"));
    }
});

$("#txtCustomerAddress").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusAddress, $("#txtCustomerAddress"))) {
        focusText($("#txtCustomerSalary"));
    }
});

$("#txtCustomerSalary").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExSalary, $("#txtCustomerSalary"))) {
        if (event.which === 13) {
            $('#btnCSave').focus();
        }
    }
});

function setButtonStateCS(value) {
    if (value > 0) {
        $("#btnCSave").attr('disabled', true);
    } else {
        $("#btnCSave").attr('disabled', false);
    }
}

/**
 * clear input fields Values Method
 * */
function clearTextFieldsC() {
    txtCustomerId.value = '';
    txtCustomerName.value = '';
    txtCustomerAddress.value = '';
    txtCustomerSalary.value = '';
    $("#txtCustomerId").focus();
    checkValidity(customerValidations);
}

/**
 * clear input fields Values Button
 * */
$("#btnClearC").click(function () {
    clearTextFieldsC();
});

/**
 * load all customers Method
 * */
function loadAllCustomers() {

    //remove all the table body content before adding data
    $("#customerTable").empty();

    // get all customer records from the array
    for (var customer of customers) {
        console.log(customer);// customer object

        // Using String Literals to do the same thing as above
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;

        //then add it to the table body of customer table
        $("#customerTable").append(row);
    }
    blindClickEvents();
    dblRowClickEventsCus();
    loadAllCustomersForOption();
}

/**
 * Update Model
 * */

/**
 * Auto Forces Input Fields update
 * */

let customerValidationsUpdate = [];
customerValidationsUpdate.push({
    reg: regExCusID,
    field: $('#searchCustomerId'),
    error: 'Customer ID Pattern is Wrong : C00-001'
});
customerValidationsUpdate.push({
    reg: regExCusName,
    field: $('#nameUpdate'),
    error: 'Customer Name Pattern is Wrong : A-z 3-20'
});
customerValidationsUpdate.push({
    reg: regExCusAddress,
    field: $('#addressUpdate'),
    error: 'Customer Address Pattern is Wrong : A-z 0-9 ,/'
});
customerValidationsUpdate.push({
    reg: regExSalary,
    field: $('#salaryUpdate'),
    error: 'Customer Salary Pattern is Wrong : 100 or 100.00'
});

//disable tab key of all four text fields using grouping selector in CSS
$("#searchCustomerId,#nameUpdate,#addressUpdate,#salaryUpdate").on('keydown', function (event) {
    if (event.key === "Tab") {
        event.preventDefault();
    }
});

$("#searchCustomerId,#nameUpdate,#addressUpdate,#salaryUpdate").on('keyup', function (event) {
    checkValidity(customerValidationsUpdate);
});

$("#searchCustomerId,#nameUpdate,#addressUpdate,#salaryUpdate").on('blur', function (event) {
    checkValidity(customerValidationsUpdate);
});

$("#searchCustomerId").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusID, $("#searchCustomerId"))) {
        $("#nameUpdate").focus();
    } else {
        focusText($("#searchCustomerId"));
    }
});

$("#nameUpdate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusName, $("#nameUpdate"))) {
        focusText($("#addressUpdate"));
    }
});

$("#addressUpdate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExCusAddress, $("#addressUpdate"))) {
        focusText($("#salaryUpdate"));
    }
});

$("#salaryUpdate").on('keydown', function (event) {
    if (event.key === "Enter" && check(regExSalary, $("#salaryUpdate"))) {
        if (event.which === 13) {
            $('#bntUpdateCustomer').focus();
        }
    }
});

function setButtonStateCU(value) {
    if (value > 0) {
        $("#bntUpdateCustomer").attr('disabled', true);
    } else {
        $("#bntUpdateCustomer").attr('disabled', false);
    }
}

/**
 * Update Button
 * */
$("#bntUpdateCustomer").click(function () {
    let CustomerId = $("#searchCustomerId").val();
    let response2 = updateCustomers(CustomerId);
    if (response2) {
        saveUpdateAlert(CustomerId, "updated.");
        clearCUTextFields();
        checkValidity(customerValidationsUpdate);
    } else {
        unSucsessUpdateAlert(CustomerId);
    }
});

/**
 * Update Methods
 * */
function updateCustomers(CustomerId) {
    let customer = searchCustomer(CustomerId);
    if (customer != null) {
        customer.id = $("#searchCustomerId").val();
        customer.name = $("#nameUpdate").val();
        customer.address = $("#addressUpdate").val();
        customer.salary = $("#salaryUpdate").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}

function searchCustomer(cusId) {
    for (let customer of customers) {
        if (customer.id === cusId) {
            return customer;
        }
    }
    return null;
}

/**
 * clear input fields Values Method
 * */
function clearCUTextFields() {
    searchCustomerId.value = '';
    nameUpdate.value = '';
    addressUpdate.value = '';
    salaryUpdate.value = '';
}

/**
 * clear input fields Values Button
 * */
$("#btnUclearC").click(function () {
    clearCUTextFields();
});


/**
 * Delete Model
 * */


/**
 * Delete Model
 * Search id Enter Pressed And Load TextFields
 * */
$("#searchCIdDelete").keyup(function (event) {
    if (event.keyCode === 13) {
        var result = customers.find(({id}) => id === $("#searchCIdDelete").val());
        console.log(result);

        if (result != null) {
            $("#searchCIdDelete").val(result.id);
            $("#disabledNameDelete").val(result.name);
            $("#disabledAddressDelete").val(result.address);
            $("#disabledSalaryDelete").val(result.salary);
        } else {
            emptyMassage();
            clearCDTextFields();
        }
    }
});

/**
 * Delete Button
 * */
$("#btnDeleteCustomer").click(function () {
    let deleteID = $("#searchCIdDelete").val();

    yesNoAlertDelete(deleteID);
});

function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomers();
        clearCDTextFields();
        return true;
    } else {
        return false;
    }
}

/**
 * clear input fields Values Method
 * */
function clearCDTextFields() {
    searchCIdDelete.value = '';
    disabledNameDelete.value = '';
    disabledAddressDelete.value = '';
    disabledSalaryDelete.value = '';
}

/**
 * clear input fields Values Button
 * */
$("#btnDclearC").click(function () {
    clearCDTextFields();
});


/**
 * load all Items Button
 * */
$("#btnViewAllItems").click(function () {
    loadAllItems();
});

/**
 * Table Listener Click and Load textFields
 * */
function tblClickEventsI() {
    $("#ItemTable>tr").click(function () {
        let code = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let qty = $(this).children().eq(2).text();
        let price = $(this).children().eq(3).text();

        $("#searchItemId").val(code);
        $("#updateItemName").val(name);
        $("#updateItemQty").val(qty);
        $("#updateItemPrice").val(price);

        $("#searchDItemId").val(code);
        $("#DItemName").val(name);
        $("#DItemQty").val(qty);
        $("#DItemPrice").val(price);
    });
}

/**
 * Table Listener double click and Click and Remove textFields
 * */
$("#ItemTable").dblclick(function () {
    Swal.fire({
        title: 'Do you want to Delete the Select row?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: 'No',
        customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
            denyButton: 'order-3',
        }
    }).then((result) => {
        if (result.isConfirmed) {
            $(this).children('tr').eq(0).remove();
            Swal.fire('Delete!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Select row are not Delete', '', 'info')
        }
    })

});


/**
 * Save Model
 * */

/**
 * Button Add New Item
 * */
$("#btnISave").click(function () {

    //select all the four text fields and then get their typed values
    let itemCode = $("#txtItemsId").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemUnitPrice = $("#txtItemPrice").val();
    clearTextFieldsI();

    //Alert Save
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item has been saved',
        showConfirmButton: false,
        timer: 2500
    })

    // items object
    var itemObject = {
        code: itemCode,
        name: itemName,
        qty: itemQty,
        price: itemUnitPrice
    }

    //Add the item object to the array
    items.push(itemObject);

    /*console.log(items);*/

    loadAllItems();
});

/**
 * Auto Forces Input Fields Save
 * */

var regExItemCode = /^(I00-)[0-9]{3,4}$/;
var regExItemName = /^[A-z ]{3,20}$/;
var regExItemPrice = /^[0-9]{1,10}$/;
var regExItemQtyOnHand = /^[0-9]{1,3}$/;

$("#txtItemsId,#txtItemName,#txtItemQty,#txtItemPrice").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#txtItemsId').keypress(function (event) {
    let input = $("#txtItemsId").val();

    if (regExItemCode.test(input)) {
        $("#txtItemsId").css('border', '2px solid green');
        $("#lblItemId").text("");

        if (event.which === 13) {
            $('#txtItemName').focus();
        }
    } else {
        $("#txtItemsId").css('border', '2px solid red');
        $("#lblItemId").text("Wrong format : I00-001");
    }
});

$('#txtItemName').keypress(function (event) {
    let input = $("#txtItemName").val();

    if (regExItemName.test(input)) {
        $("#txtItemName").css('border', '2px solid green');
        $("#lblItemName").text("");

        if (event.which === 13) {
            $('#txtItemQty').focus();
        }
    } else {
        $("#txtItemName").css('border', '2px solid red');
        $("#lblItemName").text("Wrong format : Bun");
    }
});

$('#txtItemQty').keypress(function (event) {
    let input = $("#txtItemQty").val();

    if (regExItemQtyOnHand.test(input)) {
        $("#txtItemQty").css('border', '2px solid green');
        $("#lblItemQty").text("");

        if (event.which === 13) {
            $('#txtItemPrice').focus();
        }
    } else {
        $("#txtItemQty").css('border', '2px solid red');
        $("#lblItemQty").text("Wrong format : 5");
    }
});

$('#txtItemPrice').keypress(function (event) {
    let input = $("#txtItemPrice").val();

    if (regExItemPrice.test(input)) {
        $("#txtItemPrice").css('border', '2px solid green');
        $("#lblItemPrice").text("");

        if (event.which === 13) {
            $('#btnISave').focus();
        }
    } else {
        $("#txtItemPrice").css('border', '2px solid red');
        $("#lblItemPrice").text("Wrong format : 450");
    }
});

$('#btnISave').keypress(function (event) {
    if (event.which === 13) {
        $('#txtItemsId').focus();
    }
});


/**
 * clear input fields Values Method
 * */
function clearTextFieldsI() {
    txtItemsId.value = '';
    txtItemName.value = '';
    txtItemQty.value = '';
    txtItemPrice.value = '';
}

/**
 * clear input fields Values Button
 * */
$("#btnClearI").click(function () {
    clearTextFieldsI();
});

/**
 * load all Items Method
 * */
function loadAllItems() {

    //remove all the table body content before adding data
    $("#ItemTable").empty();


    // get all items records from the array
    for (var item of items) {
        console.log(item);// items object

        // Using String Literals to do the same thing as above
        var row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;

        //then add it to the table body of items table
        $("#ItemTable").append(row);
    }
    tblClickEventsI();
}

/**
 * Search id and Load Table
 * */
$("#btnSearchItem").click(function () {
    var resultI = items.find(({code}) => code === $("#ItemIdSearch").val());
    console.log(resultI);

    $("#ItemTable").empty();
    var row = `<tr><td>${resultI.code}</td><td>${resultI.name}</td><td>${resultI.qty}</td><td>${resultI.price}</td></tr>`;
    $("#ItemTable").append(row);

    $("#searchItemId").val(resultI.code);
    $("#updateItemName").val(resultI.name);
    $("#updateItemQty").val(resultI.qty);
    $("#updateItemPrice").val(resultI.price);

    $("#searchDItemId").val(resultI.code);
    $("#DItemName").val(resultI.name);
    $("#DItemQty").val(resultI.qty);
    $("#DItemPrice").val(resultI.price);

});

/**
 * Auto Forces Input Fields Search
 * */
$(document).ready(function () {
    $('#ItemIdSearch').keypress(function (event) {
        if (event.which === 13) {
            $('#btnSearchItem').focus();
        }
    });
    $('#btnSearchItem').keypress(function (event) {
        if (event.which === 13) {
            $('#ItemIdSearch').focus();
        }
    });
});

/**
 * clear Search input fields Values Button
 * */
$("#clearSearchItem").click(function () {
    ItemIdSearch.value = '';
    clearUTextFields();
    clearDTextFields();
});

/**
 * Update Model
 * */

/*

/!**
 * Update Model
 * Search id Enter Pressed And Load TextFields
 * *!/
$("#searchItemId").keyup(function (event) {
    if (event.keyCode === 13) {
        var resultI = items.find(({code}) => code === $("#searchItemId").val());
        console.log(resultI);

        $("#searchItemId").val(resultI.code);
        $("#updateItemName").val(resultI.name);
        $("#updateItemQty").val(resultI.qty);
        $("#updateItemPrice").val(resultI.price);

    }
});

*/

/**
 * Auto Forces Input Fields Update
 * */
$("#searchItemId,#updateItemName,#updateItemQty,#updateItemPrice").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

$('#searchItemId').keypress(function (event) {
    let input = $("#searchItemId").val();

    if (regExItemCode.test(input)) {
        $("#searchItemId").css('border', '2px solid green');
        $("#lblUItemId").text("");

        if (event.which === 13) {
            $('#updateItemName').focus();
        }
    } else {
        $("#searchItemId").css('border', '2px solid red');
        $("#lblUItemId").text("Wrong format : I00-001");
    }
});

$('#updateItemName').keypress(function (event) {
    let input = $("#updateItemName").val();

    if (regExItemName.test(input)) {
        $("#updateItemName").css('border', '2px solid green');
        $("#lblUItemName").text("");

        if (event.which === 13) {
            $('#updateItemQty').focus();
        }
    } else {
        $("#updateItemName").css('border', '2px solid red');
        $("#lblUItemName").text("Wrong format : Bun");
    }
});

$('#updateItemQty').keypress(function (event) {
    let input = $("#updateItemQty").val();

    if (regExItemQtyOnHand.test(input)) {
        $("#updateItemQty").css('border', '2px solid green');
        $("#lblUItemQty").text("");

        if (event.which === 13) {
            $('#updateItemPrice').focus();
        }
    } else {
        $("#updateItemQty").css('border', '2px solid red');
        $("#lblUItemQty").text("Wrong format : 5");
    }
});

$('#updateItemPrice').keypress(function (event) {
    let input = $("#updateItemPrice").val();

    if (regExItemPrice.test(input)) {
        $("#updateItemPrice").css('border', '2px solid green');
        $("#lblUItemPrice").text("");

        if (event.which === 13) {
            $('#btnUpdateItem').focus();
        }
    } else {
        $("#updateItemPrice").css('border', '2px solid red');
        $("#lblUItemPrice").text("Wrong format : 450");
    }
});

$('#btnUpdateItem').keypress(function (event) {
    if (event.which === 13) {
        $('#searchItemId').focus();
    }
});


/**
 * clear input fields Values Method
 * */
function clearUTextFields() {
    searchItemId.value = '';
    updateItemName.value = '';
    updateItemQty.value = '';
    updateItemPrice.value = '';
}

/**
 * clear input fields Values Button
 * */
$("#btnUclearI").click(function () {
    clearUTextFields();
});


/**
 * Delete Model
 * */

/*

/!**
 * Delete Model
 * Search id Enter Pressed And Load TextFields
 * *!/
$("#searchDItemId").keyup(function (event) {
    if (event.keyCode === 13) {
        var resultI = items.find(({code}) => code === $("#searchDItemId").val());
        console.log(resultI);

        $("#searchDItemId").val(resultI.code);
        $("#DItemName").val(resultI.name);
        $("#DItemQty").val(resultI.qty);
        $("#DItemPrice").val(resultI.price);

    }
});
*/


/**
 * clear input fields Values Method
 * */
function clearDTextFields() {
    searchDItemId.value = '';
    DItemName.value = '';
    DItemQty.value = '';
    DItemPrice.value = '';
}

/**
 * clear input fields Values Button
 * */
$("#btnDclearI").click(function () {
    clearDTextFields();
});
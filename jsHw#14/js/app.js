var data = [];

$(document).ready( function () {
    $('#table_id').DataTable({
        data: data,
        columnDefs: [
            {
                targets: "_all",
                className: 'dt-head-left'
            }
        ]
    });
    $('#table_id tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
});

function createRequest() {
    var elems = document.getElementById('request_form').elements;
    resetError(elems.name.parentNode);
    resetError(elems.phone.parentNode);
    resetError(elems.date.parentNode);

    $('#name_input').val('');
    $('#phone_input').val('');

    document.getElementById("modal-1").checked = true;
    document.getElementById('date_input').valueAsDate = new Date();
    
}

document.getElementById("cancel_btn").addEventListener("click", function(){
    document.getElementById("modal-1").checked = false;
});

function add(form) {
    var validForm = true;
    var elems = form.elements;

    resetError(elems.name.parentNode);
    if (!elems.name.value) {
        showError(elems.name.parentNode, ' Введите имя.');
        validForm = false;
    }

    resetError(elems.phone.parentNode);
    var phone_regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (!elems.phone.value || !phone_regex.test(elems.phone.value)) {
        showError(elems.phone.parentNode, ' Введите валидный номер.');
        validForm = false;
    }

    resetError(elems.date.parentNode);
    var date_regex = /^[2]{1}[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    if (!elems.date.value || !date_regex.test(elems.date.value)) {
        showError(elems.date.parentNode, ' Выберите валидную дату.');
        validForm = false;
    }

    if (validForm) {
        $('#table_id').DataTable().row.add([
            document.getElementById("name_input").value,
            document.getElementById("phone_input").value,
            document.getElementById("date_input").value,
            document.getElementById("type_input").value
        ]).draw(false);
        document.getElementById("modal-1").checked = false;
    }
}

function removeRecords() {
    if ($('#table_id').DataTable().rows('.selected').data().length > 0 && 
                confirm('Вы действительно хотите удалить эти обращения')) {
        $('#table_id').DataTable().rows('.selected').remove().draw( false );
    }    
}

function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}
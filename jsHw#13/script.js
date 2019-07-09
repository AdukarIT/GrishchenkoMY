$(function () {
    let photos = [];
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        method: "GET",
        dataType: "jsonp",
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error: " + jqXHR.status);
        },
        success: function (data) {
            console.log(data);
            photos = data;
        }
    });
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/albums",
        method: "GET",
        dataType: "json",
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error: " + textStatus, errorThrown);
        },
        success: function (data) {
            console.log(data);
            listOfFilms(data);
        }
    });
    function anyClick() {
        $('.list').on('click', function (event) {
            let thistarget = $(event.target);
            if (thistarget.parent().parent().hasClass('albom')) {
                let id = thistarget.parent().parent().attr('id');   
                addImage(id);
            }
        });
    }
    anyClick();
    function createFirstDivOfAlbom() {
        let listOfFilms = document.querySelector('.list');
        listOfFilms.innerHTML += `
        <div class='albom'>
            <img class='image hide' src='' >
            <h3 class='albom-title'><a href='#'></a></h3>
        </div>`;
    }
    function listOfFilms(data) {
        data.forEach(function (elem, i) {
            createFirstDivOfAlbom()
            let newDiv = $('.albom');
            fillingTitle(elem, newDiv[newDiv.length - 1], i + 1);
        });
    }
    function fillingTitle(data, div, i) {       
        div.querySelector('.albom a').textContent = i + '. ' + data.title;
        div.setAttribute("id", data.id);
    }
    function addImage(id) { 
        let index_obj_photo = photos.findIndex(function (obj) { return obj.albumId == id });
        console.log(photos[index_obj_photo]);
        let img = $('#' + id).find('.image');
        img.attr('src', photos[index_obj_photo]["thumbnailUrl"]);
        img.toggleClass('hide');
    }
});

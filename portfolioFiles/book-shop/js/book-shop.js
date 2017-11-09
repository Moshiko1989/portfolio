console.log('book-shop');

var gBooks = [{
    id: 1,
    name: 'Iron Man',
    price: 20,
    rate: 0
},
{
    id: 2,
    name: 'Hulk',
    price: 30,
    rate: 0
}

];

function init() {
    renderBooks(gBooks);
}

function renderBooks(objs) {
    var strHtml = '';
    for (var i = 0; i < objs.length; i++) {
        strHtml += '<tr><td>' + (i + 1) + '</td> \
                        <td>'+ objs[i].name + '</td> \
                        <td>'+ objs[i].price + '</td>\
                        <td><button onclick="rendeModals('+ i + ')" \
                        type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">\
                        Read</button></td>\
                        <td><button onclick="readAndUpdateBook('+ i + ')">Update</button></td>\
                        <td><button onclick="deleteBook('+ i + ')">Delete</button></td>\
                        </tr>'
    }
    var elBooksTable = document.querySelector('.books-table');
    elBooksTable.innerHTML = strHtml
}

function deleteBook(bookId) {
    gBooks.splice(bookId, 1);
    renderBooks(gBooks);
}

function readAndAddNewBook() {
    var name = prompt('name: ');
    var price = prompt('price: ');
    addBook(name, price);
    renderBooks(gBooks);
}

function addBook(name, price) {
    book = {
        name: name,
        price: price,
        rate: 0
    }
    gBooks.push(book);
}

function readAndUpdateBook(bookId) {
    var newPrice = prompt('Please enter a price: ');
    updateBook(bookId, newPrice);
    renderBooks(gBooks);
}

function updateBook(bookId, bookPrice) {
    gBooks[bookId].price = bookPrice;
}


function rendeModals(bookId) {
    var strHtml = '';

    strHtml += `
        <div class="modal fade" id="exampleModal" tabindex="-1" 
        role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">`+ gBooks[bookId].name + `</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h1>`+ gBooks[bookId].name + `</h1>
                    <img src="img/heros/`+ (bookId + 1) + `.png"/>
                    <p> Price: `+ gBooks[bookId].price + `</p>
                    <p id="rateVal"> Rate: `+ gBooks[bookId].rate + `</p>
                    <button onclick="rateBook(1,` + bookId + `)">
                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                    </button>
                    <button onclick="rateBook(-1,` + bookId + `)">
                    <i class="fa fa-thumbs-down" aria-hidden="true"></i>
                    </button>
                    <p>Lorem ipsum dolor sit amet, .</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
        </div>
        `

    var elModalContain = document.querySelector('.modal-container');
    elModalContain.innerHTML = strHtml;
}

function rateBook(val, bookId) {
    if (gBooks[bookId].rate === 10 && val > 0) return;
    if (gBooks[bookId].rate === 0 && val < 0) return;
    
    gBooks[bookId].rate += val;
    elRateVal = document.querySelector('#rateVal');
    elRateVal.innerText = 'Rate: ' + gBooks[bookId].rate;
}
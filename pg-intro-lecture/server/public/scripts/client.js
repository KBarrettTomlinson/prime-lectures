var editing = false;
var bookId = 0;
var editObject = {};

$(document).ready(function(){
  console.log('jQuery sourced');
  getBooks();

  $('#books').on('click','.delete', function(){
    var book = $(this).data('book');
    console.log("Inside delete on click, deleting book",book);


//COMPLETE DELETE USE URL PARAMETERS
    $.ajax({
      type: 'DELETE',
      url: 'books/delete/'+book, //use url parameters to pass variable of data book number
      success: function(response){
        console.log("You have sucessfully deleted id:", book, "response", response);
        getBooks();
      }//ends success
    });//ends ajax delete
  });//ends delete button on click

  //EDIT on click
  $('#books').on('click', '.edit',function(){
    editing = true;
    $('#formTitle').text("You are now editing...");
    bookID = $(this).data('book');
    var author = $(this).data('author');
    var title = $(this).data('title');

    $('#title').val(title);
    $('#author').val(author);


  });//ends edit on click

//submit on click
  $('#bookForm').on('submit', function(event){
    event.preventDefault();
    var title = $('#title').val();
    var author = $('#author').val();
    var publisher = $('#publisher').val();
    var year = $('#datePublished').val();
    if(editing){
      editing = false;
      $('#formTitle').text("Add new entry");
      console.log("Let's do a PUT, this will allow us to edit the databse, or UPDTATE it");
// COMPLETE PUT
      $.ajax({
        type: "PUT",
        url: "/books/edit",
        data: editObject,
        success: function(response) {
          console.log("you've succeeded??");
        }//end success
    }); //ends ajax put
    }//end if
    else{
      $.ajax({
        type: "POST",
        url: "/books/add",
        data: { title: $('#title').val(),
        author:$('#author').val(),
        publisher:$('#publisher').val(),
        year:$('#datePublished').val()},//ends data object
        success: function(response) {
          // Refresh our data
          getBooks();
        }
      });// ends POST
    }//ends else
    $('#title').val('');
    $('#author').val('');
    $('#publisher').val('');
    $('#datePublished').val('');
  });//ends on submit
});

function getBooks() {
  $.ajax({
    type: "GET",
    url: "/books",
    success: function(response) {
      console.log(response);
      $('#books').empty();
      for(var i = 0; i < response.length; i++) {
        var book = response[i];
        $('#books').append('<tr></tr>');
        var $el = $('#books').children().last();
        $el.append('<td>' + book.author + '</td>');
        $el.append('<td>' + book.title + '</td>');
        var bookPublisher = book.publisher;
        var publishDate = book.year;
        if (bookPublisher === null){
          bookPublisher = "";
        }
        if (publishDate === null){
          publishDate = "";
        }
        $el.append('<td>' + bookPublisher + '</td>');
        $el.append('<td>' + publishDate + '</td>');
        $el.append('<td><button class="delete" data-book="'+book.id+'" >byeeee!</button></td>');
        //NEED TO ADD DATA TAGS FOR PUBLISHER AND DATE
        $el.append('<td><button class="edit" data-book="'+
                  book.id+'" data-author="'+
                  book.author+'" data-publisher="'+
                  book.publisher+'" data-datePublished="'+
                  book.year+'">cha-cha-changes</button></td><br><br><br>');
      }
    }
  });
}

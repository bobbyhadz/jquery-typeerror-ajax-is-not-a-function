console.log('bobbyhadz.com');

$(document).ready(function () {
  $('#btn').click(function () {
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function (data) {
        console.log(data);
      },
    });
  });
});

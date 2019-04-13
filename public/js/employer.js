$("#edit-position-1").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("Edit Position 1");
});
$("#edit-position-2").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("Edit Position 2!");
});
$("#edit-position-3").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("Edit Position 3!");
});
$("#edit-positionUp").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("Edit Current Position!");
});

// Send Message to potential Canidates for Opening
$(".message").on("click", function(event) {
  event.preventDefault();

  alert("Send Message to Canidate");
});

$.urlParam = function(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  return results[1] || 0;
};

var user = $.urlParam("username");
console.log(user);
var apiString = "/api/emp/" + user;

$.get(apiString, function(data) {
  console.log(data);
  $("#company")
    .empty()
    .append(data.company);
  $("#expReq")
    .empty()
    .append(data.exp_req);

  $("#certReq")
    .empty()
    .append(data.cert_req);

  $("#openingA")
    .empty()
    .append(data.postion);
});

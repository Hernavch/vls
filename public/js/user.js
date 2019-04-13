$("#edit-certs").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("edit certifications!");
});
$("#edit-skills").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("edit certifications!");
});

$("#edit-status").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("Edit Status!");
});
$("#edit-target").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  alert("Edit Target Career!");
});
$("#edit-intrests").on("click", function(event) {
  event.preventDefault();
  //   edit the certifications in data.
  // Update /pull request
  // pull up form to edit
  prompt("Add Intrests!");

  function makeABtn() {
    $(".subwrapper").empty();

    for (var i = 0; i < topics.length; i++) {
      topicCount++;
      var btn = $("<button>");
      var name = intrests[i];
      btn.attr("class", "edit btn-primary " + intrests[i]);
      btn.attr("id", "topic-" + topicCount);
      btn.text(name);
      $(".subwrapper").append(btn);
      btn.attr("giftogif", topics);
    }
  }

  //var topic = $("#topic-input").val();

  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    var topic = $("#topic-input").val();
    topics.push(topic);
    console.log(topics);
    makeABtn();
  });

  makeABtn();
  console.log(topics);
});

$.urlParam = function(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  return results[1] || 0;
};

var user = $.urlParam("username");
console.log(user);
var apiString = "/api/can/" + user;

$.get(apiString, function(data) {
  console.log(data);
  $("#firstName")
    .empty()
    .append(data.first_name, " ", data.last_name);
  // $("#certOne")
  //     .empty()
  //     .append(CERT 0);

  // $("#certTwo")
  //     .empty()
  //     .append(CERT 1);

  // $("#certThree")
  //     .empty()
  //     .append(CERT 2);
});

$(document).ready(function() {
  var oneCode = "15-1133.00";
  var zip = "95628";
  console.log("outside");

  $.get("/api/get-res?onecode=" + oneCode + "&zip=" + zip, function(response) {
    console.log("inside");
    var res = JSON.parse(response);
    var schoolPrograms = res.SchoolPrograms;
    var school = schoolPrograms[0].SchoolName;
    var schoolUrl = schoolPrograms[0].SchoolUrl;
    var program = schoolPrograms[0].ProgramName;
    var duration = schoolPrograms[0].StudentGraduated;
    console.log(schoolUrl);

    var trainingInfo = $("<p>");
    trainingInfo.attr("id", "info-school");
    trainingInfo.attr("class", "card-body");
    $("#trainProgram")
      .empty()
      .append(program);

    $("#trainSchool")
      .empty()
      .append(school);

    $("#trainDuration")
      .empty()
      .append("Duration: ", duration);

    var trainLink = $("<a>");
    trainLink.attr("href", schoolUrl);
    trainLink.attr("alt", schoolUrl);
    trainLink.attr("target", "_blank");

    $("#schoolLink")
      .append(trainLink, schoolUrl)
      .append("</br>");
    //do stuff
  });

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
});

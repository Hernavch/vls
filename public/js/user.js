$("#edit-certs").on("click", function(event) {
   event.preventDefault();
//   edit the certifications in data.
// Update /pull request
// pull up form to edit
   alert("edit certifications!")
    });
$("#edit-skills").on("click", function(event) {
        event.preventDefault();
    //   edit the certifications in data.
    // Update /pull request
    // pull up form to edit
     alert("edit certifications!")
    });


 $("#edit-status").on("click", function(event) {
        event.preventDefault();
    //   edit the certifications in data.
    // Update /pull request
    // pull up form to edit
       alert("Edit Status!")
        });
 $("#edit-target").on("click", function(event) {
            event.preventDefault();
        //   edit the certifications in data.
        // Update /pull request
        // pull up form to edit
           alert("Edit Target Career!")
     });
 $("#edit-intrests").on("click", function(event) {
        event.preventDefault();
    //   edit the certifications in data.
    // Update /pull request
    // pull up form to edit
       prompt("Add Intrests!")

       function makeABtn(){
        $(".subwrapper").empty();
    
        for(var i = 0; i < topics.length; i++) {
            topicCount++;
            var btn= $("<button>");
            var name= intrests[i]
            btn.attr("class", "edit btn-primary "+ intrests[i]);
            btn.attr("id", "topic-"+ topicCount);
            btn.text(name);
            $(".subwrapper").append(btn);
            btn.attr("giftogif", topics);
           
        };
        
    
        }
    
    var topic = $("#topic-input").val();
    
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
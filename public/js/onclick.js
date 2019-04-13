$(document).ready(function() {
  $("#new-seekers-button").on("click", function() {
    $("#form-container").html(`
    <form id="new-candidate-form" name="new-candidate-form">
    <div class="card-body">
      <h3>NEW JOB SEEKER </h3><h5>signup form</h5>
    </div>
    <div class="input-group card-body">
      <label for="first_name">
        First name
        <sup class="required" title="Required">*</sup>
      </label>    <input type="text" name="first_name" id="first_name" class="required" autocapitalize="off" autofocus="autofocus" placeholder="First name">
    </div>
    <div class="input-group card-body">
      <label for="last_name">
        Last name
        <sup class="required" title="Required">*</sup>
      </label>      <input type="text" name="last_name" id="last_name" class="required" autocapitalize="off" placeholder="Last name">
    </div>
    <div class="input-group card-body">
      <label for="email">
        Email address
        <sup class="required" title="Required">*</sup>
      </label>    <input type="email" name="email" id="email" class="required" autocapitalize="off" placeholder="Email address">
    </div>
    <div class="input-group card-body">
      <label for="zip-code">
        Zip code
        <sup class="required" title="Required">*</sup>
      </label>    <input type="zip-code" name="location" id="zip-code" class="required" autocapitalize="off" placeholder="Zip code">
    </div>
    <div class="group">
      <div class="card-body">
        <h6>SURVEY</h6>
        <hr>
        <p>1. Tell us about the type of caregiving job are you seeking?</p>
        <input type="text" name="target" id="job-description" class="form-control" required>
       
        <br><p>2. How many years of experience do you have in this type of caregiving position?</p>
        <select name="exp" class="chosen-select" id="q2">
          <option value=""></option>
          <option value="0">none</option>
          <option value="1">1 year</option>
          <option value="2">2 years</option>
          <option value="3">3 years</option>
          <option value="4">4 years</option>
          <option value="5">5 years</option>
          <option value="6">6 years</option>
          <option value="7">7 years</option>
          <option value="8">8 years</option>
          <option value="9">9 years</option>
          <option value="10">10+ years</option>
        </select>
        <br><br><p>3. Are you seeking a full-time position, part-time, or an internship?</p>
        <select name="job_type" class="chosen-select" id="q3">
          <option value=""></option>
          <option value="1">full-time</option>
          <option value="2">part-time</option>
          <option value="3">internship</option>
        </select>
        <br><br><p>4. What is your current employment status?</p>
        <select name="status" class="chosen-select" id="q4">
          <option value=""></option>
          <option value="1">Unemployed</option>
          <option value="2">Employed</option>
        </select>   
        <br><br>
        <p>5. Please check the valid certificates that you currently possess.</p>
        <fieldset>
          <legend>Valid Certificates</legend>
          <div>
            <input type="checkbox" id="CPR" name="CPR" value=true>
            <label for="CPR">Cardiopulmonary Resuscitation | CPR</label>
          </div>
          <div>
            <input type="checkbox" id="BLS" name="BLS" value=true>
            <label for="BLS">Basic Life Support | BLS</label>
          </div>
          <div>
            <input type="checkbox" id="HCA" name="HCA" value=true>
            <label for="HCA">Home Care Aid | HCA-California</label>
          </div>
          <div>
            <input type="checkbox" id="CNA" name="CNA" value=true>
            <label for="CNA">Certified Nurse Assistant | CNA</label>
          </div>
          <div>
            <input type="checkbox" id="HHA" name="HHA" value=true>
            <label for="HHA">Home Health Aid | HHA</label>
          </div>
          <div>
            <input type="checkbox" id="DSP1" name="DSP1" value=true>
            <label for="DSP1">Direct Support Professional 1 | DSP-1</label>
          </div>
          <div>
            <input type="checkbox" id="DSP2" name="DSP2" value=true>
            <label for="DSP2">Direct Support Professional 2 | DSP-2</label>
          </div>
          <div>
            <input type="checkbox" id="CPI1" name="CPI1" value=true>
            <label for="CPI1">Crisis Prevention Intervention 1 | CPI-1</label>
          </div>
          <div>
            <input type="checkbox" id="CPI2" name="CPI2" value=true>
            <label for="CPI2">Crisis Prevention Intervention 2 | CPI-2</label>
          </div>
          <div>
            <input type="checkbox" id="RN" name="RN" value=true>
            <label for="RN">Registered Nurse | RN</label>
          </div>
        </fieldset>  
      </div>   
    </div>  
    <div class="card-body">   
      <label for="Email">Email</label>
      <input type="text" id="email" name="email" required>
      <br>
      <label for="password">Password</label>
      <input type="password" id="psw" name="password"  required>
      <input id="new-user-submit" type="submit" value="Submit"> 
    </div> 
    <br>
    </form>

  `);

    // action="./manager.html"
  });

  //   $("#new-employer-form").on("click", function() {
  //     $("#form-container").html(`
  //     <form id="new-employer-something" name="new-employer-" >

  //                 <h3>NEW EMPLOYER </h3><h5>signup form</h5>
  //               </div>
  //               <div class="input-group card-body">
  //                 <label for="first_name">
  //                   First name
  //                   <sup class="required" title="Required">*</sup>
  //                 </label>    <input type="text" name="first_name" id="first_name" class="required" autocapitalize="off" autofocus="autofocus" placeholder="First name">
  //               </div>
  //               <div class="input-group card-body">
  //                 <label for="last_name">
  //                   Last name
  //                   <sup class="required" title="Required">*</sup>
  //                 </label>      <input type="text" name="last_name" id="last_name" class="required" autocapitalize="off" placeholder="Last name">
  //               </div>
  //               <div class="input-group card-body">
  //                 <label for="email">
  //                   Email address
  //                   <sup class="required" title="Required">*</sup>
  //                 </label>    <input type="email" name="email" id="email" class="required" autocapitalize="off" placeholder="Email address">
  //               </div>
  //               <div class="input-group card-body">
  //                 <label for="zip-code">
  //                   Zip code
  //                   <sup class="required" title="Required">*</sup>
  //                 </label>    <input type="zip-code" name="location" id="zip-code" class="required" autocapitalize="off" placeholder="Zip code">
  //               </div>
  //               <div class="group" id="job-type">
  //                 <div class="card-body">
  //                   <h6>SURVEY</h6>
  //                   <hr>
  //                   <p>1. List the type of caregiving jobs you provide?</p>
  //                   <input type="text" id="job-type" class="form-control" required>
  //                   <br><br><p>2. Are you seeking full-time workers, part-time workers, or interns?</p>
  //                   <fieldset>
  //                       <legend></legend>
  //                       <div>
  //                         <input type="checkbox" id="FT" name="position" value=true>
  //                         <label for="FT">Full-Time</label>
  //                       </div>
  //                       <div>
  //                         <input type="checkbox" id="PT" name="position" value=true>
  //                         <label for="PT">Part-Time</label>
  //                       </div>
  //                       <div>
  //                         <input type="checkbox" id="intern" name="position" value=true>
  //                         <label for="intern">INTERN</label>
  //                       </div>
  //                     </fieldset>
  //                   <br><br>
  //                   <p>3. Please check the certificates that you expect from a candidate.</p>
  //                   <fieldset>
  //                     <legend>Valid Certificates</legend>
  //                     <div>
  //                       <input type="checkbox" id="CPR" name="CPR" value=true>
  //                       <label for="CPR">Cardiopulmonary Resuscitation | CPR</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="BLS" name="BLS" value=true>
  //                       <label for="BLS">Basic Life Support | BLS</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="HCA" name="HCA" value=true>
  //                       <label for="HCA">Home Care Aid | HCA-California</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="CNA" name="CNA" value=true>
  //                       <label for="CNA">Certified Nurse Assistant | CNA</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="HHA" name="HHA" value=true>
  //                       <label for="HHA">Home Health Aid | HHA</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="DSP1" name="DSP1" value=true>
  //                       <label for="DSP1">Direct Support Professional 1 | DSP-1</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="DSP2" name="DSP2" value=true>
  //                       <label for="DSP2">Direct Support Professional 2 | DSP-2</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="CPI1" name="CPI1" value=true>
  //                       <label for="CPI1">Crisis Prevention Intervention 1 | CPI-1</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="CPI2" name="CPI2" value=true>
  //                       <label for="CPI2">Crisis Prevention Intervention 2 | CPI-2</label>
  //                     </div>
  //                     <div>
  //                       <input type="checkbox" id="RN" name="RN" value=true>
  //                       <label for="RN">Registered Nurse | RN</label>
  //                     </div>
  //                   </fieldset>  <br><br>
  //               <div class="card-body">
  //                 <label for="email">Email</label>
  //                 <input type="text" id="email" name="email" required>
  //                 <br>
  //                 <label for="psw">Password</label>
  //                 <input type="password" id="psw" name="password"  required>
  //                 <input id="new-employer" type="submit" value="Submit">
  //               </div>
  //               <br>
  //             </div>
  //             </div>
  //             </form>
  //             <script src="./js/empSub.js"></script>
  // `);
  //     // empSubmit();
  //   });

  // AJAX CALL FOR EXISTING USER LOGIN
  $('form[name="login"]').on("submit", function(event) {
    //event.preventDefault();
    console.log("Hello World1!");
    var loginData = {
      username: $("login-name").val(),
      password: $("login-password").val()
    };
    //console.log("$", $);
    // $.ajax({
    //   type: "POST",
    //   url: "/login",
    //   data: loginData
    // }).then(function(res) {
    //   if (res === res.success) {
    //     window.location.href = "./manager.html";
    //   }
    // });
  });
  // AJAX CALL FOR NEW CANDIDATE SUBMIT FORM -----> WORKING
  $("#new-candidate-form").on("submit", function(event) {
    //event.preventDefault();
    //alert("Clicked!");
    console.log("Hello World2!");
    var paramObj = {};

    $(this)
      .serializeArray()
      .forEach(function(input) {
        paramObj[input.name] = input.value;
      });
    console.log(paramObj);
    $.post("/api/candidate", paramObj, function(res) {
      console.log(res);
      if (res === res.success) {
        // window.location.href = "./candidate.html"
      }
    });
  });
});

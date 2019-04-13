$("#new-employer-form").on("click", function() {
  //var empSubmit = function() {

  //};
  $("#form-container").html(
    `
        <form id="new-employer-something" name="new-employer-">
            <h3>NEW EMPLOYER </h3><h5>signup form</h5>
          </div>
          <div class="input-group card-body">
            <label for="username">
              User name
              <sup class="required" title="Required">*</sup>
            </label>    <input type="text" name="username" id="username" class="required" autocapitalize="off" autofocus="autofocus" placeholder="User name">
          </div>
          
          <div class="input-group card-body">
            <label for="company">
              Company
              <sup class="required" title="Required">*</sup>
            </label>    <input type="text" name="company" id="company" class="required" autocapitalize="off" placeholder="Company">
          </div>
          <div class="input-group card-body">
            <label for="zip-code">
              Zip code
              <sup class="required" title="Required">*</sup>
            </label>    <input type="zip-code" name="location" id="zip-code" class="required" autocapitalize="off" placeholder="Zip code">
          </div>
          <div class="group" id="job-type">
            <div class="card-body">
              <h6>SURVEY</h6>
              <hr>
              <p>1. List the type of caregiving jobs you provide?</p>
              <input type="text" id="job-type" class="form-control" required>
              <br><br><p>2. Are you seeking full-time workers, part-time workers, or interns?</p>
              <fieldset>
                  <legend></legend>
                  <div>
                    <input type="checkbox" id="FT" name="position" value="fullTime">
                    <label for="FT">Full-Time</label>
                  </div>
                  <div>
                    <input type="checkbox" id="PT" name="position" value="partTime">
                    <label for="PT">Part-Time</label>
                  </div>
                  <div>
                    <input type="checkbox" id="intern" name="position" value="intern">
                    <label for="intern">Intern</label>
                  </div>
                </fieldset>
              <br><br>
              <p>3. Please check the certificates that you expect from a candidate.</p>
              <fieldset>
                <legend>Valid Certificates</legend>
                <div>
                  <input type="checkbox" id="CPR" name="cert_CPR" value=true>
                  <label for="CPR">Cardiopulmonary Resuscitation | CPR</label>
                </div>
                <div>
                  <input type="checkbox" id="BLS" name="cert_BLS" value=true>
                  <label for="BLS">Basic Life Support | BLS</label>
                </div>
                <div>
                  <input type="checkbox" id="HCA" name="cert_HCA" value=true>
                  <label for="HCA">Home Care Aid | HCA-California</label>
                </div>
                <div>
                  <input type="checkbox" id="CNA" name="cert_CNA" value=true>
                  <label for="CNA">Certified Nurse Assistant | CNA</label>
                </div>
                <div>
                  <input type="checkbox" id="HHA" name="cert_HHA" value=true>
                  <label for="HHA">Home Health Aid | HHA</label>
                </div>
                <div>
                  <input type="checkbox" id="DSP1" name="cert_DSP1" value=true>
                  <label for="DSP1">Direct Support Professional 1 | DSP-1</label>
                </div>
                <div>
                  <input type="checkbox" id="DSP2" name="DSP2" value=true>
                  <label for="DSP2">Direct Support Professional 2 | DSP-2</label>
                </div>
                <div>
                  <input type="checkbox" id="CPI1" name="cert_CPI1" value=true>
                  <label for="CPI1">Crisis Prevention Intervention 1 | CPI-1</label>
                </div>
                <div>
                  <input type="checkbox" id="CPI2" name="cert_CPI2" value=true>
                  <label for="CPI2">Crisis Prevention Intervention 2 | CPI-2</label>
                </div>
                <div>
                  <input type="checkbox" id="RN" name="cert_RN" value=true>
                  <label for="RN">Registered Nurse | RN</label>
                </div>
              </fieldset>  <br><br>  
          <div class="card-body">   
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required>
            <br>
            <label for="psw">Password</label>
            <input type="password" id="psw" name="password"  required>
            <input id="new-employer" type="submit" value="Submit" formaction="./manager.html"> 
          </div> 
          <br>
        </div>
        </div>
        </form>
        
`
  );

  // AJAX CALL FOR NEW EMPLOYER SUBMIT FORM

  $("#new-employer").on("click", function(event) {
    //event.preventDefault();
    //alert('HEY THERE');
    console.log("Hello World3!");
    var paramObj = {};
    var certs_req = "";
    $("#new-employer-something")
      .serializeArray()
      .forEach(function(input) {
        if (input.name.substr(0, 4) === "cert") {
          certs_req += input.name.substr(5) + ",";
          console.log("1");
        } else {
          paramObj[input.name] = input.value;
          console.log("2");
        }
      });
    paramObj.certs_req = certs_req;
    console.log(paramObj);

    $.post("/api/opening", paramObj, function(res) {
      console.log(res);
      if (res === res.success) {
        // window.location.href = "./candidate.html"
      }
    });
  });
});

{
  /* <div class="input-group card-body">
            <label for="last_name">
              Last name
              <sup class="required" title="Required">*</sup>
            </label>      <input type="text" name="last_name" id="last_name" class="required" autocapitalize="off" placeholder="Last name">
          </div> */
}

// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
  // This function will query the PostgreSQL database and return grade data
  console.log("Fetching grade data...");
//Create a new request on the machine we're asking for data
let xhr = new XMLHttpRequest ();
//This is the address on the machine we're asking for data
let apiroute = "/api/grades";
//WHen the request changes status, we run this anonymous function
xhr.onreadystatechange = function(){
  let results;
  //check if done
  if(xhr.readyState === XMLHttpRequest.DONE){
    //check success
    if(xhr.status !== 200){
      console.error(`Could not get grades.
        \nstatus: ${xhr.status}`);
        return;
    }
    //And then call the function to update the HTML with our data
    populateGradebook(JSON.parse(xhr.responseText));
  };
};
xhr.open("get", apiroute, true);
xhr.send();
}
// TODO: Populate the table with grade data
function populateGradebook(data) {
  // This finction will take the fetched grade data and populate the table 
  console.log("populate gradebook with data:", data);
  let tableElm = document.getElementById("gradebook"); // Get the gradebook table element
  data.forEach(function(assignment){ //for each row of data we passed in
    let row = document.createElement('tr');
  let columns = {}; //Place for columns of info
  columns.name = document.createElement('td'); // First column will be name
  columns.name.appendChild(
    //concatenate first name, last name
   document.createTextNode(assignment.last_name + "," + assignment.first_name)
  );
  columns.grade = document.createElement('td'); //second column will be grade
  columns.grade.appendChild(
    document.createTextNode(assignment.total_grade)
  );
  row.appendChild(columns.name);
  row.appendChild(columns.grade);
  tableElm.appendChild(row);
});
}

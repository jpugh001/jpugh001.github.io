function fetchGradeData() {
    //query PostgreSQL and return grade date
    console.log("Fetching grade data...");
    //Create a new request for hTTP data
    let xhr = new XMLHttpRequest();
    //The adress on the machine where data is stored
    let apiroute = "/api/grade";
    //When the request changes status, run anonymous function
    xhr.onreadystylechange = function(){
        let reults;
        //check completion
        if (xhr.readyState === xhr.DONE){
            //Check success
            if(xhr.status !== 200){
            console.error (`Could not get grades. 
                Status: ${xhr.status}`);
        }
        //Call the func to update html with data
        populateGradeBook(JSON.parse(xhr.responseText));
    }
    }.bind(this);
    xhr.open("get",apiroute, true);
    xhr.send();
}
function populateGradebook(data) {
    //populate table with fetched data
    console.log("Populating gradebook with data", data);
    let tableElm = document.getElementById("gradebook"); //Get gradebook table element
    data.forEach(function(assignment){ //for each row of data
        let row = document.createElement("tr"); //create a table row element
        let columns= []; //Place to stick info
        columns.name = document.createElement('td');//first columns table data
        columns.grade.appendChild(
            //concanate  the full name: "last_name, first_name"
            document.createTextNode(assignment.last_name + "," +assignment.first_name)
        );
        columns.grade = document.createElement('td');//second column will be grade
        columns.grade.appendChild(
            //put name in text, optional figure out letter grade here
            //with either a bunch of conditions, or Javascript "switch" statement
            document.createTextNode(assignment.total_grade)
        );
        //add the table data columns to the table row
        row.appendChild(column.name);
        row.appendChild(colum.grade);
        //add the row to the table itselfto make the data visible
        tableElm.appendChild(row);
    });
}

function fetchGradeData() {
    console.log("Fetching grade data...");
    let xhr = new XMLHttpRequest();
    let apiroute = "/api/grade";
    xhr.onreadystylechange = function(){
        let reults;
        if (xhr.readyState === xhr.DONE){
            if(xhr.status !== 200){
            console.error (`Could not get grades. 
                Status: ${xhr.status}`);
        }
        populateGradeBook(JSON.parse(xhr.responseText));
    }
    }.bind(this);
    xhr.open("get",apiroute, true);
    xhr.send();
}
function populateGradebook(data) {
    console.log("Populating gradebook with data", data);
    let tableElm = document.getElementById("gradebook");
    data.forEach(function(assignment){
        let row = document.createElement("tr");
        let columns= [];
        columns.name = document.createElement('td');
        columns.grade.appendChild(
            document.createTextNode(assignment.total_grade)
        );
        row.appendChild(column.name);
        row.appendChild(colum.grade);
        tableElm.appendChild(row);
    });
}

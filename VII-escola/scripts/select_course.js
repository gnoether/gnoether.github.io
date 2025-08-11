
function updateContent(course_name) {
    fcourse_name = course_name + ".html";
    fetch(fcourse_name)
        .then(response => response.text())
        .then(data => {
            document.getElementById("course-content").innerHTML = data;
        });
}

function addEventToCourse(course_name) {
    document.getElementById(course_name).addEventListener("click", function() { updateContent(course_name) });
}

updateContent("curso0");

addEventToCourse("curso0");
addEventToCourse("curso1");
addEventToCourse("curso2");
addEventToCourse("curso3");
addEventToCourse("curso4");
addEventToCourse("curso5");


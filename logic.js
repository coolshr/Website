$.getScript('https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js', function() {
    //script is loaded and executed put your dependent JS here
    GitHubCalendar(".calendar", "coolshr", {
        global_stats: false,
        responsive: true
            // tooltips: false
    });
});
// $(document).ready(function() {
//     $(".nav-home").attr("id", "active");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll < 450) {
//             $(".nav-home").attr("id", "active");
//             $(".nav-achivements").attr("id", "");
//         } else if (scroll > 450) {
//             $(".nav-home").attr("id", "");
//             $(".nav-achivements").attr("id", "active");

//         }
//         // alert("scrool");
//     })
// });

fetch('https://codeforces.com/api/user.info?handles=The_coolshr')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        var n = data.result[0].rating;
        var node = document.createElement("KBD");
        var textnode = document.createTextNode(n);
        node.appendChild(textnode);
        document.getElementById('c_r').appendChild(node);
        var m = data.result[0].rank;
        // alert(m);
        var node2 = document.createElement("KBD");
        var textnode2 = document.createTextNode(m);
        node2.appendChild(textnode2);
        document.getElementById('rank').appendChild(node2);
        // console.log(n);
    })
    .catch((err) => {
        // Do something for an error here
    });
var a = 0;
var src_arr = [
    "https://www.scindia.edu/wp-content/uploads/2015/04/Scindia-Banners-012.jpg",
    "https://www.scindia.edu/wp-content/uploads/2015/04/Scindia-Banners-033.jpg",
    "https://www.scindia.edu/wp-content/uploads/2015/04/Scindia-Banners-032.jpg",
    "https://www.scindia.edu/wp-content/uploads/2015/04/Scindia-Banners-023.jpg",
    "https://www.scindia.edu/wp-content/uploads/2015/04/Scindia-Banners-043.jpg",
    "https://www.scindia.edu/wp-content/uploads/2015/04/Scindia-Banners-054.jpg"
]

$(document).ready(function() {

    $(".rot_img").click(function() {
        a = (a + 1) % 5;
        // console.log(a);
        $(this).attr("src", src_arr[a]);
    });

});
var a = 0;
$(document).ready(function() {


    $("#sub_btn").click(function() {
        var name = document.getElementById('username').value;
        if (name == "") {
            alert("Please enter a name");
            return;
        }
        if (a == 0) {
            $("#review_table").append("<tr ><th>Name</th><th>Skill</th><th>Proficiency</th></tr>");
            a = 1;

        }


        var skill = document.getElementById('skill').value;
        var level = document.getElementById('level').value;

        s = "<tr class=\"success\"><td>" + name + "</td><td>" + skill + "</td><td>" + level + "</td></tr>"

        table = $("#review_table");
        table.append(s);
        document.getElementById('username').value = "";
        document.getElementById('skill').value = "C";
        document.getElementById('level').value = "Proficient";

    });
});
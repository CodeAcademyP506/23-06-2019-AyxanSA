$("#add").click(function () {

    var title = $("#inputTitle").val();
    var rating = $("#inputRating").val();

    if (title == "" || Number(rating) < 1)
        return;


    var titles = [];

    $("table tbody tr").each(function (index, tr) {
        titles.push($(tr).find("td").first().text().toLowerCase());
    })

    if (titles.indexOf(title.toLowerCase()) == -1) {

        console.log("inline")

        var newRow = "<tr><td>"
            + title + "</td><td>"
            + rating + "</td><td><button>Delete</button></td></tr>"

        $("table tbody").append(newRow)

        $("#inputTitle").val("");
        $("#inputRating").val("");
    }
    else {
        alert("Artiq movcuddur, siyahidaki yeri " + (titles.indexOf(title.toLowerCase()) + 1))
    }
})

$("table").on("click", "button", function () {
    $(this).parent().parent().remove();
})

var reverse = false;

$("table thead th:first-child").click(function () {

    var trs = [];

    $("table tbody tr").each(function (index, tr) {
        trs.push($(tr));
    })

    trs = trs.sort(function (a, b) {

        item1 = a.find("td").first().text().toLowerCase();
        item2 = b.find("td").first().text().toLowerCase();
        return item1.localeCompare(item2)
    })

    if (reverse) {
        trs.reverse();
        reverse = false;
    } else {
        reverse = true;
    }
    $("table tbody").html(trs);
})
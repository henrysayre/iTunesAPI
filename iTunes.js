function search(){
    apiCall(document.getElementById("artistSelect").value);
}

function apiCall(artist){
    $.ajax({
        url: "https://itunes.apple.com/search?term=" + artist,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
            listResult(result);
        },
        error: function () {
            alert('Failed!');
        }
    });
}

function newFunction(result){
    var songs = result.results;
    var html = "<table border = '5'>";
    for (var i = 0; i < songs.length; i ++){
            $("#things").append(songs[i].trackName);
    }
}

function listResult(result){
    $("#things").empty();
    var songs = result.results;
    var html3 = "<table border = '1'>";
    for (var i = 0; i < songs.length; i++){
        html3 += "<tr>";
        html3 += "<td>" + songs[i].artistName + "</td>";
        html3 += "<td>" + songs[i].collectionName + "</td>";
        html3 += "<td>" + songs[i].trackName + "</td>";
        html3 += "<td>" + "Play Song:" + "</td>";
        html3 += "<td><audio controls='true' src=" + songs[i].previewUrl + " id= audio type='audio/m4a'></audio> + </td>";
        html3 += "<td> <img src='" + songs[i].artworkUrl100 + "'></td>";

        html3 += "</tr>";
    }
    html3 += "</table>";
    document.getElementById("resultLists").innerHTML = html3;
}


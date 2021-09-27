document.onload(new function () {
    $.get("https://my-json-server.typicode.com/MEssam64/messam64.github.io/posts")
        .done(fillPostsList);
});

var postId;


function fillPostsList(data) {
    var ul = document.getElementById("postsList");
    for (let i of data) {
        var li = document.createElement("li");
        var button = document.createElement("button");
        button.appendChild(document.createTextNode("comments"));
        button.setAttribute("onclick", "fetchcomment(" + i.id + ");");
        li.appendChild(document.createTextNode(i.id + " " + i.title));
        li.appendChild(button);
        ul.appendChild(li);
    }
}

function fetchcomment(selectPostId) {
    postId = selectPostId;
    $.get("https://my-json-server.typicode.com/MEssam64/messam64.github.io/comments")
        .done(fillCommentsList);
}

function fillCommentsList(data) {
    var ul = document.getElementById("commentsList");
    ul.innerHTML = '';
    for (let i of data) {
        if (i.postId === postId) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(i.body));
            ul.appendChild(li);
        }
    }
}


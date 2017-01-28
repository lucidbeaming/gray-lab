console.log(place);

function makenode(txtstring){
	var node = document.createElement("LI");
	cnvstring = document.createTextNode(txtstring);
	node.appendChild(cnvstring);
	return node;
}

window.onload = function() {

    for (var i = 0; i < gud.length; i++) {
        var isit = "Is it just ok? No, it's " + gud[i] + "!";
        console.log(isit);
        newli = makenode(isit);
        document.getElementById("canikickit").appendChild(newli);
    }

    Object.keys(bad).forEach(function(key, index) {
        var yepyep = "If your " + key + " are " + bad[key] + ", that's not " + gud[index];
        console.log(yepyep);
        document.getElementById("whatisit").appendChild("<li>" + yepyep + "</li>");
    });

};

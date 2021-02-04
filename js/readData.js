// =======
// Projects
// =======
fetch('../json/projects.json').then(function (response) {
    return response.json();
    }
).then(function (data) {
    appendData(data);
    }
).catch(function (err) {
    console.log('error: ' + err);
});

// ==========
// carousel
// ==========


function appendData(data) {
    let list = document.getElementById("list");

    for (let i = 0; i < data.length; i++) {

        // Add li
        let li = document.createElement("li");
        li.className = "item";

        // Add input
        let input = document.createElement("input");
        input.type= "radio";
        input.id = "radio_" + i;
        input.name = "basic_carousel";
        input.value = i;
        if(i === 0){
            input.checked = true;
        }
        li.appendChild(input);

        // Add Label
        let label = document.createElement("label");
        label.className = "label_" + data[i].Name;
        label.htmlFor = "radio_" + i;
        label.innerHTML = data[i].ProjectName;
        li.appendChild(label);
        
        // Right side
        let div = document.createElement("div");
        let h1 = document.createElement("h1");
        let p = document.createElement("p");
        let span = document.createElement("span");

        h1.innerHTML = data[i].Name;
        p.innerHTML = data[i].Description + '<br>' +
            '<a href="'+ data[i].Github  + '" target="_blank"><i class="fab fa-github-square"></i></a>' +
            '<a href="'+ data[i].Other  + '" target="_blank"><i class="fas fa-info-circle"></i></a>';
        span.className = "picto";

        div.className = "content content_" + data[i].Name;
        div.appendChild(span);
        div.appendChild(h1);
        div.appendChild(p);

        li.appendChild(div);

        // Append to main
        list.appendChild(li);

    }
}

fetch('escola_header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('escola-header').innerHTML = data;
    });


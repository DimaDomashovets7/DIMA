   document.getElementById('getTable')
    .addEventListener('click', loadDoc)
   
   
        function loadDoc() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    myFunction(this);
                }
            };
            xhttp.open("GET", "xml/price.xml", true);
            xhttp.send();
        }

        function myFunction(xml) {
            var i;
            var xmlDoc = xml.responseXML;
            var table = "<tr><th>Name</th><th>Price</th></tr>";
            var x = xmlDoc.getElementsByTagName("CD");
            for (i = 0; i < x.length; i++) {
                table += "<tr><td>" +
                    x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
                    "</td><td>" +
                    x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
                    "</td></tr>";
            }
            document.getElementById("demo").innerHTML = table;
        }
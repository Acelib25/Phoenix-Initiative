window.onload = function () {
    var ImageMap = function (map) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 5605;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = document.body.clientWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('map_ID'));
    imageMap.resize();
}

function fuck(){
    console.log("Fuck you")
}

let zone1 = "Also known as Zone-1. The primary objective is to ensure the peoples rights, those that are listed or natural. Governments will be redifined to allow the people more control of the government. Secondary objective is to place agents to ensure Objective 1 is met and prevent corrupt people from profiting."
let zone2 = "Zone 2: South America. Primary objective is to end the state of chaos and make a state of peace in this area. New laws, and leaders. Secondary objective is to place agents to ensure Objective 1 is met and prevent corrupt people from profiting."

function showInfo(info) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");
  var y = document.getElementById("info");

  // Add the "show" class to DIV
  x.className = "show";
  y.innerHTML = info;
}

function hideInfo(){
    var x = document.getElementById("snackbar");
    x.className = x.className.replace("show", "") 
}
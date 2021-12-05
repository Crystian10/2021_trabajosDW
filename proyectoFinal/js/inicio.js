$(document).ready(function () {
    console.log("document is ready");


    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
});


window.onload = function () {
    console.log("window is loaded");

};


function openNav() {
    document.getElementById("mySidebar").style.width = "240px";
    $('#categ-01').collapse('hide')
    $('#categ-02').collapse('hide')
    $('#categ-03').collapse('hide')
    $('#categ-04').collapse('hide')
    $('#categ-05').collapse('hide')
    $('#categ-06').collapse('hide')
    $('#categ-07').collapse('hide')
    $('#categ-08').collapse('hide')
    $('#categ-09').collapse('hide')
    $('#categ-10').collapse('hide')
    $('#categ-11').collapse('hide')
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

$(document).ready(function () {
    $(document).on('mouseup', function (e) {
        const container = $("#mySidebar");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            closeNav();
        }
    });
});

function toggleMyOffcanvas() {
    if (window.innerWidth < 576) {
        offcanvas_el.style.visibility = 'hidden';

        if (offcanvas_el.classList.contains('show')) {
            offcanvas.hide();
        }
    } else {
        if (!offcanvas_el.classList.contains('show')) {
            offcanvas.show();
        }
    }
}

function highlightNav() {
    var paths = location.pathname.split("/");
    paths.shift();
    paths = '/' + paths.join('/');
    paths = (paths == '/') ? '/' : paths.replace(/\/$/, "");
    const menuItem = document.querySelector('.offcanvas-body a[href="' + paths + '"]');
    if (menuItem) {
        menuItem.classList.add('active');
    }
}
window.onload = function () {
    toggleMyOffcanvas();
    highlightNav();
}
window.onresize = function () {
    toggleMyOffcanvas();
}


/*AUTOCOMPLETE*/
function autocomplete(inp, arr) {

    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

var productos = ["Arroz", "Aceite", "Fideos", "Conservas", "Chocolates", "Crystian", "Eduar", "Eliana", "Jairo"];

autocomplete(document.getElementById("buscador"), productos);
/*FIN AUTOCOMPLETE*/




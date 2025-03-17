
const logoNetflix = document.getElementById("logoNetflix");
const navbarNav = document.getElementById("navbarNav");
const liveAlertBtn = document.getElementById("liveAlertBtn");

if (logoNetflix) {
    logoNetflix.addEventListener("click", function () {
        navbarNav.classList.toggle("collapse");
    });
}

if (liveAlertBtn) {
    liveAlertBtn.addEventListener("click", function () {
        const alertMessage = `
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Sei sicuro di voler eliminare il profilo?</strong>
                <button type="button" class="btn btn-danger btn-sm" id="confirmDeleteBtn">Sì, Elimina</button>
                <button type="button" class="btn btn-secondary btn-sm" id="cancelDeleteBtn">Annulla</button>
            </div>
        `;

        document.getElementById('liveAlertPlaceholder').innerHTML = alertMessage;

        document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
            document.getElementById('liveAlertPlaceholder').innerHTML = '';
        });

        document.getElementById('cancelDeleteBtn').addEventListener('click', function () {
            document.getElementById('liveAlertPlaceholder').innerHTML = '';
        });
    });
}


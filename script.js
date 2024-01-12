function process() {
    const profileform = document.querySelector('#formprofile');
    const sectionform = document.querySelector('#formsection');

    document.getElementById("nama").innerHTML = document.getElementById("InputNama").value;
    document.getElementById("role").innerHTML = document.getElementById("InputRole").value;
    document.getElementById("availability").innerHTML = document.getElementById("InputAvailability").value;
    document.getElementById("usia").innerHTML = document.getElementById("InputUsia").value;
    document.getElementById("lokasi").innerHTML = document.getElementById("InputLokasi").value;
    document.getElementById("yearsexp").innerHTML = document.getElementById("InputYearsExp").value;
    document.getElementById("email").innerHTML = document.getElementById("InputEmail").value;

    profileform.reset();
    sectionform.remove();
    return false;
};


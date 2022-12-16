function update(){
    let start = document.getElementById('dateStart').value;
    let end = document.getElementById('dateEnd').value;
    let guests = document.getElementById('numberGuests').value;
    document.getElementById('toUpdate').innerHTML = `${start} do ${end} • ${guests} gości`;
}
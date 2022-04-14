fetch('http://localhost:8888/drivers')
    .then(res => res.json())
    .then(jsonArr => {
        displayDrivers(jsonArr);

        document.getElementById('newDriver').addEventListener('submit', handleNewDriver);

        const arrBtns = document.querySelectorAll('.delBtn');
        for(const btn of arrBtns)
        {
            btn.addEventListener('click', handleDeleteDriver);
        }
        const arrayBtns = document.querySelectorAll('.updtBtn');
        for(const btn of arrayBtns)
        {
            btn.addEventListener('click', handleUpdateDriver);
        }
    });

fetch('http://localhost:8888/cars')
    .then(res => res.json())
    .then(jsonArr => {
        displayCars(jsonArr);

        document.getElementById('newCar').addEventListener('submit', handleNewCar);

        const arrBtns = document.querySelectorAll('.delBtn');
        for(const btn of arrBtns)
        {
            btn.addEventListener('click', handleDeleteCar);
        }
        const arrayBtns = document.querySelectorAll('.updtBtn');
        for(const btn of arrayBtns)
        {
            btn.addEventListener('click', handleUpdateCar);
        }
    });

fetch('http://localhost:8888/tracks')
    .then(res => res.json())
    .then(jsonArr => {
        displayTracks(jsonArr);

        document.getElementById('newTrack').addEventListener('submit', handleNewTrack);

        const arrBtns = document.querySelectorAll('.delBtn');
        for(const btn of arrBtns)
        {
            btn.addEventListener('click', handleDeleteTrack);
        }
        const arrayBtns = document.querySelectorAll('.updtBtn');
        for(const btn of arrayBtns)
        {
            btn.addEventListener('click', handleUpdateTrack);
        }
    });

function handleUpdateDriver(event)
{
    const driverID = event.currentTarget.value;
    fetch('http://localhost:8888/drivers/' + driverID,
    {
        method: 'PUT',
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
}
function handleUpdateCar(event)
{
    const carID = event.currentTarget.value;
    fetch('http://localhost:8888/cars/' + carID,
    {
        method: 'PUT',
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
}
function handleUpdateTrack(event)
{
    const trackID = event.currentTarget.value;
    fetch('http://localhost:8888/tracks/' + trackID,
    {
        method: 'PUT',
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
}

function handleDeleteDriver(event)
{
    const driverID = event.currentTarget.value;
    fetch('http://localhost:8888/drivers/' + driverID,
    {
        method: 'DELETE',
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
}

function handleDeleteCar(event)
{
    const carID = event.currentTarget.value;
    fetch('http://localhost:8888/cars/' + carID,
    {
        method: 'DELETE',
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
}

function handleDeleteTrack(event)
{
    const trackID = event.currentTarget.value;
    fetch('http://localhost:8888/tracks/' + trackID,
    {
        method: 'DELETE',
    })
    .then(res=>res.text())
    .then(res=>console.log(res))
}

function handleNewDriver(event)
{
    event.preventDefault();
    const fd = new FormData(document.getElementById('newDriver'));

    fetch('http://localhost:8888/drivers',
    {
        method:'POST',
        body: fd
    });
}

function handleNewCar(event)
{
    event.preventDefault();
    const fd = new FormData(document.getElementById('newCar'));

    fetch('http://localhost:8888/cars',
    {
        method:'POST',
        body: fd
    });
}

function handleNewTrack(event)
{
    event.preventDefault();
    const fd = new FormData(document.getElementById('newTrack'));

    fetch('http://localhost:8888/tracks',
    {
        method:'POST',
        body: fd
    });
}

function displayCars(jsonArr) {
    const carsTable = document.querySelector('#carsTable');

    const domTable = document.createElement('table');
    domTable.setAttribute('border','1');

    const domHeaderRow = document.createElement('tr');

    const domHeaderColYear = document.createElement('th');
    domHeaderColYear.innerText = "Year";

    const domHeaderColMake = document.createElement('th');
    domHeaderColMake.innerText = "Make";

    const domHeaderColModel = document.createElement('th');
    domHeaderColModel.innerText = "Model";

    const domHeaderColType = document.createElement('th');
    domHeaderColType.innerText = "Type";

    const domHeaderColHP = document.createElement('th');
    domHeaderColHP.innerText = "Horse Power";

    const domHeaderColSpeed = document.createElement('th');
    domHeaderColSpeed.innerText = "Top Speed";

    const domHeaderColTrans = document.createElement('th');
    domHeaderColTrans.innerText = "Transmission";

    const domHeaderColDTrain = document.createElement('th');
    domHeaderColDTrain.innerText = "Drive-Train";

    domHeaderRow.appendChild(domHeaderColYear);
    domHeaderRow.appendChild(domHeaderColMake);
    domHeaderRow.appendChild(domHeaderColModel);
    domHeaderRow.appendChild(domHeaderColType);
    domHeaderRow.appendChild(domHeaderColHP);
    domHeaderRow.appendChild(domHeaderColSpeed);
    domHeaderRow.appendChild(domHeaderColTrans);
    domHeaderRow.appendChild(domHeaderColDTrain);

    domTable.appendChild(domHeaderRow);

    for(json of jsonArr) {
        let domTR = document.createElement('tr');

        let domTDYear = document.createElement('td');
        domTDYear.innerText = json.Year;

        let domTDMake = document.createElement('td');
        domTDMake.innerText = json.Make;

        let domTDModel = document.createElement('td');
        domTDModel.innerText = json.Model;

        let domTDType = document.createElement('td');
        domTDType.innerText = json.Type;

        let domTDHP = document.createElement('td');
        domTDHP.innerText = json.Horse_Power;

        let domTDSpeed = document.createElement('td');
        domTDSpeed.innerText = json.Top_Speed;

        let domTDTrans = document.createElement('td');
        domTDTrans.innerText = json.Transmission;

        let domTDDTrain = document.createElement('td');
        domTDDTrain.innerText = json.DriveTrain;

        let domTDDel = document.createElement('td');
        domTDDel.innerHTML = `<button class="delBtn" value=${json.ID}><i class="material-icons">delete</i></button>`;

        let domTDUpdate = document.createElement('td');
        domTDUpdate.innerHTML = `<button class="uptdBtn" value=${json.ID}>Update</button>`;

        domTR.appendChild(domTDYear);
        domTR.appendChild(domTDMake);
        domTR.appendChild(domTDModel);
        domTR.appendChild(domTDType);
        domTR.appendChild(domTDHP);
        domTR.appendChild(domTDSpeed);
        domTR.appendChild(domTDTrans);
        domTR.appendChild(domTDDTrain);
        domTR.appendChild(domTDDel);
        domTR.appendChild(domTDUpdate);
        domTable.appendChild(domTR);
    }

    carsTable.appendChild(domTable);
}

function displayDrivers(jsonArr) {
    const driversTable = document.querySelector('#driversTable');

    const domTable = document.createElement('table');
    domTable.setAttribute('border','1');

    const domHeaderRow = document.createElement('tr');

    const domHeaderColFN = document.createElement('th');
    domHeaderColFN.innerText = "First Name";

    const domHeaderColLN = document.createElement('th');
    domHeaderColLN.innerText = "Last Name";

    const domHeaderColExp = document.createElement('th');
    domHeaderColExp.innerText = "Years of Experience";
    
    const domHeaderColTraining = document.createElement('th');
    domHeaderColTraining.innerText = "Additional Training";

    domHeaderRow.appendChild(domHeaderColFN);
    domHeaderRow.appendChild(domHeaderColLN);
    domHeaderRow.appendChild(domHeaderColExp);
    domHeaderRow.appendChild(domHeaderColTraining);

    domTable.appendChild(domHeaderRow);

    for(json of jsonArr) {
        let domTR = document.createElement('tr');

        let domTDFN = document.createElement('td');
        domTDFN.innerText = json.FirstName;

        let domTDLN = document.createElement('td');
        domTDLN.innerText = json.LastName;

        let domTDExp = document.createElement('td');
        domTDExp.innerText = json.Experience_Years;
        
        let domTDTraining = document.createElement('td');
        domTDTraining.innerText = json.AdditionalTraining;

        let domTDDel = document.createElement('td');
        domTDDel.innerHTML = `<button class="delBtn" value=${json.DriverId}><i class="material-icons">delete</i></button>`;

        let domTDUpdate = document.createElement('td');
        domTDUpdate.innerHTML = `<button class="uptdBtn" value=${json.DriverId}>Update</button>`;

        domTR.appendChild(domTDFN);
        domTR.appendChild(domTDLN);
        domTR.appendChild(domTDExp);
        domTR.appendChild(domTDTraining);
        domTR.appendChild(domTDDel);
        domTR.appendChild(domTDUpdate);
        domTable.appendChild(domTR);
    }

    driversTable.appendChild(domTable);
}

function displayTracks(jsonArr) {
    const tracksTable = document.querySelector('#tracksTable');

    const domTable = document.createElement('table');
    domTable.setAttribute('border','1');

    const domHeaderRow = document.createElement('tr');

    const domHeaderColTName = document.createElement('th');
    domHeaderColTName.innerText = "Track Name";

    const domHeaderColType = document.createElement('th');
    domHeaderColType.innerText = "Type";

    const domHeaderColCity = document.createElement('th');
    domHeaderColCity.innerText = "City";

    const domHeaderColCountry = document.createElement('th');
    domHeaderColCountry.innerText = "Country";

    const domHeaderColDist = document.createElement('th');
    domHeaderColDist.innerText = "Length (km)";
    

    domHeaderRow.appendChild(domHeaderColTName);
    domHeaderRow.appendChild(domHeaderColType);
    domHeaderRow.appendChild(domHeaderColCity);
    domHeaderRow.appendChild(domHeaderColCountry);
    domHeaderRow.appendChild(domHeaderColDist);

    domTable.appendChild(domHeaderRow);

    for(json of jsonArr) {
        let domTR = document.createElement('tr');

        let domTDTName = document.createElement('td');
        domTDTName.innerText = json.Track_Name;

        let domTDType = document.createElement('td');
        domTDType.innerText = json.Type;

        let domTDCity = document.createElement('td');
        domTDCity.innerText = json.City;

        let domTDCountry = document.createElement('td');
        domTDCountry.innerText = json.Country;

        let domTDDist = document.createElement('td');
        domTDDist.innerText = json.Distance;

        let domTDDel = document.createElement('td');
        domTDDel.innerHTML = `<button class="delBtn" value=${json.Track_ID}><i class="material-icons">delete</i></button>`;

        let domTDUpdate = document.createElement('td');
        domTDUpdate.innerHTML = `<button class="uptdBtn" value=${json.Track_ID}>Update</button>`;

        domTR.appendChild(domTDTName);
        domTR.appendChild(domTDType);
        domTR.appendChild(domTDCity);
        domTR.appendChild(domTDCountry);
        domTR.appendChild(domTDDist);
        domTR.appendChild(domTDDel);
        domTR.appendChild(domTDUpdate);
        domTable.appendChild(domTR);
    }

    tracksTable.appendChild(domTable);
}
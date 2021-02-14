function attachEventsListeners() {
    const convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', () => {
        const input = Number(document.getElementById('inputDistance').value);
        const inputUnit = document.getElementById('inputUnits').value;
        const outputUnit = document.getElementById('outputUnits').value;

        let units = {
            'km': 1000,
            'm': 1,
            'cm': 0.01,
            'mm': 0.001,
            'mi': 1609.34,
            'yrd': 0.9144,
            'ft': 0.3048,
            'in': 0.0254,
        }; 

        let meters = input * units[inputUnit];
        let result = meters / units[outputUnit];

        document.getElementById('outputDistance').value = result;
    });
}
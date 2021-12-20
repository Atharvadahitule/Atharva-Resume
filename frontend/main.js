window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "https://atharvaresumecounter.azurewebsites.net/api/GetResumeCounter?code=1Fe2l4E87jgUCQgmZNoy5qYQ2YqLXhKys4SCD227ApuM5WmlLY0x3Q==";
const localFunctionApi ="http://localhost:7071/api/GetResumeCounter";

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}
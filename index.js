document.addEventListener('DOMContentLoaded', (event) => {

    fetch('http://bagel-api-fis.herokuapp.com/bagels')
        .then(response => response.json())
        .then(result => renderChart(result.map(e => reassignKeys(e))))
    
    
        function reassignKeys(datum){
            const {type:label, rating:y, ...rest} = datum
            const newObj = {label, y, ...rest}
            return newObj
        }
    
        function renderChart(cleanedData){
          var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: "My First Bagel Chart"              
            },
            data: [              
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: cleanedData
            }
            ]
        });
        chart.render();  
    }
})



const parameters = {
    target: '#myFunction',
    data: [{
      fn: 'sin(x)', 
      color: 'red'
   }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  };
  
  function plot() {
    const f = document.querySelector("#function").value;
    const xMin = document.querySelector("#xMin").value;
    const xMax = document.querySelector("#xMax").value;
    const yMin = document.querySelector("#yMin").value;
    const yMax = document.querySelector("#yMax").value;
    const color = document.querySelector("#color").value;
    
    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    
    functionPlot(parameters);
  }
  
  
  
  
  
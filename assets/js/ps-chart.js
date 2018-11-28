$(function(){
    psOne();
    psTwo();
    psThree();
    psFour();
    psFive();
    psSix();
});
function psOne() {
   new Chart(document.getElementById("pammChartOne"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(121, 199, 57, 0.7)',
            borderColor: "rgba(121, 199, 57, 0.7)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function psTwo() {
   new Chart(document.getElementById("pammChartTwo"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(121, 199, 57, 0.7)',
            borderColor: "rgba(121, 199, 57, 0.7)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function psThree() {
   new Chart(document.getElementById("pammChartThree"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(121, 199, 57, 0.7)',
            borderColor: "rgba(121, 199, 57, 0.7)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function psFour() {
   new Chart(document.getElementById("pammChartFour"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(121, 199, 57, 0.7)',
            borderColor: "rgba(121, 199, 57, 0.7)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function psFive() {
   new Chart(document.getElementById("pammChartFive"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(121, 199, 57, 0.7)',
            borderColor: "rgba(121, 199, 57, 0.7)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
function psSix() {
   new Chart(document.getElementById("pammChartSix"), {
      type: 'line',
      data: {
        labels: [0, 10, 20, 30, 40, 50],
        datasets: [{  
            data: [0,5,10,25,30,50],
            backgroundColor: 'rgba(121, 199, 57, 0.7)',
            borderColor: "rgba(121, 199, 57, 0.7)",
            fill: true
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    });
}
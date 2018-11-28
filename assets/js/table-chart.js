$(function(){
    pammFirst();
    pammSecond();
    pammThird();
    tpFirst();
    tpSecond();
    tpThird();
    epFirst();
    epSecond();
    epThird();
});

function pammFirst() {
   new Chart(document.getElementById("pammChartFirst"), {
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
function pammSecond() {
   new Chart(document.getElementById("pammChartSecond"), {
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
        },
          datasets: {
              display: false
          }
      }
    });
}
function pammThird() {
   new Chart(document.getElementById("pammChartThird"), {
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
function tpFirst() {
   new Chart(document.getElementById("tpChartFirst"), {
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
function tpSecond() {
   new Chart(document.getElementById("tpChartSecond"), {
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
        },
          datasets: {
              display: false
          }
      }
    });
}
function tpThird() {
   new Chart(document.getElementById("tpChartThird"), {
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
function epFirst() {
   new Chart(document.getElementById("epChartFirst"), {
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
function epSecond() {
   new Chart(document.getElementById("epChartSecond"), {
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
        },
          datasets: {
              display: false
          }
      }
    });
}
function epThird() {
   new Chart(document.getElementById("epChartThird"), {
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
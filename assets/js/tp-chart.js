$(function(){
    tpTrioOne();
    tpTrioTwo();
    tpTrioThree();
    profilReport();
    tpMOne();
    tpMTwo();
    tpMThree();
    tpMFour();
    tpMFive();
});
function tpTrioOne() {
   new Chart(document.getElementById("tpChartOne"), {
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
function tpTrioTwo() {
   new Chart(document.getElementById("tpChartTwo"), {
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
function tpTrioThree() {
   new Chart(document.getElementById("tpChartThree"), {
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
function profilReport() {
    new Chart(document.getElementById("pr-chart"), {
    type: 'bar',
    data: {
      labels: ["0k", "5k", "10k", "15k", "20k", "25k"],
      datasets: [{
          label: "Balance",
          type: "line",
          data: [0,11,15,5,7,15],
          backgroundColor: 'rgba(121, 199, 57, 0.7)',
          borderColor: "rgba(121, 199, 57, 0.7)",
          fill: true
        }, {
          label: "Equity",
          type: "line",
          data: [10,17,19,20,5,11],
          backgroundColor: 'rgba(160, 242, 94, 0.7)',
          borderColor: "rgba(160, 242, 94, 0.7)",
          fill: true
        }, {
          label: "Cash Flow",
          type: "line",
          data: [8,15,21,18,19,9],
          backgroundColor: 'rgba(255, 255, 255)',
          borderColor: "rgb(255, 255, 255)",
          fill: false
        }, {
          label: "Margin",
          type: "line",
          data: [18,12,16,18,20,15],
          backgroundColor: 'rgba(129, 129, 129)',
          borderColor: "rgb(129, 129, 129)",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: false
      },
      legend: { 
        display: true,
        position: 'bottom'  
      },
      scales: {
        yAxes: [{
            ticks: {
                callback: function(value) {
                return value + "k"
                }
            },
                scaleLabel: {
                display: true,
                labelString: "Margin"
            }
        }]
     }
    }
});
} 
function tpMOne() {
    new Chart(document.getElementById("tpMonthlyOne"), {
    type: 'bar',
    data: {
            labels: ["Jan 2013","Feb 2013","Mar 2013","Apr 2013","May 2013","Jun 2013","Jul 2013","Aug 2013","Sep 2013","Oct 2013","Nov 2013","Dec 2013"],
            datasets: [{ 
                data: [5,7,-3,2,9,10,4,3,7,6,5,4],
                label: "Monthly Gain (Change)",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#2e6eb2","#dd4e64","#e8853c","#6f2a0c","#312bba","#4e1513","#6c1cb1"],
                borderColor: "#3e95cd",
                fill: false
              }
            ]
        },
        options: {
            legend: { 
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: -10,
                        max: 10,
                        callback: function(value) {
                        return value + "%"
                        }
                        },
                        scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
});
}
function tpMTwo() {
    new Chart(document.getElementById("tpMonthlyTwo"), {
    type: 'bar',
    data: {
            labels: ["Jan 2013","Feb 2013","Mar 2013","Apr 2013","May 2013","Jun 2013","Jul 2013","Aug 2013","Sep 2013","Oct 2013","Nov 2013","Dec 2013"],
            datasets: [{ 
                data: [5,7,-3,2,9,10,4,3,7,6,5,4],
                label: "Monthly Gain (Change)",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#2e6eb2","#dd4e64","#e8853c","#6f2a0c","#312bba","#4e1513","#6c1cb1"],
                borderColor: "#3e95cd",
                fill: false
              }
            ]
        },
        options: {
            legend: { 
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: -10,
                        max: 10,
                        callback: function(value) {
                        return value + "%"
                        }
                        },
                        scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
});
}
function tpMThree() {
    new Chart(document.getElementById("tpMonthlyThree"), {
    type: 'bar',
    data: {
            labels: ["Jan 2013","Feb 2013","Mar 2013","Apr 2013","May 2013","Jun 2013","Jul 2013","Aug 2013","Sep 2013","Oct 2013","Nov 2013","Dec 2013"],
            datasets: [{ 
                data: [5,7,-3,2,9,10,4,3,7,6,5,4],
                label: "Monthly Gain (Change)",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#2e6eb2","#dd4e64","#e8853c","#6f2a0c","#312bba","#4e1513","#6c1cb1"],
                borderColor: "#3e95cd",
                fill: false
              }
            ]
        },
        options: {
            legend: { 
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: -10,
                        max: 10,
                        callback: function(value) {
                        return value + "%"
                        }
                        },
                        scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
});
}
function tpMFour() {
    new Chart(document.getElementById("tpMonthlyFour"), {
    type: 'bar',
    data: {
            labels: ["Jan 2013","Feb 2013","Mar 2013","Apr 2013","May 2013","Jun 2013","Jul 2013","Aug 2013","Sep 2013","Oct 2013","Nov 2013","Dec 2013"],
            datasets: [{ 
                data: [5,7,-3,2,9,10,4,3,7,6,5,4],
                label: "Monthly Gain (Change)",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#2e6eb2","#dd4e64","#e8853c","#6f2a0c","#312bba","#4e1513","#6c1cb1"],
                borderColor: "#3e95cd",
                fill: false
              }
            ]
        },
        options: {
            legend: { 
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: -10,
                        max: 10,
                        callback: function(value) {
                        return value + "%"
                        }
                        },
                        scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
});
}
function tpMFive() {
    new Chart(document.getElementById("tpMonthlyFive"), {
    type: 'bar',
    data: {
            labels: ["Jan 2013","Feb 2013","Mar 2013","Apr 2013","May 2013","Jun 2013","Jul 2013","Aug 2013","Sep 2013","Oct 2013","Nov 2013","Dec 2013"],
            datasets: [{ 
                data: [5,7,-3,2,9,10,4,3,7,6,5,4],
                label: "Monthly Gain (Change)",
                backgroundColor: ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850","#2e6eb2","#dd4e64","#e8853c","#6f2a0c","#312bba","#4e1513","#6c1cb1"],
                borderColor: "#3e95cd",
                fill: false
              }
            ]
        },
        options: {
            legend: { 
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: -10,
                        max: 10,
                        callback: function(value) {
                        return value + "%"
                        }
                        },
                        scaleLabel: {
                        display: true,
                        labelString: "Percentage"
                    }
                }]
            }
        }
});
}
let nintendoUnits;
let nintendoPie;
let homeBar;
let portableBar;
let quarterLine;

function plotUnits() {
  var bar = Highcharts.chart('total-sales-bar', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Units Sold Worldwide'
    },
    subtitle: {
      text: 'Source: <a href="https://www.nintendo.co.jp/ir/library/historical_data/pdf/consolidated_sales_e1603.pdf">Nintendo Consolidated Sales</a>'
    },
    xAxis: {
      type: 'category',
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Units (in millions)',
        align: 'middle'
      },
      labels: {
        overflow: 'justify'
      }
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false
        }
      },
      series: {
        pointWidth: 10,
        pointPadding: 0,
        groupPadding: 0,
        gapSize: 0
      }
    },

    tooltip: {
      formatter: function () {
        console.log(this.x);
        return "Production Run: " + (data[this.x].Run) + " Years"
      }
    },

    series: [{
      'data': [
        ['NES', 61.910000],
        ['SNES', 49.100000],
        ['Nintendo 64', 32.930000],
        ['GameCube', 21.750000],
        ['Wii', 101.630000],
        ['Wii U', 13.560000]
      ],

      'name': 'Home Console',
      'color': '#fe0016'
    }, {
      'data': [
        ['GameBoy', 118.690000],
        ['GameBoy Advance', 81.510000],
        ['Nintendo DS', 154.020000],
        ['Nintendo 3DS', 75.770000]
      ],
      'name': 'Handheld',
      'color': '#7851a9'

      }, {
      'data': [
        ['Nintendo Switch', 55.770000]
      ],
      
      'name': 'Hybrid'
    }]
  });

  nintendoUnits = bar;
  nintendoUnits.render();
}

function plotPie() {
  let pie = Highcharts.chart('nintendo-pie', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Home Console VS Handheld'
    },
    subtitle: {
      text: 'Switch Not Included Due to Hybrid Status'
    },
    tooltip: {
      formatter: function () {
        return this.y + " Units"
      }
    },
    legend: {
      enable: true
    },

    accessibility: {
      point: {
        valueSuffix: ''
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Type',
      colorByPoint: true,
      data: [{
        y: 280.88,
        name: 'Home Console',
        color: '#fe0016'
      }]
    }, {
      y: 429.99,
      name: 'Handheld',
      color: '#7851a9'
    }]
  });

  nintendoPie = pie;
  nintendoPie.render(); 
}

function plotHome() {
  var home = Highcharts.chart('home-bar', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Home Console Sales'
    },
    subtitle: {
      text: 'The PS2 still reigns supreme.'
    },
    xAxis: {
      type: 'category',
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Units (in millions)',
        align: 'middle'
      },
      labels: {
        overflow: 'justify'
      }
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false
        }
      },
      series: {
        pointWidth: 10,
        pointPadding: 0,
        groupPadding: 0,
        gapSize: 0
      }
    },

    tooltip: {
      formatter: function () {
        return this.y
      }
    },

    legend: {
      enabled: true
    },

    series: [{
      data: [
        ['Wii U', 13.560000],
        ['GameCube', 21.750000],
        ['Nintendo 64', 32.930000],
        ['SNES', 49.100000],
        ['<b>Nintendo Switch</b>', 55.770000],
        ['NES', 61.910000],
        ['Wii', 101.630000],
      ],

      name: 'Nintendo',
      color: '#fe0016'
    }, {
      data: [
      ['PS3', 87.40],
      ['PS1', 102.49],
      ['<b>PS4</b>', 110.40],
      ['PS2', 155.00]
      ],
      name: 'Playstation',
      color: '#003087'
    }, {
      data: [
        ['Xbox', 24.00],
        ['Xbox 360', 84.00]
      ],
      name: 'Microsoft',
      color: '#0e7a0d',
    }],
    caption: {
      text: 'Microsoft has not publicly released Xbox One sales number since 2014 so there is not information to accurately portray on this chart.'
    }
  });
  homeBar = home;
  homeBar.render();
}

function plotPortable() {
  var portable = Highcharts.chart('portable-bar', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Handheld Console Sales'
    },
    subtitle: {
      text: 'Competition to Nintendo is Scarce.'
    },
    xAxis: {
      type: 'category',
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Units (in millions)',
        align: 'middle'
      },
      labels: {
        overflow: 'justify'
      }
    },

    plotOptions: {
      bar: {
        dataLabels: {
          enabled: false
        }
      },
      series: {
        pointWidth: 10,
        pointPadding: 0,
        groupPadding: 0,
        gapSize: 0
      }
    },

    tooltip: {
      formatter: function () {
        return this.y
      }
    },

    legend: {
      enabled: true
    },

    series: [{
      data: [
        ['<b>Nintendo Switch</b>', 55.770000],
        ['<b>Nintendo 3DS</b>', 75.770000],
        ['GameBoy Advance', 81.510000],
        ['GameBoy', 118.690000],
        ['Nintendo DS', 154.020000]
      ],
      name: 'Nintendo',
      color: '#7851a9'

    }, {
      data: [
        ['PS Vita', 16.00],
        ['PSP', 82.00]
      ],
      name: 'Playstation',
      color: '#003087'
      }],
    caption: {
      text: 'Microsoft has not come out with a portable handheld console. Sony recently ended their production of the PS Vita in 2019 due to poor sales.'
    }
  });
  portableBar = portable;
  portableBar.render();
}


function plotLine() {


  let line = Highcharts.chart('line-chart', {

    title: {
      text: 'Nintendo Switch vs Sony PS4'
    },

    subtitle: {
      text: null
    },

    yAxis: {
      title: {
        text: 'Units (millions)'
      }
    },

    xAxis: {
      title: {
        text: 'Quarter'
      },

      categories: [
        "Q1'18",
        "Q2'18",
        "Q3'18",
        "Q4'18",
        "Q1'19",
        "Q2'19",
        "Q3'19",
        "Q4'19"
      ]
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },

    series: [{
      name: 'Switch',
      data: [5.5, 2.29, 1.88, 9.41, 2.47, 2.13, 2.54, 9.07],
      color: '#fe0016'
    }, {
      name: 'PS4',
      data: [2.5, 3.2, 3.9, 8.1, 2.6, 3.2, 2.8, 6.1],
      color: '#003087'
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  });
  quarterLine = line;
  quarterLine.render();
}

function init() {
  plotUnits();
  plotPie();
  plotHome();
  plotPortable();
  plotLine();
  console.log(data);
}

document.addEventListener('DOMContentLoaded', init, false);
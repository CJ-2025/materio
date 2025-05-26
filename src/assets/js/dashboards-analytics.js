/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  let cardColor, labelColor, borderColor, chartBgColor, bodyColor;

  cardColor = config.colors.cardColor;
  labelColor = config.colors.textMuted;
  borderColor = config.colors.borderColor;
  chartBgColor = config.colors.chartBgColor;
  bodyColor = config.colors.bodyColor;

  // Weekly Overview Line Chart
  // --------------------------------------------------------------------
  const weeklyOverviewChartEl = document.querySelector('#weeklyOverviewChart'),
    weeklyOverviewChartConfig = {
      chart: {
        type: 'bar',
        height: 200,
        offsetY: -9,
        offsetX: -16,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Enrollments',
          data: [0, 0, 0, 500, 0, 0, 0]
        }
      ],
      colors: [chartBgColor],
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '30%',
          endingShape: 'rounded',
          startingShape: 'rounded',
          colors: {
            ranges: [
              {
                from: 0,
                to: 1000,
                color: config.colors.primary
              },
              {
                from: 0,
                to: 73,
                color: chartBgColor
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        strokeDashArray: 8,
        borderColor,
        padding: {
          bottom: -10
        }
      },
      xaxis: {
        axisTicks: { show: false },
        crosshairs: { opacity: 0 },
        axisBorder: { show: false },
        categories: ['Mar', 'Apr', 'May', 'jun', 'jul', 'Aug', 'Sep'],
        tickPlacement: 'on',
        labels: {
          show: true
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 1000,
        show: true,
        tickAmount: 5,
        labels: {
          formatter: function (val) {
            return parseInt(val);
          },
          style: {
            fontSize: '13px',
            fontFamily: 'Inter',
            colors: labelColor
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      responsive: [
        {
          breakpoint: 1500,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 815,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 5
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '20%'
              }
            }
          }
        },
        {
          breakpoint: 568,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 8,
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 410,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        }
      ]
    };
  if (typeof weeklyOverviewChartEl !== undefined && weeklyOverviewChartEl !== null) {
    const weeklyOverviewChart = new ApexCharts(weeklyOverviewChartEl, weeklyOverviewChartConfig);
    weeklyOverviewChart.render();
  }

  // Total Profit line chart
  // --------------------------------------------------------------------
  const totalProfitLineChartEl = document.querySelector('#totalProfitLineChart'),
    totalProfitLineChartConfig = {
      chart: {
        height: 90,
        type: 'bar',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: labelColor,
        strokeDashArray: 9,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -15,
          left: -7,
          right: 9,
          bottom: -15
        }
      },
      colors: [config.colors.primary],
      stroke: {
        width: 3
      },
      series: [
        {
          name: 'Members',
          data: [56, 56, 56, 56, 56, 56, 56, 56, 52]
        }
      ],
      tooltip: {
        enabled: true, // Enable tooltip on hover
        shared: false,
        intersect: true,
        x: {
          show: true,
          formatter: function (val, opts) {
            // Show the corresponding category name
            const category = opts.w.globals.categoryLabels[opts.dataPointIndex];
            return category || val;
          }
        },
        y: {
          formatter: function (val) {
            return val;
          }
        }
      },
      xaxis: {
        crosshairs: { opacity: 0 },
        categories: ['SITE', 'ACS', 'ESSA', 'YBA', 'MBS', 'CJJE', 'CTE', 'NURSE', 'CEAT'],
        tickAmount: 9,
        tickPlacement: 'on',
        labels: {
          show: true
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        strokeColors: 'transparent',
        colors: ['transparent'],
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: cardColor,
            strokeColor: config.colors.primary,
            size: 6,
            shape: 'circle'
          }
        ],
        hover: {
          size: 7
        }
      },
      responsive: [
        {
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            }
          }
        }
      ]
    };
  if (typeof totalProfitLineChartEl !== undefined && totalProfitLineChartEl !== null) {
    const totalProfitLineChart = new ApexCharts(totalProfitLineChartEl, totalProfitLineChartConfig);
    totalProfitLineChart.render();
  }

  // Sessions Column Chart
  // --------------------------------------------------------------------
  // Sessions Column Chart (Updated for 500 students and improved representation)
  const sessionsColumnChartEl = document.querySelector('#sessionsColumnChart'),
    sessionsColumnChartConfig = {
      chart: {
        height: 180,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ' Students';
          }
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '40%',
          distributed: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      grid: {
        show: true,
        borderColor: borderColor,
        strokeDashArray: 6,
        padding: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: [labelColor]
        }
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ['SITE', 'ACS', 'ESSA', 'YBA', 'MBS'],
        labels: {
          show: true,
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 200,
        tickAmount: 4,
        labels: {
          show: true,
          formatter: function (val) {
            return parseInt(val);
          },
          style: {
            colors: labelColor,
            fontSize: '13px'
          }
        }
      },
      colors: [
        config.colors.primary,
        config.colors.info,
        config.colors.success,
        config.colors.warning,
        config.colors.danger
      ],
      series: [
        {
          name: 'Students',
          data: [120, 100, 90, 110, 80] // Total: 500 students
        }
      ],
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 140
            },
            plotOptions: {
              bar: {
                columnWidth: '60%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 120
            },
            plotOptions: {
              bar: {
                columnWidth: '70%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 100
            },
            plotOptions: {
              bar: {
                columnWidth: '80%'
              }
            }
          }
        }
      ]
    };
  if (typeof sessionsColumnChartEl !== 'undefined' && sessionsColumnChartEl !== null) {
    const sessionsColumnChart = new ApexCharts(sessionsColumnChartEl, sessionsColumnChartConfig);
    sessionsColumnChart.render();
  }

  // Sessions Donut Chart
  // --------------------------------------------------------------------
  const sessionsDonutChartEl = document.querySelector('#sessionsDonutChart'),
    sessionsDonutChartConfig = {
      chart: {
        height: 150,
        type: 'line', // Changed from 'donut' to 'line'
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Sessions',
          data: [112, 56, 56, 56, 56, 56, 56]
        }
      ],
      labels: ['CS', 'CCJE', 'CBA', 'CHTM', 'NARS', 'CEAT', 'CTE'],
      colors: [
        config.colors.primary
      ],
      legend: {
        show: false // Hide legend
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      grid: {
        padding: {
          top: -10,
          left: -10,
          right: -10,
          bottom: -10
        }
      },
      xaxis: {
        categories: ['CS', 'CCJE', 'CBA', 'CHTM', 'NARS', 'CEAT', 'CTE'],
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: true
        }
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 100
            }
          }
        }
      ]
    };
  if (typeof sessionsDonutChartEl !== undefined && sessionsDonutChartEl !== null) {
    const sessionsDonutChart = new ApexCharts(sessionsDonutChartEl, sessionsDonutChartConfig);
    sessionsDonutChart.render();
  }

// Sessions Statistics Pie Chart
// --------------------------------------------------------------------
const sessionsPieChartEl = document.querySelector('#sessionsPieChart');
  const sessionsPieChartConfig = {
    chart: {
      type: 'pie',
      height: 200
    },
    labels: ['SITE', 'ACS'],
    series: [56, 56], // Example: SITE has 320 students, ACS has 180
    colors: [config.colors.primary, config.colors.info], // Adjust based on your theme
    legend: {
      position: 'bottom'
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + '%';
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' Students';
        }
      }
    }
  };

  if (typeof sessionsPieChartEl !== 'undefined' && sessionsPieChartEl !== null) {
    const sessionsPieChart = new ApexCharts(sessionsPieChartEl, sessionsPieChartConfig);
    sessionsPieChart.render();
  }

})();

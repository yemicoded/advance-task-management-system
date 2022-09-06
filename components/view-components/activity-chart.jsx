import React from 'react'
import { Chart as ChartJs, LineController, Tooltip, LineElement, PointElement, CategoryScale, LinearScale, Title } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { clx } from '../../helpers/clx'

ChartJs.register(LineController, LineElement, Tooltip, PointElement, LinearScale, CategoryScale)

export default function ActivityChart({
      classname,
      children
}) {
      const options = {
            pointStyle: 'circle',
            pointBorderWidth: 4,
            pointBorderColor: "#546FFF",
            pointBackgroundColor: "#FFF",
            pointRadius: 5,
            pointHoverRadius: 5,
            color:'#141522',
            responsive: true,
            elements: {
                  line: {
                        tension: 0.5,
                  }
            },
            scales: {
                  x: {
                        ticks: {
                              color: '#141522',
                              font: {
                                    weight:'bold'
                              },
                        },
                  },
                  y: {
                        ticks: {
                              stepSize: 1,
                              color: '#141522',
                              font: {
                                   weight:'bold'
                              }
                        },
                        grid: {
                              display: false,
                              color: '#fff',
                        } 
                  }
            },
            plugins: {
                  tooltip: {
                  mode: 'index',
                  intersect: false
                  },
                  tooltip: {
                        callbacks: {
                              label: function (context) {
                                    return `${context.parsed.y} Tasks`;
                              }
                        }
                  },
            },
      }
      const data = {
            labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            datasets: [{
                  data: [1, 2, 1, 2.5, 1.5, 2, 1.9],
                  borderColor: '#141522',
            }]
      }
      const classes = clx(
            "w-full lg:w-[400px] p-4 rounded-lg bg-[#F5F5F7] dark:bg-secondary-500/20 shadow-lg",
            classname
      )
      return(
            <div className={classes}>
                  <div className='flex justify-between items-center py-2'>
                        <p className='text-secondary-500 font-semibold dark:text-secondary-100'>Activity</p>
                        <p className='text-secondary-500 font-semibold dark:text-secondary-100'>This week</p>
                  </div>
                  <div className='bg-white p-2 rounded-xl min-w-full h-fit lg:hidden'>
                  <Line options={options} data={data} />
                  </div>
                  {/* Desktop */}
                  <div className='hidden lg:block bg-white p-2 rounded-xl min-w-full h-fit'>
                  <Line options={options} data={data} height={80} />
                  </div>
            </div>
      )
}
import React from 'react'
import Layout from "../components/layout";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

import './realtime.css'

export default function RealTime() {

  const option = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }

  const series = [{
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }]

  return (
    <>
      <Layout>
        <ApexChart type="line" options={option} series={series} height={200} width={500} />
      </Layout>
    </>
  )
}

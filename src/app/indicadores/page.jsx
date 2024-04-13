"use client";
import React from "react";
import DashOee from "./DashOee";
import DashChart from "./DashChart";
import Content from "./gauge_percent";
import Layout from "../components/layout";
import "./styles.css";

export default function Principal() {
  return (
    <>
      <Layout>
        <div className="container">
          
          <div className="box box-1">
            <button className="button">Produção</button>
          </div>

          <div className="box box-2">
            <Content />
          </div>

          <div className="box box-3">
            <DashOee />
          </div>
        </div>

        <div className="cont-5">
          <DashChart />
        </div>
      </Layout>
    </>
  );
}

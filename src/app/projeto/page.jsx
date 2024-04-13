"use client";
import React from "react";
import Layout from "../components/layout";
import Image from 'next/image';
import img1 from './0001.jpg';
import img2 from './0002.jpg';
import img3 from './0003.jpg';




export default function Projeto() {
  return (
    <>
      <Layout>
        <div className="text-center">
        <Image src={img1} height={1200} width={1250} alt='Pag-01' />
        <Image src={img2} height={1200} width={1250} alt='Pag-02' />
        <Image src={img3} height={1200} width={1250} alt='Pag-03' />
        </div>
      </Layout>
    </>
  );
}

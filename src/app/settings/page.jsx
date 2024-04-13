"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Layout from "../components/layout";
import Form from "./Form";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Layout>
        <Form />
      </Layout>
    </>
  );
}

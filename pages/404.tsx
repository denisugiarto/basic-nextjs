import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <Layout pageTitle="Page not found">
      <h1 className="title-not-found">Ooops..</h1>
      <h1 className="title-not-found">
        Halaman yang anda cari tidak ditemukan
      </h1>
    </Layout>
  );
}

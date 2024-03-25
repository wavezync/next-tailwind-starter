import { NextSeo } from "next-seo";
import { HomePage } from "../components/home/HomePage";
import { ReactElement } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <HomePage />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

import { NextSeo } from "next-seo";
import { HomePage } from "../components/home/HomePage";

export default function Home() {
  return (
    <>
      <NextSeo title="Home" />
      <HomePage />
    </>
  );
}

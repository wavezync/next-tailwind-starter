import "../styles/global.scss";
import type { AppProps } from "next/app";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";
import { DefaultSeo, DefaultSeoProps } from "next-seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const APP_NAME = "WaveZync Starter";
const TITLE_TEMPLATE = `%s - ${APP_NAME}`;

const seoConfig: DefaultSeoProps = {
  title: APP_NAME,
  titleTemplate: TITLE_TEMPLATE,
  openGraph: {},
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({}));
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps?.dehydratedState}>
        <main className={`font-sans antialiased`}>
          <style jsx global>{`
            :root {
              --font-inter: ${inter.style.fontFamily};
            }
          `}</style>
          <Head>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon-16x16.png"
            />
            <link rel="manifest" href="/site.webmanifest" />
            <link
              rel="mask-icon"
              href="/safari-pinned-tab.svg"
              color="#5bbad5"
            />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
          </Head>
          <DefaultSeo {...seoConfig} />
          <Component {...pageProps} />
          <div>
            <ReactQueryDevtools />
          </div>
        </main>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}

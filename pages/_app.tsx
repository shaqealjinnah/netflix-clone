import { AuthProvider } from "@/hooks/useAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Head>
          <title>Shaqeal's Netflix</title>
          <meta
            name="description"
            content="A Netflix clone built with Next.js"
          />
          <meta
            name="google-site-verification"
            content="n-3JFhKeRzCV02vWjEwwmyKtdbRo8oyb-fKCdNXVXGQ"
          />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </RecoilRoot>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrap>
      <Component {...pageProps} />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 567px;
  margin-left: auto;
  margin-right: auto;
`;

import type { NextPage } from "next";
import Image from "next/image";
import logo from "@/public/logo.png";
import styled from "styled-components";
import Link from "next/link";
import Layout from "@/components/layout";

const TextWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  h2 {
    margin-top: 20px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
  }
  h5 {
    margin-top: 10px;
  }
`;
const Logo = styled(Image)`
  margin-top: 30vh;
  width: 60px;
  height: 80px;
`;

const LoginEnterWrap = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 5% 0 5%;
  div {
    font-size: 13px;
    padding: 20px 0 20px 0;
    a {
      color: #fd8d40;
    }
  }
`;

const EnterLink = styled(Link)`
  background-color: #fd8d40;
  width: 100%;
  padding: 10px 16px 10px 16px;
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 6px;
  &:hover {
    background-color: #fdb88a;
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    outline-color: #fd8d40;
    outline-width: 2px;
  }
`;

const Welcome: NextPage = () => {
  return (
    <Layout title="로그인" menu={false} canGoBack={false}>
      <TextWrap>
        <Logo src={logo} alt="logo" />
        <h2>오렌지마켓으로 중고거래 시작하기</h2>
        <h5> 간편하게 가입하고 상품을 확인하세요!</h5>
        <LoginEnterWrap>
          <EnterLink href={"welcome/login"}>시작하기</EnterLink>
          <div>
            이미 계정이 있나요? <Link href={"welcome/login"}>로그인</Link>
          </div>
        </LoginEnterWrap>
      </TextWrap>
    </Layout>
  );
};

export default Welcome;

import { NextPage } from "next";
import Layout from "@/components/layout";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "@/components/button";
import Input from "@/components/input";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    font-weight: 500;
  }
  span {
    margin: 10px 0 10px 0;
    font-size: 12px;
  }
  div {
    padding: 20px 0 10px 0;
    text-align: center;
    font-size: 12px;
    text-decoration: underline;
  }
  Input {
    margin: 0 0 10px 0;
  }
`;

const Login: NextPage = () => {
  const [isPhone, setIsPhone] = useState(true);

  const onCLick = () => {
    setIsPhone((prev) => !prev);
  };

  return (
    <Layout title="로그인" menu={false} canGoBack={true}>
      <LoginForm action="">
        {isPhone ? (
          <>
            <p>
              안녕하세요!
              <br />
              이메일로 로그인해주세요.
            </p>
            <span>이메일은 안전하게 보관되며 공개되지 않아요.</span>
            <Input type="text" placeholder="이메일 주소" />
            <Button text="인증메일 받기" disabled={true} />
            <div onClick={onCLick}>휴대폰으로 로그인하기</div>
          </>
        ) : (
          <>
            <p>
              안녕하세요!
              <br />
              휴대폰 번호로 로그인해주세요.
            </p>
            <span>휴대폰 번호는 안전하게 보관되며 공개되지 않아요.</span>
            <Input type="number" placeholder="휴대폰 번호(-없이 숫자만 입력)" />
            <Button text="인증문자 받기" disabled={true} />
            <div onClick={onCLick}>이메일로 로그인하기</div>
          </>
        )}
      </LoginForm>
    </Layout>
  );
};

export default Login;

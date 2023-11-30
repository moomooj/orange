import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const BodyWrap = styled.div`
  margin-top: 48px;
  padding: 0 3% 63px 3%;
  width: 100%;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  height: 48px;
  border-bottom: 1px solid #ddd;
  width: 100%;
  max-width: 567px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: rgb(31 41 55);
  padding: 25px 0 25px 0;
  background-color: #fff;
  z-index: 1;
`;

const FooterIcon = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222;
  &:hover {
    color: #707070;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
  }
`;

const Footer = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  max-width: 576px;
  justify-content: space-around;
  border-top: 1px solid #ddd;
  background-color: #fff;
  padding: 10px 0 10px 0;
`;

const WitoutMenuBody = styled.div<{ $cangoback?: boolean }>`
  margin-top: ${(props) => (props.$cangoback ? "48px" : "0px")};
  padding: 0 3% 0 3%;
  width: 100%;
`;

const GoBack = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  svg {
    width: 24px;
    height: 24px;
    margin: 0 0 0 10px;
  }
`;

interface LayoutProps {
  title: string;
  canGoBack: boolean;
  menu: boolean;
  children: React.ReactNode;
  detail?: boolean;
}

export default function Layout({
  title,
  children,
  canGoBack,
  menu,
  detail,
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>{`오렌지마켓 | ${title}`}</title>
      </Head>
      {menu ? (
        <>
          {canGoBack ? (
            <Header>
              <div>{title}</div>
            </Header>
          ) : (
            <Header>
              <div>{title}</div>
            </Header>
          )}
          <BodyWrap>{children}</BodyWrap>
          <Footer>
            <FooterIcon
              href="/"
              style={router.pathname === "/" ? { color: "#FD8D40" } : {}}
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span>홈</span>
            </FooterIcon>
            <FooterIcon
              href="/community"
              style={
                router.pathname === "/community" ? { color: "#FD8D40" } : {}
              }
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                ></path>
              </svg>
              <span>동네생활</span>
            </FooterIcon>
            <FooterIcon
              href="/chats"
              style={router.pathname === "/chats" ? { color: "#FD8D40" } : {}}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>채팅</span>
            </FooterIcon>
            <FooterIcon
              href="/profile"
              style={router.pathname === "/profile" ? { color: "#FD8D40" } : {}}
            >
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              <span>마이페이지</span>
            </FooterIcon>
          </Footer>
        </>
      ) : (
        <>
          {canGoBack ? (
            <>
              <GoBack>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={onClick}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </GoBack>
              <WitoutMenuBody $cangoback={canGoBack}>{children}</WitoutMenuBody>
            </>
          ) : (
            <WitoutMenuBody>{children}</WitoutMenuBody>
          )}
        </>
      )}
    </>
  );
}

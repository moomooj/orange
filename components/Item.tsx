import Link from "next/link";
import styled from "styled-components";

const ItemWrap = styled(Link)`
  position: relative;
  display: flex;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid #ddd;
  padding: 10px 0 10px 0;
`;

const ImageWrap = styled.div`
  img {
    width: 130px;
    height: 130px;
    border-radius: 6px;
  }
  div {
    width: 130px;
    height: 130px;
    border-radius: 6px;
    background-color: #ddd;
  }
`;
const TextWrap = styled.div`
  margin-left: 15px;
  h2 {
    margin: 5px 0 10px 0;
    font-size: 15px;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`;
const IconWrap = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 70px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: end;
  svg {
    width: 18px;
    height: 18px;
  }
  span {
    font-size: 14px;
    padding: 3px 5px 0 2px;
  }
`;

interface ItemProps {
  title: string;
  id: number;
  price: number;
  hearts?: number;
  picture?: string;
}

export default function Item({ title, price, hearts, id, picture }: ItemProps) {
  return (
    <ItemWrap href={`/products/${id}`}>
      <ImageWrap>{picture ? <img src="" alt="" /> : <div />}</ImageWrap>
      <TextWrap>
        <h2>{title}</h2>
        <h3>{price}원</h3>
      </TextWrap>
      <IconWrap>
        {hearts && (
          <>
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{hearts}</span>
          </>
        )}
        {hearts && (
          <>
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{hearts}</span>
          </>
        )}
      </IconWrap>
    </ItemWrap>
  );
}

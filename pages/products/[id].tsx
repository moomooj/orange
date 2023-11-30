import Layout from "@/components/layout";
import { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";

const ItemDetail: NextPage = () => {
  return (
    <>
      <div>
        <img src="/macbook.jpeg" alt="맥북" />
        <img src="/macbook.jpeg" alt="맥북" />
        <img src="/macbook.jpeg" alt="맥북" />
      </div>
      <div>
        <div>
          프로필이미지 <span>안녕</span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ItemDetail;

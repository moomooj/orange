import Item from "@/components/Item";
import Layout from "@/components/layout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="홈" menu={true} canGoBack={false}>
      <div>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Item
            key={i}
            title={`아이폰 14프로 128 팝니다.`}
            hearts={i}
            price={850000}
            id={i}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;

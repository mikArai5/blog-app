import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from 'react';
import { db } from "../firebase";
import "./Home.css";

function Home() {

  useEffect(() => {
    const gestPosts = async () => {
      const data = await getDocs(collection(db,"posts"));
      // ▼取り出す階層がすごく深い
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };
    gestPosts();
  }, []);

  return <div className='homePage'>
    <div className='postContents'>
      <div className='postHeader'>
        <h1>タイトル</h1>
      </div>
      <div className='postTextContainer'>
        React学習中です。でも難しすぎてmshdhjfdsfjsjbfsdkbかjsdんあslkdslkdんcjksdんjcんsdjbchsdbvldjfkんvkd
      </div>
      <div className='nameAndDeleteButton'>
        <h3>@もにょもにょ</h3>
        <button>削除</button>
      </div>
    </div>
  </div>
}

export default Home;
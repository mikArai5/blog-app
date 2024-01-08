import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { db } from "../firebase";
import "./Home.css";

function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const gestPosts = async () => {
      const data = await getDocs(collection(db,"posts"));
      // ▼取り出す階層がすごく深い
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    };
    gestPosts();
  }, []);

  return <div className='homePage'>
    {postList.map((post) => {
      return (
        <div className='postContents' key={post.id}>
        <div className='postHeader'>
          <h1>{post.title}</h1>
        </div>
        <div className='postTextContainer'>{post.postsText}</div>
        <div className='nameAndDeleteButton'>
          <h3>@{post.author.username}</h3>
          <button>削除</button>
        </div>
      </div>
      );
    })}
  </div>
}

export default Home;
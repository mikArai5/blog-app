import React from 'react';
import "./Home.css";

function Home() {
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
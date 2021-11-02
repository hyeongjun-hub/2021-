import React from 'react';
import '../CSS/Home.css';

const Home = () => {
  const imgUrl = {
    nike: 'https://i.pinimg.com/originals/1c/11/4e/1c114e79fb72cfa2e6b73e72ce50278a.jpg',
    adidas:
      'https://1757140519.rsc.cdn77.org/it/blog/wp-content/uploads/sites/13/2020/03/Adidas-Logo-old-1-1024x576-min-1024x576.jpg',
    stussy:
      'http://cimg.gabangpop.co.kr/images/goods_img/20160711/367462/367462_a_500.jpg',
    gucci:
      'https://i.pinimg.com/originals/5f/dc/f7/5fdcf7beccad0954232805b3aa0ce3ab.jpg',
    canvas:
      'https://ivdesign.co.kr/data/file/symbol_logo/data_symbol_logo_converse_100th.jpg',
    prada:
      'https://i.pinimg.com/originals/3d/4d/81/3d4d810374330a63d5621388ec54d9f0.png',
  };
  return (
    <div className="Home">
      <div className="Home__main">
        <div className="Home__main-title">
          <h1>GGULDDEOK SHOP</h1>
          <p>enjoy your shopping</p>
        </div>
        <div className="Home__main-content">
          <div className="Home__main-content__logo">
            <img alt="nike" src={imgUrl.nike} />
            <img alt="ididas" src={imgUrl.adidas} />
            <img alt="stussy" src={imgUrl.stussy} />
          </div>
          <div className="Home__main-content__logo">
            <img alt="gucci" src={imgUrl.gucci} />
            <img alt="canvas" src={imgUrl.canvas} />
            <img alt="prada" src={imgUrl.prada} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

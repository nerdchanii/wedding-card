import React from 'react';
import Text from '../components/design/Text';
import Button from '../components/design/Button';
import { Link } from 'react-router-dom';
import ExampleCardContainer from '../components/container/ExampleCardContainer';

import './css/HomePage.css';
function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="HomePage--title">우리 결혼했어요🌹</h1>
      <Text className={'HomePage--welcome--text'}>
        손쉽게 나의 온라인 청첩장을 만들고 싶다면?
      </Text>
      <Button className={'HomePage--button'}>
        {true ? (
          <Link to="/edit">호다닥 만들러가기🔨</Link>
        ) : (
          <Link to="/login">로그인하고 만들러가기</Link>
        )}
      </Button>
      <div className="HomePage--ExampleCards--containter">
        <ExampleCardContainer />
      </div>
    </div>
  );
}

export default HomePage;

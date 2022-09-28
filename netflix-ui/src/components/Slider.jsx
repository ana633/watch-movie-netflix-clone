import React from 'react';
import CardSlider from './CardSlider';
import styled from 'styled-components';

export default React.memo(function Slider({movies}) {  
  const data1 = movies.slice(0,10);
  const data2 = movies.slice(10,20);
  const data3 = movies.slice(20,30);
  const data4 = movies.slice(30,40);
  const data5 = movies.slice(40,50);
  const data6 = movies.slice(50,60);


  return (
    <Container>
        <CardSlider title="Trending Now" data={data1}/>
        <CardSlider title="New Releases" data={data2}/>
        <CardSlider title="Blockbuster Movies" data={data3}/>
        <CardSlider title="Popular On Netflix" data={data4}/>
        <CardSlider title="Action Movies" data={data5}/>
        <CardSlider title="Epics" data={data6}/>
    </Container>
  )
});

const Container = styled.div``;


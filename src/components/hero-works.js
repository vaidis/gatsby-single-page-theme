import React from "react"
import styled from "styled-components"
import { GrNext, GrPrevious } from "react-icons/gr";
import Carousel, { consts } from 'react-elastic-carousel';

import { Work } from "./Work"
import "./hero-work.css"

const HeroWrap = styled.div`
  width: 100%;
  margin-top: -55px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
  padding-bottom: 0px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Trapezoid = styled.div`
  flex-direction: column;
  height: 0;
  width: 280px;
  color: #ffffff;
  border-bottom: 65px solid #021132;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
`
const TitleInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const TitleText = styled.h2`
  margin: 0px;
  padding-top: 10px;
  line-height: 50px;
  text-align: center;
  font-family: "Ubuntu Condensed";
`
const Pointer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 40px;
  fill: #red;
`
const Prev = styled(GrPrevious)`
  polyline {
    stroke: #ffffff;
  }
`
const Next = styled(GrNext)`
  polyline {
    stroke: #ffffff;
  }
`


const Works = props => {

  const posts = props.posts
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1250, itemsToShow: 5 },
    { width: 1500, itemsToShow: 6 },
    { width: 1750, itemsToShow: 7 },
    { width: 2000, itemsToShow: 8 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <Prev /> : <Next />
    return (
      <Pointer
        className="pointer"
        onClick={onClick}
        disabled={isEdge}
      >
        {pointer}
      </Pointer>
    )
  }

  const items = posts.map((item, i) => (
    <div key={`work_${item.node.frontmatter.slug}`}>
      <Work
        {...item.node}
        navigation={{
          current: i,
          items: posts.map(item => `/${item.node.frontmatter.slug}`),
        }}
      />
    </div>
  ))

  return (

    <HeroWrap id="work">
      <Trapezoid>
        <Title>
          <TitleInner>
            <TitleText>Our Work</TitleText>
          </TitleInner>
        </Title>
      </Trapezoid>

      <Carousel
        showArrows={true}
        renderArrow={myArrow}
        breakPoints={breakPoints}
      >
        {items}
      </Carousel>
    </HeroWrap>
  )
}

export default Works
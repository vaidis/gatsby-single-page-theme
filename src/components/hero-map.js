import React from "react";
import Img from "gatsby-image"
import styled from "styled-components"
import ReactMapboxGl from 'react-mapbox-gl';
import { Popup } from "react-mapbox-gl";
import { MdEmail } from "react-icons/md";
import { useStaticQuery, graphql } from "gatsby"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const HeroWrap = styled.div`
    width: 100%;
    height: 480px;
    position: relative;
    display: flex;
    flex-direction: column;
    background: #07113a;

    @media (max-width: 768px) {
      height: 500px;
    }
`
const HeroBottom = styled.div`
    width: 100%;
    background: #07113a;
    height: 100px;
    position: absolute;
    clip-path: polygon(50% 100%, 100% 0, 100% 100%, 0 100%, 0 0);
    bottom: 0;
`
const MapWrap = styled.div`
    width: 100%;
    margin-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    @media (max-width: 768px) {
      margin-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }
`
const Pointer = styled.div`
    position: relative;
    min-width: 120px;
`

const HeroMap = () => {
  const [state] = React.useState({
    lng: 22.939854,
    lat: 40.635558,
    zoom: 15
  });

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic3RldmFpZGlzIiwiYSI6ImNrZjZyOW9tODA3enMydW85ZGgzeW9teGsifQ.95s-RLAaHnZvhSpGkfpqog'
  });

  const data = useStaticQuery(graphql`
  query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
          childImageSharp {
              fluid(maxWidth: 220,  pngQuality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
              }
          }
      }
  }
`)

  return (
    <HeroWrap>
      <MapWrap>
        <Map
          center={[state.lng, state.lat]}
          zoom={[state.zoom]}
          style='mapbox://styles/stevaidis/ckf7z8k7u25s019minnodoxw1'
          containerStyle={{
            height: '480px',
            width: '100%'
          }}
        >
          <Popup
            style={{ 'zIndex': '0' }}
            coordinates={[state.lng, state.lat]}
            offset={{ 'bottom': [0, -70] }}
          >
            <Pointer>
              <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
            </Pointer>
            <div style={{ 'fontSize': '15px', 'marginTop': '5px' }}>
              <div ><FaMapMarkerAlt /> &nbsp; My Address</div>
              <div><FaPhoneAlt /> &nbsp; 0-123-456-789</div>
              <div><MdEmail /> &nbsp; info@my-company.com </div>
            </div>
          </Popup>
        </Map>
      </MapWrap>
      <HeroBottom></HeroBottom>
    </HeroWrap>
  )
}

export default HeroMap


import React from 'react'
import ReactDOM from 'react-dom'
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//Actions
import { fetchAllPics } from '../src/actions/picsActions'
import { showModal, closeModal, getPrevImg, showPrevImg, getNextImg,
        showNextImg } from '../src/actions/modalActions'
//Components
import AllPics from "./allpics"
//Styled componentsimport styled from "styled-components";
import styled from "styled-components"
import { buttons } from 'polished'
import { media } from './styled/medias'
import { Title } from './styled/titles'
import { Button } from './styled/buttons'
import { Box } from './styled/boxes'
import { Section, PicWrapper } from './styled/wrappers'
import { flex } from './styled/flexes'

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
  }

showAllPics() {
  this.props.dispatch(fetchAllPics())
}

  render() {

    const Wrapper = styled.div`
      position: relative;
      > #wrprBtn { margin: 5%;
        }
    `
    const Img = styled.img`
      max-width: 100%;
      max-height: 100%;
      transition: transform 0.5s;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    `
    const wrprBtn = styled.div`
      z-index: 9;
      &:hover { box-shadow: 5px 5px 10px black; }
    `
    const Modal = styled.div`
      ${ flex.column }
      visibility: ${ this.props.modalVisibility};
      background-color: rgba(0,0,0,0.8);
      position: absolute;
      top: 0; left: 0;
      width: 100%;
      padding: 5% 0 10%;
    `
    const ModalImgWrapper = styled.div`
      width: 80%;
      position: relative;
    `
    const ModalImg = styled.img`
      width: 100%;
    `
    const templ = `
      ${ flex.column }
      background: rgba(0,0,200,0.5);
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      color: red;
      padding: 1.5em;
      cursor: pointer;
    `
    const Close = styled.div`
      ${ templ }
      margin: 0.3em;
    `
    const PrevImg = styled.div`
      ${ templ }
      position: absolute;
      top: 48%;
      left: -8%;
    `
    const NextImg = styled.div`
      ${ templ }
      position: absolute;
      top: 48%;
      right: -8%;
    `

    let pics = this.props.pics.map((pic, id) => {
        return (
          <PicWrapper key={pic.id}>
            <Img src={pic.source_url} alt={pic.alt_text}
              onClick = {showModal}/>
          </PicWrapper>
        )
    })

    return (
      <Section>
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">
            { pics }

            <Modal id='modal'>
              <Close onClick={closeModal}>X</Close>
              <ModalImgWrapper>
                <PrevImg onClick={showPrevImg}>PRV</PrevImg>
                <ModalImg id='modalImg' src={props.modalPic} alt='vv'/>
                <NextImg onClick={showNextImg}>NXT</NextImg>
              </ModalImgWrapper>
            </Modal>

            <wrprBtn id='wrprBtn'>
              <Link to="/fotos">
                <Button
                  onClick={this.showAllPics.bind(this)}>
                  Ver todas fotos
                </Button>
              </Link>
            </wrprBtn>
        </Wrapper>
      </Section>
    )
  }
}

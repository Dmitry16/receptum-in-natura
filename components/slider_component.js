
import React from 'react';
import ReactDOM from 'react-dom';
//require ('./components/slider_core.js');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//Actions
import { fetchAllPics } from '../src/actions/picsActions';
//Components
import AllPics from "./allpics";
//Styled componentsimport styled from "styled-components";
import styled from "styled-components";
import { buttons } from 'polished';

import { Title } from './styled/titles';
import { Button } from './styled/buttons';
import { Box } from './styled/boxes';
import { PicWrapper } from './styled/pics';
import { Section } from './styled/wrappers'

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

  }

showAllPics() {
  this.props.dispatch(fetchAllPics());
}

  render() {

    const Wrapper = styled.div`
          > a { margin: 5%; }
    `
    const Img = styled.img`
          max-width: 100%;
          max-height: 100%;
    `

    let pics = this.props.pics.map((pic, id) => {
        return (
          <PicWrapper key={pic.id}>
            <Img src={pic.source_url} alt={pic.alt_text} />
          </PicWrapper>
        )
    })


    return (
      <Section>
  	    <Wrapper id="wrapper-fotos" className="icons-wrapper album-fotos">
            { pics }
            <Link to="/fotos" >
              <Button onClick={this.showAllPics.bind(this)}>
                Ver todas fotos
              </Button>
            </Link>
        </Wrapper>
      </Section>
    )
  }
}

const modal = document.getElementById('modal');
const modalImg = document.createElement("img");
let prevImg,
    nextImg,
    img;
let show = true;

function showPrevImg() {
  modal.removeChild(modalImg);
  modalImg.setAttribute("src", prevImg.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  getPrevImg(prevImg);
  getNextImg(prevImg);
  console.log(prevImg);
}

function showNextImg() {
  modal.removeChild(modalImg);
  modalImg.setAttribute("src", nextImg.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  getPrevImg(nextImg);
  getNextImg(nextImg);
  console.log(nextImg);
}

function getPrevImg(img) {
  if(img.parentNode.previousElementSibling !== null) {
    return prevImg = img.parentNode.previousElementSibling.firstElementChild;
  } else {
    hideModal();
  }
}
function getNextImg(img) {
  if(img.parentNode.nextElementSibling !== null) {
    return nextImg = img.parentNode.nextElementSibling.firstElementChild;
  } else if (img.parentNode.nextElementSibling === null && show === true) {
    show = false;
    return nextImg = img;
  } else {

    hideModal();
  }
}

function showModal() {
  show = true;
  modalImg.setAttribute("src", img.getAttribute("src"));
  modalImg.setAttribute("class", "front-pics active");
  modal.appendChild(modalImg);
  modal.style.opacity = 1;
  modal.style.zIndex = 9;
  prevImg = getPrevImg(img);
  nextImg = getNextImg(img);
  console.log(img);
}

function hideModal() {
  modal.style.opacity = 0;
  modal.style.zIndex = -1;
  modal.removeChild(modalImg);
}

document.addEventListener('click', function(e) {
  if(e.target.tagName === 'IMG' && e.target.className==="front-pics" ) {
    img = e.target;
    showModal();
  }
  if(e.target.className === "close") {
    hideModal();
  }
  if(e.target.className === "direct left" || e.target.className === "direct right") {

    if(e.target.id === "left") {
      showPrevImg();
    } else if(e.target.id === "right") {
      showNextImg();
    }
  }
});

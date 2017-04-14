export function showModal(e, dispatch) {
  const actualPic = e.target.getAttribute('src')
  let nextImg = (getNextImg(actualPic)) ? getNextImg(actualPic) : ''
  let prevImg = (getPrevImg(actualPic)) ? getPrevImg(actualPic) : ''
  props.dispatch({type: 'SHOW_MODAL',
                      payload: [
                        actualPic,
                        nextImg,
                        prevImg
                      ]
  })
}
export function closeModal() {
  this.props.dispatch({type: 'CLOSE_MODAL'})
}

export function getPrevImg(actualPic) {
  const pics = this.props.pics;
  for(let i=pics.length-1; i>0; i--) {
      if(actualPic === pics[i].source_url && pics[i-1]) {
        return pics[i-1].source_url;
      } else if (!pics[i-1]) {
        return false;
      }
  }
}
export function showPrevImg() {
  //here the next image becomes actual modal img (when fired the action)
  let actualImg = this.props.prevImg;
  let newPrevImg = (this.getPrevImg(actualImg))
                      ?
                        this.getPrevImg(actualImg)
                      :
                        false
  let newNextImg = (this.props.modalPic)
                      ?
                        this.props.modalPic
                      :
                        false

  if(actualImg && newPrevImg) {
    this.props.dispatch({type: 'SHOW_PREV_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    })
  } else if (actualImg && !newPrevImg) {

    this.props.dispatch({type: 'SHOW_PREV_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    })
  } else {
    this.props.dispatch({type: 'CLOSE_MODAL'})
  }
}

export function getNextImg(actualPic) {
  const pics = this.props.pics;
  for(let i=0; i<pics.length; i++) {
    if(actualPic === pics[i].source_url && pics[i+1]) {
      return pics[i+1].source_url;
    } else if (!pics[i+1]) {
      return false;
    }
  }
}
export function showNextImg() {
  //here the next image becomes actual modal img (when fired the action)
  let actualImg = this.props.nextImg
  let newNextImg = (this.getNextImg(actualImg))
                      ?
                        this.getNextImg(actualImg)
                      :
                        false
  let newPrevImg = (this.props.modalPic)
                      ?
                        this.props.modalPic
                      :
                        false

  if(actualImg && newNextImg) {
    this.props.dispatch({type: 'SHOW_NEXT_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    })
  } else if (actualImg && !newNextImg) {

    this.props.dispatch({type: 'SHOW_NEXT_IMG',
                                payload: [actualImg,
                                          newNextImg,
                                          newPrevImg]
    })
  } else {
    this.props.dispatch({type: 'CLOSE_MODAL'})
  }
}

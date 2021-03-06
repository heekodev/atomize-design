import React, { Component } from "react"
import { Link } from "react-scroll"

import { Div, Image, Button, Anchor } from "atomize"
import { Transition } from "react-transition-group"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

export default class MobileHeaderMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
    }

    this.mobileHeaderMenu = React.createRef()
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks()
  }

  disableBodyScroll = () => {
    this.updateHeight()
    disableBodyScroll(document.querySelector("#mobileHeader"))
  }

  enableBodyScroll = () => {
    enableBodyScroll(document.querySelector("#mobileHeader"))
  }

  updateHeight = () => {
    setTimeout(() => {
      if ((this.mobileHeaderMenu, "current")) {
        const height = this.mobileHeaderMenu.current.getBoundingClientRect()
          .height

        this.setState({
          height: `${height}px`,
        })
      }
    }, 200)
  }

  render() {
    const { height } = this.state
    const { mobileHeaderOpen, content, closeHeader } = this.props

    const duration = 300

    const defaultStyle = {
      transition: `all ${duration}ms ease-out`,
      height: "0",
      overflowY: "scroll",
    }

    const TransitionStyles = {
      entering: { height: 0 },
      entered: { height: height },
      exiting: { height: 0 },
      exited: { height: 0 },
    }

    return (
      <Transition
        in={mobileHeaderOpen}
        timeout={duration}
        onEntering={this.disableBodyScroll}
        onExiting={this.enableBodyScroll}
      >
        {state => (
          <Div
            style={{
              ...defaultStyle,
              ...TransitionStyles[state],
            }}
            id="mobileHeader"
            w="100%"
            bg="#F1F2F4"
            pos="fixed"
            top="64px"
            right="0"
            left="0"
            zIndex="1000"
            shadow="2"
          >
            <Div ref={this.mobileHeaderMenu} p={{ t: "91px", x: "16px" }}>
              <Div textAlign="center">
                <Anchor
                  href="https://atomizecode.com/"
                  target="_blank"
                  p={{ t: "24px", b: "28px" }}
                  textDecor="underline"
                  opacity=".56"
                  textColor="black"
                  textSize="paragraph"
                  textWeight="bold"
                  border={{ y: "1px solid" }}
                  borderColor="lightGray"
                  d="block"
                >
                  Atomize React
                  <Image
                    src="./images/arrow.svg"
                    h="10px"
                    p={{ l: "5px" }}
                    w="8px"
                  />
                </Anchor>
                <Anchor
                  href={content.demoLink}
                  target="_blank"
                  textSize="paragraph"
                  textWeight="bold"
                  p={{ t: "32px", b: "20px" }}
                  border={{ b: "1px solid" }}
                  borderColor="lightGray"
                  textColor={content.textColor}
                  d="block"
                >
                  TRY DEMO
                </Anchor>
                <Div p={{ t: "32px", b: "52px" }}>
                  <Link
                    to="home-demo"
                    smooth={"easeInOutQuad"}
                    duration={900}
                    offset={-50}
                  >
                    <Button
                      m="auto"
                      minW="312px"
                      textSize="paragraph"
                      textWeight="bold"
                      h="48px"
                      bg={content.buttonColor}
                      onClick={closeHeader}
                    >
                      Buy Now
                    </Button>
                  </Link>
                </Div>
              </Div>
            </Div>
          </Div>
        )}
      </Transition>
    )
  }
}

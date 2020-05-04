import React, { Component } from "react"
import { Div, Text, Row, Col, Button, Image } from "atomize"
import WebsiteContainer from "../common/WebsiteContainer"
import Accelerate from "../../images/Accelerate.png"
import luxy from "luxy.js"

export default class HomeAccelerate extends Component {
  componentDidMount() {
    luxy.init()
  }

  render() {
    const { content } = this.props
    return (
      <WebsiteContainer p={{ x: { xs: ".75rem", md: "1.5rem", xl: "0" } }}>
        <Div
          rounded="32px"
          bg="white"
          p={{
            x: { xs: "1rem", md: "2.5rem", xl: "7rem" },
            y: { xs: "4rem", md: "3.5rem", xl: "5.5rem" },
          }}
          shadow="1"
        >
          <Row>
            <Col size={{ xs: "12", md: "6" }} style={{ margin: "auto" }}>
              <Div>
                <Div
                  textSize={{ xs: "subheader2", xl: "display2" }}
                  textWeight="bold"
                  textAlign={{ xs: "center", md: "left" }}
                  maxW={{ md: "20rem", xl: "100%" }}
                >
                  <Text tag="span">{content.heading}</Text>{" "}
                  <Text tag="span" opacity=".4">
                    {content.text}
                  </Text>
                </Div>
                <Button
                  m={{ t: "3.5rem", x: { xs: "auto", md: "0" } }}
                  rounded="12px"
                  p={{ y: ".875rem", x: "1.75rem" }}
                  h="3.5rem"
                  textColor={content.buttonColor}
                  bg="white"
                  border="1px solid"
                  borderColor={content.borderColor}
                  textSize="paragraph"
                  textWeight="bold"
                  hoverBg="#fafbfb"
                >
                  See full preview ↗️
                </Button>
              </Div>
            </Col>
            <Col size={{ xs: "0", md: "1" }}></Col>
            <Col
              size={{ xs: "12", md: "5" }}
              // p={{
              //   l: { xs: "0", md: "5rem", xl: "8rem" },
              //   b: { xs: ".5rem" },
              // }}
            >
              <Div
                bgImg="./images/Ellipse.png"
                p={{ b: "100%" }}
                m={{ t: { xs: "4.5rem", md: "0" } }}
                bgSize="cover"
                bgPos="center"
                pos="relative"
              >
                <Div
                  pos="absolute"
                  bgImg={content.frameImage}
                  p={{ b: "60%" }}
                  w="80%"
                  top="25%"
                  left="4%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-4"
                  data-offset="60"
                ></Div>
                <Div
                  pos="absolute"
                  bgImg={content.chatBubble}
                  p={{ b: "30%" }}
                  w="40%"
                  bottom="5%"
                  zIndex="1"
                  right="2%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-6"
                  data-offset="90"
                ></Div>
                <Div
                  pos="absolute"
                  bgImg={content.toggleImage}
                  p={{ b: "10%" }}
                  w="10%"
                  top="38%"
                  zIndex="1"
                  right="6%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-6"
                  data-offset="160"
                ></Div>
                <Div
                  pos="absolute"
                  bgImg={content.input}
                  p={{ b: "13%" }}
                  zIndex="1"
                  w="80%"
                  bottom="5%"
                  left="7%"
                  bgSize="contain"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  className="luxy-el"
                  data-speed-y="-5"
                  data-offset="100"
                ></Div>
              </Div>
            </Col>
          </Row>
        </Div>
      </WebsiteContainer>
    )
  }
}

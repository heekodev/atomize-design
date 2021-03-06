import React, { Component } from "react"
import { Div, Text } from "atomize"
import CustomContainer from "../common/CustomContainer"
import WebsiteContainer from "../common/WebsiteContainer"

const cards = [
  {
    heading: "Style Guide",
    text: "2 Styleguide layout options.",
    image: "./images/guide.png",
  },
  {
    heading: "UI components",
    text: "Buttons, Avatars, Inputs, Lists and more.",
    image: "./images/components.png",
  },
  {
    heading: "Theme Setup",
    text: "Colors, Shadows and Type system.",
    image: "./images/theme.png",
  },
]

export default class HomeInside extends Component {
  render() {
    const { content } = this.props

    return (
      <WebsiteContainer>
        <CustomContainer p={{ x: { xs: "12px", md: "64px", xl: "7rem" } }}>
          <Div>
            <Div
              d="flex"
              justify="space-between"
              flexDir={{ xs: "column", md: "row" }}
              textAlign={{ xs: "center", md: "left" }}
              // p={{ x: { xs: "28px", md: "0" } }}
              maxW={{ xs: "18.5rem", md: "100%" }}
              m="auto"
            >
              <Text
                textSize={{ xs: "subheader2", xl: "display2" }}
                textWeight="bold"
                m={{ b: "1.5rem" }}
              >
                {content.heading}
              </Text>
              <Text
                maxW={{ md: "21rem", xl: "35rem" }}
                textSize={{ xs: "paragraph", xl: "paragraph2" }}
                textWeight="bold"
                opacity=".56"
              >
                {content.text}
              </Text>
            </Div>

            <Div
              d="flex"
              justify="space-between"
              flexDir={{ xs: "column", xl: "row" }}
              m={{ t: { xs: "4.25rem", md: "3rem", xl: "6rem" } }}
            >
              {content.cards.map((card, id) => {
                return (
                  <Div
                    key={id}
                    d="flex"
                    flexDir={{ xs: "column", md: "row", xl: "column" }}
                    bg="light"
                    rounded="24px"
                    flexGrow="1"
                    maxW={{ xl: "22rem" }}
                    m={{
                      x: { xs: "0", xl: id % 2 && "1.5rem" },
                      y: { xs: id % 2 && "1.5rem", xl: "0" },
                    }}
                    shadow="1"
                    p={{
                      l: { xs: "2rem", md: "2.5rem" },
                      r: "2rem",
                      t: { xs: "2rem", md: "1.375rem", xl: "2.5rem" },
                      b: { xs: "1.625rem", md: "1.375rem", xl: "2.125rem" },
                    }}
                  >
                    <Div flexGrow="1 1 60%" p={{ t: { md: "20px", xl: "0" } }}>
                      <Text textSize="paragraph2" textWeight="bold">
                        {card.heading}
                      </Text>
                      <Text
                        textSize="caption2"
                        opacity=".4"
                        textWeight="bold"
                        m={{ t: ".5rem", b: { xs: "1.5rem", md: "2rem" } }}
                      >
                        {card.text}
                      </Text>
                    </Div>
                    <Div
                      bgImg={card.image}
                      flexGrow="1 1 30%"
                      p={{ b: { xs: "67%", md: "22%", xl: "67%" } }}
                      transition="all .3s ease-in-out"
                      bgSize="contain"
                      bgRepeat="no-repeat"
                      bgPos="center"
                    ></Div>
                  </Div>
                )
              })}
            </Div>
          </Div>
        </CustomContainer>
      </WebsiteContainer>
    )
  }
}

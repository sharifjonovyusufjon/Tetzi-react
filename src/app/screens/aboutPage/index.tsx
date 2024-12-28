import { Container, Stack } from "@mui/material";
import OtherFooter from "../../components/footer/otherFooter";
import "../../../css/about.css";
import { Box } from "lucide-react";
import OtherAbout from "../../components/header/otherAbout";

const imgPath_1: string = "/img/baby.jpg";
const imgPath_2: string = "/img/baby.jpg";

export default function AboutPage() {
  return (
    <div className="about-page">
      <OtherAbout />
      <Container className="container">
        <Stack className="top">
          <img src={imgPath_1} alt="" />
          <Stack className="top-box">
            <span>
              Tetzi is one of the world’s leading baby clothes brands.
            </span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </Stack>
        </Stack>
        <Stack className="bott">
          <Stack className="bott-box">
            <Stack className="box">
              <span>Our Vision</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Stack>
            <Stack className="box">
              <span>Our Story</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </Stack>
            <Stack className="box">
              <span>Our Brands</span>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </Stack>
          </Stack>
          <img src={imgPath_2} alt="" />
        </Stack>
      </Container>
      <OtherFooter />
    </div>
  );
}

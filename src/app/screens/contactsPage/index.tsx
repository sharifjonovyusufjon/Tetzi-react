import { Button, Container, Stack } from "@mui/material";
import OtherContact from "../../components/header/otherContact";
import "../../../css/contact.css";
import { Box } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="contact-page">
      <OtherContact />
      <Container className="container">
        <iframe
          className="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5079585.605847458!2d46.79765948485375!3d27.12717371824114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6959a6cf613f%3A0xa197b631f23b1f4a!2sChef%20Burak%20Gurme!5e0!3m2!1sru!2skr!4v1728498436401!5m2!1sru!2skr"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <Stack className="contact-box">
          <Stack className="title">Fill up a Form</Stack>
          <Stack className="input-box">
            <Stack className="box">
              <span>Full Name</span>
              <input type="text" placeholder="Your name ..." />
            </Stack>
            <Stack className="box">
              <span>Email</span>
              <input type="text" placeholder="Your email ..." />
            </Stack>
            <Stack className="box">
              <span>Message</span>
              <input
                type="text"
                style={{ paddingBottom: "30px", height: "80px" }}
                placeholder="Your message ..."
              />
            </Stack>
          </Stack>
          <Button className="button">Post</Button>
        </Stack>
      </Container>
    </div>
  );
}

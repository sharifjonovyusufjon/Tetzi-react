import { Box, Button, Stack } from "@mui/material";

export default function OtherFooter() {
  return (
    <div className="other-footer">
      <Box className={"other-title"}>Subscribe our Newsletter</Box>
      <Stack className="other-box">
        <Box>
          <input type="text" placeholder="Your email here" />
        </Box>
        <Button className="other-button">Subscribe</Button>
      </Stack>
    </div>
  );
}

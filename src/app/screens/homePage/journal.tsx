import { Box, Container, Stack } from "@mui/material";

export default function Journal() {
  interface Journal {
    title: string;
    category: string;
    text: string;
    image: string;
  }

  const journal: Journal[] = [
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Category",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.",
      image: "/img/baby.jpg",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Category",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.",
      image: "/img/baby.jpg",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      category: "Category",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.",
      image: "/img/baby.jpg",
    },
  ];

  return (
    <div className="journal">
      <Container className="journal-container">
        <Stack className="journal-boxs">
          <Box className="journal-title">Our Bestsellers</Box>
          <Stack className="journal-card">
            {journal.length !== 0 ? (
              journal.map((ele, index) => {
                return (
                  <Stack className="journal-box">
                    <Box
                      className={"card-img"}
                      sx={{
                        backgroundImage: `url(${ele.image})`,
                      }}
                    ></Box>
                    <Stack className={"card-text"}>
                      <Box className={"journal-category"}>{ele.category}</Box>
                      <Box className={"journal-title"}>{ele.title}</Box>
                      <Box className={"journal-text"}>{ele.text}</Box>
                    </Stack>
                  </Stack>
                );
              })
            ) : (
              <Box className={"not-vaible"}>Not Avaible</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}

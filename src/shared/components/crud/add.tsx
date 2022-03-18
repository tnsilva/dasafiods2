import { FormEvent, useEffect, useState } from "react";
import { Box, Button, TextField, Container } from "@mui/material";
import { unicornService, UnicornDataProps } from "./unicornService";

export const AddUnicorn: React.FC = ({ children }) => {
  const [name, setName] = useState("");
  const [since, setSince] = useState("");
  const [colour, setColour] = useState("");
  const [city, setCity] = useState("");
  const [logo, setLogo] = useState("");

  const [unicorns, setUnicorns] = useState<UnicornDataProps[] | any>([
    name,
    since,
    colour,
    city,
    logo,
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    unicornService
      .create({ name, since, colour, city, logo })
      .then((response) => {
        setUnicorns(response.data);
        alert("Criado" + response.data);
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Box
      mt={2}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Container maxWidth="sm">
        <div className="formEvent">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            //   helperText="Incorrect entry."
          />
          <TextField
            id="outlined-basic"
            label="Since"
            variant="outlined"
            value={since}
            onChange={(e) => setSince(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Colour"
            variant="outlined"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Logo"
            variant="outlined"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />

          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </Container>
    </Box>
  );
};

import { Box } from "@mui/material";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Typography from "@mui/material/Typography";

export const Movie = ({ format, result }: any) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ borderBottom: "1px solid black" }}>
      <Box sx={{ display: "flex", margin: "35px" }}>
        <Box>
          <img
            onClick={handleToggle}
            width="100px"
            src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
          />
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <img
              height="70%"
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            />
          </Backdrop>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px",
            width: "100%",
          }}
        >
          <Typography variant="h6" component="div">
            {format === "movie" ? result.title :
              format === "tv" && result.name}
          </Typography>
          <Typography mt={2} variant="inherit" component="div">
            {format === "movie" ? result.original_title :
              format === "tv" && result.original_name}
          </Typography>
          <Typography mt={2} variant="inherit" component="div">
            Премьера: {format === "movie" ? result.release_date :
              format === "tv" && result.first_air_date}
          </Typography>
          <Typography mt={2} variant="inherit" component="div">
            Рейтинг: {result.vote_average}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

import { BorderBottom } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#0f0f0f",
        top: 0,
        justifyContent: "space-between",
        BorderBottom: "1px solid #0190ff"
      }}
    >
      <img src={logo} alt="logo" height={45} />
      <SearchBar />
    </Stack>
  );
}

import VideoGrid from "./components/VideoGrid";
import "./styles.css";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";
import { Box, Stack, Typography } from "@mui/material";
import { videoData } from "./utils/constants";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 }
          }}
        >
          <Sidebar selectedCategory="New" setSelectedCategory="New" />

          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright © 2022 JSM Media
          </Typography>
        </Box>

        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <VideoGrid videos={videoData} />
        </Box>
      </Stack>
    </div>
  );
}

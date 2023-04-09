import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import HoverVideoPlayer from "react-hover-video-player";

export default function VideoCard(video) {
  const [dimensions, setDimensions] = useState({
    xs: "100%",
    sm: "450px",
    md: "400px"
  });
  const { thumbnail_url, url } = video.video;

  return (
    <div>
      <Card
        sx={{
          width: { xs: dimensions.xs, sm: dimensions.sm, md: dimensions.md }
        }}
      >
        <CardContent sx={{ padding: "0px !important" }}>
          <HoverVideoPlayer
            videoSrc={url}
            volume={1}
            muted={false}
            controls
            onHoverStart={() => {
              let temp = {
                xs: "100%",
                sm: "500px",
                md: "450px"
              };
              setDimensions(temp);
            }}
            onHoverEnd={() => {
              let temp = {
                xs: "100%",
                sm: "450px",
                md: "400px"
              };
              setDimensions(temp);
            }}
            pausedOverlay={
              <img
                src={thumbnail_url}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            }
            loadingOverlay={
              <div className="loading-overlay">
                <div className="loading-spinner" />
              </div>
            }
          />
        </CardContent>
      </Card>
    </div>
  );
}

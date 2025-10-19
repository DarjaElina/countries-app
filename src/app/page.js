"use client";

import { useRouter } from "next/navigation";
import { Button, Typography, Box } from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
   <Box
  className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20"
  sx={(theme) => ({
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(135deg, #1a1a1a 30%, #333333 90%)"
        : "linear-gradient(135deg, #fff0f5 30%, #f0fff0 90%)",
  })}
>
      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          color: "#ff4d6d",
          textShadow: "1px 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        Welcome to the Countries App 🌏
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => router.push("/countries")}
        sx={{
          fontWeight: 600,
          borderRadius: 6,
          px: 4,
          py: 1.5,
          fontSize: "1rem",
        }}
      >
        View Countries 🌍
      </Button>
    </Box>
  );
}

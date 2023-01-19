import VideosSection from "../../components/videos-section/videos-section.component";

const drive_videos = [
  "https://drive.google.com/file/d/1CHNRQnDxWnVnQyMWiLqrG4Zqjx6P8wyB/preview",
  "https://drive.google.com/file/d/1D-PrvndG0y0RSeroCft2Lodigk02ETc2/preview",
  "https://drive.google.com/file/d/1aVAzOj_tAAXlFoC5OIMuvsrluaSv5Coa/preview",
  "https://drive.google.com/file/d/1Kj1l07Uz3so6FCoR5DC96G8wKCj88Q4a/preview",
  "https://drive.google.com/file/d/1PIS35iw07gRGKCRXicFpp0gJ0wb9xoHC/preview",
];

export default function Videos() {
  return <VideosSection title="VIDEOS" videos={drive_videos} />;
}

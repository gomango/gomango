import { useCallback, useState } from "react";

export const useComponentLogic = () => {
  const [isPhoto, setIsPhoto] = useState(false);
  const [isVideo, setIsVideo] = useState(true);

  const handlePhoto = useCallback(() => {
    setIsPhoto(true);
    setIsVideo(false);
  });

  const handleVideo = useCallback(() => {
    setIsPhoto(false);
    setIsVideo(true);
  });

  return { handlePhoto, handleVideo, isPhoto, isVideo };
};

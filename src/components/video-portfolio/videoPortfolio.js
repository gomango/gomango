import React from "react";

import WeddingsSection from "./weddingSection";
import EventsSection from "./eventsSection";
import MusicSection from "./musicSection";
import FashionSection from "./fashionSection";

function VideoPortfolio() {
  return (
    <div className="container-fluid mt-5">
      <WeddingsSection />
      <EventsSection />
      <MusicSection />
      <FashionSection />
    </div>
  );
}

export default VideoPortfolio;

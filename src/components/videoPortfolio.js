import React from "react";

import WeddingsSection from "./weddingSection";
import EventsSection from "./eventsSection";
import PromoSection from "./promoSection";
import ShortSection from "./shortSection";

function VideoPortfolio() {
  return (
    <div className="container">
      <WeddingsSection />
      <EventsSection />
      <PromoSection />
      <ShortSection />
    </div>
  );
}

export default VideoPortfolio;

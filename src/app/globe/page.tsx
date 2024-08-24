import GlobeVisualisation from "@/components/pages/globe/GlobeVisualisation";
import UserInfo from "@/components/pages/home/UserInfo";
import NewActivityForm from "@/components/pages/newActivity/NewActivityForm";
import { useEffect, useRef, useState } from "react";

export default function GlobePage() {

  const startTIme = 1000;
  return (
    <div>
      <h1>Visualise Global Data</h1>

      <div className="globe-container">
        <GlobeVisualisation
        />
      </div>
    </div>
  );
}

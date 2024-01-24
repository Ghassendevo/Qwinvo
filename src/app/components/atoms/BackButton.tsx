import { ArrowLeftIcon } from "lucide-react";
import React from "react";

interface BackButtonIN {
  action: () => void;
  extra_action?: () => void;
}

const BackButton: React.FC<BackButtonIN> = ({ action, extra_action }) => {
  return (
    <button
      onClick={() => {
        action();
        if (extra_action) {
          extra_action();
        }
      }}
      className="font-quick border-b border-b-black flex flex-row gap-1 items-center"
    >
      <ArrowLeftIcon color="black" size={13} /> back
    </button>
  );
};

export default BackButton;

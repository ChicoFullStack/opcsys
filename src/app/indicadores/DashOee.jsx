"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.css";

export default function DashOee() {
  const html = 90;
  return (
    <>
    
      <div>
        <div className="z-5 items-center w-max mt-1 p-1 gap-2">
          <div className="w-96">
            <p>Qualidade</p>
            <ProgressBar
              completed={html}
              bgColor="#1A9A46"
              animateOnRender={true}
            />
          </div>
        </div>
        <div className="z-5 items-center w-max mt-1 p-1 gap-2">
          <div className="w-96">
            <p>Disponibilidade</p>
            <ProgressBar
              completed={95}
              bgColor="#1A9A46"
              animateOnRender={true}
            />
          </div>
        </div>
        <div className="z-5 items-center w-max mt-1 p-1 gap-2">
          <div className="w-96">
            <p>Performance</p>
            <ProgressBar
              completed={89}
              bgColor="#1A9A46"
              animateOnRender={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

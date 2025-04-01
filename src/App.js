import "./styles.css";
import { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="outer">
      <div className="inner" style={{ width: `${animatedProgress}%` }}>
        {progress}%
      </div>
    </div>
  );
};

export default function App() {
  const bars = [5, 10, 30, 50, 70, 90, 100];

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}

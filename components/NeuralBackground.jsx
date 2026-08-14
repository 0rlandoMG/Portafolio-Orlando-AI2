export default function NeuralBackground({ className = "" }) {
  const nodes = [
    { x: 40, y: 55, r: 3, delay: "0s" },
    { x: 150, y: 25, r: 2.5, delay: "0.5s" },
    { x: 260, y: 85, r: 3.5, delay: "1s" },
    { x: 95, y: 150, r: 2.5, delay: "1.5s" },
    { x: 210, y: 180, r: 3, delay: "0.2s" },
    { x: 335, y: 130, r: 2.5, delay: "1.8s" },
    { x: 415, y: 50, r: 3, delay: "1.1s" },
    { x: 35, y: 250, r: 2.5, delay: "0.7s" },
    { x: 180, y: 290, r: 3, delay: "1.4s" },
    { x: 320, y: 265, r: 2.5, delay: "0.3s" },
    { x: 465, y: 195, r: 3, delay: "0.9s" },
    { x: 545, y: 90, r: 2.5, delay: "1.6s" },
    { x: 615, y: 215, r: 3.5, delay: "0.4s" },
    { x: 695, y: 55, r: 2.5, delay: "1.2s" },
    { x: 755, y: 175, r: 3, delay: "0.6s" },
    { x: 835, y: 100, r: 2.5, delay: "1.7s" },
    { x: 495, y: 315, r: 3, delay: "1s" },
    { x: 635, y: 335, r: 2.5, delay: "0.5s" },
    { x: 775, y: 295, r: 3, delay: "1.3s" },
    { x: 855, y: 255, r: 2.5, delay: "0.8s" },
  ];

  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [2, 6],
    [3, 4], [4, 5], [5, 6], [3, 7], [4, 8], [5, 9],
    [7, 8], [8, 9], [5, 10], [6, 11], [10, 11], [10, 12],
    [11, 13], [12, 13], [12, 14], [13, 15], [14, 15], [9, 16],
    [10, 16], [16, 17], [14, 17], [17, 18], [15, 18], [18, 19],
    [13, 19],
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 400"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{
        maskImage:
          "radial-gradient(ellipse 75% 85% at 50% 40%, black 35%, transparent 88%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 85% at 50% 40%, black 35%, transparent 88%)",
      }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          strokeWidth="0.9"
          className="stroke-brand-mintDim/55 dark:stroke-brand-mint/30"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          className="animate-node-pulse fill-brand-mintDim/90 dark:fill-brand-mint/80"
          style={{ animationDelay: n.delay }}
        />
      ))}
    </svg>
  );
}

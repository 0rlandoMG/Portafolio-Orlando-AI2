export default function NeuralBackground({ className = "" }) {
  const nodes = [
    { x: 40, y: 60, r: 3, delay: "0s" },
    { x: 160, y: 30, r: 2.5, delay: "0.4s" },
    { x: 280, y: 80, r: 3.5, delay: "0.8s" },
    { x: 90, y: 160, r: 2.5, delay: "1.2s" },
    { x: 220, y: 190, r: 3, delay: "0.2s" },
    { x: 340, y: 150, r: 2.5, delay: "1.6s" },
    { x: 400, y: 40, r: 3, delay: "1s" },
    { x: 30, y: 250, r: 2.5, delay: "0.6s" },
    { x: 180, y: 270, r: 3, delay: "1.4s" },
    { x: 320, y: 260, r: 2.5, delay: "0.3s" },
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4],
    [2, 6], [3, 4], [4, 5], [5, 6], [3, 7],
    [4, 8], [5, 9], [7, 8], [8, 9],
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 300"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.45] ${className}`}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="currentColor"
          className="text-brand-mint"
          strokeWidth="0.6"
          strokeOpacity="0.35"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="currentColor"
          className="animate-node-pulse text-brand-mint"
          style={{ animationDelay: n.delay }}
        />
      ))}
    </svg>
  );
}

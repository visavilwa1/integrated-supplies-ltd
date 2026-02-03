import React, { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Projects Delivered", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 100, suffix: "+" },
  { label: "Customer Support", value: 24, suffix: "/7" },
];

function useCountUp(target, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;
    let increment = end / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

const Stats = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row justify-between items-center bg-blue-800 text-white rounded-3xl p-8 my-8 transition-opacity duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {stats.map((stat, idx) => {
        const count = useCountUp(visible ? stat.value : 0, 1200 + idx * 200);
        return (
          <div key={stat.label} className="flex-1 text-center py-4">
            <div className="text-5xl font-bold mb-2">
              {count}
              {stat.suffix}
            </div>
            <div className="text-lg opacity-80">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;

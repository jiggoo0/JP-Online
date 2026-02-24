"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveGridProps {
  className?: string;
  gridSize?: number; // Distance between lines
  dotOpacity?: number;
  hoverRadius?: number; // How far the mouse affects dots
}

/**
 * InteractiveGrid - Component พื้นหลังระดับ Production-Ready
 * สื่อถึงความแม่นยำ (Precision) และความเชื่อมโยงของข้อมูล (Data Connection)
 * ออกแบบมาเพื่อ High Performance ด้วยการลด Re-renders และใช้ GPU Acceleration
 */
export const InteractiveGrid: React.FC<InteractiveGridProps> = ({
  className,
  gridSize = 40,
  dotOpacity = 0.3,
  hoverRadius = 150,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // ติดตามตำแหน่งเมาส์ด้วย Motion Values เพื่อความลื่นไหลระดับ 60fps+
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ใช้ Spring เพื่อให้การเคลื่อนไหวของเมาส์มีน้ำหนัก (Inertia)
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  // คำนวณจุด Grid ล่วงหน้าเพื่อลด Overhead ในการ Render
  const gridPoints = useMemo(() => {
    const points = [];
    const cols = Math.ceil(dimensions.width / gridSize) + 1;
    const rows = Math.ceil(dimensions.height / gridSize) + 1;

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        points.push({ x: x * gridSize, y: y * gridSize });
      }
    }
    return points;
  }, [dimensions, gridSize]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "bg-background pointer-events-none absolute inset-0 overflow-hidden select-none",
        className,
      )}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(128,128,128,0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(128,128,128,0.05) 1px, transparent 1px)`,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-40">
        <defs>
          <radialGradient id="dot-gradient">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Render เฉพาะจุดที่เป็น Interactive Dots เพื่อประหยัด CPU */}
        {gridPoints.map((point, i) => (
          <InteractiveDot
            key={`${point.x}-${point.y}-${i}`}
            x={point.x}
            y={point.y}
            mouseX={smoothMouseX}
            mouseY={smoothMouseY}
            hoverRadius={hoverRadius}
            opacity={dotOpacity}
          />
        ))}
      </svg>

      {/* เพิ่มเลเยอร์ Gradient เพื่อความมิติ (Depth) */}
      <div className="via-background/20 to-background pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent" />
    </div>
  );
};

interface InteractiveDotProps {
  x: number;
  y: number;
  mouseX: {
    get(): number;
    on(event: string, callback: (v: number) => void): () => void;
  };
  mouseY: { get(): number };
  hoverRadius: number;
  opacity: number;
}

/**
 * InteractiveDot - จุดที่ขยับตามเมาส์
 * ใช้ Motion เพื่อประสิทธิภาพสูงสุดในการคำนวณตำแหน่ง
 */
const InteractiveDot: React.FC<InteractiveDotProps> = ({
  x,
  y,
  mouseX,
  mouseY,
  hoverRadius,
  opacity,
}) => {
  const [active, setActive] = useState(false);

  // ติดตามการเปลี่ยนแปลงของเมาส์เพื่อเปิด-ปิดสถานะ Active
  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (latestX: number) => {
      const distance = Math.hypot(latestX - x, mouseY.get() - y);
      setActive(distance < hoverRadius);
    });

    return () => unsubscribeX();
  }, [mouseX, mouseY, x, y, hoverRadius]);

  return (
    <motion.circle
      cx={x}
      cy={y}
      r={active ? 1.5 : 0.8}
      animate={{
        opacity: active ? opacity * 2 : opacity,
        fill: active ? "var(--primary)" : "currentColor",
        scale: active ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="text-muted-foreground/30"
    />
  );
};

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { HiOutlineEye } from 'react-icons/hi';

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // স্মুথ মুভমেন্টের জন্য স্প্রিং কনফিগ
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // টাচ ডিভাইসে কার্সার দেখাবে না
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      // স্মার্ট হোভার ডিটেকশন
      const target = e.target;
      const isInteractable = target.closest('a, button, input, textarea, [data-hover]');
      setHovering(!!isInteractable);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="bg-gradient-to-tr from-purple-500 to-cyan-400 p-[2px] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)]">
          <HiOutlineEye className="text-white bg-black/60 p-1 rounded-full" size={24} />
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border backdrop-blur-[2px]"
        animate={{
          width: hovering ? 70 : 40,
          height: hovering ? 70 : 40,
          borderColor: hovering ? "rgba(192, 132, 252, 0.8)" : "rgba(168, 85, 247, 0.3)",
          backgroundColor: hovering ? "rgba(168, 85, 247, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
};

export default CustomCursor;
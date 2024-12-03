import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Section({ title, description, imageSrc, imagePosition }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contentOrder = imagePosition === 'left' ? 'order-2' : 'order-1';
  const imageOrder = imagePosition === 'left' ? 'order-1' : 'order-2';

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale }}
      className={`py-20 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className={`md:w-1/2 ${contentOrder}`}>
            <motion.div
              initial={{ x: imagePosition === 'left' ? 50 : -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">{title}</h2>
              <p className="text-white mb-6">{description}</p>
              <button className="bg-[#991b1b] text-xs text-white px-6 py-3 transition duration-300">
                LEARN MORE
              </button>
            </motion.div>
          </div>
          <div className={`md:w-1/2 mt-8 md:mt-0 ${imageOrder}`}>
            <motion.div
              className="relative h-64 md:h-96 overflow-hidden  shadow-xl"
              initial={{ x: imagePosition === 'left' ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Section;


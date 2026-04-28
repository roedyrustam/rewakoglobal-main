import { useLanguage } from '@/contexts/LanguageContext';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return controls.stop;
  }, [count, value, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={ref}>0</span>;
};

export const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 15, label: t('statsExperience'), suffix: '+' },
    { value: 12, label: t('statsProducts'), suffix: '' },
    { value: 25, label: t('statsCountries'), suffix: '+' },
    { value: 5000, label: t('statsContainers'), suffix: '+' },
  ];

  return (
    <section className="py-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

const screenshots = [
  { 
    src: '/screenshots/home-screen.png', 
    alt: '메인 화면',
    title: '심플하고 직관적인 인터페이스'
  },
  { 
    src: '/screenshots/multi-touch-demo.png', 
    alt: '멀티 터치 화면',
    title: '최대 10명까지 동시 터치'
  },
  { 
    src: '/screenshots/animation-shark.png', 
    alt: '상어 애니메이션',
    title: '다양한 애니메이션 효과'
  },
  { 
    src: '/screenshots/settings-panel.png', 
    alt: '설정 화면',
    title: '세부 설정 커스터마이징'
  },
  { 
    src: '/screenshots/dark-mode.png', 
    alt: '다크모드 화면',
    title: '눈이 편안한 다크모드'
  },
  { 
    src: '/screenshots/winner-selection.png', 
    alt: '당첨자 선택 화면',
    title: '공정한 랜덤 선택'
  },
];

export default function ScreenshotsSection() {
  const t = useTranslations('home.screenshots');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="screenshots" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[9/19.5] bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <p className="mt-3 text-center text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {screenshot.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-md w-full aspect-[9/19.5]"
            >
              <Image
                src={screenshots[selectedImage].src}
                alt={screenshots[selectedImage].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
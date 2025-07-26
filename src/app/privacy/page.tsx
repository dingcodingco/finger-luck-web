'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const privacyContent = {
    ko: {
      title: '개인정보 처리방침',
      switchLanguage: 'English',
      lastUpdated: '최종 업데이트: 2025년 1월',
      sections: {
        overview: {
          title: '1. 개요',
          content: 'FingerLuck(이하 "앱")은 사용자의 개인정보를 중요하게 생각하며, 개인정보보호법을 준수합니다. 본 개인정보 처리방침은 앱이 어떤 정보를 수집하고, 어떻게 사용하며, 어떻게 보호하는지를 설명합니다.',
          highlight: '🔒 FingerLuck는 어떠한 개인정보도 수집하지 않습니다.'
        },
        collection: {
          title: '2. 수집하는 개인정보',
          intro: '앱은 다음과 같은 정보를 수집하지 않습니다:',
          items: [
            '이름, 이메일, 전화번호 등의 개인 식별 정보',
            '위치 정보',
            '기기 정보',
            '사용 통계',
            '기타 개인정보'
          ]
        },
        localStorage: {
          title: '3. 로컬 저장 데이터',
          intro: '앱은 다음 데이터를 사용자의 기기에만 저장합니다:',
          items: [
            { bold: '설정 정보', text: ': 소리, 진동, 애니메이션 속도 설정' },
            { bold: '지문 정보', text: ': 터치 패턴 (선택적 기능, 사용자가 직접 등록)' },
            { bold: '선택 기록', text: ': 최근 선택 결과 (최대 5개)' }
          ],
          outro: '이 모든 데이터는:',
          outroItems: [
            '사용자의 기기에만 저장됩니다',
            '외부 서버로 전송되지 않습니다',
            '앱 삭제 시 함께 삭제됩니다'
          ]
        },
        permissions: {
          title: '4. 권한 사용',
          intro: '앱은 다음 권한을 사용합니다:',
          items: [
            { bold: '진동', text: ': 터치 및 선택 시 햅틱 피드백 제공 (설정에서 끌 수 있음)' }
          ]
        },
        security: {
          title: '5. 데이터 보안',
          items: [
            '모든 데이터는 사용자의 기기에만 저장됩니다',
            '네트워크 연결을 통한 데이터 전송이 없습니다',
            '제3자와 데이터를 공유하지 않습니다'
          ]
        },
        children: {
          title: '6. 아동의 개인정보',
          content: '앱은 모든 연령대가 사용할 수 있으며, 아동의 개인정보를 수집하지 않습니다.'
        },
        changes: {
          title: '7. 개인정보 처리방침 변경',
          content: '본 개인정보 처리방침은 필요에 따라 변경될 수 있습니다. 중요한 변경사항이 있을 경우 앱 업데이트를 통해 알려드립니다.'
        },
        contact: {
          title: '8. 문의사항',
          content: '개인정보 처리방침에 대한 문의사항이 있으시면 아래로 연락 주시기 바랍니다:',
          email: 'uijolsamanager@gmail.com'
        }
      }
    },
    en: {
      title: 'Privacy Policy',
      switchLanguage: '한국어',
      lastUpdated: 'Last Updated: January 2025',
      sections: {
        overview: {
          title: '1. Overview',
          content: 'FingerLuck (the "App") values your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and how we protect it.',
          highlight: '🔒 FingerLuck does not collect any personal information.'
        },
        collection: {
          title: '2. Information We Collect',
          intro: 'The App does not collect:',
          items: [
            'Personal identification information (name, email, phone number)',
            'Location data',
            'Device information',
            'Usage statistics',
            'Any other personal data'
          ]
        },
        localStorage: {
          title: '3. Local Storage',
          intro: 'The App stores the following data locally on your device only:',
          items: [
            { bold: 'Settings', text: ': Sound, vibration, and animation speed preferences' },
            { bold: 'Fingerprint Data', text: ': Touch patterns (optional feature, user-registered)' },
            { bold: 'Selection History', text: ': Recent selection results (maximum 5 entries)' }
          ],
          outro: 'All this data:',
          outroItems: [
            'Is stored only on your device',
            'Is never transmitted to external servers',
            'Is deleted when you uninstall the App'
          ]
        },
        permissions: {
          title: '4. Permissions',
          intro: 'The App uses the following permissions:',
          items: [
            { bold: 'Vibration', text: ': To provide haptic feedback during touch and selection (can be disabled in settings)' }
          ]
        },
        security: {
          title: '5. Data Security',
          items: [
            'All data is stored locally on your device',
            'No data is transmitted over the network',
            'We do not share data with third parties'
          ]
        },
        children: {
          title: '6. Children\'s Privacy',
          content: 'The App is suitable for all ages and does not collect any personal information from children.'
        },
        changes: {
          title: '7. Changes to This Privacy Policy',
          content: 'This Privacy Policy may be updated from time to time. We will notify you of any significant changes through app updates.'
        },
        contact: {
          title: '8. Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us at:',
          email: 'uijolsamanager@gmail.com'
        }
      }
    }
  };

  const content = privacyContent[language];

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 sm:p-12"
          >
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                {content.title}
              </h1>
              <button
                onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
              >
                {content.switchLanguage}
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 italic mb-8">{content.lastUpdated}</p>

            <div className="space-y-8">
              {/* 1. 개요 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.overview.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {content.sections.overview.content}
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="font-semibold text-green-800 dark:text-green-300">
                    {content.sections.overview.highlight}
                  </p>
                </div>
              </section>

              {/* 2. 수집하는 개인정보 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.collection.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{content.sections.collection.intro}</p>
                <ul className="space-y-2">
                  {content.sections.collection.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 3. 로컬 저장 데이터 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.localStorage.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{content.sections.localStorage.intro}</p>
                <ul className="space-y-2 mb-6">
                  {content.sections.localStorage.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>{item.bold}</strong>{item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{content.sections.localStorage.outro}</p>
                <ul className="space-y-2">
                  {content.sections.localStorage.outroItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 4. 권한 사용 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.permissions.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{content.sections.permissions.intro}</p>
                <ul className="space-y-2">
                  {content.sections.permissions.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>{item.bold}</strong>{item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 5. 데이터 보안 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.security.title}
                </h2>
                <ul className="space-y-2">
                  {content.sections.security.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 6. 아동의 개인정보 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.children.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content.sections.children.content}
                </p>
              </section>

              {/* 7. 개인정보 처리방침 변경 */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.changes.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {content.sections.changes.content}
                </p>
              </section>

              {/* 8. 문의사항 */}
              <section className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {content.sections.contact.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {content.sections.contact.content}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>이메일</strong>:{' '}
                  <a 
                    href={`mailto:${content.sections.contact.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {content.sections.contact.email}
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
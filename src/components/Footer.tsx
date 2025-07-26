import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('common.footer');

  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">FingerLuck</span>
            <span className="text-sm">{t('copyright')}</span>
          </div>
          
          <nav className="flex gap-6">
            <Link 
              href="/privacy" 
              className="hover:text-white transition-colors"
            >
              {t('privacy')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
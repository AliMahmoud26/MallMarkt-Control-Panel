import './style.scss';
import { LanguageProvider } from './context/LanguageContext'; // Adjust the path as necessary

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="en" dir="ltr">
        <body>{children}</body>
      </html>
    </LanguageProvider>
  );
}
import './globals.css';

export const metadata = {
  title: 'Ments - The Virtual Startup Ecosystem',
  description: 'Build, fund, hire, and grow your startup from a single platform. Ments connects founders, investors, mentors, incubators, accelerators, and startup enablers into one unified startup ecosystem.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

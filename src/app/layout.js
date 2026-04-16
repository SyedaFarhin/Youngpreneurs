import './globals.css';
import '../styles/main.css';
import '../styles/cursor.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CursorEffect from '../components/CursorEffect';
import AosInit from '../components/AosInit';

export const metadata = {
  title: 'Youngpreneurs',
  description: 'YoungPreneurs ignites a movement of future leaders — creating a launchpad where ideas take flight, innovation is born, and the next generation of changemakers rise.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="custom-cursor">
        <AosInit />
        <CursorEffect />
        <div className="App">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

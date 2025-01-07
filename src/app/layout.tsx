import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import 'leaflet/dist/leaflet.css';
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

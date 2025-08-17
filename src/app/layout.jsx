import "./globals.css";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "رزومه من",
  description: "ساخته شده با ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir={"rtl"}>
      <body>
        <ClientLayout />
      </body>
    </html>
  );
}

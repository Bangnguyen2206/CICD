export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children} <h1>Loading....23</h1>
      </body>
    </html>
  );
}

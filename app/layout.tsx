export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children} <h1>Loading....</h1>
      </body>
    </html>
  );
}

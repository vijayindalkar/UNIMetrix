export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        {children}
      </div>
    );
  }
  
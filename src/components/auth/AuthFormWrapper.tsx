interface AuthFormWrapperProps {
  children: React.ReactNode;
  title: string;
}

export function AuthFormWrapper({ children, title }: AuthFormWrapperProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}
'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { ReactNode } from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f141a] text-white">
      <div className="text-center p-8">
        <h2 className="text-2xl mb-4">Something went wrong:</h2>
        <pre className="text-red-400 mb-4">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-teal-500 rounded hover:bg-teal-600"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}

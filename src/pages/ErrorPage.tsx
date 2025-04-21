import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorPageProps {
  statusCode?: number;
  title?: string;
  message?: string;
  showRetry?: boolean;
  onRetry?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  statusCode = 404,
  title = "Oh Snap! Page Not Found",
  message = "Sorry, we couldn’t find the page you’re looking for.",
  showRetry = false,
  onRetry,
}) => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate('/');

  return (
    <div className="min-h-screen flex items-center justify-center !bg-white px-6 py-12">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
          {statusCode}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleGoHome}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
          >
            Go Home
          </button>
          {showRetry && onRetry && (
            <button
              onClick={onRetry}
              className="px-5 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

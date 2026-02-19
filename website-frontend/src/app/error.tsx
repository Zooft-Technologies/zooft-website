"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, ArrowLeft } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto text-center py-20">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-50 flex items-center justify-center">
          <span className="text-3xl text-red-500">!</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Something Went Wrong
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or return to the
          homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zooft-primary hover:bg-zooft-dark text-white font-semibold rounded-xl transition-colors"
          >
            <RefreshCw size={18} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 hover:border-zooft-primary hover:text-zooft-primary font-semibold rounded-xl transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

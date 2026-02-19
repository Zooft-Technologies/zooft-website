import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto text-center py-20">
        <p className="text-8xl md:text-9xl font-bold gradient-text mb-4">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved. Let us
          get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-zooft-primary hover:bg-zooft-dark text-white font-semibold rounded-xl transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}

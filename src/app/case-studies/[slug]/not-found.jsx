import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-[64px] md:text-[96px] font-medium tracking-[-0.03em] mb-6">
          404
        </h1>
        <p className="text-[20px] md:text-[24px] text-black mb-8">
          Case study not found
        </p>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-black hover:text-black text-[16px] transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          Back to Case Studies
        </Link>
      </div>
    </div>
  );
}

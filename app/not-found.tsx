import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404: System Override Required | JP-Visual&Docs",
  description: "The requested protocol identifier does not exist in the secure archive.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 pt-32">
      <div className="w-full max-w-xl text-center">
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <ShieldAlert className="text-accent/20 h-24 w-24 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="label-mono text-accent text-lg">404</span>
            </div>
          </div>
        </div>

        <h1 className="mb-8 text-4xl font-black tracking-tighter text-white uppercase md:text-6xl">
          Protocol <br />
          <span className="text-accent">Missing</span>
        </h1>

        <p className="label-mono mb-12 text-xs tracking-[0.3em] text-slate-400 uppercase">
          The requested identifier has been relocated or archived indefinitely. Unauthorized access
          to this node has been logged.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="btn-service w-full px-12 md:w-auto">
            RE-ESTABLISH BASE ACCESS
          </Link>

          <Link
            href="/services"
            className="group flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-white"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Review Secure Protocols
          </Link>
        </div>

        <div className="mt-24 border-t border-slate-900 pt-12 opacity-20">
          <span className="label-mono text-[8px] tracking-[0.8em] text-slate-400">
            ERR_NODE_NOT_FOUND // SECURE_ARCHIVE
          </span>
        </div>
      </div>
    </main>
  );
}

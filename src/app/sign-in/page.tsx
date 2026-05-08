import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignInForm from "./SignInForm";

export const metadata: Metadata = {
  title: "Sign in to OTTv",
  description: "Sign in to manage your OTTv IPTV subscription.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function SignInPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center px-5 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <p className="eyebrow mb-3">Account</p>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
            <p className="text-sm text-[#929aa5]">
              Sign in to manage your subscription and devices.
            </p>
          </div>

          <div className="bg-[#1e2329] border border-[#2b3139] rounded-xl p-7 sm:p-8">
            <SignInForm />
          </div>

          <p className="text-center text-sm text-[#929aa5] mt-6">
            New to OTTv?{" "}
            <Link
              href="/sign-up"
              className="text-[#fcd535] hover:text-[#f0b90b] font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

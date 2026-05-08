import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Create your OTTv account",
  description:
    "Sign up for OTTv to manage your IPTV subscription, devices, and renewals.",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center px-5 py-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <p className="eyebrow mb-3">Account</p>
            <h1 className="text-3xl font-bold text-white mb-2">
              Create your account
            </h1>
            <p className="text-sm text-[#929aa5]">
              Manage your subscription, devices and renewals in one place.
            </p>
          </div>

          <div className="bg-[#1e2329] border border-[#2b3139] rounded-xl p-7 sm:p-8">
            <SignUpForm />
          </div>

          <p className="text-center text-sm text-[#929aa5] mt-6">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="text-[#fcd535] hover:text-[#f0b90b] font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

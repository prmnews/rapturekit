"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { MainNav } from "@/components/main-nav";
import { ThemeLogo } from "@/components/theme-logo";
import { RaptureButton } from "@/components/rapture-button";

interface FormStatus {
  submitted: boolean;
  submitting: boolean;
  info: {
    error: boolean;
    msg: string | null;
  };
}

interface FormInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  const [inputs, setInputs] = useState<FormInputs>({
    name: '',
    email: '',
    subject: 'More Information on the Rapture Kit requested!',
    message: ''
  });

  const handleServerResponse = (ok: boolean, msg: string) => {
    if (ok) {
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg }
      });
      setInputs({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setFormStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg }
      });
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });
    
    try {
      const response = await fetch('https://formspree.io/f/mqapdany', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
      });
      
      const json = await response.json();
      
      handleServerResponse(response.ok, json.message || "Thank you, your message has been submitted.");
    } catch (error) {
      handleServerResponse(false, (error as Error).message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Same as home page */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <ThemeLogo />
          </Link>
          <div className="flex items-center gap-2">
            <MainNav />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 text-burgundy dark:text-yellow-400">Contact Us</h1>
            <div className="w-24 h-1 bg-burgundy dark:bg-yellow-400 mx-auto"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">We'd love to hear from you. Feel free to reach out with any questions about the Rapture Kit.</p>
          </div>

          {/* Content Area - 1200px max width */}
          <div className="mx-auto max-w-[800px]">
            {formStatus.submitted ? (
              <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">Thank You!</h3>
                <p className="text-green-700 dark:text-green-400 mb-6">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <RaptureButton
                  onClick={() => setFormStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                >
                  Send Another Message
                </RaptureButton>
              </div>
            ) : (
              <div className="bg-muted rounded-lg p-8">
                {formStatus.info.error && (
                  <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6 text-red-700 dark:text-red-400">
                    {formStatus.info.msg}
                  </div>
                )}
                <form onSubmit={handleOnSubmit}>
                  <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={inputs.name}
                        onChange={handleOnChange}
                        className="bg-background border border-input rounded-lg focus:ring-burgundy dark:focus:ring-yellow-400 focus:border-burgundy dark:focus:border-yellow-400 block w-full p-2.5"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={inputs.email}
                        onChange={handleOnChange}
                        className="bg-background border border-input rounded-lg focus:ring-burgundy dark:focus:ring-yellow-400 focus:border-burgundy dark:focus:border-yellow-400 block w-full p-2.5"
                        placeholder="john.doe@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={inputs.subject}
                      onChange={handleOnChange}
                      className="bg-background border border-input rounded-lg focus:ring-burgundy dark:focus:ring-yellow-400 focus:border-burgundy dark:focus:border-yellow-400 block w-full p-2.5"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={inputs.message}
                      onChange={handleOnChange}
                      rows={6}
                      className="bg-background border border-input rounded-lg focus:ring-burgundy dark:focus:ring-yellow-400 focus:border-burgundy dark:focus:border-yellow-400 block w-full p-2.5"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                  <RaptureButton
                    type="submit"
                    disabled={formStatus.submitting}
                    onClick={() => {}}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  </RaptureButton>
                </form>
              </div>
            )}

            <div className="mt-16 grid gap-8 md:grid-cols-3 text-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:admin@iamawatchman.com?subject=More%20Information%20on%20the%20Rapture%20Kit%20requested!" className="hover:underline">support@rapturekit.org</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                <div className="flex justify-center gap-4">
                  <a href="https://www.facebook.com/groups/618456751834259/" className="text-muted-foreground hover:text-burgundy dark:hover:text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="https://x.com/iamawatchman" className="text-muted-foreground hover:text-burgundy dark:hover:text-yellow-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Resources</h3>
                <p className="text-muted-foreground">
                  <Link href="/faqs" className="hover:underline">FAQs</Link> • <Link href="/tutorials" className="hover:underline">Tutorials</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Same as home page */}
      <footer className="border-t bg-background py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Rapture Kit. All rights reserved.
              </p>
            </div>
            <div className="text-center">
              <Link target="_blank" href="/rapture/pdf/The_A-B-Cs_of_Salvation.pdf" className="hover:underline">
                <h3 className="mb-2 font-semibold">The ABC's of Salvation</h3>
              </Link>
              <ol className="text-sm text-muted-foreground list-decimal list-inside">
                <li>A - Admit you are a sinner</li>
                <li>B - Believe in Jesus Christ</li>
                <li>C - Confess and commit</li>
              </ol>
            </div>

            <div className="text-right">
              <RaptureButton href="/rapture">
                Did the Rapture Happen?
              </RaptureButton>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  contentParentVariants,
  contentVariants,
} from "../utils/motionVariants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Mail, Phone } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <main>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={contentParentVariants}
        className="container mx-auto px-6 py-10 md:py-8 grid grid-cols-1 xl:items-center lg:grid-cols-5 gap-12 md:gap-20 row-start-2 items-start"
      >
        <motion.div className="col-span-5 lg:col-span-2 xl:col-span-3" variants={contentVariants}>
          <Image
            src="/images/image-2.png"
            width={3552}
            height={2400}
            alt={"Contact photo"}
          />
        </motion.div>
        <div className="flex flex-col col-span-5 lg:col-span-3 xl:col-span-2 leading-[2] lg:text-xl container mx-auto flex flex-col gap-2">
          <motion.div
            className="font-light text-base"
            variants={contentVariants}
          >
            <div className="container mx-auto pb-6 flex flex-row gap-8">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link
                  href="mailto:info@colourone.com"
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  info@colourone.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <Link
                  href="tel:+442074950700"
                  className="block text-foreground hover:text-muted-foreground transition-colors"
                >
                  +44 (0) 207 495 0700
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={contentVariants}>
            <Card className="border-none shadow-none bg-transparent pt-0">
              <CardHeader className="px-0">
                <CardTitle className="text-4xl font-light">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-base">
                  We&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                {isSubmitted ? (
                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Thank you for your message! We&apos;ll be in touch soon.
                    </AlertDescription>
                  </Alert>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-gray-300 focus:border-gray-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-gray-300 focus:border-gray-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="border-gray-300 focus:border-gray-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your project or inquiry..."
                        required
                        maxLength={1000}
                        rows={5}
                        className="border-gray-300 focus:border-gray-500 resize-none"
                      />
                      <p className="text-xs text-muted-foreground text-right">
                        {formData.message.length}/1000 characters
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full md:w-auto px-8 py-2 bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}

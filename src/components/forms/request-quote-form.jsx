 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

const steps = [
  { id: "personal", title: "Personal Info" },
  { id: "services", title: "Services" },
  { id: "location", title: "Location" },
  { id: "details", title: "Details" },
];

const photographyServices = [
  "Corporate Events Photography",
  "Wedding and Engagement Photography",
  "Studio Shots & Studio Hire Photography",
  "Portrait Shots Photography",
  "Outdoor & Indoor Photography",
  "Family Photography - Baby, Birthdays, Parties",
  "Wildlife, Tours & Travel Photography",
  "Food & Hotel Photography",
  "Drone & Aerial Photography",
];

const videographyServices = [
  "Corporate Events Video Coverage",
  "Wedding Video Coverage",
  "Documentaries Production",
  "Livestreaming & Live shows Coverage",
  "Drone & Aerial Videography",
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other",
];

const hearAboutUsOptions = [
  "Google Search",
  "Social Media",
  "Referral / Word of Mouth",
  "Previous Client",
  "Event / Conference",
  "Website / Blog",
  "Other",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

export default function RequestQuoteForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    photographyServices: [],
    videographyServices: [],
    address: "",
    city: "",
    country: "",
    hearAboutUs: "",
    requestDetails: "",
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleService = (category, service) => {
    setFormData((prev) => {
      const current = [...prev[category]];
      if (current.includes(service)) {
        return { ...prev, [category]: current.filter((s) => s !== service) };
      }
      return { ...prev, [category]: [...current, service] };
    });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setIsSubmitting(false);
      alert(
        "Missing Web3Forms access key. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in your environment."
      );
      return;
    }

    const allServices = [
      ...formData.photographyServices,
      ...formData.videographyServices,
    ];

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          services: allServices.join(", "),
          address: formData.address,
          city: formData.city,
          country: formData.country,
          how_heard: formData.hearAboutUs,
          message: formData.requestDetails,
          subject: `Quote Request from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          photographyServices: [],
          videographyServices: [],
          address: "",
          city: "",
          country: "",
          hearAboutUs: "",
          requestDetails: "",
        });
        setCurrentStep(0);
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch {
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== ""
        );
      case 1:
        return (
          formData.photographyServices.length > 0 ||
          formData.videographyServices.length > 0
        );
      case 2:
        return formData.city.trim() !== "" && formData.country !== "";
      default:
        return true;
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-2xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border border-[#a58761]/20 shadow-lg rounded-3xl overflow-hidden bg-white">
            <CardContent className="py-16 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-light text-[#1b1e1b]">
                Thank You!
              </h3>
              <p className="text-[#6f6b63] max-w-md mx-auto">
                Your quote request has been submitted successfully. We will
                review your requirements and get back to you within two business
                days.
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-transparent bg-[#003C59] text-white px-8 shadow-lg shadow-[#003C59]/20 transition-colors hover:bg-[#0D58A5]"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      {/* Progress indicator */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between mb-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className={cn(
                  "w-4 h-4 rounded-full cursor-pointer transition-colors duration-300",
                  index < currentStep
                    ? "bg-[#111111]"
                    : index === currentStep
                      ? "bg-[#111111] ring-4 ring-[#111111]/30"
                      : "bg-gray-300"
                )}
                onClick={() => {
                  if (index <= currentStep) {
                    setCurrentStep(index);
                  }
                }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.span
                className={cn(
                  "text-sm mt-1.5 hidden sm:block",
                  index === currentStep
                    ? "text-[#111111] font-semibold"
                    : "text-[#6f6b63]"
                )}
              >
                {step.title}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="w-full bg-[#111111]/10 h-1.5 rounded-full overflow-hidden mt-2">
          <motion.div
            className="h-full bg-[#111111]"
            initial={{ width: 0 }}
            animate={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="border border-gray-200 shadow-lg rounded-3xl overflow-hidden bg-white">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                {/* Step 1: Personal Info */}
                {currentStep === 0 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-light text-[#1b1e1b]">
                        Tell us about yourself
                      </CardTitle>
                      <CardDescription className="text-lg text-[#6f6b63]">
                        Let&apos;s start with some basic information
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                          variants={fadeInUp}
                          className="space-y-2"
                        >
                          <Label
                            htmlFor="firstName"
                            className="text-lg font-semibold text-[#1b1e1b]"
                          >
                            First Name*
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) =>
                              updateFormData("firstName", e.target.value)
                            }
                            className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] placeholder-gray-400 focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                          />
                        </motion.div>
                        <motion.div
                          variants={fadeInUp}
                          className="space-y-2"
                        >
                          <Label
                            htmlFor="lastName"
                            className="text-lg font-semibold text-[#1b1e1b]"
                          >
                            Last Name*
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) =>
                              updateFormData("lastName", e.target.value)
                            }
                            className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] placeholder-gray-400 focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                          />
                        </motion.div>
                      </div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-lg font-semibold text-[#1b1e1b]"
                        >
                          Email*
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            updateFormData("email", e.target.value)
                          }
                          className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] placeholder-gray-400 focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-lg font-semibold text-[#1b1e1b]"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Include country code"
                          value={formData.phone}
                          onChange={(e) =>
                            updateFormData("phone", e.target.value)
                          }
                          className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] placeholder-gray-400 focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                        />
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 2: Services */}
                {currentStep === 1 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-light text-[#1b1e1b]">
                        Select Services
                      </CardTitle>
                      <CardDescription className="text-lg text-[#6f6b63]">
                        Choose one or multiple services, solutions, or packages
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Photography */}
                      <motion.div variants={fadeInUp} className="space-y-3">
                        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#a58761]">
                          Photography
                        </p>
                        <div className="space-y-2">
                          {photographyServices.map((service, index) => (
                            <motion.div
                              key={service}
                              className="flex items-center space-x-3 rounded-xl border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                  delay: 0.03 * index,
                                  duration: 0.3,
                                },
                              }}
                              onClick={() =>
                                toggleService("photographyServices", service)
                              }
                            >
                              <Checkbox
                                id={`photo-${service}`}
                                checked={formData.photographyServices.includes(
                                  service
                                )}
                                onCheckedChange={() =>
                                  toggleService("photographyServices", service)
                                }
                                className="border-gray-300 data-[state=checked]:bg-[#111111] data-[state=checked]:border-[#111111]"
                              />
                              <Label
                                htmlFor={`photo-${service}`}
                                className="cursor-pointer w-full text-base text-[#1b1e1b]"
                              >
                                {service}
                              </Label>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Videography */}
                      <motion.div variants={fadeInUp} className="space-y-3">
                        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#a58761]">
                          Videography
                        </p>
                        <div className="space-y-2">
                          {videographyServices.map((service, index) => (
                            <motion.div
                              key={service}
                              className="flex items-center space-x-3 rounded-xl border border-gray-200 p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                  delay: 0.03 * index,
                                  duration: 0.3,
                                },
                              }}
                              onClick={() =>
                                toggleService("videographyServices", service)
                              }
                            >
                              <Checkbox
                                id={`video-${service}`}
                                checked={formData.videographyServices.includes(
                                  service
                                )}
                                onCheckedChange={() =>
                                  toggleService("videographyServices", service)
                                }
                                className="border-gray-300 data-[state=checked]:bg-[#111111] data-[state=checked]:border-[#111111]"
                              />
                              <Label
                                htmlFor={`video-${service}`}
                                className="cursor-pointer w-full text-base text-[#1b1e1b]"
                              >
                                {service}
                              </Label>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 3: Location */}
                {currentStep === 2 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-light text-[#1b1e1b]">
                        Your Location
                      </CardTitle>
                      <CardDescription className="text-lg text-[#6f6b63]">
                        Tell us where you are based
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label
                          htmlFor="address"
                          className="text-lg font-semibold text-[#1b1e1b]"
                        >
                          Address
                        </Label>
                        <Input
                          id="address"
                          placeholder="Street address"
                          value={formData.address}
                          onChange={(e) =>
                            updateFormData("address", e.target.value)
                          }
                          className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] placeholder-gray-400 focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label
                          htmlFor="city"
                          className="text-lg font-semibold text-[#1b1e1b]"
                        >
                          City*
                        </Label>
                        <Input
                          id="city"
                          placeholder="e.g. Nairobi"
                          value={formData.city}
                          onChange={(e) =>
                            updateFormData("city", e.target.value)
                          }
                          className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] placeholder-gray-400 focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                        />
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label
                          htmlFor="country"
                          className="text-lg font-semibold text-[#1b1e1b]"
                        >
                          Country*
                        </Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) =>
                            updateFormData("country", value)
                          }
                        >
                          <SelectTrigger
                            id="country"
                            className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                          >
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((c) => (
                              <SelectItem key={c} value={c}>
                                {c}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label
                          htmlFor="hearAboutUs"
                          className="text-lg font-semibold text-[#1b1e1b]"
                        >
                          How did you hear about us?
                        </Label>
                        <Select
                          value={formData.hearAboutUs}
                          onValueChange={(value) =>
                            updateFormData("hearAboutUs", value)
                          }
                        >
                          <SelectTrigger
                            id="hearAboutUs"
                            className="rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50"
                          >
                            <SelectValue placeholder="- Select -" />
                          </SelectTrigger>
                          <SelectContent>
                            {hearAboutUsOptions.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </CardContent>
                  </>
                )}

                {/* Step 4: Details */}
                {currentStep === 3 && (
                  <>
                    <CardHeader>
                      <CardTitle className="text-2xl font-light text-[#1b1e1b]">
                        Request Details
                      </CardTitle>
                      <CardDescription className="text-lg text-[#6f6b63]">
                        Tell us a bit more about your request or business needs,
                        objectives, and scope of work
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <Label
                          htmlFor="requestDetails"
                          className="text-lg font-semibold text-[#1b1e1b]"
                        >
                          Your Message
                        </Label>
                        <Textarea
                          id="requestDetails"
                          placeholder="Describe your project goals, timeline, deliverables, and any other relevant details..."
                          value={formData.requestDetails}
                          onChange={(e) =>
                            updateFormData("requestDetails", e.target.value)
                          }
                          className="min-h-[200px] rounded-xl bg-gray-50 border-gray-200 text-base text-[#1b1e1b] placeholder-gray-400 focus:ring-2 focus:ring-[#a58761]/30 focus:border-[#a58761]/50 resize-none"
                        />
                      </motion.div>

                      {/* Summary */}
                      <motion.div
                        variants={fadeInUp}
                        className="rounded-xl bg-gray-50 border border-gray-200 p-4 space-y-2"
                      >
                        <p className="text-[11px] font-semibold tracking-[3px] uppercase text-[#a58761]">
                          Summary
                        </p>
                        <div className="text-base text-[#1b1e1b] space-y-1">
                          <p>
                            <span className="text-[#6f6b63]">Name:</span>{" "}
                            {formData.firstName} {formData.lastName}
                          </p>
                          <p>
                            <span className="text-[#6f6b63]">Email:</span>{" "}
                            {formData.email}
                          </p>
                          {formData.phone && (
                            <p>
                              <span className="text-[#6f6b63]">Phone:</span>{" "}
                              {formData.phone}
                            </p>
                          )}
                          <p>
                            <span className="text-[#6f6b63]">Services:</span>{" "}
                            {[
                              ...formData.photographyServices,
                              ...formData.videographyServices,
                            ].join(", ") || "None selected"}
                          </p>
                          <p>
                            <span className="text-[#6f6b63]">Location:</span>{" "}
                            {[formData.city, formData.country]
                              .filter(Boolean)
                              .join(", ") || "—"}
                          </p>
                        </div>
                      </motion.div>
                    </CardContent>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <CardFooter className="flex justify-between pt-6 pb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="flex items-center gap-1 rounded-full border border-[#111111] bg-[#111111] text-white disabled:bg-[#111111]/40 disabled:border-[#111111]/30 disabled:text-white/70"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="button"
                  onClick={
                    currentStep === steps.length - 1 ? handleSubmit : nextStep
                  }
                  disabled={!isStepValid() || isSubmitting}
                  className={cn(
                    "flex items-center gap-1 rounded-full border border-[#111111] bg-[#111111] text-white shadow-md shadow-black/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : (
                    <>
                      {currentStep === steps.length - 1
                        ? "Submit Request"
                        : "Next"}
                      {currentStep === steps.length - 1 ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </>
                  )}
                </Button>
              </motion.div>
            </CardFooter>
          </div>
        </Card>
      </motion.div>

      {/* Step indicator */}
      <motion.div
        className="mt-4 text-center text-sm text-[#6f6b63]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
      </motion.div>
    </div>
  );
}

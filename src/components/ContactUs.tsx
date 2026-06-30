import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    area: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    const mobileRegex = /^[6-9]\d{9}$/;

    if (
      !formData.fullName.trim() ||
      !formData.mobileNumber.trim() ||
      !formData.area
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!mobileRegex.test(formData.mobileNumber.trim())) {
      toast.error("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          mobile_number: formData.mobileNumber,
          area: formData.area,
          message: formData.message || "No message provided",
          submitted_at: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Thank you for contacting Janhvi Enterprise!", {
        description:
          "Your inquiry has been received. Our financial expert will connect with you shortly.",
      });

      setFormData({
        fullName: "",
        mobileNumber: "",
        area: "",
        message: "",
      });

      setSubmitted(false);
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error("Unable to submit inquiry.", {
        description: "Please try again after some time.",
      });
    } finally {
      setLoading(false);
    }
  };
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      backgroundColor: "#FFFFFF",

      "& fieldset": {
        borderColor: "#E5E7EB",
      },

      "&:hover fieldset": {
        borderColor: "#BB983C",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#BB983C",
        borderWidth: "2px",
      },
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#BB983C",
    },
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-[#F9F9FA] shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#F9F9FA] p-8 lg:p-14">
              <span className="inline-flex w-fit rounded-full bg-[#BB983C]/10 px-4 py-2 text-sm font-medium text-[#BB983C]">
                Contact Us
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
                Let's Discuss Your
                <span className="block text-[#BB983C]">Financial Needs</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you're looking for Home Loans, Personal Loans, Business
                Loans, Mortgage Loans, Tax Services, or Government Registration
                assistance, our experts are ready to provide the right guidance
                and solutions.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#BB983C]" />
                  <span className="text-slate-700">Free Consultation</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#BB983C]" />
                  <span className="text-slate-700">Quick Response</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#BB983C]" />
                  <span className="text-slate-700">
                    Trusted Financial Guidance
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#BB983C]" />
                  <span className="text-slate-700">6+ Years of Experience</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-14">
              <form onSubmit={handleSubmit} className="space-y-5">
                <TextField
                  fullWidth
                  // required
                  label="Full Name"
                  value={formData.fullName}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");

                    setFormData({
                      ...formData,
                      fullName: value,
                    });
                  }}
                  error={submitted && !formData.fullName.trim()}
                  helperText={
                    submitted && !formData.fullName.trim()
                      ? "Full name is required"
                      : ""
                  }
                  sx={inputStyles}
                />

                <TextField
                  fullWidth
                  label="Mobile Number"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 10) {
                      setFormData({
                        ...formData,
                        mobileNumber: value,
                      });
                    }
                  }}
                  error={
                    submitted &&
                    (formData.mobileNumber.trim() === "" ||
                      !/^[6-9]\d{9}$/.test(formData.mobileNumber))
                  }
                  helperText={
                    submitted
                      ? formData.mobileNumber.trim() === ""
                        ? "Mobile number is required"
                        : !/^[6-9]\d{9}$/.test(formData.mobileNumber)
                        ? "Enter a valid Indian mobile number"
                        : ""
                      : ""
                  }
                  sx={inputStyles}
                />

                <FormControl
                  fullWidth
                  // required
                  error={submitted && !formData.area}
                  sx={inputStyles}
                >
                  <InputLabel>Select Area</InputLabel>

                  <Select
                    value={formData.area}
                    label="Select Area"
                    onChange={(e: SelectChangeEvent) =>
                      setFormData({
                        ...formData,
                        area: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                    <MenuItem value="Gandhinagar">Gandhinagar</MenuItem>
                    <MenuItem value="Nadiad">Nadiad</MenuItem>
                    <MenuItem value="Anand">Anand</MenuItem>
                    <MenuItem value="Kheda">Kheda</MenuItem>
                    <MenuItem value="Mehsana">Mehsana</MenuItem>
                    <MenuItem value="Vadodara">Vadodara</MenuItem>
                    <MenuItem value="Surat">Surat</MenuItem>
                    <MenuItem value="Rajkot">Rajkot</MenuItem>
                    <MenuItem value="Bhavnagar">Bhavnagar</MenuItem>
                    <MenuItem value="Jamnagar">Jamnagar</MenuItem>
                    <MenuItem value="Junagadh">Junagadh</MenuItem>
                    <MenuItem value="Patan">Patan</MenuItem>
                    <MenuItem value="Palanpur">Palanpur</MenuItem>
                  </Select>

                  {submitted && !formData.area && (
                    <span className="mt-1 text-sm text-red-500">
                      Please select an area
                    </span>
                  )}
                </FormControl>

                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Message (Optional)"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  sx={inputStyles}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full rounded-xl bg-[#BB983C] text-white hover:bg-[#a88735] disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

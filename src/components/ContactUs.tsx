import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Button } from "../components/ui/button";
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
    email: "",
    course: "",
    message: "",
  });

  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    const mobileRegex = /^[6-9]\d{9}$/;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.email ||
      !formData.course
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!mobileRegex.test(formData.mobileNumber)) {
      toast.error("Enter a valid mobile number.");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email.");
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
          email: formData.email,
          course: formData.course,
          message: formData.message || "No Message",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success(
        <span className="bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] bg-clip-text text-transparent font-semibold">
          Thank you for contacting Dhyana Technologies!
        </span>,
      );

      setFormData({
        fullName: "",
        mobileNumber: "",
        email: "",
        course: "",
        message: "",
      });

      setSubmitted(false);
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-[#F9F9FA] shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#F9F9FA] p-8 lg:p-14">
              <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-[#0B4DBB]/10 to-[#38A800]/10 border border-[#0B4DBB]/20 px-4 py-2 text-sm font-medium text-[#0B4DBB]">
                Contact Us
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900">
                Let's Build Your Tech Career Together
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Have questions about our IT courses? Our team is ready to guide
                you and help you choose the right technology for your career.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0B4DBB] to-[#38A800]" />
                  <span className="text-slate-700">
                    Professional IT Training Programs
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0B4DBB] to-[#38A800]" />
                  <span className="text-slate-700">
                    Real-Time Industry Projects
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0B4DBB] to-[#38A800]" />
                  <span className="text-slate-700">
                    100% Practical Learning Approach
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0B4DBB] to-[#38A800]" />
                  <span className="text-slate-700">
                    Career & Placement Support
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0B4DBB] to-[#38A800]" />
                  <span className="text-slate-700">
                    Flexible Online & Offline Classes
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0B4DBB] to-[#38A800]" />
                  <span className="text-slate-700">
                    2+ Years of Trusted IT Excellence
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-14">
              <form onSubmit={handleSubmit} className="space-y-5">
                <TextField
                  fullWidth
                  label="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  error={submitted && !formData.fullName}
                  helperText={
                    submitted && !formData.fullName
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
                    submitted && !/^[6-9]\d{9}$/.test(formData.mobileNumber)
                  }
                  helperText={
                    submitted && !/^[6-9]\d{9}$/.test(formData.mobileNumber)
                      ? "Enter a valid mobile number"
                      : ""
                  }
                  sx={inputStyles}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  error={submitted && !formData.email}
                  helperText={
                    submitted && !formData.email ? "Email is required" : ""
                  }
                  sx={inputStyles}
                />

                <FormControl
                  fullWidth
                  error={submitted && !formData.course}
                  sx={inputStyles}
                >
                  <InputLabel>Select Course</InputLabel>

                  <Select
                    value={formData.course}
                    label="Select Course"
                    onChange={(e: SelectChangeEvent) =>
                      setFormData({
                        ...formData,
                        course: e.target.value,
                      })
                    }
                  >
                    <MenuItem value="Python Full Stack">
                      Python Full Stack Development
                    </MenuItem>

                    <MenuItem value="Django">Django Development</MenuItem>

                    <MenuItem value="React.js">React.js Training</MenuItem>

                    <MenuItem value="Next.js">Next.js Training</MenuItem>

                    <MenuItem value="Node.js">Node.js Training</MenuItem>

                    <MenuItem value="Nest.js">Nest.js Training</MenuItem>

                    <MenuItem value="JavaScript">JavaScript Training</MenuItem>

                    <MenuItem value="Flutter">Flutter Development</MenuItem>

                    <MenuItem value="AI">AI & Machine Learning</MenuItem>

                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Message"
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
                  className="h-12 w-full rounded-xl bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] text-white hover:from-[#0A43A3] hover:via-[#1459B0] hover:to-[#2F9500] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {loading ? "Sending..." : "Book Free Demo Class"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

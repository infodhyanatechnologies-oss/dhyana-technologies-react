import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";

import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Cloud,
  BrainCircuit,
  Clock3,
  Award,
  Laptop,
  CheckCircle2,
} from "lucide-react";

interface Course {
  title: string;
  icon: JSX.Element;
  shortDesc: string;
  duration: string;
  mode: string;
  level: string;
  description: string;
  topics: string[];
}

const courses: Course[] = [
  {
    title: "Software Development",
    icon: <Code2 size={22} />,
    shortDesc: "Master backend development with Python, Django & Full Stack.",
    duration: "4-6 Months",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    description:
      "Learn software development from scratch and build industry-level applications with live projects.",
    topics: [
      "Python Programming",
      "Object Oriented Programming",
      "Django Framework",
      "Django REST Framework",
      "REST APIs",
      "Authentication & JWT",
      "Git & GitHub",
      "Full Stack Development",
      "Live Projects",
      "Interview Preparation",
    ],
  },

  {
    title: "Web Development",
    icon: <Globe size={22} />,
    shortDesc: "Become a professional Frontend & Backend Web Developer.",
    duration: "5-6 Months",
    mode: "Online / Offline",
    level: "Beginner to Advanced",
    description:
      "Build modern websites and web applications using the latest technologies.",
    topics: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Nest.js",
      "MongoDB",
      "Deployment",
    ],
  },

  {
    title: "Mobile App Development",
    icon: <Smartphone size={22} />,
    shortDesc: "Create Android & iOS apps using Flutter & React Native.",
    duration: "4 Months",
    mode: "Online / Offline",
    level: "Beginner",
    description:
      "Develop beautiful cross-platform mobile applications from scratch.",
    topics: [
      "Flutter",
      "Dart",
      "React Native",
      "Firebase",
      "API Integration",
      "Push Notification",
      "Play Store Deployment",
      "Live Project",
    ],
  },

  {
    title: "Database Training",
    icon: <Database size={22} />,
    shortDesc: "Learn SQL & NoSQL databases used in real companies.",
    duration: "2 Months",
    mode: "Online / Offline",
    level: "Beginner",
    description: "Understand database design, optimization and management.",
    topics: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Database Design",
      "Relationships",
      "Queries",
      "Backup & Restore",
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: <Cloud size={22} />,
    shortDesc: "Deploy applications like professionals using Cloud & DevOps.",
    duration: "3 Months",
    mode: "Online / Offline",
    level: "Intermediate",
    description: "Master deployment, Docker, AWS and CI/CD pipelines.",
    topics: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Nginx",
      "Cloud Deployment",
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: <BrainCircuit size={22} />,
    shortDesc: "Learn Artificial Intelligence with real-world projects.",
    duration: "5 Months",
    mode: "Online / Offline",
    level: "Intermediate",
    description: "Build AI applications using Python and Machine Learning.",
    topics: [
      "Python",
      "NumPy",
      "Pandas",
      "Machine Learning",
      "Deep Learning",
      "OpenAI API",
      "ChatGPT Integration",
      "Live AI Projects",
    ],
  },
];

export const Services = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  return (
    <>
      <section id="courses" className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] text-[#BB983C] text-transparent bg-clip-text font-semibold uppercase tracking-widest">
              Training Programs
            </span>

            <h2 className="text-4xl font-bold mt-3">Professional IT Courses</h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Learn the latest technologies from industry experts with practical
              training, live projects, certification and placement assistance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card
                key={course.title}
                className="group rounded-xl border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-5">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10 text-[#0B4DBB]">
                    <div className="scale-90">{course.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {course.shortDesc}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="mt-5 rounded-lg bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] px-4 py-2 text-sm font-medium text-white shadow hover:shadow-lg transition-all duration-300"
                  >
                    View Details
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={selectedCourse !== null}
        onOpenChange={() => setSelectedCourse(null)}
      >
        <DialogContent className="max-w-3xl rounded-2xl">
          {selectedCourse && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0B4DBB]/20 bg-gradient-to-br from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10 text-[#0B4DBB] shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md">
                    {selectedCourse.icon}
                  </div>
                  {selectedCourse.title}
                </DialogTitle>
              </DialogHeader>{" "}
              <p className="text-slate-600 mt-4 leading-7">
                {selectedCourse.description}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="rounded-xl bg-slate-50 p-4 border">
                  <Clock3 className="mb-2 text-[#0B4DBB]" />
                  <p className="text-sm text-slate-500">Duration</p>
                  <h4 className="font-semibold">{selectedCourse.duration}</h4>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 border">
                  <Laptop className="mb-2 text-[#0B4DBB]" />
                  <p className="text-sm text-slate-500">Mode</p>
                  <h4 className="font-semibold">{selectedCourse.mode}</h4>
                </div>

                <div className="rounded-xl bg-slate-50 p-4 border">
                  <Award className="mb-2 text-[#0B4DBB]" />
                  <p className="text-sm text-slate-500">Level</p>
                  <h4 className="font-semibold">{selectedCourse.level}</h4>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-5">What You'll Learn</h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCourse.topics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-3 rounded-lg border p-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10">
                        <CheckCircle2 size={18} className="text-[#0B4DBB]" />
                      </div>

                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 rounded-xl bg-[#BB983C]/10 border border-[#BB983C]/20 p-6">
                <h3 className="font-bold text-xl mb-4">Course Benefits</h3>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10">
                      <CheckCircle2 size={18} className="text-[#0B4DBB]" />
                    </div>
                    <span>Live Project Training</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10">
                      <CheckCircle2 size={18} className="text-[#0B4DBB]" />
                    </div>
                    <span>Industry Certificate</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10">
                      <CheckCircle2 size={18} className="text-[#0B4DBB]" />
                    </div>
                    <span>Placement Assistance</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10">
                      <CheckCircle2 size={18} className="text-[#0B4DBB]" />
                    </div>
                    <span>Interview Preparation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10">
                      <CheckCircle2 size={18} className="text-[#0B4DBB]" />
                    </div>
                    <span>Resume Building</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#0B4DBB]/10 via-[#1565C0]/10 to-[#38A800]/10">
                      <CheckCircle2 size={18} className="text-[#0B4DBB]" />
                    </div>
                    <span>Lifetime Support</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedCourse(null);
                    window.location.href = "#contact";
                  }}
                  className="mt-6 bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] text-white px-5 py-2 rounded-lg hover:from-[#0A43A3] hover:via-[#1459B0] hover:to-[#2F9500] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Enroll Now
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface Education {
  school: string;
  degree: string;
  period: string;
}

interface CV {
  name: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
}

const cv: CV = {
  name: "Kazuki SODA",
  summary: "Software developer with a focus on web technologies.",
  experiences: [
    {
      company: "Example Corp",
      role: "Frontend Engineer",
      period: "2022 - Present",
      description: "Building modern web applications with TypeScript."
    }
  ],
  education: [
    {
      school: "Example University",
      degree: "B.S. in Computer Science",
      period: "2018 - 2022"
    }
  ]
};

export = cv;

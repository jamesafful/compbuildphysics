const projects = [
  {
    title: "Indoor Air Quality Modeling for K–12 Schools",
    description: `Simulation of airflow and contaminant transport in classroom environments to support HVAC retrofitting decisions. High-fidelity CFD models were developed using in-house solvers and validated with field data.`,
    sponsor: "Iowa Economic Development Authority",
    methods: ["CFD", "Contaminant Dispersion", "Indoor Air Quality"],
    year: "2023–2024",
  },
  {
    title: "Evapo-Transpirative Cooling in Urban Agriculture",
    description: `Analyzed evapotranspiration using LiCOR sensor data and ran CFD simulations to quantify cooling effects of vegetation. Outcomes inform building energy modeling in urban microclimates.`,
    sponsor: "NSF INFEWS",
    methods: ["Field Sensing", "CFD", "Energy Simulation"],
    year: "2023–2024",
  },
  {
    title: "Phase-Change Simulation for National Security",
    description: `Simulated metal vaporization and plume expansion in ultra-high vacuum environments as part of a feasibility study in isotope separation and accelerator technology.`,
    sponsor: "Lawrence Livermore National Laboratory (AVLIS/SCORPIUS)",
    methods: ["ANSYS Fluent", "Phase Change", "National Security"],
    year: "2024",
  },
  {
    title: "Smart and Connected Communities: CommHeat",
    description: `Python-based processing of outdoor microclimate data (solar flux, RH, wind) to evaluate passive cooling and local energy resilience. Integrated into community-scale thermal modeling.`,
    sponsor: "NSF SCC / CommHeat Initiative",
    methods: ["Microclimate Data", "Sensor Networks", "Urban Simulation"],
    year: "2023–present",
  },
  {
    title: "Forecasting Thermal Behavior in Tropical Buildings",
    description: `Applied ML algorithms to predict indoor temperature profiles in tropical residential buildings using historical and simulated datasets.`,
    sponsor: "Independent Research",
    methods: ["Machine Learning", "Deep Learning", "Thermal Comfort"],
    year: "2022–2023",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Research Projects</h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b pb-6">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Sponsor:</strong> {project.sponsor} | <strong>Year:</strong> {project.year}
            </p>
            <p className="mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-blue-600">
              {project.methods.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: "2+",
      description: "Years of Experience",
    },
    {
      quantity: "20+",
      description: "Technology Courses",
    },
    {
      quantity: "100+",
      description: "Students Trained",
    },
    {
      quantity: "15+",
      description: "Live Projects Delivered",
    },
  ];

  return (
    <section id="statistics" className="py-12">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0B4DBB] via-[#1565C0] to-[#38A800] bg-clip-text text-transparent sm:text-4xl">
              {quantity}
            </h2>

            <p className="text-xl text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: "500+",
      description: "Happy Clients",
    },
    {
      quantity: "6",
      description: "Years Of Experience",
    },
    {
      quantity: "50+",
      description: "Banking Partners",
    },
    {
      quantity: "1000+",
      description: "Loans Approved",
    },
  ];

  return (
    <section id="statistics" className="py-12">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-[#BB983C] sm:text-4xl">
              {quantity}
            </h2>

            <p className="text-xl text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Theory() {
  return (
    <section className="bg-[#FFF3D6] py-16 px-4">
      <div className="text-black max-w-5xl mx-auto">
        <p className="text-4xl font-semibold mb-8">Our Theory of Change</p>
        <div className=" grid md:grid-cols-2 gap-6">
          <div className="bg-[#EDC569] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">If we:</h3>
            <ul className="space-y-3 list-none">
              {[
                "Invest in building ethical, visionary youth leadership",
                "Equip youth and citizens to engage meaningfully in policymaking",
                "Embed young professionals in governance structures",
                "Provide platforms for continuous learning, dialogue, and co-creation",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-black inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#EDC569] rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Then we will:</h3>
            <ul className="space-y-3 list-none">
              {[
                "Strengthen the legitimacy, responsiveness, and effectiveness of African institutions",
                "Create a new generation of policy leaders across the continent",
                "Catalyze a governance culture rooted in accountability, innovation, and equity",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-black inline-block" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

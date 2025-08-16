const Tweet = ({ name, position, text, photoLink, tweetLink }) => {
  return (
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200" />
      <a href={tweetLink} className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 highlight">
          <div className="flex items-center space-x-4">
            <img
              src={photoLink}
              className="w-12 h-12 bg-center bg-cover border rounded-full"
              alt={name}
            />
            <div>
              <h3 className="text-lg font-semibold text-white">
                {name}
              </h3>
              <p className="text-gray-500 text-md">{position}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default function Testimonies() {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Industry Leaders Speak
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              Trusted by Global Logistics Leaders
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              See how Q-Porter™ is transforming port and airport operations worldwide.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <Tweet
                name="Maria Rodriguez"
                position="Port Operations Director, Port of Rotterdam"
                text="Q-Porter's™ quantum optimization helped us reduce vessel waiting times by 35% and increase terminal throughput by 28%. The results exceeded our most optimistic projections."
                photoLink="https://randomuser.me/api/portraits/women/44.jpg"
                tweetLink="#"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="James Chen"
                position="CTO, Singapore Changi Airport"
                text="Implementing Q-Porter's™ AI-driven resource allocation reduced our ground handling costs by 22% while improving on-time performance. The hybrid quantum-classical approach is game-changing."
                photoLink="https://randomuser.me/api/portraits/men/32.jpg"
                tweetLink="#"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Carlos Mendez"
                position="Terminal Manager, Port of Los Angeles"
                text="The real-time optimization from Q-Porter™ has transformed our yard operations. We've reduced truck turnaround times by 27% and increased crane productivity by 19% since implementation."
                photoLink="https://randomuser.me/api/portraits/men/22.jpg"
                tweetLink="#"
              />
            </li>
          </ul>
          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Aisha Johnson"
                position="Head of Logistics, Maersk"
                text="The predictive maintenance capabilities of Q-Porter™ have reduced our equipment downtime by 40%. The system's ability to forecast maintenance needs has been remarkably accurate."
                photoLink="https://randomuser.me/api/portraits/women/68.jpg"
                tweetLink="#"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Raj Patel"
                position="CIO, DP World"
                text="Q-Porter's™ digital twin technology has revolutionized our terminal operations. We're now able to simulate and optimize operations before implementation, reducing risks and improving decision-making."
                photoLink="https://randomuser.me/api/portraits/men/45.jpg"
                tweetLink="#"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Yuki Tanaka"
                position="Operations Director, Tokyo International Air Cargo"
                text="Since implementing Q-Porter, we've achieved a 24% reduction in cargo handling time and a 17% increase in warehouse throughput. The system's AI adapts to our unique operational patterns."
                photoLink="https://randomuser.me/api/portraits/women/28.jpg"
                tweetLink="#"
              />
            </li>
          </ul>
          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <Tweet
                name="Andreas Müller"
                position="CEO, Hamburg Port Authority"
                text="Q-Porter's carbon footprint optimization has helped us reduce emissions by 18% while maintaining operational efficiency. Their commitment to sustainable logistics is impressive."
                photoLink="https://randomuser.me/api/portraits/men/54.jpg"
                tweetLink="#"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Olivia Chen"
                position="VP of Technology, Port of Long Beach"
                text="Q-Porter's machine learning models have given us predictive insights that were previously impossible. We've reduced demurrage costs by 29% and improved vessel scheduling accuracy by 37%."
                photoLink="https://randomuser.me/api/portraits/women/51.jpg"
                tweetLink="#"
              />
            </li>
            <li className="text-sm leading-6">
              <Tweet
                name="Li Wei"
                position="Operations Director, Shanghai Yangshan Port"
                text="The real-time optimization capabilities of Q-Porter have transformed our operations. We've seen a 31% improvement in container handling efficiency since implementation."
                photoLink="https://randomuser.me/api/portraits/women/29.jpg"
                tweetLink="#"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

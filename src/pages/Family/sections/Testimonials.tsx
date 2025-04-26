
const testimonials = [
  {
    name: "Rohit & Family",
    feedback: "Tripstars made our Bali vacation truly stress-free. The kids loved every bit of it!",
    location: "Mumbai, India",
  },
  {
    name: "Sanya Mehta",
    feedback: "We had such a smooth experience traveling with our parents to Thailand. Highly recommended!",
    location: "Delhi, India",
  },
];

const Testimonials = () => (
  <div className="bg-white py-12 px-4 max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">What Families Are Saying</h2>
    <div className="grid gap-6 sm:grid-cols-2">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-100 p-6 rounded-xl shadow-md">
          <p className="text-gray-700 italic">“{t.feedback}”</p>
          <div className="mt-4 font-medium">
            {t.name} <span className="text-sm text-gray-500 block">{t.location}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;

// src/components/Testimonials.jsx
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maheshwari Lall',
      role: 'School Head | Redhill School Sandton, SA',
      content: 'eSkooly has transformed our administrative processes, making communication and resource management seamless. The platform\'s user-friendly interface has been a game-changer for our staff and parents.'
    },
    {
      name: 'Jane Lunnon',
      role: 'School Head | Alleyn\'s School London, UK',
      content: 'eSkooly\'s robust features have streamlined our school operations, from attendance tracking to parent engagement. It\'s reliable, intuitive, and has significantly enhanced our efficiency.'
    },
    {
      name: 'Jamie Flegg',
      role: 'Class Teacher | Wellington College International School Bangkok, TH',
      content: 'Using eSkooly has made classroom management so much easier, with instant access to student data and teaching resources. It\'s a fantastic tool that saves time and boosts productivity.'
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What Our Client Say About Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          9300+ Client reviews from satisfied educational institutions worldwide
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
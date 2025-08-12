
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      
      <section className="bg-white px-6 md:px-12 lg:px-24 md:py-20 md:mt-0 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-blue-400 font-semibold text-lg mb-4">
            Haris Packages – Your Trusted Polybag Manufacturer
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-500 font-extralight">We&apos;re </span>
            <span className="text-blue-600 ">
              here to help.
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8">
            We understand the importance of excellent customer service and ensuring your packaging needs are satisfied. Our dedicated sales team is ready to discuss your polybag needs and to answer any questions or concerns you have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
           
            <div className="bg-blue-500 text-white p-6 rounded-xl  shadow-xl ">
              <h4 className="text-xl font-bold mb-2">Address</h4>
              <p className="text-sm mb-2">
Drop by our office for a face-to-face conversation.
              </p>
              <p className="text-white font-semibold">
                Karachi Unit 1:4-A, 2/3, Commercial Area, Nazimabad # 4, Karachi Pakistan
              </p>
              
            </div>

            {/* Call Box */}
            <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold mb-2">Call Us </h4>
              <p className="text-sm mb-2">
                We are just a phone call away. Experience our personalized service:
              </p>
              <p className="text-white font-semibold text-sm">
                Mr. Hassan Butt (Director):  +923303512225 <br />
                Mr. Adnan Butt (CEO):  +923212424299 <br />
                {/* Mr. Haris Butt (Marketing): */}
              </p>
            </div>

            {/* Mail Box */}
            <div className="bg-blue-500 text-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <h4 className="text-xl font-bold mb-2">Mail Us</h4>
              <p className="text-sm mb-2">Prefer to communicate in writing?</p>
              <div  className="text-white font-semibold hover:underline">
                Hassanbutt@msepvtlimited.com
                Harisbutt@msepvtlimited.com
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          

          {/* Contact Form */}
      <ContactForm/>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d226.15681880301688!2d67.0360719997242!3d24.91472099713953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU0JzUyLjgiTiA2N8KwMDInMTAuMSJF!5e0!3m2!1sen!2s!4v1752333513032!5m2!1sen!2s" 
              className="absolute inset-0 w-full h-full"
              frameBorder={0}
              style={{ filter: "contrast(1.2) opacity(0.8)" }}
            />
            <div className="absolute bottom-5 left-5 bg-white/20 backdrop-blur-md text-gray-600 p-6 rounded-xl w-[90%] md:w-[80%] shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-bold">ADDRESS</h3>
                  <p className="text-sm text-blue-500">
                    Karachi Unit 1: 4-A, 2/3, Commercial Area, Nazimabad # 4, Karachi Pakistan
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold mt-2">PHONE</h3>
                  <p className="text-sm text-blue-500">+92-330-3512225</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

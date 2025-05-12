
import Layout from '@/components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-black h-[300px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551776235-dde6c3615a40?auto=format&fit=crop&q=80&w=2070"
            alt="Luxury hotel lobby"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="hotel-container">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
                About Us
              </h1>
              <p className="text-lg text-white">
                Discover the story behind our luxury hotel and our commitment to exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Content */}
      <section className="hotel-section">
        <div className="hotel-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 hotel-heading">
                A Legacy of Luxury and Excellence
              </h2>
              <p className="text-gray-700 mb-6">
                Founded in 1997, LuxStay Hotel has established itself as a pinnacle of luxury accommodation, offering unparalleled service and exquisite surroundings. Our journey began with a vision to create not just a place to stay, but a destination that offers memorable experiences.
              </p>
              <p className="text-gray-700 mb-6">
                Over the decades, we have hosted dignitaries, celebrities, and discerning travelers from around the world, constantly evolving to meet and exceed the expectations of our esteemed guests while maintaining the timeless elegance that defines our brand.
              </p>
              <p className="text-gray-700">
                Today, LuxStay stands as a testament to our unwavering commitment to excellence, combining traditional hospitality with modern luxury to create an experience that is both authentic and extraordinary.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070"
                alt="Luxury hotel exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="hotel-section bg-gray-50">
        <div className="hotel-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 hotel-heading">Our Values</h2>
            <p className="text-gray-700">
              At LuxStay, we are guided by a set of core values that inform every decision we make and every service we provide.
              These principles are the foundation of our success and the reason why guests choose to return to our hotel time after time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-hotel-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-hotel-purple" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every detail, from the quality of our accommodations to the professionalism of our staff, ensuring an exceptional experience for every guest.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-hotel-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-hotel-purple" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical standards, building trust with our guests, employees, and partners.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-hotel-purple-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-hotel-purple" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                We recognize that each guest is unique, and we tailor our services to meet individual preferences, ensuring a personalized and memorable stay.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="hotel-section">
        <div className="hotel-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 hotel-heading">Our Leadership Team</h2>
            <p className="text-gray-700">
              Meet the dedicated professionals who work tirelessly to ensure that every aspect of your stay exceeds expectations.
              Our leadership team brings together decades of experience in luxury hospitality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200"></div>
              <h3 className="text-xl font-semibold">Michael Thompson</h3>
              <p className="text-gray-600 mb-2">General Manager</p>
              <p className="text-gray-700 text-sm">
                With over 20 years of experience in luxury hospitality, Michael leads our team with passion and vision.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200"></div>
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-gray-600 mb-2">Director of Operations</p>
              <p className="text-gray-700 text-sm">
                Sarah ensures that every aspect of our hotel operations runs smoothly to deliver an exceptional guest experience.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200"></div>
              <h3 className="text-xl font-semibold">David Rodriguez</h3>
              <p className="text-gray-600 mb-2">Executive Chef</p>
              <p className="text-gray-700 text-sm">
                A culinary innovator, David creates exquisite dining experiences that showcase local ingredients and global techniques.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200"></div>
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-gray-600 mb-2">Guest Relations Manager</p>
              <p className="text-gray-700 text-sm">
                Emily and her team are dedicated to anticipating your needs and ensuring your stay is nothing short of perfect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

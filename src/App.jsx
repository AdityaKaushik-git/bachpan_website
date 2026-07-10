import { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaGlobe,
  FaBookOpen,
} from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academic', href: '#academic' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const imageImports = import.meta.glob('./images/*.{jpg,jpeg,png}', { eager: true, as: 'url' });
const sortedImages = Object.entries(imageImports)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
  .map(([path, url], index) => ({
    path,
    src: url,
    alt: /coll?ge event/i.test(path)
      ? `School event photo ${index + 1}`
      : `Website advertisement photo ${index + 1}`,
  }));

const eventPhotos = sortedImages.filter((image) => /coll?ge event/i.test(image.path));
const advertisementPhotos = sortedImages.filter((image) => !/coll?ge event/i.test(image.path));
const featuredEventPhotos = eventPhotos.slice(0, 3);

const features = [
  {
    title: 'Highly Qualified Staff',
    description: 'Experienced teachers delivering engaging lessons and individual support.',
    icon: FaChalkboardTeacher,
  },
  {
    title: 'Modern Curriculum',
    description: 'Balanced academics with arts, sports and life skills for every student.',
    icon: FaBookOpen,
  },
  {
    title: 'Inclusive Learning',
    description: 'A supportive environment where every child can grow with confidence.',
    icon: FaGlobe,
  },
];

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-slate-900 bg-slate-50">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-900 px-3 py-2 text-white text-sm font-semibold uppercase tracking-[0.2em]">
              BPS
            </div>
            <div>
              <p className="text-sm font-semibold">Bachpan Public Secondary School</p>
              <p className="text-xs text-slate-500">Behind ICICI Bank, Karamchari Colony, Gangapur City</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-700 hover:text-blue-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-600 md:flex">
              <FaPhoneAlt className="mr-2 text-blue-900" />
              +91 99999 99999
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.5),_transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="relative z-10 flex flex-col justify-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-slate-200 shadow-lg shadow-slate-950/20">
                Welcome to Bachpan Public Secondary School
              </span>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A caring school for a brighter tomorrow
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
                Empowering students with strong values, academic excellence, and creative learning in Gangapur City.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#about" className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-slate-950/10 transition hover:bg-slate-100">
                  Learn More
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/20">
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="w-full max-w-xl overflow-hidden rounded-[2rem] bg-white/5 p-2 shadow-[0_50px_100px_-80px_rgba(15,23,42,0.5)] backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-[1.5fr_1fr]">
                  <div className="relative overflow-hidden rounded-[2rem] bg-slate-950/80">
                    <img
                      src={featuredEventPhotos[0]?.src ?? eventPhotos[0]?.src}
                      alt={featuredEventPhotos[0]?.alt ?? 'Featured school event'}
                      className="h-[430px] w-full object-cover sm:h-full"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                      <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Event Highlight</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">College Festival Moments</h2>
                      <p className="mt-3 text-sm text-slate-300">
                        Inspiring students through memorable events, sports, and cultural celebration.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {featuredEventPhotos.slice(1).map((photo, index) => (
                      <div key={photo.src} className="overflow-hidden rounded-[1.75rem] bg-slate-950/80">
                        <img src={photo.src} alt={photo.alt} className="h-1/2 w-full object-cover" />
                      </div>
                    ))}
                    <div className="rounded-[1.75rem] bg-slate-900/90 p-6 text-white">
                      <p className="text-sm uppercase tracking-[0.3em] text-blue-300">Photo Stories</p>
                      <h3 className="mt-4 text-xl font-semibold">Campus life in action</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        See our students engaged in learning, activities, and school celebrations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">About the School</p>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                Building respectful learners with heart and confidence
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Bachpan Public Secondary School offers a balanced education focused on academics, character, and co-curricular exploration. We support each student with nurturing teachers, safe spaces, and practical learning.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                  <p className="text-2xl font-semibold text-blue-900">250+</p>
                  <p className="mt-3 text-sm text-slate-600">Students learning with care</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                  <p className="text-2xl font-semibold text-blue-900">12+</p>
                  <p className="mt-3 text-sm text-slate-600">Years of trusted education</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-900 to-slate-900 p-8 text-white shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-200">Our Vision</p>
                <h3 className="mt-4 text-2xl font-semibold">To nurture every child into a confident learner.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  We provide an inclusive environment where students learn values, creativity, and academic skills for success.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Our Values</p>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-900" />
                    <span>Respect, discipline, and kindness in every classroom.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-900" />
                    <span>Creativity through arts, science projects, and collaboration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-blue-900" />
                    <span>Strong academics with support for every learner.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">College Events</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Live moments from Bachpan campus events
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-slate-600">
              Enjoy a gallery of real event images from our school celebrations and student activities.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft">
                <img src={photo.src} alt={photo.alt} className="h-72 w-full object-cover transition duration-300 hover:scale-105" />
              </div>
            ))}
          </div>
        </section>

        <section id="academic" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Academic Excellence</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Strong academics with modern teaching methods
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Our teachers use interactive lessons, group learning, and practical classes to help children build confidence and critical thinking skills.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="rounded-[2rem] bg-slate-800/90 p-8 shadow-soft">
                      <Icon className="h-10 w-10 text-blue-400" />
                      <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">Programs & Activities</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                A complete school experience with sports, arts, and values
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Children at Bachpan enjoy a wide range of activities that build social skills, creativity, and healthy habits outside of academics.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-900 text-white">
                  <FaBookOpen />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">Active Learning</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Hands-on lessons and project work that make study meaningful.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-900 text-white">
                  <FaGlobe />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">Values & Culture</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Activities that teach respect, discipline, and teamwork every day.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-900 text-white">
                  <FaChalkboardTeacher />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">Supportive Teachers</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Personal attention so every student can learn at their own pace.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-blue-900 text-white">
                  <FaGraduationCap />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">Exam Preparation</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Focused coaching for board exams and academic assessments.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">Gallery</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              School events and website promotions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-slate-600">
              Explore our latest school event photos and promotional images created for the website.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-8 rounded-[2rem] bg-blue-900/5 p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">School Event Photos</h3>
                <p className="mt-3 text-slate-600">A selection of 12 event photographs showing life at Bachpan Public Secondary School.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {eventPhotos.map((photo) => (
                  <div key={photo.src} className="overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-soft">
                    <img src={photo.src} alt={photo.alt} className="h-56 w-full object-cover transition duration-300 hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8 rounded-[2rem] bg-blue-900/5 p-8 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-900">Website Advertisement Images</h3>
                <p className="mt-3 text-slate-600">A gallery of 32 design and promotional images to support the website look and brand.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {advertisementPhotos.map((photo) => (
                  <div key={photo.src} className="overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-soft">
                    <img src={photo.src} alt={photo.alt} className="h-56 w-full object-cover transition duration-300 hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Get in Touch</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Contact Bachpan Public Secondary School
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Reach out for admissions, campus visits, or any questions about our learning programs.
                </p>
                <div className="mt-10 space-y-5">
                  <div className="rounded-[2rem] bg-slate-950/80 p-6">
                    <div className="flex items-center gap-4 text-slate-200">
                      <FaMapMarkerAlt className="h-6 w-6 text-blue-400" />
                      <span>Behind ICICI Bank, Karamchari Colony, Gangapur City</span>
                    </div>
                  </div>
                  <div className="rounded-[2rem] bg-slate-950/80 p-6">
                    <div className="flex items-center gap-4 text-slate-200">
                      <FaPhoneAlt className="h-6 w-6 text-blue-400" />
                      <span>+91 99999 99999</span>
                    </div>
                  </div>
                  <div className="rounded-[2rem] bg-slate-950/80 p-6">
                    <div className="flex items-center gap-4 text-slate-200">
                      <FaEnvelope className="h-6 w-6 text-blue-400" />
                      <span>contact@bachpan.school</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-100">Name</label>
                    <input
                      type="text"
                      className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-100">Email</label>
                    <input
                      type="email"
                      className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-100">Message</label>
                    <textarea
                      rows="4"
                      className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-3xl bg-blue-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-400"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Bachpan Public Secondary School. All rights reserved.</p>
          <p>Designed for a mobile-first school website experience.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

import { Zap } from 'lucide-react';
import React from 'react';
import Title from './Title';

const Features = () => {

  const [isHover, setIsHover] = React.useState(false);

  return (
    <div id='features' className='flex flex-col items-center my-6 scroll-mt-12'>
      {/* Header badge */}
      <div className="flex items-center gap-2 text-sm text-violet-800 bg-violet-400/10 rounded-full px-6 py-1.5">
        <Zap width={14} />
        <span>Smart. Simple. Fast.</span>
      </div>

      {/* Section Title */}
      <Title
        title='Powerful Resume Builder Features'
        description='Create a job-winning resume effortlessly with AI-powered suggestions, real-time previews, and stunning templates designed to impress recruiters.'
      />

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center xl:-mt-10">
        <img
          className="max-w-2xl w-full xl:-ml-32"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png"
          alt="Resume Builder Demo"
        />

        <div
          className="px-4 md:px-0 space-y-4"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >

          {/* Feature 1 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className={`p-6 flex gap-4 rounded-xl transition-colors border border-transparent group-hover:bg-violet-100 group-hover:border-violet-300 ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">AI-Powered Suggestions</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Get intelligent recommendations for phrasing, layout, and key skills tailored to your job role.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-green-100 border border-transparent group-hover:border-green-300 flex gap-4 rounded-xl transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 8v8m4-4H8" />
                <circle cx="12" cy="12" r="10" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Multiple Templates</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Choose from a variety of modern, ATS-friendly templates that suit every profession.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18m9-9H3" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Real-Time Preview</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Instantly see how your resume looks while editing — no need to refresh or export.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center justify-center gap-6 max-w-md group cursor-pointer">
            <div className="p-6 group-hover:bg-blue-100 border border-transparent group-hover:border-blue-300 flex gap-4 rounded-xl transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
              </svg>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-slate-700">Secure Cloud Storage</h3>
                <p className="text-sm text-slate-600 max-w-xs">
                  Save and access your resumes anytime, anywhere with end-to-end encryption.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Font Style */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>
    </div>
  );
};

export default Features;

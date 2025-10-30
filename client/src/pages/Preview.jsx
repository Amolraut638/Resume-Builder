import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import Loader from '../components/Loader'
import ResumePreview from '../components/ResumePreview'
import { ArrowLeftIcon } from 'lucide-react'
import api from '../configs/api'

const Preview = () => {

  const [isLoading, setIsLoading] = useState(true)

  //get resumeId through params
  const { resumeId } = useParams()

  //store the resumeData in the variables
  const [resumeData, setResumeData] = useState(null)

  //function to store the resume data
  const loadResume = async () => {
     try {
      const {data} = await api.get('/api/resumes/public/' + resumeId)
      setResumeData(data.resume)  //we get it from api
     } catch (error) {
      console.log(error.message)
     }
     finally{
      setIsLoading(false)
     }
  }

  useEffect(() => {
      loadResume()
  }, [])

  return resumeData ?  (  //if resume data is available then display the resumedata
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color} classes='py-4 bg-white'/>
      </div>
    </div>
  ) : (  //if the resume data is not available so till we display the loader  
    <div>
      { isLoading ? <Loader/> : (
        <div className='flex flex-col items-center justify-center h-screen'>
          <p className='text-center text-6xl text-slate-400 font-medium'>Resume not found</p>
          <a href="/" className='mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-600 flex items-center transition-colors'>
            <ArrowLeftIcon className='mr-2 size-4'/>
            go to home page
          </a>
        </div>
      )}
    </div>
       
  )
}

export default Preview
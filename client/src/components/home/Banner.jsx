import { Sparkle, SparkleIcon } from 'lucide-react'
import React from 'react'

const Banner = () => {
  return (
        
        <div className="w-full py-2.5 font-medium text-sm text-green-800 text-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF]">
      <p className='flex items-center justify-center'><span className="flex items-center gap-1 px-3 py-1 rounded-lg text-white bg-green-600 mr-2">New <SparkleIcon className='h-3 w-3'/></span>now featuring multiple new templates to choose from !</p>
        </div>
        
  )
}

export default Banner
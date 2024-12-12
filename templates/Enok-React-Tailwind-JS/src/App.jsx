import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Toggle from './components/Toggle.jsx'
import useLocalStorage from 'use-local-storage'
import './App.css'


function App() {
  const [ isDark, setIsDark ] = useLocalStorage("isDark", true)


  return (
    <>
      <div className='app' data-theme={isDark ? "dark" : "light"}>
        <Toggle isChecked={isDark} handleChange={ () => setIsDark(!isDark)} /> 
        <div className='flex gap-12 justify-center text-center'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" height={100} width={100} />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" height={100} width={100} />
          </a>
        </div>
        <h1>Simon's React+Vite+TailwindCSS Template</h1>
        <p>
          Ready to use with Tailwind: Included <span className='underline'><a target='_blank' href="https://tailwindcss.com/docs/installation/using-postcss">Postcss & Autoprefixer</a></span>
        </p>


        <div className='mt-4 mb-4'>
          <h2 className='font-bold text-2xl'>Assets Folder</h2>
          <p>1. When the images are directly tied to specific components and you want the bundler to optimize them.</p>
          <p>2. For dynamically imported images (to make use of bundler features like lazy loading, tree-shaking, or optimization).</p>  
          <p>3. For assets that are part of your build process and will benefit from cache busting in production.</p>
        </div>


        <div className='my-4'>
          <h3 className='font-bold text-2xl'>Public Folder</h3>
          <p>1. When you need to reference images by URL (in CSS files or "img" tags where dynamic imports aren't required)</p>
          <p>2. For static files that won't change often and don't need to be processed by the bundler (favicons, manifest files, robots.txt, etc.)</p>  
          <p>3. For files where you know the path will be consistent, and you don't want to worry about importing them in every component.</p>
        </div>

        <div className='my-4'>
          <h4 className='font-bold text-3xl'>Summary:</h4>
          <p className='pb-2'>- <span className='font-bold'>Public folder:</span> Used for static resources that don’t change and are accessed directly via URLs. Images here won’t be processed by the bundler.</p>
          <p>- <span className='font-bold'>Assets folder:</span> Better suited for project-specific images that need bundling, optimization, and dynamic loading.</p>
        </div>
      </div>
    </>
  )
}

export default App

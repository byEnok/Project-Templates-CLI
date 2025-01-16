import React from 'react'

function example() {
  const icons = useRef()
  const [motionActive, setMotionActive] = useState([])
  const [duplicatedIcons, setDuplicatedIcons] = useState()
  const [contentLoaded, setContentLoaded] = useState()

  return (
    <>
      <div className="scroller " data-animated={motionActive}>
        <div ref={icons} className="tag-list bg-red-600 scroller_inner space-x-16">
          <Image className="icon  " src="/icons/techSliderIcons/git.svg" alt="Git icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/gitBash.svg" alt="Gitbash icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/github.svg" alt="Github icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/eslint.svg" alt="Eslint icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/prettier.svg" alt="Prettier icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/react.svg" alt="React icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/next.svg" alt="Next icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/vue.svg" alt="Vue icon" height={iconHeight} width={iconWidth} />
          <Image className="icon  rounded-lg" src="/icons/techSliderIcons/typescript.svg" alt="Typescript icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/css.png" alt="CSS icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/tailwind.svg" alt="Tailwind icon" height={iconHeight} width={iconWidth} />
        </div>
        <div ref={icons} className="tag-list bg-blue-500 scroller_inner space-x-16" aria-hidden="true">
          <Image className="icon " src="/icons/techSliderIcons/git.svg" alt="Git icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/gitBash.svg" alt="Gitbash icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/github.svg" alt="Github icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/eslint.svg" alt="Eslint icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/prettier.svg" alt="Prettier icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/react.svg" alt="React icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/next.svg" alt="Next icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/vue.svg" alt="Vue icon" height={iconHeight} width={iconWidth} />
          <Image className="icon  rounded-lg" src="/icons/techSliderIcons/typescript.svg" alt="Typescript icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/css.png" alt="CSS icon" height={iconHeight} width={iconWidth} />
          <Image className="icon " src="/icons/techSliderIcons/tailwind.svg" alt="Tailwind icon" height={iconHeight} width={iconWidth} />
        </div>
      </div>
    </>
  )
}

export default example

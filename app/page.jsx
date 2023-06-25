'use client'
import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
            <br/>
            <span className="blue_gradient text-center"> Amazing AI prompts</span>
        </h1>
        <p className="desc text-center">Elevate your creativity with Promptoverse - your AI prompt companion</p>
        <Feed/>
    </section>
  )
}

export default Home

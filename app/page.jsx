import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
            <br/>
            <span className="orange_gradient text-center"> Amazing AI prompts</span>
        </h1>
        <p className="desc text-center">Elevate your creativity with Promptoverse - the open-source AI prompt generator for modern creators.</p>
        <Feed/>
    </section>
  )
}

export default Home

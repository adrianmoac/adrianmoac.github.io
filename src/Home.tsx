import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Knowledge from './components/Knowledge'
import Projects from './components/Projects'
import Topbar from './components/Topbar'
import Introduction from './components/Introduction'
import WhoAmI from './components/WhoAmI'

type Props = {}

const Home = (_: Props) => {
  return (
    <div>
      <Topbar />
      <Introduction />
      <WhoAmI />
      <Knowledge />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  )
}

export default Home
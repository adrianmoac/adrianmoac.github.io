import { Colors } from '../helpers/colors'

type Props = {}

const WhoAmI = (_: Props) => {
  return (
    <div style={{ height: 'auto', backgroundColor: Colors.white, textAlign: 'center', width: '80%', paddingTop: 50, paddingBottom: 50, marginLeft: 'auto', marginRight: 'auto' }} id="WhoAmI">
      <h1 style={{ color: Colors.charcoal, marginBottom: 25 }}>Who Am I?</h1>
      <h3 style={{ color: Colors.charcoal, marginBottom: 15 }}>My name is Adrián. I discoreved programming by accident while looking for degrees in high school. Since then, it has become one of my favorite acitivities.</h3>
      <h3 style={{ color: Colors.charcoal, marginBottom: 15 }}>I believe I can build anything imaginable as long as I a clear idea of how to approach it.</h3>
      <h3 style={{ color: Colors.charcoal, marginBottom: 15 }}>Throughout my career, I have had the opportunity to work with many different technologies, which has given me a broader perspective on how large projects operate and the importance of each area.</h3>
      <h3 style={{ color: Colors.charcoal, marginBottom: 15 }}>I am passionate about web developing and have a great interest in mobile developing and DevOps. While I have significant experience in front-end development, I also really enjoy working on the back end.</h3>
    </div>
  )
}

export default WhoAmI
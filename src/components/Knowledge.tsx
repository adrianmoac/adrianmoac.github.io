import { Colors } from '../helpers/colors'

type Props = {}

const Knowledge = (_: Props) => {
  return (
    <div style={{ textAlign: 'center', background: Colors.ghostWhiteLight, paddingTop: 50, paddingBottom: 50, height: '100vh' }} id='Knowledge'>
      <h1 style={{ color: Colors.charcoal }}>Knowledge</h1>
      <img src='src/assets/Technologies.png' alt='Technologies' style={{ width: '80%' }}></img>
    </div>
  )
}

export default Knowledge
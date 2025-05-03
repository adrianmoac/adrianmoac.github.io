import { Colors } from '../helpers/colors'

type Props = {}

const Knowledge = (_: Props) => {
  return (
    <div style={{ textAlign: 'center', background: Colors.ghostWhiteLight, paddingTop: 50, paddingBottom: 50, height: '100vh' }} id='Knowledge'>
      <h1 style={{ color: Colors.charcoal }}>Knowledge</h1>
      <img src='Technologies.png' alt='Technologies' style={{ width: '80%' }} className='knowledge-img-desktop'></img>
      <div className='knowledge-img' style={{ display: 'flex', flexDirection: 'column', gap: 50, marginTop: -100, width: '100%' }}>
        <img src='TechnologiesMostUsed.png' alt='TechnologiesMostUsed' style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}></img>
        <img src='TechnologiesWorkedWith.png' alt='TechnologiesWorkedWith' style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}></img>
      </div>
    </div>
  )
}

export default Knowledge
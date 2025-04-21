import { Colors } from "../helpers/colors"

type Props = {}

const Topbar = (_: Props) => {
  return (
    <div style={{ height: 60, top: 0, left: 0, right: 0, position: 'fixed', zIndex: 10, display: 'flex', alignItems: 'center', width: '100%' }}>
      <div style={{ display: 'flex', marginRight: 30, marginLeft: 'auto', gap: 20 }} className="animate-on-load">
        <h4 style={{ margin: 0, cursor: 'pointer', color: Colors.charcoal }} onClick={ () => window.location.href = '#WhoAmI'}>Who am I?</h4>
        <h4 style={{ margin: 0, cursor: 'pointer', color: Colors.charcoal }} onClick={ () => window.location.href = '#Knowledge'}>Knowledge</h4>
        <h4 style={{ margin: 0, cursor: 'pointer', color: Colors.charcoal }} onClick={ () => window.location.href = '#Experience'}>Experience</h4>
        <h4 style={{ margin: 0, cursor: 'pointer', color: Colors.charcoal }} onClick={ () => window.location.href = '#Projects'}>Projects</h4>
      </div>
    </div>
  )
}

export default Topbar
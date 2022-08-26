import './CardList.css'
import Card from '../Card/Card';

export default function CardList({cards, onRemove, reload, inDashboard, toggleModalU, setActivity}) {

  return (
    <div className='cardlist' style={inDashboard? { overflowY: "scroll" } : { overflowY: "hidden" }}>
        {
            cards.map(card => {
                return <Card
                  card={card}
                  key={card.activityId}
                  onRemove={onRemove}
                  reload={reload}
                  toggleModalU={toggleModalU}
                  setActivity={setActivity}
                  />
            })
        }
    </div>
  )
}

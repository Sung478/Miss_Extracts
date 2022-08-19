import './CardList.css'
import Card from '../Card/Card';

export default function CardList({cards, onRemove}) {
  console.log(cards);
  return (
    <div className='cardlist'>
        {
            cards.map(card => {
                return <Card
                  card={card}
                  key={card.activityId}
                  onRemove={onRemove} />
            })
        }
    </div>
  )
}

import './CardList.css'
import Card from '../Card/Card';

export default function CardList({cards, onRemove}) {
  return (
    <div className='cardlist'>
        {
            cards.map(card => {
                return <Card
                  card={card}
                  key={card.id}
                  onRemove={onRemove} />
            })
        }
    </div>
  )
}

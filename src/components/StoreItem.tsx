import {Card} from 'react-bootstrap'

// Declare a type for the props
type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl}:StoreItemProps) {
  return (
    <Card>
      <Card.Img variant="top" src={imgUrl} />
    </Card>
  )
}
import { Rating } from 'react-simple-star-rating'

export default function StarRating(props: any) {
    return (
        <Rating ratingValue={parseInt(props.rating)} readonly={true} fillColor={'black'} />
    )
}
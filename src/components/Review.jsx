import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiSmileFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

import './Review.css'

const Review = ({data, updateFieldhandler}) => {
    return ( 
        <div className="review_form">
            <div className="form_control score_container">
                <label className="radio_container">
                    <input 
                        type="radio" 
                        value="unsatisfied" 
                        name="review"
                        required
                        checked={data.review === 'unsatisfied'}
                        onChange={(event) => updateFieldhandler('review', event.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio_container">
                    <input 
                        type="radio" 
                        value="neutral" 
                        name="review" 
                        required
                        checked={data.review === 'neutral'}
                        onChange={(event) => updateFieldhandler('review', event.target.value)}
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio_container">
                    <input 
                        type="radio" 
                        value="satisfied" 
                        name="review" 
                        required
                        checked={data.review === 'satisfied'}
                        onChange={(event) => updateFieldhandler('review', event.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio_container">
                    <input 
                        type="radio" 
                        value="very_satisfied" 
                        name="review" 
                        required
                        checked={data.review === 'very_satisfied'}
                        onChange={(event) => updateFieldhandler('review', event.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito satisfeito</p>
                </label>
            </div>
            <div className="form_control">
                <label htmlFor='comment'>Comentario:</label>
                <textarea 
                    name="comment" 
                    id="comment" 
                    placeholder="Conte como foi a sua experiência com o produto..." 
                    required
                    value={data.comment || ''}
                    onChange={(event) => updateFieldhandler('comment', event.target.value)}
                />
            </div>
        </div>
    )
}

export default Review
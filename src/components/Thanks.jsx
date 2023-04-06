import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiSmileFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs'

import './Thanks.css'

const emojiData ={
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({data}) => {
    return ( 
        <div className="thanks_container">
            <h2>Falta pouco...</h2>
            <p>A sua opnião é muito importante, em breve você receberá um cupom de 10% de desconto, para sua próxima compra.</p>
            <p>Para concluir sua avaliação clique no botão Enviar abaixo.</p>
            <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
            <p className="review_data">
                <span>Satisfação com o produto: </span>{emojiData[data.review]}
            </p>
            <p className="review_data">
                <span>Comentario: </span>{data.comment}
            </p>
        </div>
    )
}

export default Thanks
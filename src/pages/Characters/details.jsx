import { Title } from "./styles";

const Details = ({ description, comics }) => {
    return (
        <div>
        {description ? 
        <div>
            <Title>Description:</Title>
            {description}  
        </div>
        : 
        <div>
        <Title>Description:</Title>
            {'Not description'}
        </div>
        }

        <div>
            <Title>
                Comics:
            </Title>
        </div>
        <ul>
        {
            comics?.items.map(( items, key) => (
                <li key={key}>{items.name}</li>
            ))
        }
        </ul>
        </div>
    )
}

export default Details;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons"
import { IconProps } from '../types'

export const Quote: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
       <FontAwesomeIcon icon={faQuoteLeft} size={size} color={color}/>
    )
}
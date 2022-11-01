import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLink} from "@fortawesome/free-solid-svg-icons"
import { IconProps } from '../../shared/types'


export const Link: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faLink} size={size} color={color}/>
    )
}


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserNinja} from "@fortawesome/free-solid-svg-icons"
import { IconProps } from '../types'


export const Avatar: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faUserNinja} size={size} color={color}/>
    )
}


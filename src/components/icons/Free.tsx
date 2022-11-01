import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTags} from "@fortawesome/free-solid-svg-icons"
import { IconProps } from '../../shared/types'


export const Free: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faTags} size={size} color={color}/>
    )
}


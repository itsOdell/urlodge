import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from "@fortawesome/free-solid-svg-icons"
import { IconProps } from '../../shared/types'


export const Banner: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faBookmark} size={size} color={color}/>
    )
}


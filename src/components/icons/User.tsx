import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from "@fortawesome/free-solid-svg-icons"
import { IconProps } from '../../shared/types'


export const User: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faCircleUser} size={size} color={color}/>
    )
}
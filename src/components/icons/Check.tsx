import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"
import { IconProps } from '../../shared/types'


export const Check: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faCircleCheck} size={size} color={color}/>
    )
}


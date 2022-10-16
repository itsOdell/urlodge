import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from "@fortawesome/free-solid-svg-icons"
import { SizeProp,  } from '@fortawesome/fontawesome-svg-core'

interface UserProps {
    size: SizeProp,
    color?: string
}

export const User: React.FC<UserProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faCircleUser} size={size} color={color}/>
    )
}
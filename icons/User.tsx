import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from "@fortawesome/free-solid-svg-icons"
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface UserProps {
    size: SizeProp
}

export const User: React.FC<UserProps> = ({size}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faCircleUser} size={size}/>
    )
}
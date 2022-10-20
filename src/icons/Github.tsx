import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"
import { IconProps } from '../types'


export const Github: React.FC<IconProps> = ({size, color}): React.ReactElement => {
    return (
        <FontAwesomeIcon icon={faGithubSquare} size={size} color={color}/>
    )
}


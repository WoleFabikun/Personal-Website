import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const links = [
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/user/wole359?si=2765ef85ecbd4409',
        icon: <FontAwesomeIcon icon={faSpotify} size="2x" />,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/oluwole-fabikun-4653a124b/',
        icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />,
    },
    {
        name: 'Github',
        url: 'https://github.com/WoleFabikun',
        icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    },
];

export default links;


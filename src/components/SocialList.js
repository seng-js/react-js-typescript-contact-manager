import {Link} from "react-router-dom";

const SocialList = (props) => {
    const {facebook, twitter, instagram, youtube} = props.data;
    return (
        <div className="media-icons">
            {facebook.length > 0 && (
                <Link to={facebook}><i className="fa fa-facebook-f"></i></Link>
            )}
            {twitter.length > 0 && (
                <Link to={twitter}><i className="fa fa-twitter"></i></Link>
            )}
            {instagram.length > 0 && (
                <Link to={instagram}><i className="fa fa-instagram"></i></Link>
            )}
            {youtube.length > 0 && (
                <Link to={youtube}><i className="fa fa-youtube"></i></Link>
            )}
        </div>
    )
}

export default SocialList
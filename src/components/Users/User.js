import React from 'react'
import { Link } from "react-router-dom";
import Spinner from "../../img/spinner.gif";
export default class User extends React.Component {
 
    componentDidMount(){
        this.props.getuser(this.props.match.params.login)
    }

    render() {

        const { name,
                avatar_url,
                location,
                bio,
                blog,
                login,
                html_url,
                followers,
                following,
                public_repos,
                public_gists,
                hireable
              } = this.props.user;

        const { loading } = this.props;

        if (loading){
            return (<Spinner />)
        } else {
            return (
                <React.Fragment>
                    <section className="singleuser">
                    <div className="user-display">
                        <img src={avatar_url} title="profile picture" alt={name} />
                        <h1>{name}</h1>
                        {location ? <h3>Location: {location}</h3>: ""}
                        <p>
                            {bio ? <span className="bio">Bio: {bio}<br /></span> : "" }
                            {blog ? <span>Blog: {blog}<br /></span> : ""}
                            Followers:  {followers} <br />
                            Following:  {following} <br />
                            Repositories:   {public_repos} <br />
                            Hireable {" "} 
                            {hireable ? <span className="hireable">Yes</span> : <span className="nothireable">No</span> }

                        </p>
                        
                        </div>
                        <Link className="back" to="/Search">Back To Search</Link>
                    </section>
                </React.Fragment>
            )
    }
    }
}

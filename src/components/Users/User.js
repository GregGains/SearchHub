import React from 'react'

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

        return (
            <React.Fragment>
                <section className="singleuser">
                    <img src={avatar_url} title="profile picture" alt={name} />
                    <h3>{name}</h3>
                    <p><span className="bio">{bio}</span> <br />
                        {blog} <br />
                        Followers:  {followers} <br />
                        Following:  {following} <br />
                        Repositories:   {public_repos} <br />
                        {hireable}

                    </p>
                </section>
            </React.Fragment>
        )
    }
}

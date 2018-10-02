import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Icon from '../so-icon.png';
import {connect} from 'react-redux';

class Home extends Component {

    render(){
        console.log(this.props.posts);
        const { posts } = this.props;
        const postList = posts.length ? 
        (
            posts.map(post => {

                return (
                    <div className="post card" key={post.id}>
                        <img src={Icon} alt="Icon"/>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <div className="card-title red-text">
                                    {post.title}
                                </div>
                            </Link>
                            <span>{post.body}</span>
                        </div>
                    </div>
                );
            })
        ) 
        :
        (
           <div className="center">
               No Posts yet
           </div> 
        );
        return (
            <div className="container home">
                <h1 className="center">
                    Home
                </h1>
                    {postList}
            </div>
        );
    }
    
}

const mapStateToProps = (state) =>{
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Home);
// @ts-check

import React, { useState } from "react";
import { connect } from "react-redux";
import { joinCommunity } from '../redux/actions/home-actions';

function Home(props) {

    const [title, setTitle] = useState("");
    const [members, setMembers] = useState(0);
    const [ranking, setRanking] = useState(0);

    const handleClick = () => {
        props.joinCommunity({
            name: title,
            members: members,
            ranking: ranking
        });
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleMembersChange = (event) => {
        setMembers(event.target.value);
    }

    const handleRankingChange = (event) => {
        setRanking(event.target.value);
    }

    return (
        <div className="communities">
            <ul>
                {props.communities.map(e =>
                    <li>
                        <div className="communityCard">
                            <h1>{e.name}</h1>
                            <p>
                                {e.members}
                            </p>
                            <p>
                                {e.ranking}
                            </p>
                        </div>
                    </li>
                )}
            </ul>
            <input type="text" name="title" onChange={handleTitleChange} value={title} />
            <input type="text" name="members" onChange={handleMembersChange} value={members} />
            <input type="text" name="ranking" onChange={handleRankingChange} value={ranking} />
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return { communities: state.communities };
};

function mapDispatchToProps(dispatch) {
    return {
        //addArticle: article => dispatch(addArticle(article))
        joinCommunity: community => dispatch(joinCommunity(community))
    };
}

// const mapDispatchToProps = {
//     increment,
//     decrement,
//     reset
//   }


// const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);
// export default ConnectedHome;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
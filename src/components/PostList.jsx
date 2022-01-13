import React from "react";
import PostItem from "./PostItem";


class PostList extends React.Component{

    componentWillUnmount() {
        console.log('UserList Component was unmounted...');
    }

    componentDidMount() {
        console.log('UserList component was mounted!');
    }


    render() {
        console.log('UserList component rendered!');
        // preluam informatiile despre useri
        const { posts } = this.props;
       
        return (
            <div>
                { posts.map((post, index) => {
                    // Fiecare obiect de tip post e transformat intr-o componenta PostItem.
                    return <PostItem
                        // Pasam props-urile corespunzatoare.
                        userId={post.userId}
                        id={post.id}
                        title = { post.title}
                        body = {post.body}
                        key = {index}
                    />
                })}
            </div>
        );
    }


}



    
    
    export default PostList;
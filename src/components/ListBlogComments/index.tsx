import { useEffect, useState } from "react";
import { blogCommentList } from "../../services/MainApi/blog_comment";
import BlogCommentCard from "../CardBlogComment";

interface BlogListCommentProps {
    id:string;
    comment: string;
    data: string;
}

interface UserDataProp {
    id: string;
    image_link: string;
    name: string;
}

export default function ListBlogsComments(props: BlogListCommentProps, prop: UserDataProp) {
    const urlId = window.location.pathname.split("/")[2];
    const [blogComments, setBlogComments] = useState<BlogListCommentProps[]>([]);

    useEffect (()=> {
        const getData = async () => {
            try{
                const response = await blogCommentList(urlId);
                setBlogComments (response.data);
                
            }catch(error){
                alert("Deu algo errado no catch")
            }
        }
        getData();
    }, [setBlogComments, urlId])

    return (
        <div>
            {blogComments.map((comment, index)=> {
                return (
                    <BlogCommentCard id={props.id} comment={props.comment} date={props.data}/>
                );
            })} 
        </div>
    )
}
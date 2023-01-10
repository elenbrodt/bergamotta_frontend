import { useEffect, useState } from "react";
import { listBlog } from "../../services/MainApi/blog";
import BlogCard from "../CardBlog";
import { DivCard } from "./styles"

interface BlogList {
    image_link: string;
    name: string;
    subtitle: string;    
}

export default function ListBlogs() {
    const [blogs, setPlaces] = useState<BlogList[]>([]);

    useEffect (()=> {
        const getData = async () => {
            try{
                const response = await listBlog();
                setPlaces (response.data);
                console.log(response.data)
                
            }catch(error){
                alert("Deu algo errado no catch")
            }
        }
        getData();
    }, [setPlaces])

    return (
        <DivCard>
            {blogs.map((blog, index)=> {
                return (
                    <BlogCard image_link={blog.image_link} name={blog.name} subtitle={blog.subtitle} />
                );
            })} 
        </DivCard>
    )
}
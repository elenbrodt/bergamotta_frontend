import BlogComponent from "../../components/BlogArticle";
import Header from "../../components/Header"
import { ContainerBlog } from "./styles"

function BlogArticle() {
    const urlId = window.location.pathname.split("/")[2];
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <ContainerBlog>
                    {BlogComponent(urlId)}
                </ContainerBlog>
            </main>
        </div>
    )
}

export default BlogArticle
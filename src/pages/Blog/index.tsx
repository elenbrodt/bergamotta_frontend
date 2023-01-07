import Header from "../../components/Header";
import ListBlogs from "../../components/ListBlogs";

function Blog() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <body>
                <div>
                    <ListBlogs />
                </div>
            </body>
        </div>
    );
}

export default Blog;
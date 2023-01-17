import Header from "../../components/Header";
import ListBlogs from "../../components/ListBlogs";
import { Footer } from "../../components/Footer";

function Blog() {
    return (
        <div className="App">
                <Header />
                <div>
                    <ListBlogs />
                </div>
                <Footer></Footer>
        </div>
    );
}

export default Blog;
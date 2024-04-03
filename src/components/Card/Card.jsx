import "./Card.css";
export default (
    {
        photoId = "1",
        body = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dolor sequi delectus nobis ullam quo amet, consectetur eveniet? Harum excepturi ullam labore consequatur? Voluptatem distinctio magni labore. Beatae, maxime assumenda!"
    }
)=>{
    return (
        <section className="Card">
            <img src={`https://picsum.photos/id/${photoId}/300/200`} />
            <div>
                <p>{body}</p>
            </div>
        </section>
    );
}
import classes from "./WatchVideo.module.css";
const WatchVideo = () => {
  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <h3>Watch Video</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora
          sit quo minus pariatur animi repellat vel omnis, nihil maiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          veniam quod repellendus perferendis suscipit, quae laborum! Molestiae
          consequatur aliquam mollitia assumenda, commodi, harum neque non amet.
        </p>
      </div>
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/mR6e5GbyNfE"
        title="[ React JS Template 1] 23- Watch Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};
export default WatchVideo;

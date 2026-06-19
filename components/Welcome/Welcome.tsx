import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <h1 className={classes.title}>
        Welcome to Brave Hearts
      </h1>
      <p>
        Join three adventurous friends on a journey full of fun, discovery, and
        excitement! This interactive children&apos;s book brings their story to
        life with engaging animations, captivating illustrations, and
        imaginative minigames. Explore the world of friendship, bravery, and
        teamwork as you dive into the pages of their adventure.
      </p>
      <button disabled>Start the Adventure</button>
    </>
  );
}

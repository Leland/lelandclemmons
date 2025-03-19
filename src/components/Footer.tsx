import classes from "./footer.module.css";

export function Footer() {
  return (
    <footer className={classes.capstone}>
      <p>I'm looking for my next role! Sound like there's a match?</p>
      <a href="mailto:contact@lelandclemmons.com" className={classes.cta}>
        Get in touch!
      </a>
    </footer>
  );
}

import classes from "./Home.module.css";
import imgUrl from "../assets/images/me.png";

export function Home() {
  return (
    <main className={classes.main}>
      <aside className={classes.portrait}>
        <img
          src={imgUrl}
          alt="A bitcrushed image of Leland Clemmons' winsome mug."
        />
      </aside>
      <section>
        <p>
          Hello! I'm Leland Clemmons, a software engineer with over a decade of
          experience who loves making accessible interfaces load quickly. I code
          in <em>Typescript</em> and <em>React.js</em>, but I've also made a
          bevy of CI/CD tools in <em>Node.js</em>, <em>Python</em>, and{" "}
          <em>shell scripts</em>.
        </p>
        <p>
          I've made design systems, e-commerce apps, frontend performance
          checks, developer experience tools, and more.
        </p>
        <p>
          I also love to <em>teach</em> and <em>lead</em>! I've led teams in
          learning React, the advanced parts of git, React, accessibility (e.g
          WCAG and ARIA), and beyond. I've managed teams consisting of back- and
          front end engineers, designers, and product managers in shipping
          software used in Fortune 500 companies with Agile methodologies.
        </p>
      </section>
    </main>
  );
}

import { FunctionComponent } from "react";
import Project from "./Project";

type Props = {
  listId: string;
  isDesktop?: boolean;
};

const ProjectList: FunctionComponent<Props> = ({ listId, isDesktop }) => {
  return (
    <div className="workListContainer" id={listId}>
      <Project
        linkUrl="https://www.beanreporter.com/"
        title="Bean Reporter"
        role="Development & Design"
        isDesktop={isDesktop}
        techStack={[
          "React",
          "Next.js",
          "TypeScript",
          "Supabase",
          "PostgreSQL",
          "Git",
          "Stripe",
          "Vercel",
          "Plausible",
          "Figma",
        ]}
        description={
          <>
            <p>
              Bean Report is a project created to hone my database skills as
              well and working with a data-intensive application. The website is
              a coffee encyclopedia that includes 3000+ coffees from over 100
              roasters all across Europe.
            </p>
            <p>
              This used a wide range of tables from countries, cities connected
              to roasters as well as origins. Also notes linked to note
              categories, roasting profiles, process methods, users, upvotes,
              wish lists, and more.
            </p>
            <p>
              After creating a custom CMS for staff to add coffee, roasters,
              notes and process type entries, I leveraged Supabase
              authentication and authorization to make this process
              non-destructive and making custom role permissions for adding and
              approving entries.
            </p>
            <p>
              It also uses logic for registered users such as being able to add
              recipes, upvote and add to a wish list. Recipes can also be
              upvoted but only by other users, this was done so that the project
              can later include a point system that cant be abused. The user
              also have a profile page where they can understand what coffee
              profiles match better with them based on the coffees they have
              upvoted and wish listed.
            </p>
            <p>
              I also made a scraper that scrapes all the websites of the
              roasters and spits out a JSON with the date, the coffees added and
              coffees deleted. This is useful for keeping everything up to date.
            </p>
            <p>
              This website was good to practice sorting, filtering and rendering
              large amounts of data in a fast and efficient way.
            </p>
            <p>
              I also added a payment system using Stripe Checkout Links for the
              users to be able to buy a discovery pack I made. A WIP that is
              nearly finished is using Stripe payment intents to make a
              completely custom checkout experience where the shipping costs of
              each roaster are calculated taking into consideration the users
              location too. If the user purchases from multiple roasters, the
              shipping costs are calculated.
            </p>
            <p>
              I have been working on this project on my spare time for about a
              year now. Future plans include adding a point system,
            </p>
          </>
        }
      />
      <Project
        linkUrl="https://www.21analytics.ch/"
        title="21 Analytics"
        role="Development & Design"
        isDesktop={isDesktop}
        techStack={[
          "React",
          "Next.js",
          "TypeScript",
          "Contentful CMS",
          "Mendable AI",
          "Plausible",
          "Google Analytics",
          "HubSpot",
          "GraphQL",
          "Git",
          "Github CI",
          "Netlify",
          "MdBooks",
          "Metamask",
          "YAML",
          "Figma",
        ]}
        description={
          <>
            <p>
              Working at 21 Analytics for over 3 years, I have done a wide range
              of tasks such as making the frontend for tools like a LEI
              Generator, IVMS message verifying, Signature proofs with Metamask,
              creating and maintaining the website, working on the main products
              UI, maintaining the docs of the product as well as refreshing the
              branding style guide and generating a wide range of graphics and
              designs.
            </p>
            <p>
              The main thing I've been working on is the website and the docs
              for 21 Analytics. For the site we have gone a long way from moving
              from a previous squarespace site which was very limited and not
              very good for SEO, to migrating to a static Next.js site. This was
              done with a fully custom design following a branding style guide I
              created.
            </p>
            <p>
              Using Next.js provided us with lots of flexibility and the
              performance improved greatly for SEO. I then integrated Contentful
              CMS to allow the marketing team to easily add data to the site
              without the need of a developer, and allowing to keep a strict
              style guide. We also first integrated Email.js with SendGrid for
              the website forms, but later it was replaced with HubSpot so that
              the sales team could have a more automated process. This came with
              a bit of sacrifice since it uses an iframe, and styling and
              loading times are out of our control. But it was a good trade-off
              for the sales team.
            </p>
            <p>
              For analytics we started with Plausible since it didn't use any
              cookies and kept in line with the company's privacy values. But
              later the marketing team moved to Google Analytics to have more
              detailed data. This also came with a bit of a timing trade-off.
            </p>
            <p>
              I temporarily added a chatbot with Mendable AI. This fetched data
              from our blogposts, website and docs to answer questions. This
              gave us a good spike in user engagement and helped with
              understanding what questions users had. This was later decided to
              be removed.
            </p>
            <p>
              I also added two tools created by the team and made the UI for
              them. This included a LEI Generator and a IVMS message verifier.
              These tools have been made in Rust. I also briefly worked in Rust
              to improve the test data in our main products API playground.
            </p>
            <p>
              Our docs also used a framework which uses Rust under the hood. Our
              docs use MdBooks which is a static site generator that uses
              markdown files. This is good so that it is easy to collaborate
              with the team and keep the docs up to date without needing an
              extensive knowledge of coding. I am also responsible for the
              design of the docs as well as its maintenance in collaboration
              with the developers working on the main product.
            </p>
            <p>
              Another feature I worked on was the signature proof with Metamask.
              This was done for the main product and allowed for users to
              automate message signatures to prove ownership of their wallets.
            </p>
            <p>
              I've taken a key role in contributing to the marketing team by
              suggesting features that have done some of the best results when
              it comes to user engagement, such as the chatbot and a Digital
              Asset finder tool. I've also worked hand in hand with the
              copywriters to make the CMS experience as smooth as possible as
              well as keeping best practices in mind for SEO, with the teams SEO
              experts.
            </p>
            <p>
              For the main product we briefly touched Docker, Docker-compose and
              Caddy files. We also use Gitlab, so I have made Gitlab CI
              pipelines using YAML files. We also use git to keep our projects
              organized and for the review process.
            </p>
          </>
        }
      />
      <Project
        linkUrl="https://anuarkhalifi.com/"
        title="Anuar Khalifi"
        role="Development & Design"
        isDesktop={isDesktop}
        techStack={["React", "Git", "Netlify", "GSAP", "Figma"]}
        description={
          <>
            <p>
              For Anuar Khalifi's website we wanted to keep a design that
              resembled a gallery to keep the focus on the paintings.
            </p>
            <p>
              This project was a good opportunity to work with GSAP for the
              animations and a custom pre-loader. It also uses a custom theme
              switcher to keep aligned with the painters colors and allow the
              users to see the paintings with different backgrounds.
            </p>
          </>
        }
      />
      <Project
        linkUrl="https://scrannyshouse.com/"
        title="Scranny's House"
        role="Development & Design"
        isDesktop={isDesktop}
        techStack={[
          "React",
          "React Router",
          "Netlify",
          "Styled Components",
          "Figma",
          "Stripe",
        ]}
        description={
          <>
            <p>
              Scranny's House is a personal project I made to practice working
              with e-commerce using Stripe. The website is as a store of english
              munchies that was sold here in Spain. The project was later
              suspended due to import costs rising largely.
            </p>
            <p>
              For this project I worked with Stripe Checkout. It stores the data
              in the cart and then passes it to the checkout page.
            </p>
            <p>
              I also used google maps custom markers to show the post code areas
              in rage for delivery. This would let the user know if they can
              order based on their post code. The site then lets you either just
              explore if you are out of range or add to cart if you are in.
            </p>
          </>
        }
      />
      <Project
        linkUrl="https://www.ajuarestudio.com"
        title="Ajuar"
        role="Development"
        isDesktop={isDesktop}
        techStack={[
          "React",
          "Next",
          "Styled Components",
          "Netlify",
          "Netlify Forms",
        ]}
        description={
          <>
            <p>
              Ajuar is a design and content creation studio. Since they offer
              design services it made sense that they did the design for this
              project and I did exclusively the development. Working hand in
              hand with Ajuar's design team we did the site following their
              requests.
            </p>
            <p>
              Netlify Forms was used for the contact form. This was then
              connected to their email so that they could receive the messages
              directly.
            </p>
            <p>
              All in all, this project was a good opportunity to work with a
              design team in a design focused project, so being pixel perfect
              was important for this project since they put a lot of effort into
              the design.
            </p>
          </>
        }
      />
      <Project
        linkUrl="https://www.behance.net/gallery/78665785/Aaron-Dormer-Film-Director-Website"
        title="Aaron Dormer"
        role="Design"
        isDesktop={isDesktop}
        techStack={["Sketch"]}
        description={
          <>
            <p>
              Aaron Dormer is a friend and movie & commercials director that has
              worked for very well know names such as Jaguar, H&M, Nestle, Kia,
              Wella, Superdry to name a few. Having worked with Aaron back when
              I started Gryd Design and was making no-code websites with Adobe
              Muse, Aaron came back and asked me if we could redesign the
              website for him. I came up with the following proposal.
            </p>
          </>
        }
      />
      <Project
        linkUrl="https://axelbalazsi.netlify.app/"
        title="Axel Balazsi"
        role="Development & Design"
        isDesktop={isDesktop}
        techStack={["React", "Netlify", "GSAP", "Figma"]}
        description={
          <>
            <p>
              Axel Balazsi is a friend and artist based between London and
              Mallorca where he owns a gallery. He asked me to make his website
              after having previously done a website for him back when I was in
              Gryd Design working with Adobe Muse. This time we made the website
              using React. This allowed for a lot more flexibility and
              possibilites.
            </p>
            <p>
              After his transition from painting to installations art we wanted
              to focus on the space and get close to his recent work which
              focused on furniture and the build your-self furniture kits we are
              so accustomed to. This is why on the design we used a lot of
              asymmetry but keeping everything within a grid to reflect the
              initial chaotic state of the pieces of the kits.
            </p>
            <p>
              Once inside the pages to showcase his art a lot of white space to
              represent the nature of the installations and the space they
              occupy. A custom hover was made so that whenever the user hovers
              over and image of an art piece all the elements of the webiste
              dissapear and only the image remains to keep full focus on the
              art.
            </p>
            <p>
              GreenSock Animation Platform (GSAP) was used for subtle animations
              and motion design.
            </p>
          </>
        }
      />
      <Project
        linkUrl="https://unikomodels.com/"
        title="Uniko"
        role="Development & Design"
        isDesktop={isDesktop}
        techStack={["React", "React Router", "Sketch"]}
        description={
          <>
            <p>
              Uniko is a well established model agency in Barcelona. The site
              was a request done when working for Apollo 30. Working side by
              side with the Apollo 30, where I was handed most of the design,
              their usual wordpr
            </p>
          </>
        }
      />
    </div>
  );
};

export default ProjectList;

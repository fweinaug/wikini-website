import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Legal Disclosure
          </h1>
          <h2 className="subtitle">
            Information in accordance with Section 5 TMG
          </h2>
          <Link to="/" className="button is-primary is-light is-small">
            <span className="icon is-small">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span>Go back</span>
          </Link>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="content">
          <p>
            Florian Weinaug<br />
            Alstertwiete 1a<br />
            20099 Hamburg<br />
            Germany
          </p>
          <h3>Contact information</h3>
          <p>
            E-Mail: <a href="mailto:wikiniapp@outlook.com">wikiniapp@outlook.com</a>
            <br />
            Website: <a href="http://florianweinaug.de">florianweinaug.de</a>
          </p>
          <h3>Disclaimer</h3>
          <h4>Accountability for content</h4>
          <p>
            The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
            accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
            our own content on these web pages. In this matter, please note that we are not obliged to monitor the
            transmitted or saved information of third parties, or investigate circumstances pointing to illegal
            activity. Our obligations to remove or block the use of information under generally applicable laws remain
            unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG).
          </p>
          <h4>Accountability for links</h4>
          <p>
            Responsibility for the content of external links (to web pages of third parties) lies solely with the
            operators of the linked pages. No violations were evident to us at the time of linking. Should any legal
            infringement become known to us, we will remove the respective link immediately.
          </p>
          <h4>Copyright</h4>
          <p>
            Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law,
            every form of utilizing, reproducing or processing works subject to copyright protection on our web pages
            requires the prior consent of the respective owner of the rights. Individual reproductions of a work are
            only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may
            violate copyright laws.
          </p>
          <hr />
          <p className="has-text-weight-light">
            Source: <a href="http://www.translate-24h.de" target="_blank" rel="noopener noreferrer">translate-24h Englisch Translations</a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage

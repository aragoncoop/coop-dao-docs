/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>

          <div>
            <h5>Docs</h5>
						<a href={this.docUrl('framework/intro.html', this.props.language)}>
              Coop DAO Framework
            </a>
						<a href={this.docUrl('community/intro.html', this.props.language)}>
              User Guides
            </a>
						<a href={this.docUrl('dev/intro.html', this.props.language)}>
              Dev Guides
            </a>
          </div>

          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="https://forum.aragon.org/"
              target="_blank"
              rel="noreferrer noopener">
              Aragon Community Forum
            </a>
						<a href="https://aragon.chat/">
							Rocket Chat 🚀
						</a>
						<a href={this.docUrl('community/keybase.html', this.props.language)}>
							Keybase Chat 🗝️
						</a>
            <a
              href="https://www.reddit.com/r/aragonproject/"
              target="_blank"
              rel="noreferrer noopener">
              Reddit
            </a>
          </div>

          <div>
            <h5>More</h5>
						<a href={`${this.props.config.baseUrl}blog`}>
							Blog
						</a>
						<a href="https://github.com/aragoncoop/coop-dao-docs/">
							GitHub
						</a>
          </div>
        </section>

        <a
          href="https://github.com/1Hive/HCL"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/aragon-grey-horizontal.svg`}
            alt="Aragon"
          />
        </a>
				<section className="copyright">
					<a href='https://github.com/1Hive/HCL'>
						{this.props.config.copyright}
					</a>
				</section>
      </footer>
    );
  }
}

module.exports = Footer;

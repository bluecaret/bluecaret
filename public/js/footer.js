class AppFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear()
    this.innerHTML = /*html*/ `
      <style>
      .footer {
        padding: 6rem 0 2rem;
        background: var(--b1);
        background: linear-gradient(to bottom, var(--b2) 20%, var(--b1) 120%);
        --mask:
          radial-gradient(2.33rem at 50% 3.20rem,#000 99%,#0000 101%) calc(50% - 4rem) 0/8rem 100%,
          radial-gradient(2.33rem at 50% -1.2rem,#0000 99%,#000 101%) 50% 2rem/8rem 100% repeat-x;
        -webkit-mask: var(--mask);
        mask: var(--mask);
      }
      .footerContainer {
        width: min(40rem, calc(100% - 3rem));
        margin: 0 auto;
        text-align: center;
      }
      .footerLinks {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: .5rem 1rem;
        margin: .2rem 0;
      }
      .footerLinks a {
        font-size: 1.1rem;
        color: hsl(210deg 40% 10%);
        text-decoration: none;
      }
      .footerLinks a:hover {
        text-decoration: underline;
      }
      .copyrightWrapper {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
        align-items: center;
        margin-top: 1.5rem;
        color: hsl(210deg 40% 10%);
      }
      .copyright {
        text-align: left;
        font-size: .9rem;
        font-weight: 400;
        line-height: 1.1;
      }
      .bluecaret {
        display: inline-block;
      }
      .bluecaret img {
        width: auto;
        height: 2.4rem;
      }
      .bmc {
        width: auto;
        height: 2rem;
      }
      .bmc img {
        height: 100%;
        width: auto;
        vertical-align: middle;
      }
      </style>
      <footer class="footer">
        <div class="footerContainer">
          <div class="footerLinks">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
          <div class="footerLinks">
            <a href="https://carettab.com">CaretTab</a>
            <!--<a href="/two-steps-forward">Two Steps Forward</a>-->
            <a href="/patterns">Patterns</a>
            <a href="https://github.com/bluecaret/" rel="noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/johnwhancock/" rel="noreferrer">LinkedIn</a>
          <div class="copyrightWrapper">
            <a
              href="/"
              class="bluecaret"
              title="Designed and developed by BlueCaret"
            >
              <img src="/assets/bluecaret-logo-alt.svg" alt="BlueCaret logo" />
            </a>
            <div class="copyright">
              Copyright © ${currentYear} BlueCaret.<br/>
              Designed and developed by BlueCaret
            </div>
            <a href="https://www.buymeacoffee.com/bluecaret" class="bmc"><img src="/assets/bmc-full-logo-no-background.png" alt="Support the developer by buying me a coffee" /></a>
          </div>
          
        </div>
      </footer>
    `
  }
}

window.customElements.define('app-footer', AppFooter)

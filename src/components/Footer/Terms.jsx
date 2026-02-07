import React from "react";

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 md:p-12 text-gray-800">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            Please read these terms carefully before using our website.
          </p>
        </header>

        <div className="prose prose-lg max-w-none leading-relaxed text-gray-700 space-y-6">
          <p>
            Welcome to Home Point. These Terms &amp; Conditions govern your use
            of our website and services. By accessing or using our site you
            agree to be bound by these terms. If you do not agree, please do
            not use the site.
          </p>

          <section>
            <h2 id="use">1. Use of the Website</h2>
            <p>
              The content on this website is provided for general information
              purposes only. We make reasonable efforts to ensure information
              is accurate but give no guarantees. You must not rely on the
              website as a substitute for professional advice.
            </p>
          </section>

          <section>
            <h2 id="accounts">2. User Accounts</h2>
            <p>
              When you create an account you are responsible for keeping your
              password secure and for all activity that occurs under your
              account. Notify us immediately of any unauthorized use.
            </p>
          </section>

          <section>
            <h2 id="listings">3. Listings &amp; Third Parties</h2>
            <p>
              Listings are added by sellers, developers, or partner agents. We
              do not guarantee the accuracy, completeness, or fitness for
              purpose of any listing. Any contract for sale, lease, or service
              is strictly between the buyer and the seller. We act as a
              platform only.
            </p>
          </section>

          <section>
            <h2 id="ip">4. Intellectual Property</h2>
            <p>
              All content on this site, including text, images and logos, is
              our property or licensed to us. You may not copy or reuse
              content without permission.
            </p>
          </section>

          <section>
            <h2 id="liability">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Home Point will not be
              liable for any indirect or consequential loss arising from use of
              the site, or reliance on its content.
            </p>
          </section>

          <section>
            <h2 id="explore">6. Exploring the Internet — Safety &amp; Conduct</h2>
            <p>
              By exploring the internet and interacting with third-party
              content through our site (for example visiting external property
              links, interacting with social media, or using map services), you
              agree to exercise caution and follow best practices: ensure your
              device and browser are up to date, avoid sharing sensitive
              personal or financial information unless you trust the third
              party, and verify identities before entering into agreements.
            </p>
          </section>

          <section>
            <h2>7. Changes to Terms</h2>
            <p>
              We may update these terms occasionally. We will publish updates
              on the site; continued use after changes indicates acceptance.
            </p>
          </section>

          <footer>
            <h2>Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at
              <a href="mailto:dreamhomepoint@gmail.com" className="text-purple-600">
                dreamhomepoint@gmail.com
              </a>
              .
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}

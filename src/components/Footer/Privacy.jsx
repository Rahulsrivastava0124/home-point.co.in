import React from "react";

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm p-8 md:p-12 text-gray-800">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="prose prose-lg max-w-none leading-relaxed text-gray-700 space-y-6">
          <p>
            This Privacy Policy explains how Home Point collects, uses, and
            discloses your personal information when you use our website and
            services.
          </p>

          <section>
            <h2 id="collect">Information We Collect</h2>
            <ul>
              <li>Personal information you provide (name, email, phone).</li>
              <li>Information about your use of the site (cookies and analytics).</li>
              <li>Listing details you submit as a seller or agent.</li>
            </ul>
          </section>

          <section>
            <h2 id="useinfo">How We Use Information</h2>
            <p>
              We use your information to provide and improve our services, to
              communicate with you about listings and offers, and to send
              marketing where you have consented.
            </p>
          </section>

          <section>
            <h2 id="share">Sharing &amp; Third Parties</h2>
            <p>
              We may share data with service providers (hosting, analytics),
              with partner agents and developers for listing purposes, and
              where required by law. We never sell your personal information to
              third-party marketers.
            </p>
          </section>

          <section>
            <h2 id="security">Security</h2>
            <p>
              We implement industry-standard measures to protect your data,
              but no system is perfectly secure. Please take care when sharing
              sensitive information online.
            </p>
          </section>

          <section>
            <h2 id="explore">Exploring the Internet — Privacy Considerations</h2>
            <p>
              When you follow external links from our site, or use third-party
              services (maps, social logins), those services may collect data
              about you. Review their privacy policies and adjust browser
              privacy settings as needed.
            </p>
          </section>

          <section>
            <h2 id="rights">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data. Contact <a href="mailto:Info@homepoint.co.in" className="text-purple-600">Info@homepoint.co.in</a> with your request.
            </p>
          </section>

          <footer>
            <h2>Contact</h2>
            <p>
              If you have privacy questions, please email
              <a href="mailto:Info@homepoint.co.in" className="text-purple-600"> Info@homepoint.co.in</a>.
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}

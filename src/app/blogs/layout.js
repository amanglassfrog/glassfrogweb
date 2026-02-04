import { Plus_Jakarta_Sans } from "next/font/google";



const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });
export const metadata = {
  title: "Glassfrog Technologies - Blogs, Information, News & More",
  description: "Learn about Website Development, Digital Marketing Agencies, Marketing Strategies, Lead Generation, Ads Agency, or more on our Blogs and Knowledge Base. "
};

export default function RootLayout({ children }) {
  return (


    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NB7KZS2N');`,
          }}
        ></script>
        {/* End Google Tag Manager */}

        <title>Glassfrog Technologies - Blogs, Information, News & More</title>
        <meta name="description" content="Learn about Website Development, Digital Marketing Agencies, Marketing Strategies, Lead Generation, Ads Agency, or more on our Blogs and Knowledge Base. " />


        <meta property="og:url" content="https://www.rantraacademy.com/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blogs - Rantra Academy" />
        <meta property="og:description" content="Looking for more? Read our blogs and check the news updates to know more about the National Defence Academy" />
        <meta property="og:image" content="https://www.rantraacademy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRANTRALOGO.d08dadad.png&w=1080&q=75" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="rantraacademy.com" />
        <meta property="twitter:url" content="https://www.rantraacademy.com/blogs" />
        <meta name="twitter:title" content="Blogs - Rantra Academy" />
        <meta name="twitter:description" content="Looking for more? Read our blogs and check the news updates to know more about the National Defence Academy" />
        <meta name="twitter:image" content="https://www.rantraacademy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRANTRALOGO.d08dadad.png&w=1080&q=75" />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB7KZS2N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}


        {children}</body>

    </html>
  );
}

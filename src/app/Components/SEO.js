import Head from 'next/head';

const SEO = () => (
  <Head>
    {/* Google Search Console Verification */}
    <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
    
    {/* Google Analytics */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_ID"></script>
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_GOOGLE_ANALYTICS_ID');
      `
    }} />
  </Head>
);

export default SEO;
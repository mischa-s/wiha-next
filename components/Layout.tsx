import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:url"
          content={`https://wiha.nz/${router.pathname}`}
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://wiha.nz/wiha-logos/logo-social-sharing-2.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="WIHA" key="ogsitename" />
        <meta
          property="og:title"
          content="Wellington Ice Hockey Association"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="New player? Retuning player? Casual player? Wellington ice hockey association has leagues and trainings for everyone!"
          key="ogdesc"
        />
        <meta
          name="title"
          content="Wellington Ice Hockey Association"
          key="title"
        />
        <meta
          name="description"
          content="New player? Retuning player? Casual player? Wellington ice hockey association has leagues and trainings for everyone!"
          key="description"
        />
        <title>Wellington Ice Hockey Association</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

import AboutUs from "../sections/aboutSection/aboutUs";
import { Helmet } from 'react-helmet';

export default function AboutPage() {
  return (
    <div className="aboutPage / flex flex-col gap-20 / w-full h-full relative">
      <Helmet>
        <title>About FitTech - Our Vision and Mission</title>
        <meta name="description" content="FitTech is a startup agency that specializes in providing technology and services to the fitness industry. Our mission is to help gym businesses and supplement stores succeed with innovative solutions." />
        <meta name="keywords" content="FitTech founders, fitness industry technology, gym business solutions, supplement store services, innovative fitness solutions, fitness technology company" />
      </Helmet>
      <AboutUs />
    </div>
  );
}

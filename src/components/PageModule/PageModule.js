import { config } from "static/config";
import HeroAbout from "components/HeroAbout";
import HeroDetail from "components/HeroDetail";
import HeroImage from "components/HeroImage";
import HeroVideo from "components/HeroVideo";
import HeroQuote from "components/HeroQuote";
import HeroMeet from "components/HeroMeet";
import HeroCulture from "components/HeroCulture";
import HeroLegal from "components/HeroLegal";
import HeroContact from "components/HeroContact";
import Quote from "components/Quote";
import People from "components/People";
import Office from "components/Office";
import Team from "components/Team";
import Text from "components/Text";
import Tab from "components/Tab";
import Initiative from "components/Initiative";
import Careers from "components/Careers";
import OneImageLayout from "components/OneImageLayout";
import TwoImageLayout from "components/TwoImageLayout";
import ThreeImageLayout from "components/ThreeImageLayout";
import XRay from "components/XRay";
import Press from "components/Press";
import Offices from "components/Offices";

const PageModule = ({ moduleId, content, className, slideIdx, isSlide, nextSlide, locale }) => {
  const { pageModules } = config;

  const modules = {
    [pageModules.heroAbout]: HeroAbout,
    [pageModules.heroDetail]: HeroDetail,
    [pageModules.heroImage]: HeroImage,
    [pageModules.heroVideo]: HeroVideo,
    [pageModules.heroQuote]: HeroQuote,
    [pageModules.heroMeet]: HeroMeet,
    [pageModules.heroCulture]: HeroCulture,
    [pageModules.heroLegal]: HeroLegal,
    [pageModules.heroContact]: HeroContact,
    [pageModules.quote]: Quote,
    [pageModules.people]: People,
    [pageModules.office]: Office,
    [pageModules.team]: Team,
    [pageModules.text]: Text,
    [pageModules.tab]: Tab,
    [pageModules.initiative]: Initiative,
    [pageModules.careers]: Careers,
    [pageModules.oneImageLayout]: OneImageLayout,
    [pageModules.twoImageLayout]: TwoImageLayout,
    [pageModules.threeImageLayout]: ThreeImageLayout,
    [pageModules.xRay]: XRay,
    [pageModules.press]: Press,
    [pageModules.offices]: Offices,
  }
  let Module = modules[moduleId];

  return Module ? <Module className={className} content={content} slideIdx={slideIdx} isSlide={isSlide} nextSlide={nextSlide} locale={locale} /> : <></>
}


export default PageModule;
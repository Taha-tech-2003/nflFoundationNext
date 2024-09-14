import styles from "./page.module.css";
import { IoMenu } from "react-icons/io5";
import { FaAngleRight, FaPlus, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import iconImage from './assets/iconImage.png'
import sliderImage from './assets/sliderImage.jpg'
import nflMen from './assets/nflMen.png'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function Home() {
  return (
    <div className={`${styles.MainContainer} container-fluid`}>
      <div className={styles.SideBar}>
        <div className={styles.diagonal_box} bis_skin_checked="1">

        </div>
        <div className={styles.main_logo} bis_skin_checked="1">
        </div>
        <div className={styles.menu_launch} bis_skin_checked="1">
          <div className={styles.closed} bis_skin_checked="1">
            <span >Menu</span>
            <IoMenu className={styles.HamburgerIcon} />
          </div>
        </div>
        <view className={`${styles.loginFormation}`}>
          <h3>Login</h3>
          <input type="text" placeholder="Email" />
          <div className={styles.passwordContainer}>
            <input type="text" placeholder="Password" className={styles.PasswordInput} />
            <button className={styles.LoginBtn}>
              <FaAngleRight className={styles.loginIcon} />
            </button>
          </div>
          <h3 className={styles.LinksAction}>Forgot password?</h3>
          <h3 className={styles.LinksAction}>Register!</h3>

          <div className={styles.socialMediaContainer}>
            <FaTwitter />
            <h2>Follow us on Twitter</h2>
          </div>
        </view>
      </div>
      <div className="row h-100 position-relative">
        <div className="col-md-7 bg-dark h-100 p-0">
          <div className={styles.BannerLeft}>
            <div className={styles.impectSection}>
              <h3>
                IMPACT
              </h3>
              <FaPlus className={styles.plusIcon} />
            </div>

          </div>
        </div>
        <div className="col-md-5 bg-light h-100 p-0">
          <div className={styles.BannerRight}>
            <h1 className={styles.transformingBanner}>
              Mission
            </h1>
            <div>
              <p>
                The National Football League (NFL) Foundation is a nonprofit organization dedicated to improving the lives of those touched by the game of football – from players at all levels to communities across the country. The NFL Foundation and its members, the 32 NFL clubs, support the health, safety and wellness of athletes, youth football, and the communities that support our game.
              </p>
              <p>
                Celebrating 50 years, the NFL Foundation has become one of the leading philanthropic entities in America, contributing to NFL team communities, national and international disaster relief efforts, and societal issues. The league is utilizing this anniversary to amplify the impact of NFL Philanthropy and the progress made by our nonprofit entities.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a>
                  Find out more
                </a>
                <a>Our Board of directors</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featuresAbsolute}>
          <div className="container-fluid h-100">
            <div className={`row h-100`}>
              <div className="col-md-3 p-0">
              </div>
              <div className="col-md-8 p-0 d-flex align-items-center justify-content-between">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className={styles.featureContent}>
                    <Image src={iconImage} />
                  </div>
                  <h4 className={styles.featureTitle}>Grant Programs</h4>
                  <h6 className={styles.featureLink}>More</h6>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className={styles.featureContent}>
                    <Image src={iconImage} />
                  </div>
                  <h4 className={styles.featureTitle}>Youth Football                  </h4>
                  <h6 className={styles.featureLink}>More</h6>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className={styles.featureContent}>
                    <Image src={iconImage} />
                  </div>
                  <h4 className={styles.featureTitle}>Community</h4>
                  <h6 className={styles.featureLink}>More</h6>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className={styles.featureContent}>
                    <Image src={iconImage} />
                  </div>
                  <h4 className={styles.featureTitle}>Health & Safety                  </h4>
                  <h6 className={styles.featureLink}>More</h6>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div className={styles.featureContent}>
                    <Image src={iconImage} />
                  </div>
                  <h4 className={styles.featureTitle}>Character<br />Education</h4>
                  <h6 className={styles.featureLink}>More</h6>
                </div>
              </div>
              <div className="col-md-1 p-0">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`row h-100 ${styles.secondSection}`}>
        <div className="col-md-4 p-0">
        </div>
        <div className="col-md-8 p-0">
        </div>
      </div>


      <div className={`row h-100 ${styles.thirdSection}`}>
        <div className={`col-md-4 p-0 ${styles.RedSection}`}>
          <div className={styles.transformDivh1}>
            <h1>
              Grant <br />Programs
            </h1>
          </div>
          <div className={styles.controller}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className={styles.controllBtn}>
                <FaChevronLeft style={{ color: '#5eb1e8', fontSize: "20px" }} />
              </div>
              <div className={styles.controllBtn}>
                <FaChevronRight style={{ color: '#5eb1e8', fontSize: "20px" }} />
              </div>
            </div>
            <h4>VIEW ALL</h4>
          </div>
        </div>
        <div className="col-md-8 p-0">

          <div className='row'>
            <div className={`col-md-6 px-5 ${styles.courouselItem}`}>
              <Image src={sliderImage} className={styles.SliderImageTop} />
              <h2>Player Matching Grants</h2>
              <p>NFL Foundation Player Matching Grants are designed to provide nonprofit organizations or schools and youth football organizations with funding of up to $5,000 per grant, on behalf of a current NFL Player or NFL Legend (i.e., former player) that has contributed to the organization.</p>
              <h3>Find out more</h3>
            </div>
            <div className={`col-md-6 px-5 ${styles.courouselItem}`}>
              <Image src={sliderImage} className={styles.SliderImageTop} />
              <h2>Player Matching Grants</h2>
              <p>NFL Foundation Player Matching Grants are designed to provide nonprofit organizations or schools and youth football organizations with funding of up to $5,000 per grant, on behalf of a current NFL Player or NFL Legend (i.e., former player) that has contributed to the organization.</p>
              <h3>Find out more</h3>
            </div>
          </div>
        </div>
      </div>



      <div className={`row ${styles.thirdSection}`}>
        <div className={`col-md-2 p-0`}>

        </div>
        <div className={`col-md-10 d-flex align-items-center justify-content-between ${styles.programDertailcubes}`} >
          <div className="d-flex align-items-center justify-conten-center flex-column">
            <div className={styles.ProgramDetail}>
              <Image src={nflMen} />
            </div>
            <h3>2.6 Million Impacted</h3>
          </div>

          <div className="d-flex align-items-center justify-conten-center flex-column">
            <div className={styles.ProgramDetail}>
              <Image src={nflMen} />
            </div>
            <h3>2.6 Million Impacted</h3>
          </div>
          <div className="d-flex align-items-center justify-conten-center flex-column">
            <div className={styles.ProgramDetail}>
              <Image src={nflMen} />
            </div>
            <h3>2.6 Million Impacted</h3>
          </div>
          <div className="d-flex align-items-center justify-conten-center flex-column">
            <div className={styles.ProgramDetail}>
              <Image src={nflMen} />
            </div>
            <h3>2.6 Million Impacted</h3>
          </div>

        </div>
      </div>


      <div className={`row ${styles.thirdSection}`}>
        <div className={`col-md-2 p-0`}>

        </div>
        <div className={`col-md-10 d-flex justify-content-center position-relative ${styles.secondSlider}`} >
          <h1>News</h1>

          <div className="">
            <div className={styles.controllBtn}>
              <FaChevronLeft style={{ color: '#5eb1e8', fontSize: "20px" }} />
            </div>
          </div>



          <div>
            <div className="d-flex align-items-center">
              <div className={styles.DateSlade}>
                <h6>Jan 23</h6>
              </div>
              <div className={styles.DateSlade}>
                <h6>2023</h6>
              </div>
            </div>
            <h2>
              NFL FOUNDATION-LISC GRASSROOTS FIELD<br /> GRANT PROGRAM AWARDS $3 MILLION FOR NEW<br /> AND REFURBISHED COMMUNITY FOOTBALL<br /> FIELDS
            </h2>
            <h5>
              NFL FOUNDATION/LISC GRASSROOTS FIELD GRANT PROGRAM AWARDS $3<br /> MILLION FOR NEW AND  REFURBISHED COMMUNITY FOOTBALL FIELDS IN 16 CITIES AND<br /> TOWNS NATIONWIDE
            </h5>
          </div>

          <div className="">
            <div className={styles.controllBtn}>
              <FaChevronRight style={{ color: '#5eb1e8', fontSize: "20px" }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

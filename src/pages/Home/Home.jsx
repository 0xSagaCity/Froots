import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedLine from "../../components/AnimatedLine/AnimatedLine";
import ButtonBackground from "../../components/ButtonBackground/ButtonBackground.jsx";
import ContainerQuote from "../../components/ContainerQuote/ContainerQuote";
import ScrollDownComponent from "../../components/ScrollDownComponent/ScrollDownComponent";
import TextBigHead from "../../components/TextBigHead/TextBigHead";
import reviews from "../../data/reviews";
import "../../styles/Home.css";
import "../../styles/HomeQueries.css";

export default function Home({ currentFruit, setSectionLoaded }) {
  //State
  const [reviewIndex, setReviewIndex] = useState(0);
  //Refs
  const ctaContainerRef = useRef(null);
  const testimonialContainerRef = useRef(null);
  const pricingContainerRef = useRef(null);
  //In View
  const ctaContainerIsInView = useInView(ctaContainerRef, {
    once: true,
  });
  const pricingContainerIsInView = useInView(pricingContainerRef, {
    once: true,
  });
  const testimonialContainerIsInView = useInView(testimonialContainerRef, {
    once: true,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const HOME_COMP = "HOME_COMP";
    setSectionLoaded(HOME_COMP);
  }, [setSectionLoaded]);

  const titleContainerVariant = {
    hidden: {
      scale: 2,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.15,
        scale: { duration: 1 },
      },
    },
  };

  const titleItemVariant = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const fullTextParentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, staggerChildren: 0.2 },
    },
    hideBack: {
      opacity: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const fullTextChildVariant = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    hideBack: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      className="HomeContainer"
    >
      {/* LANDING SECTION---------------------------->  */}
      <div className="HomeTopContainer">
        <AnimatedLine />
        <div className="CenterContainer">
          <div className="CenterContainerImage">
            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial={{ y: "-40%", scale: 0.7 }}
                animate={{ y: 0, scale: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, y: "20rem", transition: { duration: 1 } }}
                key={`CurrentImageLoaded-${currentFruit.name}`}
                className="InternalImageContainer"
              >
                <img
                  className="CenterImage"
                  alt="current loaded fruit"
                  src={`${currentFruit.gallery[0]}w=900`}
                />
                <div className="CenterImageGradient"></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <motion.h1
            variants={titleContainerVariant}
            initial="hidden"
            animate="visible"
            className="HomeTitleContainer"
          >
            <motion.span variants={titleItemVariant} className="HomeTitleWords">
              What
            </motion.span>
            <motion.span variants={titleItemVariant} className="HomeTitleWords">
              fruit's
            </motion.span>
            <motion.span variants={titleItemVariant} className="HomeTitleWords">
              do
            </motion.span>
            <motion.span variants={titleItemVariant} className="HomeTitleWords">
              you
            </motion.span>
            <motion.span variants={titleItemVariant} className="HomeTitleWords">
              want
            </motion.span>
            <motion.span
              animate={{ color: currentFruit.backColor }}
              variants={titleItemVariant}
              className="HomeTitleWords WordItalic"
            >
              to
            </motion.span>
            <motion.span
              animate={{ color: currentFruit.backColor }}
              variants={titleItemVariant}
              className="HomeTitleWords WordItalic"
            >
              eat ?
            </motion.span>
            <AnimatePresence exitBeforeEnter>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "-30%", transition: { duration: 2, delay: 1.4 } }}
                exit={{ x: "100%", transition: { duration: 2 } }}
                key={`HomeTitleUnderline-${currentFruit.index}`}
                className="HomeTitleUnderline"
              ></motion.div>
            </AnimatePresence>
          </motion.h1>
          <AnimatePresence exitBeforeEnter>
            <motion.p
              initial={{ opacity: 0, x: "40%" }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, delay: 2, x: { duration: 0.8 } },
              }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              key={`TopSidePara-${currentFruit.index}`}
              className="TopSidePara"
            >
              {currentFruit.details}
            </motion.p>
          </AnimatePresence>
        </div>
        <motion.div className="ScrollElementContainer">
          <ScrollDownComponent height={250} width={70} />
        </motion.div>
      </div>
      {/* CTA SECTION----------------------------  */}
      <motion.div
        animate={{
          opacity: ctaContainerIsInView ? 1 : 0,
          transition: { duration: 1 },
        }}
        ref={ctaContainerRef}
        className="HomeCTAContainer"
      >
        <AnimatedLine />
        <div className="CTARightContainer">
          <img
            alt="Worker in fields with apples"
            src="https://images.unsplash.com/photo-1626984232603-cc32cf514a83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80"
            className="CTAContainerImage"
          />
          <div className="CTATextContainer">
            <TextBigHead
              currentFruit={currentFruit}
              title="Fresh fruit straight"
              subTitle="to your doorstep."
            />
            <div className="CTASectionParagraphContainer">
              <p className="CTASectionPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tristique pretium venenatis. Pellentesque vel ex luctus,
                bibendum lacus sed, pulvinar dolor. Fusce tincidunt nibh blandit
                dui dapibus porta. Nulla commodo luctus accumsan. Nunc vel
                mollis sem, at feugiat purus. Donec a eleifend ante.{" "}
              </p>
              <p className="CTASectionPara">
                Nunc vel mollis sem, at feugiat purus. Donec a eleifend ante.
                Maecenas scelerisque eros eu facilisis tempor. Morbi auctor eros
                ac quam maximus sagittis a id diam. Donec pharetra suscipit
                nulla a consequat. Sed id orci id sapien molestie vulputate.
                Donec nec tempor enim.
              </p>
              <p className="CTASectionPara">
                Fusce tincidunt nibh blandit dui dapibus porta. Nulla commodo
                luctus accumsan. Nunc vel mollis sem, at feugiat purus. Donec a
                eleifend ante.{" "}
              </p>
            </div>
            <div
              onClick={() => {
                navigate("/shop");
              }}
              className="CTASectionButtonContainer"
            >
              <button className="CTASectionButton">
                <span>Shop Now</span>
              </button>
              <ButtonBackground className="ButtonSpiralBackground" />
            </div>
          </div>
          <motion.div className="ScrollElementContainer">
            <ScrollDownComponent height={250} width={70} />
          </motion.div>
        </div>
      </motion.div>
      {/* PRICING SECTION---------------------------- */}
      <motion.div
        animate={{
          opacity: pricingContainerIsInView ? 1 : 0,
          transition: { duration: 1 },
        }}
        ref={pricingContainerRef}
        className="PricingSectionContainer"
      >
        <AnimatedLine />
        <div className="PricingSectionRightContainer">
          <TextBigHead
            title="Affordable plans"
            subTitle="for additional benefits."
            currentFruit={currentFruit}
          />
          <div className="PricingCardsContainer">
            <div className="PriceCard">
              <p className="CardTitle">Basic</p>
              <p className="CardList">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                molestie hendrerit sem, dapibus lobortis neque ultricies id.
                Phasellus eleifend non diam eget finibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Donec molestie hendrerit sem,
                dapibus lobortis neque ultricies id. Phasellus eleifend non diam
                eget finibus.
              </p>
              <div className="CardSubscribeContainer">
                <p className="CardPriceContainer">
                  <span>10$</span> / month.
                </p>
                <div className="CardButtonContainer">
                  <button className="CardButton">
                    <span>Subscribe</span>
                  </button>
                  <ButtonBackground className="ButtonSpiralBackground" />
                </div>
              </div>
            </div>
            <div className="PriceCard">
              <p className="CardTitle">Standard</p>
              <p className="CardList">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                molestie hendrerit sem, dapibus lobortis neque ultricies id.
                Phasellus eleifend non diam eget finibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Donec molestie hendrerit sem,
                dapibus lobortis neque ultricies id. Phasellus eleifend non diam
                eget finibus.
              </p>
              <div className="CardSubscribeContainer">
                <p className="CardPriceContainer">
                  <span>17$</span> / month.
                </p>
                <div className="CardButtonContainer">
                  <button className="CardButton">
                    <span>Subscribe</span>
                  </button>
                  <ButtonBackground className="ButtonSpiralBackground" />
                </div>
              </div>
            </div>
            <div className="PriceCard">
              <p className="CardTitle">Health Pro</p>
              <p className="CardList">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                molestie hendrerit sem, dapibus lobortis neque ultricies id.
                Phasellus eleifend non diam eget finibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Donec molestie hendrerit sem,
                dapibus lobortis neque ultricies id. Phasellus eleifend non diam
                eget finibus.
              </p>
              <div className="CardSubscribeContainer">
                <p className="CardPriceContainer">
                  <span>23$</span> / month.
                </p>
                <div className="CardButtonContainer">
                  <button className="CardButton">
                    <span>Subscribe</span>
                  </button>
                  <ButtonBackground className="ButtonSpiralBackground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* TESTIMONIAL SECTION----------------------------*/}
      <motion.div
        animate={{
          opacity: testimonialContainerIsInView ? 1 : 0,
          transition: { duration: 1 },
        }}
        ref={testimonialContainerRef}
        className="TestimonialSectionContainer"
      >
        <AnimatedLine />
        <div className="TestimonialSectionRightContainer">
          <TextBigHead
            title="Hear what our customers"
            subTitle="have to say about us."
            currentFruit={currentFruit}
          />
          <div className="TestimonialRightBottomContainer">
            <div className="TestimonialPeopleContainer">
              {reviews.map((review, key) => (
                <div
                  className={
                    reviewIndex === key
                      ? "TestimonialCard ActiveTestimonial"
                      : "TestimonialCard"
                  }
                  key={`TestimonialCard-${key}`}
                  onClick={() => {
                    setReviewIndex(key);
                  }}
                >
                  <img
                    src={review.personImage}
                    alt="face of person"
                    className="TestimonialCardImage"
                  />
                  <div className="TestimonialCardText">
                    <span className="TestimonialPersonName">{review.name}</span>
                    <span className="TestimonialPersonJob">{review.job}</span>
                  </div>
                  <div className="TestimonialCardStars">
                    <span>{review.rating}</span>
                    <span>stars</span>
                  </div>
                </div>
              ))}
            </div>
            <AnimatePresence exitBeforeEnter initial={false}>
              <motion.div
                variants={fullTextParentVariant}
                initial="hidden"
                animate="visible"
                exit="hideBack"
                key={`TestimonialFullReview-${reviewIndex}`}
                className="TestimonialFullReview"
              >
                <div className="OverflowContainer">
                  <motion.h3
                    variants={fullTextChildVariant}
                    className="FullReviewTitle"
                  >
                    {reviews[reviewIndex].reviewTitle}
                  </motion.h3>
                </div>
                <div className="OverflowContainer">
                  <motion.span
                    variants={fullTextChildVariant}
                    className="FullReviewDate"
                  >
                    {reviews[reviewIndex].date}
                  </motion.span>
                </div>
                <div className="OverflowContainer">
                  <motion.p
                    variants={fullTextChildVariant}
                    className="FullReviewText"
                  >
                    {reviews[reviewIndex].reviewText}
                  </motion.p>
                </div>
                <ContainerQuote />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

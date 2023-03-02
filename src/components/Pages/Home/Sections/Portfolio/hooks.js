// import section from "./index";

const sections = [
  {
    id: 1,
    title: "Weddings",
    subTitle: "Photography & Video Production",
    text: "Planning a wedding is a special occasion and you want to ensure you're able to capture every moment. Let our professional videography services help you relive and share your special moments with others! Check our Wedding page to learn more.",
    link: "/weddings",
    btnTitle: "WEDDINGS",
    imgUrl: "../home-page-photo/wedding.jpg",
    alt: "weddings",
  },
  {
    id: 2,
    title: "Promo",
    subTitle: "Video Production",
    text: "With our unique ability to capture the life of your brand, our team works closely with you to perfectly capture the vision and emotion that you desire in your production.",
    link: "/promo",
    btnTitle: "PROMO",
    imgUrl: "../home-page-photo/events.jpg",
    alt: "promo",
  },
  {
    id: 3,
    title: "Fashion",
    subTitle: "Video Production",
    text: " Check our Fashion page to see how we create a unique experience that elevates brands and apparel above the competition.",
    link: "/fashion",
    btnTitle: "FASHION",
    imgUrl: "../home-page-photo/fashion.jpg",
    alt: "fashion",
  },
  {
    id: 4,
    title: "Music",
    subTitle: "Video Production",
    text: "Make your next performance visually captivating with our videography services! We are providing broad range of services from capturing live concerts to shooting professional music video clips for artists. Contact us today to get started!",
    link: "/music",
    btnTitle: "MUSIC",
    imgUrl: "../home-page-photo/music.jpg",
    alt: "music",
  },
];

export const useComponentLogic = () => {
  return { sections };
};

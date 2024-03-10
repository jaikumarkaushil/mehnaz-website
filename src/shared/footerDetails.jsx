import { SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import styled from "styled-components";
import React from "react";
import customTheme from "../theme.module.scss";
import NameLogo from "../components/NameLogo";

const customInstagramSVG = () => {
  return (
    <svg width="0" height="0">
      <radialGradient id="instagramSVG" r="150%" cx="30%" cy="107%">
        <stop stopColor="#fdf497" offset="0" />
        <stop stopColor="#fdf497" offset="0.05" />
        <stop stopColor="#fd5949" offset="0.45" />
        <stop stopColor="#d6249f" offset="0.6" />
        <stop stopColor="#285AEB" offset="0.9" />
      </radialGradient>
    </svg>
  );
};
const customEmptySVG = () => {
  return <React.Fragment></React.Fragment>;
};

const socialLinkedin = styled.a`
  color: ${customTheme.teal};
  font-size: 1.8em;
  background: ${customTheme.orange};
  padding: 0.25em;
  &:hover {
    background: #0a66c2;
    color: white;
  }
`;
const socialTwitter = styled.a`
  color: ${customTheme.teal};
  background: ${customTheme.orange};
  font-size: 1.8em;
  padding: 0.25em;
  &:hover {
    color: white;
    background: #1da1f2;
  }
`;

const socialInstagram = styled.a`
  color: ${customTheme.teal};
  background: ${customTheme.orange};
  font-size: 2em;
  &:hover {
    color: white;
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }
`;

const socialYoutube = styled.a`
  color: ${customTheme.teal};
  background: ${customTheme.orange};
  font-size: 2em;
  &:hover {
    color: white;
    background: #ff0000;
  }
`;

const footerDetails = {
  supportingText:
    "We would love to hear from you, it's the fastest way to connect! Do connect with me on ",
  EmailIcon: <MdEmail size={28} />,
  Email: "mehnaz.tabassum@nleats.com",
  PhoneIcon: <FaPhone size={24} />,
  Phone: "+1 (613)-546-7789",
  LogoImage: <NameLogo />,
  footerTabsMobile: [
    {
      id: 0,
      to: "/about",
      title: "About",
    },
    {
      id: 1,
      to: "/services/#career_consulting",
      title: "Career Consulting",
    },
    {
      id: 2,
      to: "/services/#public_speaking",
      title: "Public Speaking",
    },
    {
      id: 3,
      to: "/services/#digital_content_creation",
      title: "Digital Content Creation",
    },
    {
      id: 4,
      to: "/services/#project_management",
      title: "Project Management",
    },
    {
      id: 5,
      to: "/services/#decision_making",
      title: "Decision Making",
    },
    {
      id: 6,
      to: "/resources",
      title: "Resources",
    },
    {
      id: 7,
      to: "/#contact",
      title: "Contact Us",
    },
    {
      id: 8,
      to: "/blogs",
      title: "Blog",
    },
    {
      id: 9,
      to: "/podcasts",
      title: "Podcast",
    },
  ],
  footerTabs: [
    {
      id: 0,
      title: "Resources",
      to: "/#resources",
      justifyContent: "d-flex justify-content-start px-0",
      tabs: [
        {
          id: 0,
          to: "/resources#blogs",
          subTitle: "Blog",
        },
        {
          id: 1,
          to: "/resources#podcasts",
          subTitle: "Podcast",
        },
        {
          id: 2,
          to: "/about",
          subTitle: "About",
        },
        {
          id: 3,
          to: "/contact",
          subTitle: "Contact",
        },
      ],
    },
    {
      id: 1,
      title: "Services",
      to: "/#services",
      justifyContent: "d-flex justify-content-start px-0",
      tabs: [
        {
          id: 1,
          to: "/services/#career_consulting",
          subTitle: "Career Consulting",
        },
        {
          id: 2,
          to: "/services/#public_speaking",
          subTitle: "Public Speaking",
        },
        {
          id: 3,
          to: "/services/#digital_content_creation",
          subTitle: "Digital Content Creation",
        },
        {
          id: 4,
          to: "/services/#project_management",
          subTitle: "Project Management",
        },
        {
          id: 5,
          to: "/services/#decision_making",
          subTitle: "Decision Making",
        },
      ],
    },
  ],
  socialIcons: [
    {
      brandName: "linkedin",
      icon: <SiLinkedin />,
      iconComponent: socialLinkedin,
      customSVG: customEmptySVG(),
      url: "https://ca.linkedin.com/in/mehnaztabassumcareer",
    },
    {
      brandName: "twitterX",
      icon: <BsTwitterX />,
      iconComponent: socialTwitter,
      customSVG: customEmptySVG(),
      url: "https://twitter.com/SaathealthHQ",
    },
    {
      brandName: "instagram",
      icon: <SiInstagram />,
      iconComponent: socialInstagram,
      customSVG: customInstagramSVG(),
      url: "https://www.instagram.com/saathealthfamilyapp/",
    },
    {
      brandName: "youtube",
      icon: <SiYoutube />,
      iconComponent: socialYoutube,
      customSVG: customEmptySVG(),
      url: "https://www.youtube.com/channel/UCrAfuCRjcfubHdc5Ae4y99g",
    },
  ],
};

export default footerDetails;

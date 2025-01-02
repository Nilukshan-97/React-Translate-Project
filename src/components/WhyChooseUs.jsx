import React from 'react';
import '../styles/WhyChooseUs.css';
import aboutImage from "../assets/about.jpg";

import FeatureCard from './FeatureCard';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const WhyChooseUs = () => {
  const features = [
    {
      title: '24 Customer Services',
      description: 'Suspendisse morbi mauris gravida tellus integer egestas.',
      bgColor: '#e8f9fb',
      icon: ChatBubbleOutlineIcon,
    },
    {
      title: 'Guarantee',
      description: 'Suspendisse morbi mauris gravida tellus integer egestas.',
      bgColor: '#cfefff',
      icon: VerifiedIcon,
    },
    {
      title: 'Fast Delivery',
      description: 'Suspendisse morbi mauris gravida tellus integer egestas.',
      bgColor: '#f8f8fc',
      icon: LocalShippingIcon,
    },
    {
      title: 'Free Consultation',
      description: 'Suspendisse morbi mauris gravida tellus integer egestas.',
      bgColor: '#fff6d4',
      icon: PhoneInTalkIcon,
    },
  ];

  return (
    <div className="why-choose-us">
      <div className="section-header">
        <h4>Why Choose Us</h4>
        <p>Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.</p>
      </div>
      <div className="content">
        <div className="features">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
        <div className="image-section">
          <img src={aboutImage} alt="Team discussion" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
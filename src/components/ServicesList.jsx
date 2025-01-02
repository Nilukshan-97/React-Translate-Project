import React from 'react';
import ServiceCard from './ServiceCard';


import GTranslateIcon from '@mui/icons-material/GTranslate';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';

const services = [
  { title: "Translation Service", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: GTranslateIcon },
  { title: "Business Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: BusinessCenterIcon },
  { title: "Legal Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: GavelIcon },
  { title: "Medical Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: LocalHospitalIcon },
  { title: "Document Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: DescriptionIcon },
  { title: "Professional Translation", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", Icon: SchoolIcon },
];

const ServicesList = () => {
  return (
    <div className="services-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          Icon={service.Icon}
        />
      ))}
    </div>
  );
};

export default ServicesList;
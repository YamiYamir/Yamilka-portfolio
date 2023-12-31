import React from 'react';

import LayoutAnimationY from '../layout/LayoutAnimateY';
import TitleSection from '../titleSection/TitleSection';
import TestimonyCard from './TestimonyCard';

const TestimonyData = [
  {
    testimonyText:
      "I've worked with Yamilka on several projects over the last few years and she's one of the best people to share a group with. She's dedicated, responsible, and creative. Not only can you count on her to fulfill all the requirements of a project and deliver tasks on time, but she's always looking for ways to improve the quality of the work she delivers.",
    person: 'Onelky Hernandez, Full Stack Developer',
    image: '/assets/images/onelky.jpg',
  },
  {
    testimonyText:
      'Yamilka is a very trustworthy colleague and team member, you can always expect her to be up to the challenge and do an excellent job. She also has a great critic eye when looking for things to improve.',
    person: 'Luis Gerardo Morillo, Full Stack Developer',
    image: '/assets/images/luima.png',
  },
  {
    testimonyText:
      "Yamilka is an extraordinary person and professional. It's not often that one comes across a person with that level of intelligence, proactivity, and hard work. His maturity, programming knowledge, and ability to work in a team go beyond his age. I am pleased and proud to have her as a member of our team.",
    person: 'Milka Santana, Founder & Advisor',
    image: '/assets/images/milka.jpg',
  },
];

const TestimonySlider = () => {
  return (
    <div
      id="testimonials"
      className=" flex min-h-[100vh] flex-col justify-center  "
    >
      <TitleSection title="Testimonials" />
      <div className="flex flex-wrap justify-center gap-8">
        {TestimonyData.map((data, index) => (
          <LayoutAnimationY key={index} delay={0.2 * index}>
            <TestimonyCard data={data} />
          </LayoutAnimationY>
        ))}
      </div>
    </div>
  );
};

export default TestimonySlider;

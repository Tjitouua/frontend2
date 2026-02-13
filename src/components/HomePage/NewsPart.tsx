import type React from "react";
import FlexTopPart from "../../ui/FlexTopPart";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";


import Button from "../../ui/Button";


const announcements = [
  {
    id: 1,
    title: "FNB Namibia launches digital group savings account",
    description: "First National Bank (FNB) launches a new weSave digital account to enable collective and group saving among customers in Namibia.",
    image: '/images/news/news.jpg',
  },
  {
    id: 2,
    title: "Namibia celebrates 36 years of its Constitution",
    description: "The National Assembly of Namibia marks the 36th anniversary of the adoption of the Constitution, highlighting democratic milestones achieved since independence.",
    image: '/images/news/news2.jpg',
  },
  {
    id: 3,
    title: "Namibia urged to strengthen resource deal negotiations",
    description: "Lawmakers push the government to negotiate stronger value‑driven energy and mineral partnerships with international partners.",
    image: '/images/news/news3.jpg',
  },
  {
    id: 4,
    title: "Netherlands defeat Namibia at T20 World Cup",
    description: "Bas de Leede stars as Netherlands beat Namibia by seven wickets in their T20 World Cup 2026 match at the Arun Jaitley Stadium in Delhi.",
    image: '/images/news/news4.jpg',
  },
  {
    id: 5,
    title: "Young Namibians turning business ideas into impact",
    description: "Across cities and rural communities, Namibia’s youth are showing creativity and ambition in launching innovative business ideas.",
    image: '/images/business.jpg',
  },
  {
    id: 6,
    title: "Roger Suren and Anri Greeff crowned national cycling champs",
    description: "Namibian cyclists Roger Suren and Anri Greeff win titles at the Nedbank National Road Championships outside Windhoek.",
    image: '/images/news/news5.jpg',
  }
];




const NewsPart:React.FC = () => {
     return (
        <FlexTopPart className="bg-[var(--color-secondary-border)]/50">
            <div className="w-full mb-10 flex items-center justify-between">
            <label className="font-bold text-2xl text-black">Latest News</label>
            <Button className="flex items-center border
             !border-[var(--color-secondary-border)] gap-3 bg-[var(--color-secondary-card)]
              !text-black rounded-md hover:text-white
              ">View All <IoMdArrowForward /></Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {announcements.map((item, index) => (
                      <div
                        key={index}
                        className="group flex flex-col bg-white rounded-lg border border-[var(--color-secondary-border)] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:-translate-y-1"
                      >
                        {/* Announcement Image */}
                        <div className="h-48 w-full overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-[17px] font-bold text-text-heading mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-text-DEFAULT text-[14px] mb-6 line-clamp-3 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="mt-auto">
                            <Link
                              to={`/announcements/${item.id}`}
                              className="inline-flex items-center text-primary font-semibold text-sm hover:underline group/link"
                            >
                              Read more
                              <IoChevronForward
                                size={16}
                                className="ml-1 transition-transform group-hover/link:translate-x-1"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>


        </FlexTopPart>
     )
}

export default NewsPart;
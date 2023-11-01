import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/service.json')
    .then(res => res.json())
    .then(data => setServices(data));
  },[])

    return (
      <div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
          <h4 className="text-5xl font-bold">Our Service Area</h4>
          <p className="my-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center">
          <button className="btn bg-white text-[#FF3811] border-[#FF3811] my-5 text-center">
            More Services
          </button>
        </div>
      </div>
    );
};

export default Services;
import frame from '../../../assets/frame.svg'
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { service_id, title, img, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl border rounded-lg">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-[300px] h-52" />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold ml-4">{title}</h2>
        <div className="flex justify-between ml-4">
          <p className="text-xl font-semibold text-[#FF3811]">
            Price: ${price}
          </p>
          <Link to={`/checkout/${service_id}`}>
            <img src={frame} className="text-xl font-semibold text-[#FF3811]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

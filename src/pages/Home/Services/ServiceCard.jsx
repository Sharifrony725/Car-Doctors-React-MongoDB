import frame from '../../../assets/frame.svg'

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
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
          <img src={frame} className="text-xl font-semibold text-[#FF3811]" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

const Card = ({data}) => {

    const {key, value, imgUrl} = data;

    return (

        <div className=" my-18 px-14 w-full md:w-1/2 lg:my-12 lg:px-14 lg:w-1/3">
            <article className="bg-primary rounded-lg py-32 px-22 custom-shadow">
                <h6 className="flex items-center gap-3 text-xl text-secondary font-bold mb-24"> <img className={`${imgUrl === 'icon-3' ? 'w-28' : 'w-21'}`} src={`assets/cards/${imgUrl}.svg`} alt="" /> {key} </h6>
                <hr className="border-border w-3/6 my-18 mx-auto" />
                <h6 className="text-xl text-gray-100 text-center"> {value} </h6>
            </article>
        </div>

    )
}

export default Card;

const Sidebar = () => {
    const Navigation = [{ placeholder: 'Connect Wallet', path: '/', imgUrl: '1' }, { placeholder: 'Claim', path: '/', imgUrl: '2' }, { placeholder: 'Liquidity Lock', path: '/', imgUrl: '3' }, { placeholder: 'Buy', path: '/', imgUrl: '4' }, { placeholder: 'Dextools', path: '/', imgUrl: '5' }, { placeholder: 'Website', path: '/', imgUrl: '6' }]

    return (
        <>
            <div className="w-full bg-sidebar 2xl:bg-primary rounded-tr-20 rounded-br-20">
                <ul className="px-26 md:px-32 pt-42 pb-34">
                    <li className='mb-22 hidden md:block'>
                        <span className='text-xl font-bold text-gray-200 flex items-center gap-3'>
                            <img className="w-44" src="/assets/meta-warrior.svg" alt="" />
                            DASHBOARD
                        </span>
                    </li>
                    <hr className='w-2/3 hidden md:block mx-auto border-border mb-46' />

                    {
                        Navigation?.map(item => (
                            <li key={Math.random()} className='py-16 group'>
                                <span className={`text-md md:text-xl flex group-hover:text-gray-300 items-center gap-3 cursor-pointer font-semibold transition-all text-gray-200`}>
                                    <img className="w-20" src={`assets/sidebar/${item?.imgUrl}.svg`} alt="" />   {item?.placeholder}
                                </span>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </>
    )
}

export default Sidebar
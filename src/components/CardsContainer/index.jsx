import Card from './Card'

const CardsContainer = () => {

    const CardData = [{ key: 'TOKEN PRICE ($)', value: '~0.0000258', imgUrl: 'icon-1' }, { key: 'MARKET CAP ($)', value: '~128,769.88', imgUrl: 'icon-2' }, { key: 'TOTAL DIVIDEND DISTRIBUTED ($)', value: '~26,403.88', imgUrl: 'icon-3' },]

    return (
        <>
            <div className='flex flex-wrap -mx-1 lg:-mx-4'>
                {
                    CardData?.map(data => (
                        <Card data={data} />
                    ))
                }
            </div>

            <hr className='w-2/3 block mx-auto border-border mt-46' />
        </>

    )
}

export default CardsContainer;
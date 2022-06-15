import Table from './Table'

const TableContainer = ({ title }) => {

    const Atheletes = ["LeBron James", "Roger Federer", "Kevin Durant", "Tiger Woods", "Rafael Nadal", "Kobe Bryant", "Gareth Bale", "Usain Bolt", "Rory McIlroy"]

    return (
        <section className="container mx-auto px-24 lg:px-99 pt-99">
           
           <main className='w-full bg-primary rounded-20 px-26 md:px-32 pb-42'>
            <section className='py-32'>
              <h2 className='text-white text-18 md:text-24 font-bold'>{title}</h2> 
            </section>
                <Table />
           </main>

        </section>
    )
}

export default TableContainer;

const TableContainer = ({ children }) => {

    const table_data = [
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
        { hash: '0x1e18...2C75EB', block: '18357374', from: '0x1e18...2C75EB', to: '0x1e18...2C75EB', payout: '0.000169 ETH' },
    ]

    return (
        <section className="overflow-x-auto">
            <table style={{ minWidth: '800px' }}>
                {
                    table_data?.map(data => (
                        <tr>
                            <td>{data?.hash}</td>
                            <td>
                                <div className="bg-cell py-2 px-14 rounded-full inline-block">
                                    {data?.block}
                                </div>
                            </td>
                            <td>{data?.from}</td>
                            <td>{data?.to}</td>
                            <td>
                                <div className="bg-cell py-2 px-14 rounded-full inline-block whitespace-nowrap">
                                    {data?.payout}
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </section>

    )
}

export default TableContainer;
import React from 'react'
import './pricelist.css'
import { PriceListItems } from './../PriceListItems'

function PriceList() {
  return (
      <div className='section-wrap'>
      <section>
        <h2>Cennik</h2>

        <table className='table-pricelist'>
          <thead>
            <tr>
              <th>Rasa</th>
              <th>Wwyczesywanie</th>
              <th>Kąpiel z suszeniem</th>
              <th>Trymowanie</th>
              <th>Cena kompleksowa</th>
            </tr>
          </thead>
          <tbody>
            {
              PriceListItems.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.rasa}</td>
                    <td>{item.wyczesywanie}</td>
                    <td>{item.kapiel}</td>
                    <td>{item.trymowanie}</td>
                    <td>{item.full}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default PriceList
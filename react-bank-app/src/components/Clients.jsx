import React from 'react'
import styles from '../style'
import { clients } from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map((client) =>(
            <div key={client.id} className={`flex-1 ${styles.flexCenter} max-[640px]:min-w-[192px] min-w-[120px] m-5`}>
              <img src={client.logo} alt="client_logo" className="max-[640px]:w-[192px] w-[100px] object-contain" />
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Clients

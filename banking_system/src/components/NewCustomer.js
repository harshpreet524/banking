import React from 'react'
import styles from "./new-customer.css"

function NewCustomer() {
  return (
    <>
        <div className={styles.custCont}>
            <h1> Create New Customer </h1>
            <form>
                <input type='number' placeholder='Account Id' name='acId'/>
                <input type='text' placeholder='Account Name' name='acNm'/>
                <input type='number' placeholder='Balance' name='balance'/>
                <input type='submit' value='Create' />
            </form>
        </div>
    
    </>
  )
}

export default NewCustomer
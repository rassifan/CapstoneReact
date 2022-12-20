import React from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {useContex} from "react"
import {Context} from "./Context"

function Photos() {
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
    const {allPhotos} = useContext(Context)
    const List = allPhotos.map((item, index) => (
        <Image key = {item.id} img ={item} className = { getClass(item[index])}/>
    ))
    return (
        <main className="photos">
            {List}
        </main>
    )
}

export default Photos
import React from 'react'
import axios from 'axios'


const instance1=axios.create({
    baseURL:"https://fakestoreapi.com/"
})


export default instance1;

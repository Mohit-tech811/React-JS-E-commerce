import React from 'react'
import config from '../config'
import configs from '../configs';

export const onRegister = async (data) => {
  try {
    let data1 = await fetch('/api/Authentication/Register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return data1;
  } catch (error) {
  }
}

export const onLogin = async (data) => {
  try {
    // console.log(`/Authentication/Login`)
    let data2 = await fetch('/api/Authentication/Login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    return data2;
  } catch (error) {
    console.log(error)
  }
}

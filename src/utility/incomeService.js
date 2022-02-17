import * as tokenService from '../utility/tokens.js'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/incomes`

export const createIncome = async (income) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(income)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getIncomeById = async (incomeId) => {
  try {
    const res = await fetch(`${BASE_URL}${incomeId}`,
    {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
    }})
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getAllIncomes = async () => {
  try {
    const res = await fetch(`${BASE_URL}`,
    {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
    }})
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const updateIncome = async (incomeId, income) => {
  try {
    const res = await fetch(`${BASE_URL}/${incomeId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(income)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteIncome = async (incomeId) => {
  try {
    await fetch(`${BASE_URL}${incomeId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}
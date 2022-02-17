import * as tokenService from '../utility/tokens.js'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/expenses/`

export const createExpense = async (expense) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(expense)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getExpenseById = async (expenseId) => {
  try {
    const res = await fetch(`${BASE_URL}${expenseId}`,
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

export const getAllExpenses = async () => {
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

export const updateExpense = async (expenseId, expense) => {
  try {
    const res = await fetch(`${BASE_URL}${expenseId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(expense)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteExpense = async (expenseId) => {
  try {
    await fetch(`${BASE_URL}${expenseId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

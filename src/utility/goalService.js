import * as tokenService from '../utility/tokens.js'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/goals/`

export const createGoal = async (goal) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(goal)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const getGoalById = async (goalId) => {
  try {
    const res = await fetch(`${BASE_URL}${goalId}`,
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

export const getAllGoals = async () => {
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

export const updateGoal = async (goalId, goal) => {
  try {
    const res = await fetch(`${BASE_URL}${goalId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(goal)
    })
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export const deleteGoal = async (goalId) => {
  try {
    await fetch(`${BASE_URL}${goalId}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    })
  } catch (error) {
    throw error
  }
}

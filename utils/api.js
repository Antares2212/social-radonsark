// Базовый URL сервера
export const BASE_URL = 'http://192.168.0.18:8000'

// Функция обработки ответа сервера
const handleResponse = async (response) => {
  let errorMessage = 'Ошибка при выполнении запроса'

  if (response.ok) {
    return await response.json()
  }

  try {
    const errorData = await response.json()
    errorMessage = errorData.message || errorMessage
  } catch (error) {
    console.error(error)
  }

  throw new Error(errorMessage)
}

// Функция обработки запросов к API
export const request = async (url, type, data = {}, onLoading = function(){}) => {
  onLoading && onLoading(true)
  const token = localStorage.getItem('Token') 
  const header = type == ('GET' || 'DELETE') ? {
    method: type,
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    
  } : {
    method: type,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
  }

  try {
    const response = await fetch(`${BASE_URL}${url}`, header)
    return handleResponse(response)
  } catch (error) {
    console.error(error)
    throw error
  } finally {
    onLoading(false)
  }
}

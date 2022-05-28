const BASE_URL = `${process.env.API_URL}/customers`

export const getCustomers = async (itemsPerPage: number) => {
  const response = await fetch(`${BASE_URL}/getAll?itemsPerPage=${itemsPerPage}`)
  return response.json()
}

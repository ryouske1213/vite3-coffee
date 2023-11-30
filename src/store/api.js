import axios from 'axios'

const isCoffeeData = async () => {
    const { data } = await axios.get('http://localhost:8080/api/coffeeData/Inquire')
    return data
}

export default isCoffeeData
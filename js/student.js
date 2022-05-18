const url = 'https://testeleonid.herokuapp.com/alunos'

const getStudents = async () => {
    const response = await fetch(url)
    const data = await response.json()

    // console.log(data)

    return data
}

export {
    getStudents
}
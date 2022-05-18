'use strict'

import { getStudents } from "./student.js";

const loadStudents = () => {
    const container = document.getElementById('container')
    // const students = await getStudents()

    // console.log('app: ', students)

    let cards = getStudents()
                    .then(data => data)
                    .then(data => {
                        data.map(s => {
                            const card = document.createElement('card-aluno')
                            card.setAttribute('data-name', s.nome)

                            container.appendChild(card)
                        })
                    })




}

loadStudents()

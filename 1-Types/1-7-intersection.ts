{
    // Intersection Types : &
    type Student = {
        name: string
        score: number
    }
    type Worker = {
        employeeId: number
        work: () => void
    }

    function internWork(person: Student & Worker) {
        console.log(person.name)
        console.log(person.score)
        console.log(person.work())
    }

    internWork({
        name: 'soo',
        score: 12,
        employeeId: 1,
        work: () => {
        }
    })
}
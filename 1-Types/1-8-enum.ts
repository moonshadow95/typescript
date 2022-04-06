{
    // Enum

    // JavaScript
    const MAX_NUM = 6
    const MAX_STUDENTS_PER_CLASS = 10
    const MONDAY = 0
    const TUESDAY = 1
    const WEDNESDAY = 2
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2}) // freeze -> 수정 불가
    const dayOfToday = DAYS_ENUM.MONDAY // 0

    // TypeScript
    enum DAYS {
        Monday, Tuesday, Wednesday
        // Monday = 'Monday', Tuesday = 'Tuesday'
    }

    console.log(DAYS.Monday)
    console.log(DAYS.Tuesday)
    let day = DAYS.Monday // day = 0
    day = 10 // day = 10 -> 변경이 가능하다. 타입 보장 X 💩💩

    type DaysOfWeek = 'Monday' | 'TuesDay' | 'Wednesday'
    let dayOfWeek: DaysOfWeek = 'Monday'
    dayOfWeek = 'Wednesday' // union type 안의 값으로만 변경 가능하다. 타입 보장 O ✨✨
}
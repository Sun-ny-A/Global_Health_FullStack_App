export type User = {
    readonly id?: string
    username: string
    password: string
    email: string
    first_name?: string
    last_name?: string
}

export type LoggedUser= {
    token: string
    username: string
}

// export type LoggedUserId= {
//     readonly id: string
//     token: string
// }

export type Doctor = {
    readonly id?: string
    doctor_name: string
    specialization: string
    email: string
    phone_number: string
    accepting_patients: string
    profile_bio: string
}

export type Question = {
    id: number
    username: string
    timestamp: Date
    user_id: number
    forum_question: string
}

export type Answer = {
id: number
timestamp: Date
user_id: number
forum_answer: string
}





// export interface NpiData {
//     number: string
//     authorized_official_first_name: string
//     authorized_official_last_name: string
// }
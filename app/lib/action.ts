"use server"

import { z } from 'zod'
import { v4 } from 'uuid'
import { Redirect } from 'next'
import { useUserContext } from '../providers/UserProvider'

// const { setData } = useUserContext()
const FormSchema = z.object({
    id: z.string(),
    task: 
        z.string({
            required_error: "Task is required.",
        })
        .min(3, { message: "Minimum of 3 characters of required." }),
    finish: z.string({
        required_error: "Estimated Time is required."
    }),
    importance: z.enum(["Ongoing", "Critical", "Complete"], {
        required_error: "Please select the status of this task."
    })
})


type State = {
    errors?: {
        // id?: string[];
        task: string[];
        importance: string[]
        finish: string[]
    } 
    message?: string | null;
}


export const createTodo = (currentState: State, formData: FormData) => {
    console.log("CREATE")
    const newId = v4()
    const validateField = FormSchema.safeParse({
        id: newId,
        task: formData.get("task"),
        importance: formData.get("importance"),
        finish: formData.get("finish"),

    })
    console.log(validateField)

    if (!validateField.success) {
        return {
            errors: validateField.error.flatten().fieldErrors,
            message: "Errors in somne Fields. Failed to Create Task."
        }
    }

    console.log(newId)
    console.log(validateField.data)


}

export const editTodo = () => {
    console.log("EDIT")
}
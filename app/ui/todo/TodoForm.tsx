"use client"


import Link from 'next/link';
import { useFormState } from 'react-dom';
import { createTodo, editTodo } from "../../lib/action"
import { useForm, SubmitHandler } from "react-hook-form"
import { v4 } from 'uuid'
import { useUserContext } from '@/app/providers/UserProvider';
import { Todo } from '@/app/lib/definitions';

import { useRouter } from 'next/navigation';


type Inputs = {
    task: string;
    finish: string;
    importance: 'Ongoing' | 'Critical' | 'Complete';
}

const TodoForm = ({todo}: {todo?: Todo | null}) => {   
    const { setData, data } = useUserContext();
    const router = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
          task: todo?.task ?? '',
          finish: todo?.finish ?? '',
          importance: todo?.importance ?? 'Ongoing',
        },
    });
    
    const onSubmit: SubmitHandler<Inputs> = (addTask) => {
        const newId = v4();
        const newTask = { id: newId, ...addTask };
      
        // Remove the todo from data if it exists
        const filteredOutData = data?.filter((item) => item.id !== todo?.id);
      
        // Combine the filtered data with the new task
        const newTodos = filteredOutData ? [...filteredOutData, newTask] : [newTask];
      
        // Update state and localStorage
        setData(newTodos);
        window.localStorage.setItem('LocalStorageData', JSON.stringify(newTodos));
      
        // Redirect to the home page
        router.push('/');
      };

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='task'>
                        Task Info: 
                    </label>
                    <input
                        id="task"
                        className="text-black"
                        {...register('task', { required: 'Task is required' })}
                    />
                </div>
                {errors.task && <span>{errors.task.message}</span>}
                <div>
                    <label htmlFor="finish">Expected Finish Time:</label>
                    <input
                        id="finish"
                        className="text-black"
                        // name="finish"
                        type="time"
                        {...register('finish', { required: 'Finish time is required' })}
                    />
                    {errors.finish && <span>{errors.finish.message}</span>}
                </div>
                <fieldset>
                <legend>Set the Importance of this task:</legend>
                {['Ongoing', 'Critical', 'Complete'].map(importance => (
                    <div key={importance}>
                    <input
                        id={importance}
                        // name="importance"
                        type="radio"
                        value={importance}
                        {...register('importance')}
                    />
                    <label htmlFor={importance}>{importance}</label>
                    </div>
                ))}
                </fieldset>
                <div>
                    <Link href="/">Cancel</Link>
                    {todo ? 
                    <button type="submit">
                        Edit Task
                    </button> :
                    <button type="submit">
                        Add New Task
                    </button>
                    }
                </div>

            </form>
        </div>
    );
};

export default TodoForm;
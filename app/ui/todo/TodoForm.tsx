import React from 'react';
import type { Todo } from '@/app/lib/definitions';
import Link from 'next/link';

const TodoForm = ({todo = null}: {todo: Todo | null}) => {
    return (
        <div className="flex justify-center items-center">
            <form>
                <div>
                    <label>
                        Task Info: 
                    </label>
                    <input
                        defaultValue={todo?.task ?? ""}
                        name="taskInfo"
                        id="taskInfo"
                        className="text-black"
                        // type="string"
                    />
                </div>
                <div>
                    <label>
                        Expected Finish Time: 
                    </label>
                    <input
                        defaultValue={todo?.finish ?? ""}
                        className="text-black"
                    />
                </div>
                <fieldset>
                    <legend>Set the Importance of this task:</legend>
                    <div>
                        <input
                            id="ongoing"
                            name="importance"
                            type="radio"
                            value="ongoing"
                            defaultChecked={todo?.importance === 'Ongoing'}
                            // className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                        />
                        <label>
                            Ongoing
                        </label>
                    </div>
                    <div>
                        <input
                            id="critical"
                            name="importance"
                            type="radio"
                            value="critical"
                            defaultChecked={todo?.importance === 'Critical'}
                            // className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                        />
                        <label>
                            Critical
                        </label>
                    </div>
                    <div>
                        <input
                            id="complete"
                            name="importance"
                            type="radio"
                            value="complete"
                            defaultChecked={todo?.importance === 'Complete'}
                            // className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                        />
                        <label>
                            Complete
                        </label>
                    </div>
                </fieldset>
                <div>
                    <Link href="/">Cancel</Link>
                    <button type="submit">
                        Finalize Task
                    </button>
                </div>

            </form>
        </div>
    );
};

export default TodoForm;
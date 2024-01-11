import Link from "next/link";
import pencilIcon from "../../icons/pencil-f.svg"
import Image from "next/image";

const UpdateTodo = ({id}: {id: number}) => {
    return (
        <Link
            href={`/${id}/edit`}
        >
            <Image src={pencilIcon} alt="pencil-icon"/> 
        </Link>
    );
};

export default UpdateTodo;
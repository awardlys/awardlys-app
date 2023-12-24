type Props = {
    form: string;
    closeModal: () => void;
}

export const Modal = ({form, closeModal}: Props) => {
    return (
        <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
            <form>
                
            </form>
        </div>  
    )
}
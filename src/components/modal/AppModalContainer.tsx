import { Dialog } from "@material-ui/core";
import React, { useEffect } from "react";
import useCurrentModal from "../../store/useCurrentModal";
import useModalStore from "../../store/useModalStore";
import CreateGroup from "./CreateGroup";
import { TransitionProps } from '@material-ui/core/transitions';
import Slide from "@material-ui/core/Slide";
import MODAL_REGISTRY from "./ModalRegistry";
import EditGroup from "./EditGroup";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AppModalContainer: React.FC = ({ children }) => {
    const { modals, currentModal, setCurrentModal, addModal } = useModalStore();

    useEffect(() => {
        addModal("CREATE_GROUP", <CreateGroup />);
        addModal("EDIT_GROUP", <EditGroup />)
    }, []);

    const handleClose = () => {
        setCurrentModal(null);
    }

    return (
        <>
            {children}
            {Array.from(modals).map((value => {
                return (
                    <Dialog fullScreen open={value[0] === currentModal} onClose={handleClose} TransitionComponent={Transition}>
                        {value[1]}
                    </Dialog>
                )
            }))}
        </>
    )
}

export default AppModalContainer;
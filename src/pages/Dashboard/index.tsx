import { useState } from 'react';
import { Header } from "../../components/Header";
import { ActivyTable } from '../../components/ActivyTable';
import { Summary } from '../../components/Summary';
import {NewActivyModal} from '../../components/NewActivyModal';
import {NewCourseUnitModal} from '../../components/NewCourseUnitModal';

import {Container} from './styles'

export function Dashboard() {

    const [isNewActivyModalOpen, setIsNewActivyModalOpen] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false)


    function handleOpenActivyModal(){
        setIsNewActivyModalOpen(true);
    }

    function handleCloseActivyModal(){
        setIsNewActivyModalOpen(false);
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true);
    }

    function handleCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false);
    }


    return (
        <>
            <Header 
                onOpenNewActivyModal={handleOpenActivyModal} 
                onOpenNewCourseUnitModal={handleOpenCourseUnitModal}
            />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>
            <NewActivyModal 
                isOpen={isNewActivyModalOpen}
                onRequestClose={handleCloseActivyModal}
            />
            <NewCourseUnitModal 
                isOpen={isNewCourseUnitModalOpen}
                onRequestClose={handleCloseCourseUnitModal}
            />
        </>
    )
}

/*import { useState } from "react";
import { ActivyTable } from "../../components/ActivyTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Container } from "./styles";
import {NewActivyModal} from '../../components/NewActivyModal'
import { NewCourseUnitModal} from "../../components/NewCourseUnitModal";



export function Dashboard(){

    const [isNewActivyModalOpen, setIsNewActivyModalOpen] = useState(false)
    const [isNewCourseUnitModalOpen, setIsNewCourseUnitModalOpen] = useState(false)

    function handleOpenActivyModal(){
        setIsNewActivyModalOpen(true);
    }

    function handleOpenCourseUnitModal(){
        setIsNewCourseUnitModalOpen(true);
    }

    function handleCloseActivyModal(){
        setIsNewActivyModalOpen(false);
    }

    function handleCloseCloseCourseUnitModal(){
        setIsNewCourseUnitModalOpen(false);
    }

    return(
        <>
            <Header 
                onOpenNewActivyModal={handleOpenActivyModal}
                onOpenNewCourseUnitModal={handleOpenCourseUnitModal}

            />
            <Container>
                <Summary />
                <ActivyTable />
            </Container>
            <NewActivyModal
                isOpen={false}
                onRequestClose={handleCloseActivyModal}
            />
            <NewCourseUnitModal
                isOpen={false}
                onRequestClose={handleCloseCloseCourseUnitModal}
            />
        </>
    )
}*/
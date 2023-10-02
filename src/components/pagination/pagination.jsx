import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

function PageNum({ setPage, numofPages }) {

    //using navigator to change the params
    const navigate = useNavigate();

    //handling page changes
    const handlePageChange = (event,page) => {
        setPage(page);
        navigate(`/page/${page}`);
        window.scroll(0, 0);
    };

    return (
        <div>
            <Stack spacing={2}>
                <Pagination
                    onChange={handlePageChange}
                    count={numofPages} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    );
}

export default PageNum;
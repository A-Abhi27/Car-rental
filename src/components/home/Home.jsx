import React, { useEffect, useState } from 'react';
import { KeyboardArrowDown, Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import Cards from '../cards/cards';
import './home.css'
import PageNum from '../pagination/pagination';

function Home() {

    //fetching data from a local JSON file
    const fetchJson = () => {
        fetch('./cardata.json')
            .then(response => {
                return response.json();
            }).then(data => {
                setData(data);
                setFilteredData(data);
            }).catch((e) => console.log(e));
    }

    //managing the state variables
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
        filterData(event.target.value);
    };

    //Keeping track of the pages to show indexed data
    const endindex = page * 6;
    const startIndex = endindex - 6;

    //filter data to show relevant results
    const filterData = (search) => {
        const filteredData = data.filter((item) =>
            item.title.toLowerCase().includes(search)
        );
        setFilteredData(filteredData);
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchJson();
    }, [page, search]);

    return (
        <div>
            <div className='header'>
                <div className='header-items'>
                    <TextField
                        variant='outlined'
                        size='small'
                        value={search}
                        onChange={handleInputChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Search fontSize='small' />
                                </InputAdornment>
                            ),
                            style: {
                                width: "400px",
                                margin: "0 1vw",
                                borderRadius: "15px"
                            },
                        }}
                        placeholder='Search'
                        margin='none'
                    />
                    <div className='header-items'>
                        {'Relevance'}
                        <KeyboardArrowDown />
                    </div>
                    <div className='header-items'>
                        {'All brands'}
                        <KeyboardArrowDown />
                    </div>
                </div>
            </div>
            {/* Rendering data based on the results */}
            <div className='cars'>
                {filteredData.slice(startIndex, endindex) &&
                    filteredData.slice(startIndex, endindex).map((c) => (
                        <Cards
                            key={c.title}
                            poster={c.image}
                            title={c.title}
                            date={c.start_production}
                            carclass={c.class}
                        />
                    ))}
                {/* Change pages and navigate to /page/:page */}
                <div className='pagination'>
                    <div><span>Page {page} of 10</span></div>
                    <PageNum setPage={setPage} numofPages={10} />
                </div>
            </div>
        </div>

    );
}

export default Home;
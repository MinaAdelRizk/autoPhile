import React, { Component } from 'react';

import SearchBox from './searchBox';
import PartsGrid from './partsGrid';
import { paginate } from '../utils/paginate'
import Pagination from './common/pagination'
import VListGroup from './common/vListGroup';

import { getParts, getPartsCat } from './../services/fakePartsService';

// import CarSelectMenu from './carSelectMenu'


class SpareParts extends Component {
    state = {
        parts: [],
        cat: [],
        searchQuery: "",
        selectedCat: "All",
        currentPage: 1,
        pageSize: 8,
        selectedCar: "" // undefined but defined in carSelectMenu
    };
    componentDidMount() {
        const parts = getParts();
        const cat = ["All", ...getPartsCat()]
        this.setState({ cat, parts })
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedCat: "", currentPage: 1 });
    }

    handleCatSelect = cat => {
        this.setState({ selectedCat: cat, searchQuery: "", currentPage: 1 });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page })
    };

    handleLike = part => {
        const parts = [...this.state.parts];
        const index = parts.indexOf(part);
        parts[index] = { ...parts[index] };
        parts[index].liked = !parts[index].liked;
        this.setState({ parts });
    };

    getPageData = () => {
        const { parts: allParts, searchQuery, selectedCat, currentPage, pageSize } = this.state;

        let data = allParts;

        data = (searchQuery !== "") ? data.filter(p => p.title.toLowerCase().startsWith(searchQuery.toLowerCase())) : data;

        data = (selectedCat && selectedCat !== "All") ? data.filter(p => p.cat === selectedCat) : data;

        data = paginate(data, currentPage, pageSize);

        return { count: allParts.length, data };


    }

    render() {

        const { count, data } = this.getPageData();
        const { cat, selectedCat, searchQuery, pageSize, currentPage } = this.state;

        return (
            <div className="row">
                <div className="col-2 sideBar">
                    <VListGroup
                        items={cat}
                        selectedItem={selectedCat}
                        onItemSelect={this.handleCatSelect}
                    />
                </div>

                <div className="col-10 my-1">

                    <SearchBox
                        value={searchQuery}
                        onChange={this.handleSearch}
                    />

                    <PartsGrid
                        items={data}
                        onLike={this.handleLike}
                    />

                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={this.handlePageChange}
                        currentPage={currentPage}
                    />
                </div>

            </div >
        );
    }
}

export default SpareParts;
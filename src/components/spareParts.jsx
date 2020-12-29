import React, { Component } from 'react';

import SearchBox from './searchBox';
import ListGroup from "./common/listGroup";
import PartsGrid from './partsGrid';
import { paginate } from '../utils/paginate'
import Pagination from './common/pagination'

import { getCategories } from '../services/fakePartsCategoryService'
import { getParts } from './../services/fakePartsService';

class SpareParts extends Component {
    state = {
        parts: [],
        categories: [],
        searchQuery: "",
        selectedCategory: null,
        currentPage: 1,
        pageSize: 6,
        currency: "AED",
    };

    componentDidMount() {
        const parts = getParts();
        const categories = [{ name: "All Products", _id: "" }, ...getCategories()]
        this.setState({ categories, parts })
    };

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedCategory: null, currentPage: 1 });
    }

    handleCategorySelect = category => {
        this.setState({ selectedCategory: category, searchQuery: "", currentPage: 1 });
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
        const { parts: allParts, searchQuery, selectedCategory, currentPage, pageSize } = this.state;

        let data = allParts;

        if (searchQuery !== "") {
            data = allParts.filter(p => p.title.toLowerCase().startsWith(searchQuery.toLowerCase()));

        }
        else if (selectedCategory && selectedCategory._id)
            data = allParts.filter(p => p.category._id === selectedCategory._id);

        const paginatedData = paginate(data, currentPage, pageSize);

        return { count: data.length, data: paginatedData };


    }

    render() {
        const { count, data } = this.getPageData();
        const { searchQuery, pageSize, currentPage, currency } = this.state;
        return (
            <div className="row">
                <div className="col-2">
                    <SearchBox
                        value={searchQuery}
                        onChange={this.handleSearch}
                    />

                    <ListGroup
                        items={this.state.categories}
                        selectedItem={this.state.selectedCategory}
                        onItemSelect={this.handleCategorySelect}
                    />
                </div>

                <div className="col-10">
                    <div style={{ marginBottom: 20 }}>
                        <PartsGrid
                            parts={data}
                            onLike={this.handleLike}
                            currency={currency}
                        />
                    </div>

                    <div className="row" style={{ marginTop: `2%` }}>
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>

            </div >
        );
    }
}

export default SpareParts;
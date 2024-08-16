import React, { useEffect, useState } from 'react';
import Select from "react-select";

type Data_Set = {
    data: any[];
    setSortData: React.Dispatch<React.SetStateAction<any[]>>;
};

const SortUsers = ({ data, setSortData }: Data_Set) => {
    const [sortFieldOption, setSortFieldOption] = useState<string | null>(null);
    const [sortDirectionOption, setSortDirectionOption] = useState<string | null>(null);

    interface SortFieldType {
        label: string;
        value: string;
    }

    interface SortDirectionType {
        label: string;
        value: string;
    }

    const SortField: SortFieldType[] = [
        { value: "name", label: "Name" },
        { value: "company", label: "Company" },
        { value: "email", label: "Email" }
    ];

    const SortDirection: SortDirectionType[] = [
        { value: "asc", label: "Ascending" },
        { value: "dsc", label: "Descending" }
    ];

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            width: "150px",
            borderRadius: "8px",
            boxShadow: "none",
            textAlign: "center"
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isSelected ? "black" : "gray",
            backgroundColor: state.isSelected ? "lightgray" : "white"
        })
    };

    const handleChangeSortField = (selectedOption: any) => {
        try {
            setSortFieldOption(selectedOption?.value);
        } catch (error) {
            //Ignore Error
        }

    };

    const handleChangeSortDirection = (selectedOption: any) => {

        try {
            setSortDirectionOption(selectedOption?.value);
        } catch (error) {
            //Ignore Error
        }

    };

    useEffect(() => {
        if (sortFieldOption) {
            const sortedData = [...data].sort((a, b) => {
                if (a[sortFieldOption] > b[sortFieldOption]) return sortDirectionOption === "asc" ? 1 : -1;
                return 0;
            });
            setSortData(sortedData);
        }
        if (sortFieldOption === "company") {
            const sortedData = [...data].sort((a, b) => {
                if (a.company.name > b.company.name) return sortDirectionOption === "asc" ? 1 : -1;
                return 0;
            });
            setSortData(sortedData);
        }
    }, [sortFieldOption, data]);


    useEffect(() => {
        if (sortDirectionOption) {
            const sortedData = [...data].sort((a, b) => {
                return a.name > b.name && sortDirectionOption === "asc" ? 1 : -1;
            });
            setSortData(sortedData);
        }
    }, [sortDirectionOption])


    return (
        <div className='sort-div'>
            <div className="sort-cell">
                <label className='sort-label'>Field Sort</label>
                <Select
                    onChange={handleChangeSortField}
                    options={SortField}
                    styles={customStyles}
                    className='sort-select'
                />
            </div>
            <div className="sort-cell">
                <label className='sort-label'>Field Direction</label>
                <Select
                    onChange={handleChangeSortDirection}
                    options={SortDirection}
                    styles={customStyles}
                    className='sort-select'
                />
            </div>
        </div>
    );
}

export default SortUsers;

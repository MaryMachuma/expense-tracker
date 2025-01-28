// Filters by category and date

function FilterPanel ({onFilter}) {
    const handleCategoryChange = (e) => {
        onFilter({category: e.target.value});
    };
}
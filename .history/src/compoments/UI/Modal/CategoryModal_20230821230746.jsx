const categories = [
  "Show All",
  "Italian",
  "Healty ",
  "Indian ",
  "Korean",
  "Turkish ",
  "Breakfast",
  "Mexican",
];

const CategoryModal = () => {
  <form>
    <select id="categories" name="categories">
        {categories.map(category=>
            <select value={category} >{category}</select>
            )}
    </select>
  </form>;
};

export default CategoryModal;

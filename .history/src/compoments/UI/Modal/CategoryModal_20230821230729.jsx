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
        {categories.map(categoriy=>
            <select value={categoriy}></select>
            )}
    </select>
  </form>;
};

export default CategoryModal;

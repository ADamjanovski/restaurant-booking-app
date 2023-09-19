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
      {categories.map((category) => (
        <select key={category} value={category}>
          {category}
        </select>
      ))}
    </select>
    <input type="submit" />
  </form>;
};

export default CategoryModal;

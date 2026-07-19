import "./CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <div className="category-card">
      <h2>{category.icon}</h2>
      <h3>{category.name}</h3>
      <p>{category.courses}</p>
    </div>
  );
}

export default CategoryCard;
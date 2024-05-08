import { db } from "../_lib/prisma";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-3">
      {categories.map((category, id) => (
        <h1 key={id}>{category.name}</h1>
      ))}
    </div>
  );
};

export default CategoryList;

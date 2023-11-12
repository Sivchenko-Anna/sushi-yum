import { useState } from 'react'

const categories = [
  "Все",
  "Сеты",
  "Суши",
  "Роллы",
  "Закуски",
  "Напитки",
];

export const Categories = () => {
  const [value, setValue] = useState(0);

  const onChangeCategory = (index) => {
    setValue(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => onChangeCategory(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

import './CategoriesFilter.css'
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function CategoriesFilter() {
    const [categorie, setCategorie] = useState([]);

    const fetchCategorie = async () => {
        try {
            const response = await axios.get('https://api.blog.redberryinternship.ge/api/categories');
            setCategorie(response.data.data);

        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchCategorie();
    }, []);
    return (
        <div>
            {categorie.length > 0 ? (
                <ul>
                    {categorie.map((category) => (
                        <li style={{ color: category.text_color, backgroundColor: category.background_color }} key={category.id}>{category.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    )


};








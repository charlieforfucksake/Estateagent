import { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList';
import PropertyForm from '../components/PropertyForm';

export default function Properties() {
    const [properties, setProperties] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetchProperties();
    }, []);

    async function fetchProperties() {
        const res = await fetch('/api/properties');
        const data = await res.json();
        setProperties(data);
    }

    const handlePropertyAdded = () => {
        fetchProperties();
        setShowForm(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Properties</h1>
                <button onClick={() => setShowForm(!showForm)} className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    {showForm ? 'Cancel' : 'Add Property'}
                </button>
                {showForm && <PropertyForm onPropertyAdded={handlePropertyAdded} />}
                <PropertyList properties={properties} />
            </div>
        </div>
    );
}
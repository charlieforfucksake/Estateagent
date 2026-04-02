import PropertyCard from './PropertyCard';

export default function PropertyList({ properties }) {
    const handleDelete = async (id) => {
        if (confirm('Are you sure?')) {
            await fetch(`/api/properties/${id}`, { method: 'DELETE' });
            window.location.reload();
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.length > 0 ? (
                properties.map((property) => (
                    <PropertyCard key={property.id} property={property} onDelete={handleDelete} />
                ))
            ) : (
                <p className="text-gray-500">No properties found</p>
            )}
        </div>
    );
}
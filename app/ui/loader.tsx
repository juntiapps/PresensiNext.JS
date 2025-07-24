// components/Loader.tsx

import React from 'react';
import { ClipLoader } from 'react-spinners';

// Ini adalah komponen loader sederhana menggunakan SVG dan Tailwind CSS

interface LoaderProps {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
    const overrideCSS = {
        display: "block",
        margin: "0 0 0 auto", // Margin kiri 8px (mirip ml-2 di Tailwind)
        borderColor: "white", // Warna border spinner
    };
    return (
        <ClipLoader
            color={"#ffffff"} // Warna spinner
            loading={loading}
            cssOverride={overrideCSS}
            size={20} // Ukuran spinner
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Loader;
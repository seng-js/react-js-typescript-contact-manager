import {useState} from "react";

export const useToggleView = () => {
    const [isGridView, setIsGridView] = useState(true);
    const switchView = (gridViewActive) => {
        setIsGridView(gridViewActive);
    };

    return [isGridView, switchView];
}
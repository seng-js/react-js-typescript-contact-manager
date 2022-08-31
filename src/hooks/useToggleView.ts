import {useState} from "react";

export const useToggleView = () => {
    const [isGridView, setIsGridView] = useState(true);
    const switchView = (gridViewActive: boolean | ((prevState: boolean) => boolean)) => {
        setIsGridView(gridViewActive);
    };

    return [isGridView, switchView];
}

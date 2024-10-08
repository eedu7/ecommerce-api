type CategoryData = {
    name: string; description: string;
}

type CategoryResponse = {
    name: string; description: string; id: number;
}

type DeleteCategoryData = {
    id: number;
}

type GetCategoryData = {
    id: number;
}


type EditCategoryData = {
    id: number, name: string; description: string;
}
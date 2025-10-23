export interface PageFilterState {
    sortDirection: 'asc' | 'desc';
    sortField: string;
    pageNumber: number;
    pageSize: number;
    filters: any;
    entityFilters: any
}

export function getDefaultFilterState(): PageFilterState {
    return {
        sortDirection: "desc",
        sortField: 'id',
        pageNumber: 1,
        pageSize: 10,
        filters: {},
        entityFilters: {}
    }
}

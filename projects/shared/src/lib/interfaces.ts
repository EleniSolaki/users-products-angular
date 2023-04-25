export interface MenuItem{
    text: string;
    link: string;
}

export interface Alert{
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
    heading?: string;
    text: string;
    spinner?: boolean; 
}
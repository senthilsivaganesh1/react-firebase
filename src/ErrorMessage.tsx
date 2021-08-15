import { Typography } from "@material-ui/core";

interface IErrorMessageProps {
    
}
export default function renderError(message?: string, className?:string) {
    if (message) return <Typography variant="h5" className={className}>{message}</Typography>;
}
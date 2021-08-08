interface IScreenBProps{
    message: string;
}
export function ScreenB(props: IScreenBProps){
    return(
        <>
        <label>{props.message}</label>
        <label>it is screenB page</label>
        </>
    );
}
export function HeaderComponent(){
    return (
    <>
        <h1>
            {import.meta.env.DEV ? 'Local server' : 'Prod server'}
        </h1>
    </>)
}
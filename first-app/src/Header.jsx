/* eslint-disable react/prop-types */
export function HeaderComponent(props){
    return (
    <>
      <h1>
       {props.title} this is {import.meta.env.DEV ? 'local' : 'prod'} server
      </h1>
    </>)
}   
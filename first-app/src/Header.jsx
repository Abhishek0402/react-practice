/* eslint-disable react/prop-types */
export function HeaderComponent(props){
    return (
    <>
      <h1>
       {props.title} this is {props.children} server
      </h1>
    </>)
}   
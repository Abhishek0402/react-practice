import './Header.css';

/* eslint-disable react/prop-types */
export function HeaderComponent(props){
    return (
    <>
      <h1 className="header">
       {props.title} this is {props.children} server
      </h1>
    </>)
}   
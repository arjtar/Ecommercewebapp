
import {ReactElement} from "react"

interface HeadingProps {
 value?: string| ReactElement;
 className?: string| null|undefined;
 children?: any;
}

export const Heading1 = ({ value, className, children}: HeadingProps) => {

    return(<>
    <h1 className= "font-extrabold">  ${className}`
        {value ? value : children}
    </h1>

    </>);
};
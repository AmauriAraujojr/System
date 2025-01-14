import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form";
import { StyledInput } from "../../styles/inputs";


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError;
    className?: string;

  }export const Input = forwardRef<HTMLInputElement,InputProps>(({label,error,...props},ref) => {

    return( 
        <StyledInput>  
              {label ? <label><>{label}</></label> : null}


           <input  ref={ref} {...props} />
           {error ? <p className="error">{error.message}</p> : null}

        </StyledInput>


    )
  }
)
  
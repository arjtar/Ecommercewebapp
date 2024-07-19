import { BaseSyntheticEvent } from "react"

export enum INPUT_TYPE{
    TEXT='text',
    NUMBER='number',
    EMAIL='email',
    PASSWORD='password',
    TEL="tel"

}
export type handleChangeType =(e: BaseSyntheticEvent)=>{}

export interface ITextInputComponent {
    type?: INPUT_TYPE,
    name: string,
    defaultValue?: string,
    control: any,
    msg: string | undefined | null
}


import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const Weather = () => {
    const {data} = useQuery(["weather"], () => {
        return Axios.get("https://wttr.in/${city}?format=3").then((res) => res.data);
    })

    return (
        <p>{data}</p>
    )
}
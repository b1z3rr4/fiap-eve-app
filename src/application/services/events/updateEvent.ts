import { IEvent } from "@/application/models/event";
import axios from "axios";

export function updateEvent(data: IEvent) {
    return axios.put(`http://localhost:3000/eventos/${data.id}`, data);
}

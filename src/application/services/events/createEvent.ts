import { IEvent } from "@/application/models/event";
import axios from "axios";

export function createEvent(data: IEvent) {
    return axios.post('http://localhost:3000/eventos', data);
}

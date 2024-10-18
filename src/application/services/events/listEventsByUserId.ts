import { IEvent } from "@/application/models/event";
import axios from "axios";

export async function listEventsByUserId(userId: string) {
    return await axios.get<IEvent[]>(`http://localhost:3000/eventos?creator=${userId}`);
}

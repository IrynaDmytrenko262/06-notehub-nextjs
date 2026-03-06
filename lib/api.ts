import axios from "axios";
import type { Note, NoteTag } from "../types/note";

// =====================
// Axios instance
// =====================

const BASE_URL = "https://notehub-public.goit.study/api";
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

if (!token) {
  throw new Error("NEXT_PUBLIC_NOTEHUB_TOKEN is not defined");
}

export const noteHubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// =====================
// Типи для сервісу
// =====================

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}

// =====================
// API функції
// =====================

export const fetchNotes = async (
  params?: FetchNotesParams
): Promise<FetchNotesResponse> => {
  const { data } = await noteHubApi.get<FetchNotesResponse>("/notes", {
    params: {
      page: params?.page ?? 1,
      perPage: params?.perPage ?? 12,
      search: params?.search ?? "",
    },
  });

  return data;
};

export const createNote = async (
  noteData: CreateNoteParams
): Promise<Note> => {
  const { data } = await noteHubApi.post<Note>("/notes", noteData);

  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await noteHubApi.delete<Note>(`/notes/${id}`);
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await noteHubApi.get<Note>(`/notes/${id}`);
  return data;
};
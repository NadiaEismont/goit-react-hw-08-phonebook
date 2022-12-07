import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const signUpUser = createAsyncThunk("/users/signup", async (_, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup");
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});


export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", contact);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contact/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue({ contactId, msg: e.message });
        }
    }
);
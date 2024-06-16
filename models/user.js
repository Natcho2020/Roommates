import { v4 as uuidv4 } from "uuid";
import fs from "node:fs/promises"
import path from "node:path";
import axios from "axios";

const router = Router()

const users = path.join(import.meta.dirname, "../data/user.json")


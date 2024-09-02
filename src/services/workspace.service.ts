import { Workspace } from "@prisma/client";
import { db } from "../utils/db";

export default class WorkspaceService {
    async getAllWorkspace(): Promise<Workspace[]> {
        return await db.workspace.findMany()
    }

    async getWorkspaceById(id: number): Promise<Workspace | null> {
        return await db.workspace.findUnique({
            where: {
                id: id
            }
        })
    }

    async createWorkspace() {
        
    }

    async updateWorkspace(id: number) {

    }

    async deleteWorkspace(id: number) {

    }
}
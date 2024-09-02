import Elysia, { NotFoundError } from "elysia";
import WorkspaceService from "../services/workspace.service";

const workspaceService = new WorkspaceService()

export const workspaceController = new Elysia({ prefix: '/workspace' })

    // GET /workspace
    .get('/', async () => {
        return await workspaceService.getAllWorkspace()
    })

    // GET /workspace/:id
    .get('/:id', async ({ params }) => {
        const workspace = await workspaceService.getWorkspaceById(parseInt(params.id))
        if (!workspace) throw new NotFoundError()
        return workspace
    })

    // POST /workspace
    .post('/', async () => {
        
    })

    // PUT /workspace
    .put('/:id', () => {

    })

    // DELETE /workspace
    .delete('/:id', () => {

    })
import * as azdev from 'azure-devops-node-api'
import { Console } from 'console';


export class AzdevopsService{
    private instance:string;
    private org:string;
    private project:string;
    private headers: HeadersInit;
    private pat: string;

    constructor(instance:string, org:string, project:string, pat: string){
        this.instance = instance;
        this.org = org;
        this.project = project;
        this.pat = pat;
        this.headers = {
            'Authorization': 'Basic' + btoa(":"+pat),
            'Content-Type': 'application/json'
        };
    }

    public async getServiceEndpoints(serviceConnectionName: string){
        const authHandler = azdev.getPersonalAccessTokenHandler(this.pat);
        const connection = new azdev.WebApi(this.instance + this.org, authHandler);
        const taskAgentApi = await connection.getTaskAgentApi()
        const serviceConnetion = await taskAgentApi.getServiceEndpointsByNames(this.project, [serviceConnectionName])
        /*console.log("------------------1------------------")
        console.log(serviceConnetion)
        const serviceConnectionDetails = await taskAgentApi.getServiceEndpointDetails(this.project, serviceConnetion[0].id)
        console.log("------------------2------------------")
        console.log(serviceConnectionDetails)*/
        return serviceConnetion
    }
}
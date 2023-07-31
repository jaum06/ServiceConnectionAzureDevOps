import {AzdevopsService} from "./custom-services/azdevops-services"

async function main(){

    const instance = 'https://vssps.dev.azure.com/';
    const organization = 'CoppelCREA';
    const project = 'Coppel-CREA';
    const PAT = '3fw3dxm2aj437pjgijost3ezv24wwvo2e2mdkzgiuh6w2rcmifta'
    const azdevopsapi = new AzdevopsService(instance, organization, project, PAT);

    const serviceConnection = await azdevopsapi.getServiceEndpoints("Coppel email")
    console.log(serviceConnection)
}

main()
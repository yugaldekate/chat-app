const ServerPage = ({params} : {params: {serverId : string}}) => {
    return (
        <div>{params.serverId}</div>
    );
}
 
export default ServerPage;
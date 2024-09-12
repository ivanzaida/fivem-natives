/**
 * CFX:GET_CURRENT_SERVER_ENDPOINT
 *
 * 0XEA11BFBA

 * Returns the peer address of the remote game server that the user is currently connected to.
 * 
 * ------------------------------------------------------------------
 * @returns {string}  The peer address of the game server (e.g. `127.0.0.1:30120`), or NULL if not available.
 */
export function getCurrentServerEndpoint(): string {
	const getCurrentServerEndpoint_result = Citizen.invokeNative<string>('0XEA11BFBA', );
	return getCurrentServerEndpoint_result;
}
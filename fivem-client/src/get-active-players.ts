/**
 * CFX:GET_ACTIVE_PLAYERS
 *
 * 0xCF143FB9

 * Returns all player indices for 'active' physical players known to the client.The data returned adheres to the following layout:```[127, 42, 13, 37]```
 * 
 * ------------------------------------------------------------------
 * @returns {number}  An object containing a list of player indices.
 */
export function getActivePlayers(): number[] {
	const getActivePlayers_result = Citizen.invokeNative<number[]>('0xCF143FB9', Citizen.resultAsObject());
	return getActivePlayers_result;
}
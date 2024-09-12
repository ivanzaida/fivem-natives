import { PlayerIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PLAYER_FROM_SERVER_ID
 *
 * 0x344EA166

 * Gets a local client's Player ID from its server ID counterpart, assuming the passed `serverId` exists on the client.If no matching client is found, or an invalid value is passed over as the `serverId` native's parameter, the native result will be `-1`.It's worth noting that this native method can only retrieve information about clients that are culled to the connected client.
 * 
 * ------------------------------------------------------------------
 * @param {number} serverId The player's server ID.
 * @returns {PlayerIndex}  A valid Player ID if one is found, `-1` if not.
 */
export function getPlayerFromServerId(serverId: number): PlayerIndex {
	const getPlayerFromServerId_result = Citizen.invokeNative<PlayerIndex>('0x344EA166', serverId);
	return getPlayerFromServerId_result;
}
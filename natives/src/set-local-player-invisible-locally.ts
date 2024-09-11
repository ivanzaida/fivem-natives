/**
 * NETWORK:SET_LOCAL_PLAYER_INVISIBLE_LOCALLY
 *
 * 0x2E99083F03611030

 * 
 * ------------------------------------------------------------------
 * @param {boolean} includePlayersVehicle
 */
export function setLocalPlayerInvisibleLocally(includePlayersVehicle: boolean = false): void {
	const setLocalPlayerInvisibleLocally_result = Citizen.invokeNative<void>('0x2E99083F03611030', includePlayersVehicle);
	return setLocalPlayerInvisibleLocally_result;
}
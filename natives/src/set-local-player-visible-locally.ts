/**
 * NETWORK:SET_LOCAL_PLAYER_VISIBLE_LOCALLY
 *
 * 0xA6DFB7FC64F53E33

 * 
 * ------------------------------------------------------------------
 * @param {boolean} includePlayersVehicle
 */
export function setLocalPlayerVisibleLocally(includePlayersVehicle: boolean = false): void {
	const setLocalPlayerVisibleLocally_result = Citizen.invokeNative<void>('0xA6DFB7FC64F53E33', includePlayersVehicle);
	return setLocalPlayerVisibleLocally_result;
}
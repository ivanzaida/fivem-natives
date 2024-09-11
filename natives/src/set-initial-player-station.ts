/**
 * AUDIO:SET_INITIAL_PLAYER_STATION
 *
 * 0x91115A9BE4445AA6

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 */
export function setInitialPlayerStation(radioStationName: string): void {
	const setInitialPlayerStation_result = Citizen.invokeNative<void>('0x91115A9BE4445AA6', radioStationName);
	return setInitialPlayerStation_result;
}
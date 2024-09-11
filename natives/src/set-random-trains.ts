/**
 * VEHICLE:SET_RANDOM_TRAINS
 *
 * 0xAE03F542B985A69E

 * 
 * ------------------------------------------------------------------
 * @param {boolean} randomTrainsFlag
 */
export function setRandomTrains(randomTrainsFlag: boolean): void {
	const setRandomTrains_result = Citizen.invokeNative<void>('0xAE03F542B985A69E', randomTrainsFlag);
	return setRandomTrains_result;
}
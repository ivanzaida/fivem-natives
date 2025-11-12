/**
 * CFX:SET_VEHICLE_XMAS_SNOW_FACTOR
 *
 * 0x80CC4C9E

 * 
 * ------------------------------------------------------------------
 * @param {number} gripFactor amount of grip strength vehicle wheels have when xmas weather is active, 0.0 being normal weather grip. 0.2 is the default.
 */
export function setVehicleXmasSnowFactor(gripFactor: number): void {
	const setVehicleXmasSnowFactor_result = Citizen.invokeNative<void>('0x80CC4C9E', gripFactor);
	return setVehicleXmasSnowFactor_result;
}
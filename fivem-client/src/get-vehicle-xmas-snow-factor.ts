/**
 * CFX:GET_VEHICLE_XMAS_SNOW_FACTOR
 *
 * 0x16605B30

 * A getter for [SET_VEHICLE_XMAS_SNOW_FACTOR](#_0x80CC4C9E).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the grip factor for the vehicles wheels during xmas weather. default value is 0.2.
 */
export function getVehicleXmasSnowFactor(): number {
	const getVehicleXmasSnowFactor_result = Citizen.invokeNative<number>('0x16605B30', );
	return getVehicleXmasSnowFactor_result;
}
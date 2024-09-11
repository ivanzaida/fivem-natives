/**
 * CFX:SET_DEFAULT_VEHICLE_NUMBER_PLATE_TEXT_PATTERN
 *
 * 0X79780FD2

 * Sets the default number plate text pattern for vehicles seen on the local client with the specified plate index as their _default_ index (`plateProbabilities` from carvariations).For consistency, this should be used with the same value on all clients, since vehicles _without_ custom text will use a seeded random number generator with this pattern to determine the default plate text.The default value is `11AAA111`, and using this or a NULL string will revert to the default game RNG.
 * 
 * ------------------------------------------------------------------
 * @param {number} plateIndex A plate index, or 1 to set a default for any indices that do not have a specific value.
 * @param {string} pattern A number plate pattern string, or a null value to reset to default.
 */
export function setDefaultVehicleNumberPlateTextPattern(plateIndex: number, pattern: string): void {
	const setDefaultVehicleNumberPlateTextPattern_result = Citizen.invokeNative<void>('0X79780FD2', plateIndex, pattern);
	return setDefaultVehicleNumberPlateTextPattern_result;
}
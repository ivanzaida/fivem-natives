/**
 * VEHICLE:SET_NUMBER_OF_PARKED_VEHICLES
 *
 * 0xECDFDC2E8AC2D613

 * 
 * ------------------------------------------------------------------
 * @param {number} newNumberOfParkedCars
 */
export function setNumberOfParkedVehicles(newNumberOfParkedCars: number): void {
	const setNumberOfParkedVehicles_result = Citizen.invokeNative<void>('0xECDFDC2E8AC2D613', newNumberOfParkedCars);
	return setNumberOfParkedVehicles_result;
}
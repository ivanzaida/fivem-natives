/**
 * VEHICLE:SET_ALL_LOW_PRIORITY_VEHICLE_GENERATORS_ACTIVE
 *
 * 0xEFAF1ADDE0F583C3

 * 
 * Emergency vehicle map gens and high priorty gens will remain active
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function setAllLowPriorityVehicleGeneratorsActive(active: boolean): void {
	const setAllLowPriorityVehicleGeneratorsActive_result = Citizen.invokeNative<void>('0xEFAF1ADDE0F583C3', active);
	return setAllLowPriorityVehicleGeneratorsActive_result;
}
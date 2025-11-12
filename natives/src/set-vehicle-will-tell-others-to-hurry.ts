import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WILL_TELL_OTHERS_TO_HURRY
 *
 * 0xB0EBCEBA08F63848

 * 
 * Makes this vehicle cause ambient vehicles that get in its way to hurry away.
 * Does not affect mission vehicles
 * This is a reset flag, it must be called each frame
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} tellOthersToHurry
 */
export function setVehicleWillTellOthersToHurry(vehicle: VehicleIndex, tellOthersToHurry: boolean): void {
	const setVehicleWillTellOthersToHurry_result = Citizen.invokeNative<void>('0xB0EBCEBA08F63848', vehicle, tellOthersToHurry);
	return setVehicleWillTellOthersToHurry_result;
}
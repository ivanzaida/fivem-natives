import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_REDUCED_SUSPENSION_FORCE
 *
 * 0xCE2ADF354D3F97AE

 * 
 * Lowers the vehicle's stance. Only works for vehicles that have strAdvancedFlags 0x8000 and 0x4000000 set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} reduceSuspensionForce
 */
export function setReducedSuspensionForce(vehicle: VehicleIndex, reduceSuspensionForce: boolean): void {
	const setReducedSuspensionForce_result = Citizen.invokeNative<void>('0xCE2ADF354D3F97AE', vehicle, reduceSuspensionForce);
	return setReducedSuspensionForce_result;
}
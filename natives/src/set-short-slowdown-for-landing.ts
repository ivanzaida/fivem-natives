import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SHORT_SLOWDOWN_FOR_LANDING
 *
 * 0x91CEBBEA3A7FB79A

 * 
 * Used on helicopters and blimps during the CTaskVehicleLand task. Sets a value on the task to 10f
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setShortSlowdownForLanding(vehicle: VehicleIndex): void {
	const setShortSlowdownForLanding_result = Citizen.invokeNative<void>('0x91CEBBEA3A7FB79A', vehicle);
	return setShortSlowdownForLanding_result;
}
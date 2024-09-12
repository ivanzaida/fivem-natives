import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_ACTIVE_FOR_PED_NAVIGATION
 *
 * 0x8AFDFB10F32CB1A8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} isActive
 */
export function setVehicleActiveForPedNavigation(vehicle: VehicleIndex, isActive: boolean): void {
	const setVehicleActiveForPedNavigation_result = Citizen.invokeNative<void>('0x8AFDFB10F32CB1A8', vehicle, isActive);
	return setVehicleActiveForPedNavigation_result;
}
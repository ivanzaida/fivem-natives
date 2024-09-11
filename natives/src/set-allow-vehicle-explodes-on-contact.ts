import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_ALLOW_VEHICLE_EXPLODES_ON_CONTACT
 *
 * 0xB7A736A17908838D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} set
 */
export function setAllowVehicleExplodesOnContact(vehicle: VehicleIndex, set: boolean): void {
	const setAllowVehicleExplodesOnContact_result = Citizen.invokeNative<void>('0xB7A736A17908838D', vehicle, set);
	return setAllowVehicleExplodesOnContact_result;
}
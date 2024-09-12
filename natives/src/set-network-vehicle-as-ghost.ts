import { VehicleIndex } from '@ivanzaida/structures'

/**
 * NETWORK:SET_NETWORK_VEHICLE_AS_GHOST
 *
 * 0x67697883F8C7E424

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} set
 */
export function setNetworkVehicleAsGhost(vehicle: VehicleIndex, set: boolean): void {
	const setNetworkVehicleAsGhost_result = Citizen.invokeNative<void>('0x67697883F8C7E424', vehicle, set);
	return setNetworkVehicleAsGhost_result;
}
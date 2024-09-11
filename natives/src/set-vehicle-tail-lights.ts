import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_TAIL_LIGHTS
 *
 * 0x76FD0E61CB6D5162

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} toggle
 */
export function setVehicleTailLights(vehicle: VehicleIndex, toggle: boolean): void {
	const setVehicleTailLights_result = Citizen.invokeNative<void>('0x76FD0E61CB6D5162', vehicle, toggle);
	return setVehicleTailLights_result;
}
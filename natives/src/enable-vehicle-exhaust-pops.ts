import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:ENABLE_VEHICLE_EXHAUST_POPS
 *
 * 0xB37F7EC8F0694F4D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enable
 */
export function enableVehicleExhaustPops(vehicle: VehicleIndex, enable: boolean): void {
	const enableVehicleExhaustPops_result = Citizen.invokeNative<void>('0xB37F7EC8F0694F4D', vehicle, enable);
	return enableVehicleExhaustPops_result;
}
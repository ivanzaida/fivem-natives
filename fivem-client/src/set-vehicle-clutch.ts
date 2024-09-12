import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_CLUTCH
 *
 * 0x2F70ACED

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} clutch
 */
export function setVehicleClutch(vehicle: VehicleIndex, clutch: number): void {
	const setVehicleClutch_result = Citizen.invokeNative<void>('0x2F70ACED', vehicle, clutch);
	return setVehicleClutch_result;
}
import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_NEXT_GEAR
 *
 * 0x3A4566F4

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle handle.
 * @param {number} nextGear The vehicles next gear.
 */
export function setVehicleNextGear(vehicle: VehicleIndex, nextGear: number): void {
	const setVehicleNextGear_result = Citizen.invokeNative<void>('0x3A4566F4', vehicle, nextGear);
	return setVehicleNextGear_result;
}
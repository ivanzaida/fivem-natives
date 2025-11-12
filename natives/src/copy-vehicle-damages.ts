import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:COPY_VEHICLE_DAMAGES
 *
 * 0xF9639F1B33AF0EF8

 * 
 * Copies sourceVehicle's damage (broken bumpers, broken lights, etc.) to targetVehicle.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} srcVehicle
 * @param {VehicleIndex} dstVehicle
 */
export function copyVehicleDamages(srcVehicle: VehicleIndex, dstVehicle: VehicleIndex): void {
	const copyVehicleDamages_result = Citizen.invokeNative<void>('0xF9639F1B33AF0EF8', srcVehicle, dstVehicle);
	return copyVehicleDamages_result;
}
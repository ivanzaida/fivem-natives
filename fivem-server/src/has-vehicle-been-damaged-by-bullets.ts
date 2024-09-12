import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:HAS_VEHICLE_BEEN_DAMAGED_BY_BULLETS
 *
 * 0xB8AF3137

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The target vehicle.
 * @returns {boolean}  Returns whether or not the target vehicle has been damaged by bullets.
 */
export function hasVehicleBeenDamagedByBullets(vehicle: VehicleIndex): boolean {
	const hasVehicleBeenDamagedByBullets_result = Citizen.invokeNative<boolean>('0xB8AF3137', vehicle);
	return hasVehicleBeenDamagedByBullets_result;
}
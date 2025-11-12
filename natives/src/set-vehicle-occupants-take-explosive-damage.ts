import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_OCCUPANTS_TAKE_EXPLOSIVE_DAMAGE
 *
 * 0x00F38E42DE1E8071

 * 
 * Sets whether vehicle occupants can take explosive damage if the vehicle is invincible/explosion proof.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} vehicleOccupantsTakeExplosiveDamage
 */
export function setVehicleOccupantsTakeExplosiveDamage(vehicle: VehicleIndex, vehicleOccupantsTakeExplosiveDamage: boolean = false): void {
	const setVehicleOccupantsTakeExplosiveDamage_result = Citizen.invokeNative<void>('0x00F38E42DE1E8071', vehicle, vehicleOccupantsTakeExplosiveDamage);
	return setVehicleOccupantsTakeExplosiveDamage_result;
}
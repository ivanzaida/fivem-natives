import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_PEDS_CAN_FALL_OFF_THIS_VEHICLE_FROM_LARGE_FALL_DAMAGE
 *
 * 0x61D3E6830FEE218E

 * 
 * These values are reset and will only stay set for one frame.
 * 
 * Sets some bit and float of vehicle. float is >= 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enable
 * @param {number} velThreshold
 */
export function setPedsCanFallOffThisVehicleFromLargeFallDamage(vehicle: VehicleIndex, enable: boolean, velThreshold: number = 1): void {
	const setPedsCanFallOffThisVehicleFromLargeFallDamage_result = Citizen.invokeNative<void>('0x61D3E6830FEE218E', vehicle, enable, velThreshold);
	return setPedsCanFallOffThisVehicleFromLargeFallDamage_result;
}
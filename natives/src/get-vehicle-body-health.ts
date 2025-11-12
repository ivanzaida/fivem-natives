import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_BODY_HEALTH
 *
 * 0x3B5692CB240DBC2F

 * 
 * 1000.0 = full,  0.0 = damaged
 * When body health drops to 0, the vehicle is very vulnerable to damage
 * 
 * Seems related to vehicle health, like the one in IV.
 * Max 1000, min 0.
 * Vehicle does not necessarily explode or become undrivable at 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleBodyHealth(vehicle: VehicleIndex): number {
	const getVehicleBodyHealth_result = Citizen.invokeNative<number>('0x3B5692CB240DBC2F', vehicle);
	return getVehicleBodyHealth_result;
}
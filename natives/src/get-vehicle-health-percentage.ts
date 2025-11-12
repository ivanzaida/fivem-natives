import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_HEALTH_PERCENTAGE
 *
 * 0xA9EDF0DFAF70EAD4

 * 
 * 0 min 100 max
 * starts at 100
 * Seams to have health zones
 * Front of vehicle when damaged goes from 100-50 and stops at 50.
 * Rear can be damaged from 100-0
 * Only tested with two cars.
 * 
 * any idea how this differs from the first one?
 * 
 * --
 * May return the vehicle health on a scale of 0.0 - 100.0 (needs to be confirmed)
 * 
 * example:
 * 
 * v_F = ENTITY::GET_ENTITY_MODEL(v_3);
 * if (((v_F == ${tanker}) || (v_F == ${armytanker})) || (v_F == ${tanker2})) {
 *     if (VEHICLE::GET_VEHICLE_HEALTH_PERCENTAGE(v_3) <= 1.0) {
 *         NETWORK::NETWORK_EXPLODE_VEHICLE(v_3, 1, 1, -1);
 *     }
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} maxEngineHealth
 * @param {number} maxPetrolTankHealth
 * @param {number} maxHealth
 * @param {number} maxMainRotorHealth
 * @param {number} maxRearRotorHealth
 * @param {number} maxTailBoomHealth
 * @returns {number}  
 */
export function getVehicleHealthPercentage(vehicle: VehicleIndex, maxEngineHealth: number = 1000, maxPetrolTankHealth: number = 1000, maxHealth: number = 1000, maxMainRotorHealth: number = 1000, maxRearRotorHealth: number = 1000, maxTailBoomHealth: number = 1000): number {
	const getVehicleHealthPercentage_result = Citizen.invokeNative<number>('0xA9EDF0DFAF70EAD4', vehicle, maxEngineHealth, maxPetrolTankHealth, maxHealth, maxMainRotorHealth, maxRearRotorHealth, maxTailBoomHealth);
	return getVehicleHealthPercentage_result;
}
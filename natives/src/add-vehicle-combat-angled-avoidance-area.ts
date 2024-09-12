import { VehicleCombatAvoidanceAreaIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ADD_VEHICLE_COMBAT_ANGLED_AVOIDANCE_AREA
 *
 * 0x6C3C28979C693FF6

 * 
 * ------------------------------------------------------------------
 * @param {number} startX
 * @param {number} startY
 * @param {number} startZ
 * @param {number} endX
 * @param {number} endY
 * @param {number} endZ
 * @param {number} width
 * @returns {VehicleCombatAvoidanceAreaIndex}  
 */
export function addVehicleCombatAngledAvoidanceArea(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, width: number): VehicleCombatAvoidanceAreaIndex {
	const addVehicleCombatAngledAvoidanceArea_result = Citizen.invokeNative<VehicleCombatAvoidanceAreaIndex>('0x6C3C28979C693FF6', startX, startY, startZ, endX, endY, endZ, width);
	return addVehicleCombatAngledAvoidanceArea_result;
}
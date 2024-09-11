import { VehicleCombatAvoidanceAreaIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:REMOVE_VEHICLE_COMBAT_AVOIDANCE_AREA
 *
 * 0x2C2F55254DC331B0

 * 
 * ------------------------------------------------------------------
 * @param {VehicleCombatAvoidanceAreaIndex} index
 */
export function removeVehicleCombatAvoidanceArea(index: VehicleCombatAvoidanceAreaIndex): void {
	const removeVehicleCombatAvoidanceArea_result = Citizen.invokeNative<void>('0x2C2F55254DC331B0', index);
	return removeVehicleCombatAvoidanceArea_result;
}
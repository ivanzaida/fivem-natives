import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_COMBAT_OFFSET
 *
 * 0x57EE251558A8A187

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} vehiclePosX
 * @param {number} vehiclePosY
 * @param {number} vehiclePosZ
 */
export function setHeliCombatOffset(vehicle: VehicleIndex, vehiclePosX: number, vehiclePosY: number, vehiclePosZ: number): void {
	const setHeliCombatOffset_result = Citizen.invokeNative<void>('0x57EE251558A8A187', vehicle, vehiclePosX, vehiclePosY, vehiclePosZ);
	return setHeliCombatOffset_result;
}
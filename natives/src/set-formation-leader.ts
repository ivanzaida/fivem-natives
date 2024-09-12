import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_FORMATION_LEADER
 *
 * 0x5E0F6A0ED51BB6A8

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 * @param {number} radius
 */
export function setFormationLeader(vehicle: VehicleIndex, offsetX: number, offsetY: number, offsetZ: number, radius: number): void {
	const setFormationLeader_result = Citizen.invokeNative<void>('0x5E0F6A0ED51BB6A8', vehicle, offsetX, offsetY, offsetZ, radius);
	return setFormationLeader_result;
}
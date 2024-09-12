import { PedIndex, VehicleIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_HELI_ESCORT_HELI
 *
 * 0xDEA77F41BAFD4054

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} heli
 * @param {VehicleIndex} targetVehicle
 * @param {number} offsetX
 * @param {number} offsetY
 * @param {number} offsetZ
 */
export function taskHeliEscortHeli(ped: PedIndex, heli: VehicleIndex, targetVehicle: VehicleIndex, offsetX: number, offsetY: number, offsetZ: number): void {
	const taskHeliEscortHeli_result = Citizen.invokeNative<void>('0xDEA77F41BAFD4054', ped, heli, targetVehicle, offsetX, offsetY, offsetZ);
	return taskHeliEscortHeli_result;
}
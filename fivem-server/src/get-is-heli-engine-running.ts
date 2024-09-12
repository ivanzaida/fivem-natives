import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_IS_HELI_ENGINE_RUNNING
 *
 * 0X3EFE38D1

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check
 * @returns {boolean}  Returns `true` if the helicopter's engine is running, `false` if it is not.
 */
export function getIsHeliEngineRunning(heli: VehicleIndex): boolean {
	const getIsHeliEngineRunning_result = Citizen.invokeNative<boolean>('0X3EFE38D1', heli);
	return getIsHeliEngineRunning_result;
}
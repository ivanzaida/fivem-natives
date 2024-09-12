import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PARACHUTE_TASK_THRUST
 *
 * 0xA81F12900F3749B3

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} thrust
 */
export function setParachuteTaskThrust(ped: PedIndex, thrust: number): void {
	const setParachuteTaskThrust_result = Citizen.invokeNative<void>('0xA81F12900F3749B3', ped, thrust);
	return setParachuteTaskThrust_result;
}
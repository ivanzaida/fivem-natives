import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLONE_PED_TO_TARGET
 *
 * 0x4E719C7F4406EC93

 * 
 * Copies ped's components and props to targetPed.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} pedIndexSource
 * @param {PedIndex} pedIndexTarget
 */
export function clonePedToTarget(pedIndexSource: PedIndex, pedIndexTarget: PedIndex): void {
	const clonePedToTarget_result = Citizen.invokeNative<void>('0x4E719C7F4406EC93', pedIndexSource, pedIndexTarget);
	return clonePedToTarget_result;
}
import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_MOVEMENT_CLIPSET
 *
 * 0X69E81E3D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @returns {number}  The current movement clipset hash.
 */
export function getPedMovementClipset(ped: PedIndex): number {
	const getPedMovementClipset_result = Citizen.invokeNative<number>('0X69E81E3D', ped);
	return getPedMovementClipset_result;
}
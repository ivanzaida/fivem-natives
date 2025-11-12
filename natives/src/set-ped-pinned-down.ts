import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_PINNED_DOWN
 *
 * 0x97FBC735CAFB56C8

 * 
 * i could be time. Only example in the decompiled scripts uses it as -1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} pinned
 * @param {number} time
 * @returns {boolean}  
 */
export function setPedPinnedDown(ped: PedIndex, pinned: boolean, time: number): boolean {
	const setPedPinnedDown_result = Citizen.invokeNative<boolean>('0x97FBC735CAFB56C8', ped, pinned, time);
	return setPedPinnedDown_result;
}
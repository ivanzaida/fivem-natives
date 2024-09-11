import { PedIndex, IntRef } from '@ivanzaida/structures'

/**
 * PED:CAN_PED_SHUFFLE_TO_OR_FROM_EXTRA_SEAT
 *
 * 0xFB91087FE596EC02

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {IntRef} targetShuffleSeat [Ref]
 * @returns {boolean}  
 */
export function canPedShuffleToOrFromExtraSeat(ped: PedIndex, targetShuffleSeat: IntRef /* ptr */): boolean {
	const canPedShuffleToOrFromExtraSeat_result = Citizen.invokeNative<boolean>('0xFB91087FE596EC02', ped, targetShuffleSeat.dataView);
	return canPedShuffleToOrFromExtraSeat_result;
}
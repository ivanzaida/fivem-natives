import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CAN_PED_SEE_HATED_PED
 *
 * 0x7E54CB377175F94E

 * 
 * Returns true out if the ped can see the other ped (Clear LOS, withing viewing range)
 * Will only work if the ped has a hated relationship with the other ped.
 * Uses asynchronous LOS checks and detection so should be relatively cheap.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {PedIndex} otherPed
 * @returns {boolean}  
 */
export function canPedSeeHatedPed(ped: PedIndex, otherPed: PedIndex): boolean {
	const canPedSeeHatedPed_result = Citizen.invokeNative<boolean>('0x7E54CB377175F94E', ped, otherPed);
	return canPedSeeHatedPed_result;
}
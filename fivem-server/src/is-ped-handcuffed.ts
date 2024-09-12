import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_PED_HANDCUFFED
 *
 * 0X25865633

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped.
 * @returns {boolean}  Whether or not the ped is handcuffed.
 */
export function isPedHandcuffed(ped: PedIndex): boolean {
	const isPedHandcuffed_result = Citizen.invokeNative<boolean>('0X25865633', ped);
	return isPedHandcuffed_result;
}
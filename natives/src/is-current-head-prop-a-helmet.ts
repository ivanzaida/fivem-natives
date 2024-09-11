import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_CURRENT_HEAD_PROP_A_HELMET
 *
 * 0xBA172498AF5A8211

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isCurrentHeadPropAHelmet(ped: PedIndex): boolean {
	const isCurrentHeadPropAHelmet_result = Citizen.invokeNative<boolean>('0xBA172498AF5A8211', ped);
	return isCurrentHeadPropAHelmet_result;
}
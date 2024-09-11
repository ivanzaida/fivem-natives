import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_MOBILE_PHONE_TO_PED_EAR
 *
 * 0xD9FC29710C12DA3A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isMobilePhoneToPedEar(ped: PedIndex): boolean {
	const isMobilePhoneToPedEar_result = Citizen.invokeNative<boolean>('0xD9FC29710C12DA3A', ped);
	return isMobilePhoneToPedEar_result;
}
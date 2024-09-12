import { PedIndex, EEventNames } from '@ivanzaida/structures'

/**
 * PED:IS_PED_RESPONDING_TO_EVENT
 *
 * 0x81ECDD5A759C026D

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EEventNames} eventType
 * @returns {boolean}  
 */
export function isPedRespondingToEvent(ped: PedIndex, eventType: EEventNames | number): boolean {
	const isPedRespondingToEvent_result = Citizen.invokeNative<boolean>('0x81ECDD5A759C026D', ped, eventType);
	return isPedRespondingToEvent_result;
}
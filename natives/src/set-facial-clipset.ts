import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_FACIAL_CLIPSET
 *
 * 0xA86012225D130D96

 * 
 * Clipsets:
 * facials@gen_female@base
 * facials@gen_male@base
 * facials@p_m_zero@base
 * 
 * Typically followed with SET_FACIAL_IDLE_ANIM_OVERRIDE:
 * mood_drunk_1
 * mood_stressed_1
 * mood_happy_1
 * mood_talking_1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} clipSetName
 */
export function setFacialClipset(ped: PedIndex, clipSetName: string): void {
	const setFacialClipset_result = Citizen.invokeNative<void>('0xA86012225D130D96', ped, clipSetName);
	return setFacialClipset_result;
}
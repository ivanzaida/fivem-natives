import { BlipIndex, EBlipPriority } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_PRIORITY
 *
 * 0x1456FD5C0C438B19

 * 
 * See this topic for more details : gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/page-35?p=1069477935
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {EBlipPriority} priority
 */
export function setBlipPriority(blip: BlipIndex, priority: EBlipPriority | number): void {
	const setBlipPriority_result = Citizen.invokeNative<void>('0x1456FD5C0C438B19', blip, priority);
	return setBlipPriority_result;
}
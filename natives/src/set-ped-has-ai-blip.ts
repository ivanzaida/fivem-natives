import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_PED_HAS_AI_BLIP
 *
 * 0x2BF2F8E20C19583C

 * 
 * This native turns on the AI blip on the specified ped. It also disappears automatically when the ped is too far or if the ped is dead. You don't need to control it with other natives.
 * 
 * See gtaforums.com/topic/884370-native-research-ai-blips for further information.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} onOff
 */
export function setPedHasAiBlip(ped: PedIndex, onOff: boolean): void {
	const setPedHasAiBlip_result = Citizen.invokeNative<void>('0x2BF2F8E20C19583C', ped, onOff);
	return setPedHasAiBlip_result;
}
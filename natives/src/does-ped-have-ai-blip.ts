import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:DOES_PED_HAVE_AI_BLIP
 *
 * 0xA23AABF378361F85

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function doesPedHaveAiBlip(ped: PedIndex): boolean {
	const doesPedHaveAiBlip_result = Citizen.invokeNative<boolean>('0xA23AABF378361F85', ped);
	return doesPedHaveAiBlip_result;
}
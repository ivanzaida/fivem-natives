import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:FINALIZE_HEAD_BLEND
 *
 * 0xAF8337BF5A296283

 * 
 * This function will release source assets and should be called when a ped is finished and no more changes
 * will be applied. For example, when creating a ped and the player has finished selecting everythin this
 * function should be called when no more changes can be done to the player. It also needs to be called
 * after the player has finished buying clothes or tattoos and other similar cases.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function finalizeHeadBlend(ped: PedIndex): void {
	const finalizeHeadBlend_result = Citizen.invokeNative<void>('0xAF8337BF5A296283', ped);
	return finalizeHeadBlend_result;
}
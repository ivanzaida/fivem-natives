import { PedIndex, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_AI_PED_PED_BLIP_INDEX
 *
 * 0xA95E5FB2D27EECF2

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} pedID
 * @returns {BlipIndex}  
 */
export function getAiPedPedBlipIndex(pedID: PedIndex): BlipIndex {
	const getAiPedPedBlipIndex_result = Citizen.invokeNative<BlipIndex>('0xA95E5FB2D27EECF2', pedID);
	return getAiPedPedBlipIndex_result;
}
import { PedIndex } from '@ivanzaida/structures'

/**
 * HUD:SET_PED_AI_BLIP_SPRITE
 *
 * 0x12022943BDF6F088

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} spriteID
 */
export function setPedAiBlipSprite(ped: PedIndex, spriteID: number): void {
	const setPedAiBlipSprite_result = Citizen.invokeNative<void>('0x12022943BDF6F088', ped, spriteID);
	return setPedAiBlipSprite_result;
}
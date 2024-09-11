import { EBlipSprite } from '@ivanzaida/structures'

/**
 * HUD:SET_COP_BLIP_SPRITE
 *
 * 0x6C7DF9AC1E90132A

 * 
 * ------------------------------------------------------------------
 * @param {EBlipSprite} sprite
 * @param {number} blipScale
 */
export function setCopBlipSprite(sprite: EBlipSprite | number, blipScale: number = 1): void {
	const setCopBlipSprite_result = Citizen.invokeNative<void>('0x6C7DF9AC1E90132A', sprite, blipScale);
	return setCopBlipSprite_result;
}
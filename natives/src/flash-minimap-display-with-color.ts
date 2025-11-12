import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:FLASH_MINIMAP_DISPLAY_WITH_COLOR
 *
 * 0x7F8D9D14BCF34424

 * 
 * flashes the minimap display using the color specified
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} flashColour
 */
export function flashMinimapDisplayWithColor(flashColour: EHudColours | number): void {
	const flashMinimapDisplayWithColor_result = Citizen.invokeNative<void>('0x7F8D9D14BCF34424', flashColour);
	return flashMinimapDisplayWithColor_result;
}
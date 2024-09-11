import { BlipIndex, EBlipCategory } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_CATEGORY
 *
 * 0x084D9FE4DB5714CF

 * Example: https://i.imgur.com/skY6vAJ.png
 * Index:
 * 1 = No distance shown in legend
 * 2 = Distance shown in legend
 * 7 = "Other Players" category, also shows distance in legend
 * 10 = "Property" category
 * 11 = "Owned Property" category
 * Any other value behaves like index = 1, index wraps around after 255
 * Blips with categories 7, 10 or 11 will all show under the specific categories listing in the map legend, regardless of sprite or name.
 * Legend entries:
 * 7 = Other Players (BLIP_OTHPLYR)
 * 10 = Property (BLIP_PROPCAT)
 * 11 = Owned Property (BLIP_APARTCAT)
 * Category needs to be `7` in order for blip names to show on the expanded minimap when using DISPLAY_PLAYER_NAME_TAGS_ON_BLIPS.
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {EBlipCategory} category
 */
export function setBlipCategory(blip: BlipIndex, category: EBlipCategory | number): void {
	const setBlipCategory_result = Citizen.invokeNative<void>('0x084D9FE4DB5714CF', blip, category);
	return setBlipCategory_result;
}
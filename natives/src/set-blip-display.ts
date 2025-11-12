import { BlipIndex, EBlipDisplay } from '@ivanzaida/structures'

/**
 * HUD:SET_BLIP_DISPLAY
 *
 * 0xF55F62DA99DB0C2F

 * 
 * Display Id behaviours:
 * 0 = Doesn't show up, ever, anywhere.
 * 1 = Doesn't show up, ever, anywhere.
 * 2 = Shows on both main map and minimap. (Selectable on map)
 * 3 = Shows on main map only. (Selectable on map)
 * 4 = Shows on main map only. (Selectable on map)
 * 5 = Shows on minimap only.
 * 6 = Shows on both main map and minimap. (Selectable on map)
 * 7 = Doesn't show up, ever, anywhere.
 * 8 = Shows on both main map and minimap. (Not selectable on map)
 * 9 = Shows on minimap only.
 * 10 = Shows on both main map and minimap. (Not selectable on map)
 * 
 * Anything higher than 10 seems to be exactly the same as 10.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blip
 * @param {EBlipDisplay} display
 */
export function setBlipDisplay(blip: BlipIndex, display: EBlipDisplay | number): void {
	const setBlipDisplay_result = Citizen.invokeNative<void>('0xF55F62DA99DB0C2F', blip, display);
	return setBlipDisplay_result;
}
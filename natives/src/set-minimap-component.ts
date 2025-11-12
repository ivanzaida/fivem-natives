import { EEMinimapComponent, EHudColours } from '@ivanzaida/structures'

/**
 * HUD:SET_MINIMAP_COMPONENT
 *
 * 0xA3EA82ACD0C97C3F

 * 
 * This native is used to colorize certain map components like the army base at the top of the map.
 * p2 appears to be always -1. If p2 is -1 then native wouldn't change the color. See https://gfycat.com/SkinnyPinkChupacabra
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEMinimapComponent} componentId
 * @param {boolean} onOff
 * @param {EHudColours} color
 * @returns {boolean}  
 */
export function setMinimapComponent(componentId: EEMinimapComponent | number, onOff: boolean, color: EHudColours | number = 1): boolean {
	const setMinimapComponent_result = Citizen.invokeNative<boolean>('0xA3EA82ACD0C97C3F', componentId, onOff, color);
	return setMinimapComponent_result;
}
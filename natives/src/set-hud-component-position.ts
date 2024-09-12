import { EEHudComponent } from '@ivanzaida/structures'

/**
 * HUD:SET_HUD_COMPONENT_POSITION
 *
 * 0x36A472841BBC9D4A

 * 
 * ------------------------------------------------------------------
 * @param {EEHudComponent} hudComponent
 * @param {number} posX
 * @param {number} posY
 */
export function setHudComponentPosition(hudComponent: EEHudComponent | number, posX: number, posY: number): void {
	const setHudComponentPosition_result = Citizen.invokeNative<void>('0x36A472841BBC9D4A', hudComponent, posX, posY);
	return setHudComponentPosition_result;
}
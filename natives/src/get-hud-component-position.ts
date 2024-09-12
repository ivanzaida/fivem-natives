import { EEHudComponent, Vector3 } from '@ivanzaida/structures'

/**
 * HUD:GET_HUD_COMPONENT_POSITION
 *
 * 0x93FAFC10F21C7ACA

 * 
 * ------------------------------------------------------------------
 * @param {EEHudComponent} hudComponent
 * @returns {Vector3}  
 */
export function getHudComponentPosition(hudComponent: EEHudComponent | number): Vector3 {
	const getHudComponentPosition_result = Citizen.invokeNative<Vector3>('0x93FAFC10F21C7ACA', hudComponent);
	return getHudComponentPosition_result;
}
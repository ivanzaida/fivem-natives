import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_FADE_OUT_ENTITY
 *
 * 0x091AB029AFE429F2

 * 
 * normal - transition like when your coming out of LSC
 * slow - transition like when you walk into a mission
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} flash
 * @param {boolean} network
 */
export function networkFadeOutEntity(entity: EntityIndex, flash: boolean, network: boolean): void {
	const networkFadeOutEntity_result = Citizen.invokeNative<void>('0x091AB029AFE429F2', entity, flash, network);
	return networkFadeOutEntity_result;
}
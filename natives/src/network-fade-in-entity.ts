import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_FADE_IN_ENTITY
 *
 * 0x6EF982A39E8D08FA

 * 
 * state - 0 does 5 fades
 * state - 1 does 6 fades
 * 
 * p3: setting to 1 made vehicle fade in slower, probably "slow" as per NETWORK_FADE_OUT_ENTITY
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} network
 * @param {boolean} flash
 */
export function networkFadeInEntity(entity: EntityIndex, network: boolean, flash: boolean = true): void {
	const networkFadeInEntity_result = Citizen.invokeNative<void>('0x6EF982A39E8D08FA', entity, network, flash);
	return networkFadeInEntity_result;
}
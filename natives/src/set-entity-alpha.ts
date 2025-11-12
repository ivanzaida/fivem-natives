import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_ALPHA
 *
 * 0xC1DAC4DA85BB166D

 * 
 * Setup an entity to be rendered with alpha,
 * 
 * skin - everything alpha except skin
 * Set entity alpha level. Ranging from 0 to 255 but chnages occur after every 20 percent (after every 51).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} alpha
 * @param {boolean} useSmoothAlpha
 */
export function setEntityAlpha(entity: EntityIndex, alpha: number, useSmoothAlpha: boolean): void {
	const setEntityAlpha_result = Citizen.invokeNative<void>('0xC1DAC4DA85BB166D', entity, alpha, useSmoothAlpha);
	return setEntityAlpha_result;
}
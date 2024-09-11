import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_DISTANCE_CULLING_RADIUS
 *
 * 0XD3A183A3

 * It overrides the default distance culling radius of an entity. Set to `0.0` to reset.If you want to interact with an entity outside of your players' scopes set the radius to a huge number.WARNING: Culling natives are deprecated and have known, [unfixable issues](https://forum.cfx.re/t/issue-with-culling-radius-and-server-side-entities/4900677/4)
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The entity handle to override the distance culling radius.
 * @param {number} radius The new distance culling radius.
 */
export function setEntityDistanceCullingRadius(entity: EntityIndex, radius: number): void {
	const setEntityDistanceCullingRadius_result = Citizen.invokeNative<void>('0XD3A183A3', entity, radius);
	return setEntityDistanceCullingRadius_result;
}
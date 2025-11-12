import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_ENTITY_CAN_BLEND
 *
 * 0xA7B045B3F131EA0F

 * 
 * Sets whether this script entity can use the network blender to smooth position updates from the controlling
 * machine. An example where you may want to disable this would be for an object that will be moved is several
 * small warps, such as a golf player moving between stroke positions
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} canBlend
 */
export function networkSetEntityCanBlend(entity: EntityIndex, canBlend: boolean): void {
	const networkSetEntityCanBlend_result = Citizen.invokeNative<void>('0xA7B045B3F131EA0F', entity, canBlend);
	return networkSetEntityCanBlend_result;
}
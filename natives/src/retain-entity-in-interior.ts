import { EntityIndex, InteriorInstanceIndex } from '@ivanzaida/structures'

/**
 * INTERIOR:RETAIN_ENTITY_IN_INTERIOR
 *
 * 0xD29996371F9BD0FD

 * 
 * Add the given entity to the retain list for the given interior.
 * When the interior is loaded, the retain list will be automatically inserted into it.
 * Entities owned by scripts and in interiors are automatically placed onto the retain list when the interior is unloaded.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {InteriorInstanceIndex} interiorInstance
 */
export function retainEntityInInterior(entity: EntityIndex, interiorInstance: InteriorInstanceIndex): void {
	const retainEntityInInterior_result = Citizen.invokeNative<void>('0xD29996371F9BD0FD', entity, interiorInstance);
	return retainEntityInInterior_result;
}
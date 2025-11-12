import { EntityIndex, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:ADD_BLIP_FOR_ENTITY
 *
 * 0x18E23E031A9B798F

 * 
 * Returns red ( default ) blip attached to entity.
 * 
 * Example:
 * Blip blip; //Put this outside your case or option
 * blip = HUD::ADD_BLIP_FOR_ENTITY(YourPedOrBodyguardName);
 * HUD::SET_BLIP_AS_FRIENDLY(blip, true);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @returns {BlipIndex}  
 */
export function addBlipForEntity(entity: EntityIndex): BlipIndex {
	const addBlipForEntity_result = Citizen.invokeNative<BlipIndex>('0x18E23E031A9B798F', entity);
	return addBlipForEntity_result;
}
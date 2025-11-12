import { EntityIndex, BlipIndex } from '@ivanzaida/structures'

/**
 * CFX:ADD_BLIP_FOR_ENTITY
 *
 * 0x30822554

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
 * @param {EntityIndex} entity The entity handle to create the blip.
 * @returns {BlipIndex}  
 */
export function addBlipForEntity(entity: EntityIndex): BlipIndex {
	const addBlipForEntity_result = Citizen.invokeNative<BlipIndex>('0x30822554', entity);
	return addBlipForEntity_result;
}
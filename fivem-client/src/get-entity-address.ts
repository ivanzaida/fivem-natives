import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_ENTITY_ADDRESS
 *
 * 0x9A3144BC

 * Experimental: This native may be altered or removed in future versions of CitizenFX without warning.Returns the memory address of an entity.This native is intended for singleplayer debugging, and may not be available during multiplayer.
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity The handle of the entity to get the address of.
 * @returns {any}  A pointer containing the memory address of the entity.
 */
export function getEntityAddress(entity: EntityIndex): any {
	const getEntityAddress_result = Citizen.invokeNative<any>('0x9A3144BC', entity);
	return getEntityAddress_result;
}
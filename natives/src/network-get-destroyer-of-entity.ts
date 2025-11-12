import { EntityIndex, IntRef, PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_DESTROYER_OF_ENTITY
 *
 * 0x89DAB370A022F4CC

 * 
 * This command can be used for any physical objects withinthe game (e.g. cars, peds and objects).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {IntRef} typeOfWeapon [Ref]
 * @returns {PlayerIndex}  
 */
export function networkGetDestroyerOfEntity(entity: EntityIndex, typeOfWeapon: IntRef /* ptr */): PlayerIndex {
	const networkGetDestroyerOfEntity_result = Citizen.invokeNative<PlayerIndex>('0x89DAB370A022F4CC', entity, typeOfWeapon.dataView);
	return networkGetDestroyerOfEntity_result;
}
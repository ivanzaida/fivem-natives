import { PlayerIndex, IntRef, EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_ENTITY_KILLER_OF_PLAYER
 *
 * 0x630DDB54213C37C8

 * 
 * -1 means the killer is unknown
 * So you can use these commands on that entity:
 * - IS_ENTITY_A_PED()
 * - IS_ENTITY_A_VEHICLE()
 * And if the entity is a ped you can convert ENTITY_INDEX to PED_INDEX and find if its a player or not:
 * - IS_PED_A_PLAYER()
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @param {IntRef} typeOfWeapon [Ref]
 * @returns {EntityIndex}  
 */
export function networkGetEntityKillerOfPlayer(plr: PlayerIndex, typeOfWeapon: IntRef /* ptr */): EntityIndex {
	const networkGetEntityKillerOfPlayer_result = Citizen.invokeNative<EntityIndex>('0x630DDB54213C37C8', plr, typeOfWeapon.dataView);
	return networkGetEntityKillerOfPlayer_result;
}
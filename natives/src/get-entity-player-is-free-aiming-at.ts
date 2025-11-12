import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * PLAYER:GET_ENTITY_PLAYER_IS_FREE_AIMING_AT
 *
 * 0x66EE98F15844BE4D

 * 
 * Returns TRUE if it found an entity in your crosshair within range of your weapon. Assigns the handle of the target to the entity that you pass it.
 * Returns false if no entity found.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {IntRef} entity [Ref]
 * @returns {boolean}  
 */
export function getEntityPlayerIsFreeAimingAt(player: PlayerIndex, entity: IntRef /* ptr */): boolean {
	const getEntityPlayerIsFreeAimingAt_result = Citizen.invokeNative<boolean>('0x66EE98F15844BE4D', player, entity.dataView);
	return getEntityPlayerIsFreeAimingAt_result;
}
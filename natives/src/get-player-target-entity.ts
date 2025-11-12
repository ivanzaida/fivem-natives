import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_TARGET_ENTITY
 *
 * 0x5266B2AB5BDC4B54

 * 
 * Assigns the handle of locked-on melee target to entity that you pass it.
 * Returns false if no entity found.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {IntRef} entity [Ref]
 * @returns {boolean}  
 */
export function getPlayerTargetEntity(player: PlayerIndex, entity: IntRef /* ptr */): boolean {
	const getPlayerTargetEntity_result = Citizen.invokeNative<boolean>('0x5266B2AB5BDC4B54', player, entity.dataView);
	return getPlayerTargetEntity_result;
}
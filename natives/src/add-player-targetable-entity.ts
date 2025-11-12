import { PlayerIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * PLAYER:ADD_PLAYER_TARGETABLE_ENTITY
 *
 * 0x1DE8C13F47D5A73F

 * 
 * Can only register a MAXIMUM of 5 entities! Please contact Blair Trusler, Paulius Bernotas or David Hynd if you need this increased.
 * This does not guarantee target will be locked-on to, normal validation will still be run (for example CObjects will still need to be flagged as targetable via SET_OBJECT_TARGETTABLE)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {EntityIndex} target
 */
export function addPlayerTargetableEntity(player: PlayerIndex, target: EntityIndex): void {
	const addPlayerTargetableEntity_result = Citizen.invokeNative<void>('0x1DE8C13F47D5A73F', player, target);
	return addPlayerTargetableEntity_result;
}
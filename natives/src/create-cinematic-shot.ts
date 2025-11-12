import { EShotType, EntityIndex } from '@ivanzaida/structures'

/**
 * CAM:CREATE_CINEMATIC_SHOT
 *
 * 0x18FB9B483F8E71AB

 * 
 * SHOT_TYPE - Taken from the list of defined shots
 * Duration of the shot in mili seconds after whch the shot will terminate
 * Attach and look at entities: Depending on the shot you either provide one or two. If incorrectly applied the shot will just not trigger.
 * This command is bound to a specific script so you cannot create one if another script already has
 * The shots will terminate if rendering and the script terminates
 * 
 * hash is always JOAAT("CAMERA_MAN_SHOT") in decompiled scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EShotType} shot
 * @param {number} durationInMilliseconds
 * @param {EntityIndex} attachEntity
 * @param {EntityIndex} lookAtEntity
 */
export function createCinematicShot(shot: EShotType | number, durationInMilliseconds: number, attachEntity: EntityIndex, lookAtEntity: EntityIndex): void {
	const createCinematicShot_result = Citizen.invokeNative<void>('0x18FB9B483F8E71AB', shot, durationInMilliseconds, attachEntity, lookAtEntity);
	return createCinematicShot_result;
}
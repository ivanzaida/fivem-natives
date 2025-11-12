import { EShotType } from '@ivanzaida/structures'

/**
 * CAM:IS_CINEMATIC_SHOT_ACTIVE
 *
 * 0xF52DD7BA03015AB4

 * 
 * Hash is always JOAAT("CAMERA_MAN_SHOT") in decompiled scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EShotType} shot
 * @returns {boolean}  
 */
export function isCinematicShotActive(shot: EShotType | number): boolean {
	const isCinematicShotActive_result = Citizen.invokeNative<boolean>('0xF52DD7BA03015AB4', shot);
	return isCinematicShotActive_result;
}
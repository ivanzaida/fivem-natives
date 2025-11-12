import { RayfireIndex } from '@ivanzaida/structures'

/**
 * OBJECT:GET_RAYFIRE_MAP_OBJECT_ANIM_PHASE
 *
 * 0xEAD3338566510A40

 * 
 * `object`: The des-object handle to get the animation progress from.
 * Return value is a float between 0.0 and 1.0, 0.0 is the beginning of the animation, 1.0 is the end. Value resets to 0.0 instantly after reaching 1.0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {RayfireIndex} rayFireObject
 * @returns {number}  
 */
export function getRayfireMapObjectAnimPhase(rayFireObject: RayfireIndex): number {
	const getRayfireMapObjectAnimPhase_result = Citizen.invokeNative<number>('0xEAD3338566510A40', rayFireObject);
	return getRayfireMapObjectAnimPhase_result;
}
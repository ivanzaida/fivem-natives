import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_HEADING_TOWARDS_POSITION
 *
 * 0xA702E444F81F0A83

 * 
 * Returns true if the ped is heading towards the given point, within +/- of the heading tolerance.
 * checks that the ped's current-heading AND desired-heading are both aligned with the heading to the vPoint
 * This will not take any Z differences into account!
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} pointX
 * @param {number} pointY
 * @param {number} pointZ
 * @param {number} degreesDelta
 * @returns {boolean}  
 */
export function isPedHeadingTowardsPosition(ped: PedIndex, pointX: number, pointY: number, pointZ: number, degreesDelta: number): boolean {
	const isPedHeadingTowardsPosition_result = Citizen.invokeNative<boolean>('0xA702E444F81F0A83', ped, pointX, pointY, pointZ, degreesDelta);
	return isPedHeadingTowardsPosition_result;
}
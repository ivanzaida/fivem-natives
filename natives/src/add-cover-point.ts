import { ECoverpointUsage, ECoverpointHeight, ECoverpointArc, CoverpointIndex } from '@ivanzaida/structures'

/**
 * TASK:ADD_COVER_POINT
 *
 * 0xBE006B266746B58A

 * 
 * NOTE: To take the coordinates of a cover point you'd like to create, do the following:
 * Stand behind the object you'd like to take cover behind.
 * Face towards the object you're standing behind.
 * If you do it this way then the following is true:
 * The heading that is output to your temp_debug.txt is the 'FLOAT direction'
 * Another thing to bear in mind is:
 * When setting COVERPOINT_USAGE, COVUSE_WALLTOLEFT will flip the ped out to his right hand side, and so COVUSE_WALLTORIGHT will flip the ped out to his left.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} direction
 * @param {ECoverpointUsage} usage
 * @param {ECoverpointHeight} height
 * @param {ECoverpointArc} arc
 * @param {boolean} isPriorityToPlayer The player will prefer this cover point over other nearby ones
 * @returns {CoverpointIndex}  
 */
export function addCoverPoint(coorsX: number, coorsY: number, coorsZ: number, direction: number, usage: ECoverpointUsage | number, height: ECoverpointHeight | number, arc: ECoverpointArc | number, isPriorityToPlayer: boolean = false): CoverpointIndex {
	const addCoverPoint_result = Citizen.invokeNative<CoverpointIndex>('0xBE006B266746B58A', coorsX, coorsY, coorsZ, direction, usage, height, arc, isPriorityToPlayer);
	return addCoverPoint_result;
}
import { StuntjumpId } from '@ivanzaida/structures'

/**
 * MISC:ADD_STUNT_JUMP
 *
 * 0xC0DBC28967D7BE19

 * 
 * See description of `ADD_STUNT_JUMP_ANGLED` for detailed info. The only difference really is this one does not have the radius (or angle, not sure) floats parameters for entry and landing zones.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startMinX
 * @param {number} startMinY
 * @param {number} startMinZ
 * @param {number} startMaxX
 * @param {number} startMaxY
 * @param {number} startMaxZ
 * @param {number} endMinX
 * @param {number} endMinY
 * @param {number} endMinZ
 * @param {number} endMaxX
 * @param {number} endMaxY
 * @param {number} endMaxZ
 * @param {number} cameraPosX
 * @param {number} cameraPosY
 * @param {number} cameraPosZ
 * @param {number} reward
 * @param {number} set
 * @param {boolean} camOptional
 * @returns {StuntjumpId}  
 */
export function addStuntJump(startMinX: number, startMinY: number, startMinZ: number, startMaxX: number, startMaxY: number, startMaxZ: number, endMinX: number, endMinY: number, endMinZ: number, endMaxX: number, endMaxY: number, endMaxZ: number, cameraPosX: number, cameraPosY: number, cameraPosZ: number, reward: number, set: number = 0, camOptional: boolean = false): StuntjumpId {
	const addStuntJump_result = Citizen.invokeNative<StuntjumpId>('0xC0DBC28967D7BE19', startMinX, startMinY, startMinZ, startMaxX, startMaxY, startMaxZ, endMinX, endMinY, endMinZ, endMaxX, endMaxY, endMaxZ, cameraPosX, cameraPosY, cameraPosZ, reward, set, camOptional);
	return addStuntJump_result;
}
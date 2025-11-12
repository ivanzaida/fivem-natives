import { EPhysicsRopeType, RopeIndex } from '@ivanzaida/structures'

/**
 * PHYSICS:ADD_ROPE
 *
 * 0x0689621FADCB043F

 * 
 * Creates a rope at the specific position, that extends in the specified direction when not attached to any entities.
 * __
 * 
 * Add_Rope(pos.x,pos.y,pos.z,0.0,0.0,0.0,20.0,4,20.0,1.0,0.0,false,false,false,5.0,false,NULL)
 * 
 * When attached, Position<vector> does not matter
 * When attached, Angle<vector> does not matter
 * 
 * Rope Type:
 * 4 and bellow is a thick rope
 * 5 and up are small metal wires
 * 0 crashes the game
 * 
 * Max_length - Rope is forced to this length, generally best to keep this the same as your rope length.
 * 
 * windingSpeed - Speed the Rope is being winded, using native START_ROPE_WINDING. Set positive for winding and negative for unwinding.
 * 
 * Rigid - If max length is zero, and this is set to false the rope will become rigid (it will force a specific distance, what ever length is, between the objects).
 * 
 * breakable - Whether or not shooting the rope will break it.
 * 
 * unkPtr - unknown ptr, always 0 in orig scripts
 * __
 * 
 * Lengths can be calculated like so:
 * 
 * float distance = abs(x1 - x2) + abs(y1 - y2) + abs(z1 - z2); // Rope length
 * 
 * 
 * NOTES:
 * 
 * Rope does NOT interact with anything you attach it to, in some cases it make interact with the world AFTER it breaks (seems to occur if you set the type to -1).
 * 
 * Rope will sometimes contract and fall to the ground like you'd expect it to, but since it doesn't interact with the world the effect is just jaring.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} rotZ
 * @param {number} len
 * @param {EPhysicsRopeType} ropeType
 * @param {number} initialLen
 * @param {number} minLen
 * @param {number} lengthChangeRate
 * @param {boolean} ppuOnly
 * @param {boolean} collisionOn
 * @param {boolean} lockFromFront
 * @param {number} timeMultiplier
 * @param {boolean} breakable
 * @param {string} materialName
 * @returns {RopeIndex}  
 */
export function addRope(posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, len: number, ropeType: EPhysicsRopeType | number, initialLen: number = 1, minLen: number = 0.5, lengthChangeRate: number = 0.5, ppuOnly: boolean = false, collisionOn: boolean = false, lockFromFront: boolean = true, timeMultiplier: number = 1, breakable: boolean = false, materialName: string = null!): RopeIndex {
	const addRope_result = Citizen.invokeNative<RopeIndex>('0x0689621FADCB043F', posX, posY, posZ, rotX, rotY, rotZ, len, ropeType, initialLen, minLen, lengthChangeRate, ppuOnly, collisionOn, lockFromFront, timeMultiplier, breakable, materialName);
	return addRope_result;
}
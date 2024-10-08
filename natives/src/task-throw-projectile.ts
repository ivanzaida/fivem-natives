import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_THROW_PROJECTILE
 *
 * 0x1BFCFCC8F6D798A6

 * In every case of this native, I've only seen the first parameter passed as 0, although I believe it's a Ped after seeing tasks around it using 0. That's because it's used in a Sequence Task.
 * The last 3 parameters are definitely coordinates after seeing them passed in other scripts, and even being used straight from the player's coordinates.
 * ---
 * It seems that - in the decompiled scripts - this native was used on a ped who was in a vehicle to throw a projectile out the window at the player. This is something any ped will naturally do if they have a throwable and they are doing driveby-combat (although not very accurately).
 * It is possible, however, that this is how SWAT throws smoke grenades at the player when in cover.
 * ----------------------------------------------------
 * The first comment is right it definately is the ped as if you look in script finale_heist2b.c line 59628 in Xbox Scripts atleast you will see task_throw_projectile and the first param is Local_559[2 <14>] if you look above it a little bit line 59622 give_weapon_to_ped uses the same exact param Local_559[2 <14>] and we all know the first param of that native is ped. So it guaranteed has to be ped. 0 just may mean to use your ped by default for some reason.
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} throwAtCoordX
 * @param {number} throwAtCoordY
 * @param {number} throwAtCoordZ
 * @param {EntityIndex} ignoreCollisionEntity
 * @param {boolean} createInvincibleProjectile
 */
export function taskThrowProjectile(ped: PedIndex, throwAtCoordX: number, throwAtCoordY: number, throwAtCoordZ: number, ignoreCollisionEntity: EntityIndex = null!, createInvincibleProjectile: boolean = false): void {
	const taskThrowProjectile_result = Citizen.invokeNative<void>('0x1BFCFCC8F6D798A6', ped, throwAtCoordX, throwAtCoordY, throwAtCoordZ, ignoreCollisionEntity, createInvincibleProjectile);
	return taskThrowProjectile_result;
}
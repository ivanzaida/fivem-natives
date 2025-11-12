import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_INVINCIBLE
 *
 * 0x935364B4448CD584

 * 
 * Sets a ped or an object totally invincible. It doesn't take any kind of damage. Peds will not ragdoll on explosions and the tazer animation won't apply either.
 * 
 * If you use this for a ped and you want Ragdoll to stay enabled, then do:
 * (DWORD )(pedAddress + 0x188) |= (1 << 9);
 * 
 * Use this if you want to get the invincibility status:
 *   bool IsPedInvincible(Ped ped)
 *  {
 *      auto addr = getScriptHandleBaseAddress(ped);
 * 
 *         if (addr)
 *      {
 *          DWORD flag = (DWORD )(addr + 0x188);
 *             return ((flag & (1 << 8)) != 0) || ((flag & (1 << 9)) != 0);
 *       }
 * 
 *        return false;
 *  }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} invincible
 */
export function setEntityInvincible(entity: EntityIndex, invincible: boolean): void {
	const setEntityInvincible_result = Citizen.invokeNative<void>('0x935364B4448CD584', entity, invincible);
	return setEntityInvincible_result;
}
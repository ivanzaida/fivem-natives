export enum EHashableSystem {
	CrcTuningSystem, // DO NOT USE DIRECTLY. Use TRIGGER_TUNING_CRC_HACKER_CHECK wrapper instead
	CrcItemInfoData, // subsystem can be any CItemInfo name hash (includes WEAPON_TYPE weapon hash and CAmmoInfo item hash)
	CrcPickupInfoData, // subsystem has to be a PICKUP_TYPE (hash of a CPickupData)
	CrcExplosionTagData, // subsystem has to be an EXPLOSION_TAG
	CrcDataFileContents, // DO NOT USE DIRECTLY. Use TRIGGER_FILE_CRC_HACKER_CHECK wrapper instead
	CrcGenericFileContents, // DO NOT USE DIRECTLY. Use TRIGGER_FILE_CRC_HACKER_CHECK wrapper instead
	CrcScriptResource, // subsystem has to be a a script name hash (for instance HASH("freemode"))
}
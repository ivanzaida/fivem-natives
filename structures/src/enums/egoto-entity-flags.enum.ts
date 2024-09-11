export enum EEgotoEntityFlags {
	EgotoEntityDefault,
	EgotoEntityNeverSlowForPathLength, // When following an entity, this ped will never slow down because of a short path. Only valid with TASK_GOTO_ENTITY
}
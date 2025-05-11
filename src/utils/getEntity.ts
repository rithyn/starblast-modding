'use strict';
import defineProperties from './defineProperties';
type Game = {
	timer: {
		step: number;
	};
};

type Manager<T> = {
	findById(id: string, includeInactive?: boolean): T | null;
	create(data: Record<string, any>, ...additionalValues: any[]): T;
	insert(entity: T): void;
}

type Entity = {
    id?: any;
    createdStep?: number;
    modding: {
        data: {
            lastUpdatedStep: number;
        };
    };
};

export default function getEntity<T extends Entity>(
    game: Game,
    data: Record<string, any>,
    manager: Manager<T>,
    ...additionalValues: any[]
): T {
    let entity = manager.findById(data?.id, true);
    if (entity == null) {
        entity = manager.create(Object.assign({}, data, entity), ...additionalValues);
        defineProperties(entity, {
            id: data?.id,
            createdStep: Math.max(game.timer.step, 0)
        }, true);
        entity.modding.data.lastUpdatedStep = Math.max(game.timer.step, 0);
        manager.insert(entity);
    }
    return entity;
}

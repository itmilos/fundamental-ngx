import { of } from 'rxjs';

import { DefaultEntityStore } from './entity-store';
import { QueryBuilder } from '../query/query-builder';
import { Type } from '../../../domain/utility'
import { IdentityKey } from '../../../domain/entity';
import { BaseEntity } from '../domain/base-classes/base-entity';
import { EntityCollectionService } from './entity-collection-service';

class User extends BaseEntity<{}>{
    constructor(public id: IdentityKey, public name: string, public age: number) {
        super({ id, name, age });
    }

    get identity(): IdentityKey {
        return this.id;
    }
}

class UserCollectionServiceMock implements Partial<EntityCollectionService<User>> {
    getAll() {
        return of([]);
    }

    getWithQuery(query: any) {
        return of([]);
    }

    getByKey(key: any) {
        return of(null);
    }

    add(entity: User) {
        return of(entity);
    }

    update(entity: User) {
        return of(entity);
    }

    delete(entityOrId: User | string | number) {
        return entityOrId instanceof User ? of(entityOrId.id) : of(entityOrId);
    }
}

class QueryBuilderMock extends QueryBuilder<User> {}

describe('Default Entity Store', () => {
    let entity: Type<User>;
    let store: DefaultEntityStore<User>;
    let collectionService: EntityCollectionService<User>;
    let queryBuilder: QueryBuilder<User>;

    beforeEach(() => {
        entity = User;
        collectionService = new UserCollectionServiceMock() as EntityCollectionService<User>;
        queryBuilder = new QueryBuilderMock(null);
        store = new DefaultEntityStore(entity, collectionService, queryBuilder);
    });

    it('should be created', () => {
        expect(store).toBeTruthy();
    });

    it('should delegate getBy to entityService.getByKey() method', () => {
        const id = '27';
        const result = new User(id, 'John', 35);

        spyOn(collectionService, 'getByKey').and.callFake(() => of(result));

        // check returned result
        store.get(id).subscribe((data) => expect(data.value).toEqual(result.value));

        expect(collectionService.getByKey).toHaveBeenCalledOnceWith(id);
    });

    it('should delegate save to entityService.update() method if entity id exists', () => {
        const user = new User('1', 'John', 35);

        // check returned result
        spyOn(collectionService, 'update').and.callFake(() => of(user));

        store.save(user).subscribe((data) => expect(data).toBe(user));

        expect(collectionService.update).toHaveBeenCalledOnceWith(user);
    });

    it("should delegate save to entityService.add() method if entity id doesn't exist", () => {
        const user = new User(undefined, 'John', 35);

        // check returned result
        spyOn(collectionService, 'add').and.callFake(() => of(user));

        store.save(user).subscribe((data) => expect(data).toBe(user));

        expect(collectionService.add).toHaveBeenCalledOnceWith(user);
    });

    it('should delegate delete to entityService.delete()', () => {
        const user = new User('1', 'John', 35);

        // check returned result
        spyOn(collectionService, 'delete').and.callFake(() => of(user.id));

        store.delete(user).subscribe((data) => expect(data).toBe(user));

        expect(collectionService.delete).toHaveBeenCalledOnceWith(user);
    });

    it('should has queryBuilder reference', () => {
        expect(store.queryBuilder instanceof QueryBuilder).toBeTrue();
    });

    it('should create a new instance by `createEntityInstance`', () => {
        const userInstance = store.createEntityInstance();
        expect(userInstance instanceof User).toBeTrue();
    });
});
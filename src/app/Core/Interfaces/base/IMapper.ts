export abstract class IMapper<E, M> {
    abstract mapFrom(Entity: E): M;
    abstract mapTo(Model: M): E;
    abstract mapToList(ModelList: M[]): E[];
    abstract mapFromList(EntityList: E[]): M[];
}
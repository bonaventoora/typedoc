module td
{
    export class ParameterReflection extends Reflection implements IDefaultValueContainer, ITypeContainer
    {
        parent:SignatureReflection;

        comment:Comment;

        defaultValue:string;

        type:Type;

        isOptional:boolean;


        /**
         * Traverse all potential child reflections of this reflection.
         *
         * The given callback will be invoked for all children, signatures and type parameters
         * attached to this reflection.
         *
         * @param callback  The callback function that should be applied for each child reflection.
         */
        traverse(callback:ITraverseCallback) {
            if (this.type instanceof ReflectionType) {
                callback((<ReflectionType>this.type).declaration, TraverseProperty.TypeLiteral);
            }

            super.traverse(callback);
        }


        /**
         * Return a string representation of this reflection.
         */
        toString() {
            return super.toString() + (this.type ? ':' + this.type.toString() :  '');
        }
    }
}

/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MainCategory
 * 
 */
export type MainCategory = $Result.DefaultSelection<Prisma.$MainCategoryPayload>
/**
 * Model SubCategory
 * 
 */
export type SubCategory = $Result.DefaultSelection<Prisma.$SubCategoryPayload>
/**
 * Model ServiceProvider
 * 
 */
export type ServiceProvider = $Result.DefaultSelection<Prisma.$ServiceProviderPayload>
/**
 * Model ProviderService
 * 
 */
export type ProviderService = $Result.DefaultSelection<Prisma.$ProviderServicePayload>
/**
 * Model ServiceArea
 * 
 */
export type ServiceArea = $Result.DefaultSelection<Prisma.$ServiceAreaPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model VerificationDocument
 * 
 */
export type VerificationDocument = $Result.DefaultSelection<Prisma.$VerificationDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DocumentType: {
  NIC_PHOTO: 'NIC_PHOTO',
  SELFIE: 'SELFIE',
  SERVICE_PROOF: 'SERVICE_PROOF'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const DocumentStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type DocumentStatus = (typeof DocumentStatus)[keyof typeof DocumentStatus]

}

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type DocumentStatus = $Enums.DocumentStatus

export const DocumentStatus: typeof $Enums.DocumentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more MainCategories
 * const mainCategories = await prisma.mainCategory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more MainCategories
   * const mainCategories = await prisma.mainCategory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.mainCategory`: Exposes CRUD operations for the **MainCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MainCategories
    * const mainCategories = await prisma.mainCategory.findMany()
    * ```
    */
  get mainCategory(): Prisma.MainCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subCategory`: Exposes CRUD operations for the **SubCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubCategories
    * const subCategories = await prisma.subCategory.findMany()
    * ```
    */
  get subCategory(): Prisma.SubCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceProvider`: Exposes CRUD operations for the **ServiceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceProviders
    * const serviceProviders = await prisma.serviceProvider.findMany()
    * ```
    */
  get serviceProvider(): Prisma.ServiceProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.providerService`: Exposes CRUD operations for the **ProviderService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProviderServices
    * const providerServices = await prisma.providerService.findMany()
    * ```
    */
  get providerService(): Prisma.ProviderServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceArea`: Exposes CRUD operations for the **ServiceArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceAreas
    * const serviceAreas = await prisma.serviceArea.findMany()
    * ```
    */
  get serviceArea(): Prisma.ServiceAreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationDocument`: Exposes CRUD operations for the **VerificationDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationDocuments
    * const verificationDocuments = await prisma.verificationDocument.findMany()
    * ```
    */
  get verificationDocument(): Prisma.VerificationDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MainCategory: 'MainCategory',
    SubCategory: 'SubCategory',
    ServiceProvider: 'ServiceProvider',
    ProviderService: 'ProviderService',
    ServiceArea: 'ServiceArea',
    Availability: 'Availability',
    VerificationDocument: 'VerificationDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "mainCategory" | "subCategory" | "serviceProvider" | "providerService" | "serviceArea" | "availability" | "verificationDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MainCategory: {
        payload: Prisma.$MainCategoryPayload<ExtArgs>
        fields: Prisma.MainCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MainCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MainCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          findFirst: {
            args: Prisma.MainCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MainCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          findMany: {
            args: Prisma.MainCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>[]
          }
          create: {
            args: Prisma.MainCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          createMany: {
            args: Prisma.MainCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MainCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>[]
          }
          delete: {
            args: Prisma.MainCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          update: {
            args: Prisma.MainCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MainCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MainCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MainCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>[]
          }
          upsert: {
            args: Prisma.MainCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MainCategoryPayload>
          }
          aggregate: {
            args: Prisma.MainCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMainCategory>
          }
          groupBy: {
            args: Prisma.MainCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MainCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MainCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MainCategoryCountAggregateOutputType> | number
          }
        }
      }
      SubCategory: {
        payload: Prisma.$SubCategoryPayload<ExtArgs>
        fields: Prisma.SubCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findFirst: {
            args: Prisma.SubCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          findMany: {
            args: Prisma.SubCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          create: {
            args: Prisma.SubCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          createMany: {
            args: Prisma.SubCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          delete: {
            args: Prisma.SubCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          update: {
            args: Prisma.SubCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          deleteMany: {
            args: Prisma.SubCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>[]
          }
          upsert: {
            args: Prisma.SubCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubCategoryPayload>
          }
          aggregate: {
            args: Prisma.SubCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubCategory>
          }
          groupBy: {
            args: Prisma.SubCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<SubCategoryCountAggregateOutputType> | number
          }
        }
      }
      ServiceProvider: {
        payload: Prisma.$ServiceProviderPayload<ExtArgs>
        fields: Prisma.ServiceProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          findFirst: {
            args: Prisma.ServiceProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          findMany: {
            args: Prisma.ServiceProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          create: {
            args: Prisma.ServiceProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          createMany: {
            args: Prisma.ServiceProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          delete: {
            args: Prisma.ServiceProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          update: {
            args: Prisma.ServiceProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          deleteMany: {
            args: Prisma.ServiceProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          upsert: {
            args: Prisma.ServiceProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          aggregate: {
            args: Prisma.ServiceProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceProvider>
          }
          groupBy: {
            args: Prisma.ServiceProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderCountAggregateOutputType> | number
          }
        }
      }
      ProviderService: {
        payload: Prisma.$ProviderServicePayload<ExtArgs>
        fields: Prisma.ProviderServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          findFirst: {
            args: Prisma.ProviderServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          findMany: {
            args: Prisma.ProviderServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[]
          }
          create: {
            args: Prisma.ProviderServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          createMany: {
            args: Prisma.ProviderServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[]
          }
          delete: {
            args: Prisma.ProviderServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          update: {
            args: Prisma.ProviderServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          deleteMany: {
            args: Prisma.ProviderServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>[]
          }
          upsert: {
            args: Prisma.ProviderServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderServicePayload>
          }
          aggregate: {
            args: Prisma.ProviderServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProviderService>
          }
          groupBy: {
            args: Prisma.ProviderServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderServiceCountAggregateOutputType> | number
          }
        }
      }
      ServiceArea: {
        payload: Prisma.$ServiceAreaPayload<ExtArgs>
        fields: Prisma.ServiceAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          findFirst: {
            args: Prisma.ServiceAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          findMany: {
            args: Prisma.ServiceAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>[]
          }
          create: {
            args: Prisma.ServiceAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          createMany: {
            args: Prisma.ServiceAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>[]
          }
          delete: {
            args: Prisma.ServiceAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          update: {
            args: Prisma.ServiceAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          deleteMany: {
            args: Prisma.ServiceAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceAreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>[]
          }
          upsert: {
            args: Prisma.ServiceAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceAreaPayload>
          }
          aggregate: {
            args: Prisma.ServiceAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceArea>
          }
          groupBy: {
            args: Prisma.ServiceAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceAreaCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceAreaCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      VerificationDocument: {
        payload: Prisma.$VerificationDocumentPayload<ExtArgs>
        fields: Prisma.VerificationDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>
          }
          findFirst: {
            args: Prisma.VerificationDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>
          }
          findMany: {
            args: Prisma.VerificationDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>[]
          }
          create: {
            args: Prisma.VerificationDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>
          }
          createMany: {
            args: Prisma.VerificationDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>[]
          }
          delete: {
            args: Prisma.VerificationDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>
          }
          update: {
            args: Prisma.VerificationDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>[]
          }
          upsert: {
            args: Prisma.VerificationDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationDocumentPayload>
          }
          aggregate: {
            args: Prisma.VerificationDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationDocument>
          }
          groupBy: {
            args: Prisma.VerificationDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    mainCategory?: MainCategoryOmit
    subCategory?: SubCategoryOmit
    serviceProvider?: ServiceProviderOmit
    providerService?: ProviderServiceOmit
    serviceArea?: ServiceAreaOmit
    availability?: AvailabilityOmit
    verificationDocument?: VerificationDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MainCategoryCountOutputType
   */

  export type MainCategoryCountOutputType = {
    subCategories: number
    providerServices: number
  }

  export type MainCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | MainCategoryCountOutputTypeCountSubCategoriesArgs
    providerServices?: boolean | MainCategoryCountOutputTypeCountProviderServicesArgs
  }

  // Custom InputTypes
  /**
   * MainCategoryCountOutputType without action
   */
  export type MainCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategoryCountOutputType
     */
    select?: MainCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MainCategoryCountOutputType without action
   */
  export type MainCategoryCountOutputTypeCountSubCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
  }

  /**
   * MainCategoryCountOutputType without action
   */
  export type MainCategoryCountOutputTypeCountProviderServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServiceWhereInput
  }


  /**
   * Count Type SubCategoryCountOutputType
   */

  export type SubCategoryCountOutputType = {
    providerServices: number
  }

  export type SubCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerServices?: boolean | SubCategoryCountOutputTypeCountProviderServicesArgs
  }

  // Custom InputTypes
  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategoryCountOutputType
     */
    select?: SubCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubCategoryCountOutputType without action
   */
  export type SubCategoryCountOutputTypeCountProviderServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServiceWhereInput
  }


  /**
   * Count Type ServiceProviderCountOutputType
   */

  export type ServiceProviderCountOutputType = {
    providerServices: number
    serviceAreas: number
    verificationDocuments: number
  }

  export type ServiceProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerServices?: boolean | ServiceProviderCountOutputTypeCountProviderServicesArgs
    serviceAreas?: boolean | ServiceProviderCountOutputTypeCountServiceAreasArgs
    verificationDocuments?: boolean | ServiceProviderCountOutputTypeCountVerificationDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProviderCountOutputType
     */
    select?: ServiceProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeCountProviderServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServiceWhereInput
  }

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeCountServiceAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAreaWhereInput
  }

  /**
   * ServiceProviderCountOutputType without action
   */
  export type ServiceProviderCountOutputTypeCountVerificationDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MainCategory
   */

  export type AggregateMainCategory = {
    _count: MainCategoryCountAggregateOutputType | null
    _avg: MainCategoryAvgAggregateOutputType | null
    _sum: MainCategorySumAggregateOutputType | null
    _min: MainCategoryMinAggregateOutputType | null
    _max: MainCategoryMaxAggregateOutputType | null
  }

  export type MainCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type MainCategorySumAggregateOutputType = {
    id: number | null
  }

  export type MainCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    iconUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MainCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    iconUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MainCategoryCountAggregateOutputType = {
    id: number
    name: number
    iconUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type MainCategoryAvgAggregateInputType = {
    id?: true
  }

  export type MainCategorySumAggregateInputType = {
    id?: true
  }

  export type MainCategoryMinAggregateInputType = {
    id?: true
    name?: true
    iconUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type MainCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    iconUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type MainCategoryCountAggregateInputType = {
    id?: true
    name?: true
    iconUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type MainCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainCategory to aggregate.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MainCategories
    **/
    _count?: true | MainCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MainCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MainCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MainCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MainCategoryMaxAggregateInputType
  }

  export type GetMainCategoryAggregateType<T extends MainCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMainCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMainCategory[P]>
      : GetScalarType<T[P], AggregateMainCategory[P]>
  }




  export type MainCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MainCategoryWhereInput
    orderBy?: MainCategoryOrderByWithAggregationInput | MainCategoryOrderByWithAggregationInput[]
    by: MainCategoryScalarFieldEnum[] | MainCategoryScalarFieldEnum
    having?: MainCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MainCategoryCountAggregateInputType | true
    _avg?: MainCategoryAvgAggregateInputType
    _sum?: MainCategorySumAggregateInputType
    _min?: MainCategoryMinAggregateInputType
    _max?: MainCategoryMaxAggregateInputType
  }

  export type MainCategoryGroupByOutputType = {
    id: number
    name: string
    iconUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: MainCategoryCountAggregateOutputType | null
    _avg: MainCategoryAvgAggregateOutputType | null
    _sum: MainCategorySumAggregateOutputType | null
    _min: MainCategoryMinAggregateOutputType | null
    _max: MainCategoryMaxAggregateOutputType | null
  }

  type GetMainCategoryGroupByPayload<T extends MainCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MainCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MainCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MainCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MainCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MainCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    subCategories?: boolean | MainCategory$subCategoriesArgs<ExtArgs>
    providerServices?: boolean | MainCategory$providerServicesArgs<ExtArgs>
    _count?: boolean | MainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mainCategory"]>

  export type MainCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mainCategory"]>

  export type MainCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mainCategory"]>

  export type MainCategorySelectScalar = {
    id?: boolean
    name?: boolean
    iconUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type MainCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iconUrl" | "isActive" | "createdAt", ExtArgs["result"]["mainCategory"]>
  export type MainCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subCategories?: boolean | MainCategory$subCategoriesArgs<ExtArgs>
    providerServices?: boolean | MainCategory$providerServicesArgs<ExtArgs>
    _count?: boolean | MainCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MainCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MainCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MainCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MainCategory"
    objects: {
      subCategories: Prisma.$SubCategoryPayload<ExtArgs>[]
      providerServices: Prisma.$ProviderServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      iconUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["mainCategory"]>
    composites: {}
  }

  type MainCategoryGetPayload<S extends boolean | null | undefined | MainCategoryDefaultArgs> = $Result.GetResult<Prisma.$MainCategoryPayload, S>

  type MainCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MainCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MainCategoryCountAggregateInputType | true
    }

  export interface MainCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MainCategory'], meta: { name: 'MainCategory' } }
    /**
     * Find zero or one MainCategory that matches the filter.
     * @param {MainCategoryFindUniqueArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MainCategoryFindUniqueArgs>(args: SelectSubset<T, MainCategoryFindUniqueArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MainCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MainCategoryFindUniqueOrThrowArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MainCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MainCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindFirstArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MainCategoryFindFirstArgs>(args?: SelectSubset<T, MainCategoryFindFirstArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MainCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindFirstOrThrowArgs} args - Arguments to find a MainCategory
     * @example
     * // Get one MainCategory
     * const mainCategory = await prisma.mainCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MainCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MainCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MainCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MainCategories
     * const mainCategories = await prisma.mainCategory.findMany()
     * 
     * // Get first 10 MainCategories
     * const mainCategories = await prisma.mainCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mainCategoryWithIdOnly = await prisma.mainCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MainCategoryFindManyArgs>(args?: SelectSubset<T, MainCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MainCategory.
     * @param {MainCategoryCreateArgs} args - Arguments to create a MainCategory.
     * @example
     * // Create one MainCategory
     * const MainCategory = await prisma.mainCategory.create({
     *   data: {
     *     // ... data to create a MainCategory
     *   }
     * })
     * 
     */
    create<T extends MainCategoryCreateArgs>(args: SelectSubset<T, MainCategoryCreateArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MainCategories.
     * @param {MainCategoryCreateManyArgs} args - Arguments to create many MainCategories.
     * @example
     * // Create many MainCategories
     * const mainCategory = await prisma.mainCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MainCategoryCreateManyArgs>(args?: SelectSubset<T, MainCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MainCategories and returns the data saved in the database.
     * @param {MainCategoryCreateManyAndReturnArgs} args - Arguments to create many MainCategories.
     * @example
     * // Create many MainCategories
     * const mainCategory = await prisma.mainCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MainCategories and only return the `id`
     * const mainCategoryWithIdOnly = await prisma.mainCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MainCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MainCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MainCategory.
     * @param {MainCategoryDeleteArgs} args - Arguments to delete one MainCategory.
     * @example
     * // Delete one MainCategory
     * const MainCategory = await prisma.mainCategory.delete({
     *   where: {
     *     // ... filter to delete one MainCategory
     *   }
     * })
     * 
     */
    delete<T extends MainCategoryDeleteArgs>(args: SelectSubset<T, MainCategoryDeleteArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MainCategory.
     * @param {MainCategoryUpdateArgs} args - Arguments to update one MainCategory.
     * @example
     * // Update one MainCategory
     * const mainCategory = await prisma.mainCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MainCategoryUpdateArgs>(args: SelectSubset<T, MainCategoryUpdateArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MainCategories.
     * @param {MainCategoryDeleteManyArgs} args - Arguments to filter MainCategories to delete.
     * @example
     * // Delete a few MainCategories
     * const { count } = await prisma.mainCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MainCategoryDeleteManyArgs>(args?: SelectSubset<T, MainCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MainCategories
     * const mainCategory = await prisma.mainCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MainCategoryUpdateManyArgs>(args: SelectSubset<T, MainCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MainCategories and returns the data updated in the database.
     * @param {MainCategoryUpdateManyAndReturnArgs} args - Arguments to update many MainCategories.
     * @example
     * // Update many MainCategories
     * const mainCategory = await prisma.mainCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MainCategories and only return the `id`
     * const mainCategoryWithIdOnly = await prisma.mainCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MainCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, MainCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MainCategory.
     * @param {MainCategoryUpsertArgs} args - Arguments to update or create a MainCategory.
     * @example
     * // Update or create a MainCategory
     * const mainCategory = await prisma.mainCategory.upsert({
     *   create: {
     *     // ... data to create a MainCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MainCategory we want to update
     *   }
     * })
     */
    upsert<T extends MainCategoryUpsertArgs>(args: SelectSubset<T, MainCategoryUpsertArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MainCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryCountArgs} args - Arguments to filter MainCategories to count.
     * @example
     * // Count the number of MainCategories
     * const count = await prisma.mainCategory.count({
     *   where: {
     *     // ... the filter for the MainCategories we want to count
     *   }
     * })
    **/
    count<T extends MainCategoryCountArgs>(
      args?: Subset<T, MainCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MainCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MainCategoryAggregateArgs>(args: Subset<T, MainCategoryAggregateArgs>): Prisma.PrismaPromise<GetMainCategoryAggregateType<T>>

    /**
     * Group by MainCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MainCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MainCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MainCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MainCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MainCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMainCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MainCategory model
   */
  readonly fields: MainCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MainCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MainCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subCategories<T extends MainCategory$subCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, MainCategory$subCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    providerServices<T extends MainCategory$providerServicesArgs<ExtArgs> = {}>(args?: Subset<T, MainCategory$providerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MainCategory model
   */
  interface MainCategoryFieldRefs {
    readonly id: FieldRef<"MainCategory", 'Int'>
    readonly name: FieldRef<"MainCategory", 'String'>
    readonly iconUrl: FieldRef<"MainCategory", 'String'>
    readonly isActive: FieldRef<"MainCategory", 'Boolean'>
    readonly createdAt: FieldRef<"MainCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MainCategory findUnique
   */
  export type MainCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory findUniqueOrThrow
   */
  export type MainCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory findFirst
   */
  export type MainCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainCategories.
     */
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory findFirstOrThrow
   */
  export type MainCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategory to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainCategories.
     */
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory findMany
   */
  export type MainCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MainCategories to fetch.
     */
    where?: MainCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MainCategories to fetch.
     */
    orderBy?: MainCategoryOrderByWithRelationInput | MainCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MainCategories.
     */
    cursor?: MainCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MainCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MainCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MainCategories.
     */
    distinct?: MainCategoryScalarFieldEnum | MainCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory create
   */
  export type MainCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MainCategory.
     */
    data: XOR<MainCategoryCreateInput, MainCategoryUncheckedCreateInput>
  }

  /**
   * MainCategory createMany
   */
  export type MainCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MainCategories.
     */
    data: MainCategoryCreateManyInput | MainCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainCategory createManyAndReturn
   */
  export type MainCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many MainCategories.
     */
    data: MainCategoryCreateManyInput | MainCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MainCategory update
   */
  export type MainCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MainCategory.
     */
    data: XOR<MainCategoryUpdateInput, MainCategoryUncheckedUpdateInput>
    /**
     * Choose, which MainCategory to update.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory updateMany
   */
  export type MainCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MainCategories.
     */
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MainCategories to update
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to update.
     */
    limit?: number
  }

  /**
   * MainCategory updateManyAndReturn
   */
  export type MainCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * The data used to update MainCategories.
     */
    data: XOR<MainCategoryUpdateManyMutationInput, MainCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MainCategories to update
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to update.
     */
    limit?: number
  }

  /**
   * MainCategory upsert
   */
  export type MainCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MainCategory to update in case it exists.
     */
    where: MainCategoryWhereUniqueInput
    /**
     * In case the MainCategory found by the `where` argument doesn't exist, create a new MainCategory with this data.
     */
    create: XOR<MainCategoryCreateInput, MainCategoryUncheckedCreateInput>
    /**
     * In case the MainCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MainCategoryUpdateInput, MainCategoryUncheckedUpdateInput>
  }

  /**
   * MainCategory delete
   */
  export type MainCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
    /**
     * Filter which MainCategory to delete.
     */
    where: MainCategoryWhereUniqueInput
  }

  /**
   * MainCategory deleteMany
   */
  export type MainCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MainCategories to delete
     */
    where?: MainCategoryWhereInput
    /**
     * Limit how many MainCategories to delete.
     */
    limit?: number
  }

  /**
   * MainCategory.subCategories
   */
  export type MainCategory$subCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    cursor?: SubCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * MainCategory.providerServices
   */
  export type MainCategory$providerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    where?: ProviderServiceWhereInput
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    cursor?: ProviderServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * MainCategory without action
   */
  export type MainCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MainCategory
     */
    select?: MainCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MainCategory
     */
    omit?: MainCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MainCategoryInclude<ExtArgs> | null
  }


  /**
   * Model SubCategory
   */

  export type AggregateSubCategory = {
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  export type SubCategoryAvgAggregateOutputType = {
    id: number | null
    mainCategoryId: number | null
  }

  export type SubCategorySumAggregateOutputType = {
    id: number | null
    mainCategoryId: number | null
  }

  export type SubCategoryMinAggregateOutputType = {
    id: number | null
    mainCategoryId: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SubCategoryMaxAggregateOutputType = {
    id: number | null
    mainCategoryId: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type SubCategoryCountAggregateOutputType = {
    id: number
    mainCategoryId: number
    name: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type SubCategoryAvgAggregateInputType = {
    id?: true
    mainCategoryId?: true
  }

  export type SubCategorySumAggregateInputType = {
    id?: true
    mainCategoryId?: true
  }

  export type SubCategoryMinAggregateInputType = {
    id?: true
    mainCategoryId?: true
    name?: true
    isActive?: true
    createdAt?: true
  }

  export type SubCategoryMaxAggregateInputType = {
    id?: true
    mainCategoryId?: true
    name?: true
    isActive?: true
    createdAt?: true
  }

  export type SubCategoryCountAggregateInputType = {
    id?: true
    mainCategoryId?: true
    name?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type SubCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategory to aggregate.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubCategories
    **/
    _count?: true | SubCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubCategoryMaxAggregateInputType
  }

  export type GetSubCategoryAggregateType<T extends SubCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSubCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubCategory[P]>
      : GetScalarType<T[P], AggregateSubCategory[P]>
  }




  export type SubCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubCategoryWhereInput
    orderBy?: SubCategoryOrderByWithAggregationInput | SubCategoryOrderByWithAggregationInput[]
    by: SubCategoryScalarFieldEnum[] | SubCategoryScalarFieldEnum
    having?: SubCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubCategoryCountAggregateInputType | true
    _avg?: SubCategoryAvgAggregateInputType
    _sum?: SubCategorySumAggregateInputType
    _min?: SubCategoryMinAggregateInputType
    _max?: SubCategoryMaxAggregateInputType
  }

  export type SubCategoryGroupByOutputType = {
    id: number
    mainCategoryId: number
    name: string
    isActive: boolean
    createdAt: Date
    _count: SubCategoryCountAggregateOutputType | null
    _avg: SubCategoryAvgAggregateOutputType | null
    _sum: SubCategorySumAggregateOutputType | null
    _min: SubCategoryMinAggregateOutputType | null
    _max: SubCategoryMaxAggregateOutputType | null
  }

  type GetSubCategoryGroupByPayload<T extends SubCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], SubCategoryGroupByOutputType[P]>
        }
      >
    >


  export type SubCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mainCategoryId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    providerServices?: boolean | SubCategory$providerServicesArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mainCategoryId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mainCategoryId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subCategory"]>

  export type SubCategorySelectScalar = {
    id?: boolean
    mainCategoryId?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type SubCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mainCategoryId" | "name" | "isActive" | "createdAt", ExtArgs["result"]["subCategory"]>
  export type SubCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    providerServices?: boolean | SubCategory$providerServicesArgs<ExtArgs>
    _count?: boolean | SubCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
  }
  export type SubCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
  }

  export type $SubCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubCategory"
    objects: {
      mainCategory: Prisma.$MainCategoryPayload<ExtArgs>
      providerServices: Prisma.$ProviderServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mainCategoryId: number
      name: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["subCategory"]>
    composites: {}
  }

  type SubCategoryGetPayload<S extends boolean | null | undefined | SubCategoryDefaultArgs> = $Result.GetResult<Prisma.$SubCategoryPayload, S>

  type SubCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubCategoryCountAggregateInputType | true
    }

  export interface SubCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubCategory'], meta: { name: 'SubCategory' } }
    /**
     * Find zero or one SubCategory that matches the filter.
     * @param {SubCategoryFindUniqueArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubCategoryFindUniqueArgs>(args: SelectSubset<T, SubCategoryFindUniqueArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubCategoryFindUniqueOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SubCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubCategoryFindFirstArgs>(args?: SelectSubset<T, SubCategoryFindFirstArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindFirstOrThrowArgs} args - Arguments to find a SubCategory
     * @example
     * // Get one SubCategory
     * const subCategory = await prisma.subCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SubCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubCategories
     * const subCategories = await prisma.subCategory.findMany()
     * 
     * // Get first 10 SubCategories
     * const subCategories = await prisma.subCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubCategoryFindManyArgs>(args?: SelectSubset<T, SubCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubCategory.
     * @param {SubCategoryCreateArgs} args - Arguments to create a SubCategory.
     * @example
     * // Create one SubCategory
     * const SubCategory = await prisma.subCategory.create({
     *   data: {
     *     // ... data to create a SubCategory
     *   }
     * })
     * 
     */
    create<T extends SubCategoryCreateArgs>(args: SelectSubset<T, SubCategoryCreateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubCategories.
     * @param {SubCategoryCreateManyArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubCategoryCreateManyArgs>(args?: SelectSubset<T, SubCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubCategories and returns the data saved in the database.
     * @param {SubCategoryCreateManyAndReturnArgs} args - Arguments to create many SubCategories.
     * @example
     * // Create many SubCategories
     * const subCategory = await prisma.subCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SubCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubCategory.
     * @param {SubCategoryDeleteArgs} args - Arguments to delete one SubCategory.
     * @example
     * // Delete one SubCategory
     * const SubCategory = await prisma.subCategory.delete({
     *   where: {
     *     // ... filter to delete one SubCategory
     *   }
     * })
     * 
     */
    delete<T extends SubCategoryDeleteArgs>(args: SelectSubset<T, SubCategoryDeleteArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubCategory.
     * @param {SubCategoryUpdateArgs} args - Arguments to update one SubCategory.
     * @example
     * // Update one SubCategory
     * const subCategory = await prisma.subCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubCategoryUpdateArgs>(args: SelectSubset<T, SubCategoryUpdateArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubCategories.
     * @param {SubCategoryDeleteManyArgs} args - Arguments to filter SubCategories to delete.
     * @example
     * // Delete a few SubCategories
     * const { count } = await prisma.subCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubCategoryDeleteManyArgs>(args?: SelectSubset<T, SubCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubCategoryUpdateManyArgs>(args: SelectSubset<T, SubCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubCategories and returns the data updated in the database.
     * @param {SubCategoryUpdateManyAndReturnArgs} args - Arguments to update many SubCategories.
     * @example
     * // Update many SubCategories
     * const subCategory = await prisma.subCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubCategories and only return the `id`
     * const subCategoryWithIdOnly = await prisma.subCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, SubCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubCategory.
     * @param {SubCategoryUpsertArgs} args - Arguments to update or create a SubCategory.
     * @example
     * // Update or create a SubCategory
     * const subCategory = await prisma.subCategory.upsert({
     *   create: {
     *     // ... data to create a SubCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubCategory we want to update
     *   }
     * })
     */
    upsert<T extends SubCategoryUpsertArgs>(args: SelectSubset<T, SubCategoryUpsertArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryCountArgs} args - Arguments to filter SubCategories to count.
     * @example
     * // Count the number of SubCategories
     * const count = await prisma.subCategory.count({
     *   where: {
     *     // ... the filter for the SubCategories we want to count
     *   }
     * })
    **/
    count<T extends SubCategoryCountArgs>(
      args?: Subset<T, SubCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubCategoryAggregateArgs>(args: Subset<T, SubCategoryAggregateArgs>): Prisma.PrismaPromise<GetSubCategoryAggregateType<T>>

    /**
     * Group by SubCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubCategoryGroupByArgs['orderBy'] }
        : { orderBy?: SubCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubCategory model
   */
  readonly fields: SubCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainCategory<T extends MainCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MainCategoryDefaultArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    providerServices<T extends SubCategory$providerServicesArgs<ExtArgs> = {}>(args?: Subset<T, SubCategory$providerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubCategory model
   */
  interface SubCategoryFieldRefs {
    readonly id: FieldRef<"SubCategory", 'Int'>
    readonly mainCategoryId: FieldRef<"SubCategory", 'Int'>
    readonly name: FieldRef<"SubCategory", 'String'>
    readonly isActive: FieldRef<"SubCategory", 'Boolean'>
    readonly createdAt: FieldRef<"SubCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubCategory findUnique
   */
  export type SubCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findUniqueOrThrow
   */
  export type SubCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory findFirst
   */
  export type SubCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findFirstOrThrow
   */
  export type SubCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategory to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory findMany
   */
  export type SubCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter, which SubCategories to fetch.
     */
    where?: SubCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubCategories to fetch.
     */
    orderBy?: SubCategoryOrderByWithRelationInput | SubCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubCategories.
     */
    cursor?: SubCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubCategories.
     */
    distinct?: SubCategoryScalarFieldEnum | SubCategoryScalarFieldEnum[]
  }

  /**
   * SubCategory create
   */
  export type SubCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SubCategory.
     */
    data: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
  }

  /**
   * SubCategory createMany
   */
  export type SubCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubCategory createManyAndReturn
   */
  export type SubCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many SubCategories.
     */
    data: SubCategoryCreateManyInput | SubCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory update
   */
  export type SubCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SubCategory.
     */
    data: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
    /**
     * Choose, which SubCategory to update.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory updateMany
   */
  export type SubCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
  }

  /**
   * SubCategory updateManyAndReturn
   */
  export type SubCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * The data used to update SubCategories.
     */
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyInput>
    /**
     * Filter which SubCategories to update
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubCategory upsert
   */
  export type SubCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SubCategory to update in case it exists.
     */
    where: SubCategoryWhereUniqueInput
    /**
     * In case the SubCategory found by the `where` argument doesn't exist, create a new SubCategory with this data.
     */
    create: XOR<SubCategoryCreateInput, SubCategoryUncheckedCreateInput>
    /**
     * In case the SubCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubCategoryUpdateInput, SubCategoryUncheckedUpdateInput>
  }

  /**
   * SubCategory delete
   */
  export type SubCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
    /**
     * Filter which SubCategory to delete.
     */
    where: SubCategoryWhereUniqueInput
  }

  /**
   * SubCategory deleteMany
   */
  export type SubCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubCategories to delete
     */
    where?: SubCategoryWhereInput
    /**
     * Limit how many SubCategories to delete.
     */
    limit?: number
  }

  /**
   * SubCategory.providerServices
   */
  export type SubCategory$providerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    where?: ProviderServiceWhereInput
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    cursor?: ProviderServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * SubCategory without action
   */
  export type SubCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubCategory
     */
    select?: SubCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubCategory
     */
    omit?: SubCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ServiceProvider
   */

  export type AggregateServiceProvider = {
    _count: ServiceProviderCountAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  export type ServiceProviderMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    mobileNumber: string | null
    mobileVerified: boolean | null
    whatsappNumber: string | null
    email: string | null
    nicNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ServiceProviderMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    mobileNumber: string | null
    mobileVerified: boolean | null
    whatsappNumber: string | null
    email: string | null
    nicNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ServiceProviderCountAggregateOutputType = {
    id: number
    fullName: number
    mobileNumber: number
    mobileVerified: number
    whatsappNumber: number
    email: number
    nicNumber: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ServiceProviderMinAggregateInputType = {
    id?: true
    fullName?: true
    mobileNumber?: true
    mobileVerified?: true
    whatsappNumber?: true
    email?: true
    nicNumber?: true
    isActive?: true
    createdAt?: true
  }

  export type ServiceProviderMaxAggregateInputType = {
    id?: true
    fullName?: true
    mobileNumber?: true
    mobileVerified?: true
    whatsappNumber?: true
    email?: true
    nicNumber?: true
    isActive?: true
    createdAt?: true
  }

  export type ServiceProviderCountAggregateInputType = {
    id?: true
    fullName?: true
    mobileNumber?: true
    mobileVerified?: true
    whatsappNumber?: true
    email?: true
    nicNumber?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProvider to aggregate.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceProviders
    **/
    _count?: true | ServiceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type GetServiceProviderAggregateType<T extends ServiceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceProvider[P]>
      : GetScalarType<T[P], AggregateServiceProvider[P]>
  }




  export type ServiceProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceProviderWhereInput
    orderBy?: ServiceProviderOrderByWithAggregationInput | ServiceProviderOrderByWithAggregationInput[]
    by: ServiceProviderScalarFieldEnum[] | ServiceProviderScalarFieldEnum
    having?: ServiceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceProviderCountAggregateInputType | true
    _min?: ServiceProviderMinAggregateInputType
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type ServiceProviderGroupByOutputType = {
    id: string
    fullName: string
    mobileNumber: string
    mobileVerified: boolean
    whatsappNumber: string | null
    email: string | null
    nicNumber: string
    isActive: boolean
    createdAt: Date
    _count: ServiceProviderCountAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  type GetServiceProviderGroupByPayload<T extends ServiceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
        }
      >
    >


  export type ServiceProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    mobileVerified?: boolean
    whatsappNumber?: boolean
    email?: boolean
    nicNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    providerServices?: boolean | ServiceProvider$providerServicesArgs<ExtArgs>
    serviceAreas?: boolean | ServiceProvider$serviceAreasArgs<ExtArgs>
    availability?: boolean | ServiceProvider$availabilityArgs<ExtArgs>
    verificationDocuments?: boolean | ServiceProvider$verificationDocumentsArgs<ExtArgs>
    _count?: boolean | ServiceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    mobileVerified?: boolean
    whatsappNumber?: boolean
    email?: boolean
    nicNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    mobileVerified?: boolean
    whatsappNumber?: boolean
    email?: boolean
    nicNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectScalar = {
    id?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    mobileVerified?: boolean
    whatsappNumber?: boolean
    email?: boolean
    nicNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ServiceProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "mobileNumber" | "mobileVerified" | "whatsappNumber" | "email" | "nicNumber" | "isActive" | "createdAt", ExtArgs["result"]["serviceProvider"]>
  export type ServiceProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    providerServices?: boolean | ServiceProvider$providerServicesArgs<ExtArgs>
    serviceAreas?: boolean | ServiceProvider$serviceAreasArgs<ExtArgs>
    availability?: boolean | ServiceProvider$availabilityArgs<ExtArgs>
    verificationDocuments?: boolean | ServiceProvider$verificationDocumentsArgs<ExtArgs>
    _count?: boolean | ServiceProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceProvider"
    objects: {
      providerServices: Prisma.$ProviderServicePayload<ExtArgs>[]
      serviceAreas: Prisma.$ServiceAreaPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs> | null
      verificationDocuments: Prisma.$VerificationDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      mobileNumber: string
      mobileVerified: boolean
      whatsappNumber: string | null
      email: string | null
      nicNumber: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["serviceProvider"]>
    composites: {}
  }

  type ServiceProviderGetPayload<S extends boolean | null | undefined | ServiceProviderDefaultArgs> = $Result.GetResult<Prisma.$ServiceProviderPayload, S>

  type ServiceProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceProviderCountAggregateInputType | true
    }

  export interface ServiceProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceProvider'], meta: { name: 'ServiceProvider' } }
    /**
     * Find zero or one ServiceProvider that matches the filter.
     * @param {ServiceProviderFindUniqueArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceProviderFindUniqueArgs>(args: SelectSubset<T, ServiceProviderFindUniqueArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceProviderFindUniqueOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindFirstArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceProviderFindFirstArgs>(args?: SelectSubset<T, ServiceProviderFindFirstArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindFirstOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany()
     * 
     * // Get first 10 ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceProviderFindManyArgs>(args?: SelectSubset<T, ServiceProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceProvider.
     * @param {ServiceProviderCreateArgs} args - Arguments to create a ServiceProvider.
     * @example
     * // Create one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.create({
     *   data: {
     *     // ... data to create a ServiceProvider
     *   }
     * })
     * 
     */
    create<T extends ServiceProviderCreateArgs>(args: SelectSubset<T, ServiceProviderCreateArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceProviders.
     * @param {ServiceProviderCreateManyArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceProviderCreateManyArgs>(args?: SelectSubset<T, ServiceProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceProviders and returns the data saved in the database.
     * @param {ServiceProviderCreateManyAndReturnArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceProviders and only return the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceProvider.
     * @param {ServiceProviderDeleteArgs} args - Arguments to delete one ServiceProvider.
     * @example
     * // Delete one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.delete({
     *   where: {
     *     // ... filter to delete one ServiceProvider
     *   }
     * })
     * 
     */
    delete<T extends ServiceProviderDeleteArgs>(args: SelectSubset<T, ServiceProviderDeleteArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceProvider.
     * @param {ServiceProviderUpdateArgs} args - Arguments to update one ServiceProvider.
     * @example
     * // Update one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceProviderUpdateArgs>(args: SelectSubset<T, ServiceProviderUpdateArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceProviders.
     * @param {ServiceProviderDeleteManyArgs} args - Arguments to filter ServiceProviders to delete.
     * @example
     * // Delete a few ServiceProviders
     * const { count } = await prisma.serviceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceProviderDeleteManyArgs>(args?: SelectSubset<T, ServiceProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceProviderUpdateManyArgs>(args: SelectSubset<T, ServiceProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders and returns the data updated in the database.
     * @param {ServiceProviderUpdateManyAndReturnArgs} args - Arguments to update many ServiceProviders.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceProviders and only return the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceProvider.
     * @param {ServiceProviderUpsertArgs} args - Arguments to update or create a ServiceProvider.
     * @example
     * // Update or create a ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.upsert({
     *   create: {
     *     // ... data to create a ServiceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceProvider we want to update
     *   }
     * })
     */
    upsert<T extends ServiceProviderUpsertArgs>(args: SelectSubset<T, ServiceProviderUpsertArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderCountArgs} args - Arguments to filter ServiceProviders to count.
     * @example
     * // Count the number of ServiceProviders
     * const count = await prisma.serviceProvider.count({
     *   where: {
     *     // ... the filter for the ServiceProviders we want to count
     *   }
     * })
    **/
    count<T extends ServiceProviderCountArgs>(
      args?: Subset<T, ServiceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceProviderAggregateArgs>(args: Subset<T, ServiceProviderAggregateArgs>): Prisma.PrismaPromise<GetServiceProviderAggregateType<T>>

    /**
     * Group by ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceProviderGroupByArgs['orderBy'] }
        : { orderBy?: ServiceProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceProvider model
   */
  readonly fields: ServiceProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    providerServices<T extends ServiceProvider$providerServicesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProvider$providerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serviceAreas<T extends ServiceProvider$serviceAreasArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProvider$serviceAreasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends ServiceProvider$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProvider$availabilityArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    verificationDocuments<T extends ServiceProvider$verificationDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProvider$verificationDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceProvider model
   */
  interface ServiceProviderFieldRefs {
    readonly id: FieldRef<"ServiceProvider", 'String'>
    readonly fullName: FieldRef<"ServiceProvider", 'String'>
    readonly mobileNumber: FieldRef<"ServiceProvider", 'String'>
    readonly mobileVerified: FieldRef<"ServiceProvider", 'Boolean'>
    readonly whatsappNumber: FieldRef<"ServiceProvider", 'String'>
    readonly email: FieldRef<"ServiceProvider", 'String'>
    readonly nicNumber: FieldRef<"ServiceProvider", 'String'>
    readonly isActive: FieldRef<"ServiceProvider", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceProvider findUnique
   */
  export type ServiceProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider findUniqueOrThrow
   */
  export type ServiceProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider findFirst
   */
  export type ServiceProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider findFirstOrThrow
   */
  export type ServiceProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider findMany
   */
  export type ServiceProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceProviders to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider create
   */
  export type ServiceProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceProvider.
     */
    data: XOR<ServiceProviderCreateInput, ServiceProviderUncheckedCreateInput>
  }

  /**
   * ServiceProvider createMany
   */
  export type ServiceProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceProviders.
     */
    data: ServiceProviderCreateManyInput | ServiceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceProvider createManyAndReturn
   */
  export type ServiceProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceProviders.
     */
    data: ServiceProviderCreateManyInput | ServiceProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceProvider update
   */
  export type ServiceProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceProvider.
     */
    data: XOR<ServiceProviderUpdateInput, ServiceProviderUncheckedUpdateInput>
    /**
     * Choose, which ServiceProvider to update.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider updateMany
   */
  export type ServiceProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceProviders.
     */
    data: XOR<ServiceProviderUpdateManyMutationInput, ServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProviders to update
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to update.
     */
    limit?: number
  }

  /**
   * ServiceProvider updateManyAndReturn
   */
  export type ServiceProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to update ServiceProviders.
     */
    data: XOR<ServiceProviderUpdateManyMutationInput, ServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProviders to update
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to update.
     */
    limit?: number
  }

  /**
   * ServiceProvider upsert
   */
  export type ServiceProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceProvider to update in case it exists.
     */
    where: ServiceProviderWhereUniqueInput
    /**
     * In case the ServiceProvider found by the `where` argument doesn't exist, create a new ServiceProvider with this data.
     */
    create: XOR<ServiceProviderCreateInput, ServiceProviderUncheckedCreateInput>
    /**
     * In case the ServiceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceProviderUpdateInput, ServiceProviderUncheckedUpdateInput>
  }

  /**
   * ServiceProvider delete
   */
  export type ServiceProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
    /**
     * Filter which ServiceProvider to delete.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider deleteMany
   */
  export type ServiceProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProviders to delete
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to delete.
     */
    limit?: number
  }

  /**
   * ServiceProvider.providerServices
   */
  export type ServiceProvider$providerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    where?: ProviderServiceWhereInput
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    cursor?: ProviderServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ServiceProvider.serviceAreas
   */
  export type ServiceProvider$serviceAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    where?: ServiceAreaWhereInput
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    cursor?: ServiceAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceProvider.availability
   */
  export type ServiceProvider$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
  }

  /**
   * ServiceProvider.verificationDocuments
   */
  export type ServiceProvider$verificationDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    where?: VerificationDocumentWhereInput
    orderBy?: VerificationDocumentOrderByWithRelationInput | VerificationDocumentOrderByWithRelationInput[]
    cursor?: VerificationDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationDocumentScalarFieldEnum | VerificationDocumentScalarFieldEnum[]
  }

  /**
   * ServiceProvider without action
   */
  export type ServiceProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceProviderInclude<ExtArgs> | null
  }


  /**
   * Model ProviderService
   */

  export type AggregateProviderService = {
    _count: ProviderServiceCountAggregateOutputType | null
    _avg: ProviderServiceAvgAggregateOutputType | null
    _sum: ProviderServiceSumAggregateOutputType | null
    _min: ProviderServiceMinAggregateOutputType | null
    _max: ProviderServiceMaxAggregateOutputType | null
  }

  export type ProviderServiceAvgAggregateOutputType = {
    mainCategoryId: number | null
    subCategoryId: number | null
    experienceYears: number | null
  }

  export type ProviderServiceSumAggregateOutputType = {
    mainCategoryId: number | null
    subCategoryId: number | null
    experienceYears: number | null
  }

  export type ProviderServiceMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    mainCategoryId: number | null
    subCategoryId: number | null
    experienceYears: number | null
    description: string | null
    createdAt: Date | null
  }

  export type ProviderServiceMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    mainCategoryId: number | null
    subCategoryId: number | null
    experienceYears: number | null
    description: string | null
    createdAt: Date | null
  }

  export type ProviderServiceCountAggregateOutputType = {
    id: number
    providerId: number
    mainCategoryId: number
    subCategoryId: number
    experienceYears: number
    description: number
    createdAt: number
    _all: number
  }


  export type ProviderServiceAvgAggregateInputType = {
    mainCategoryId?: true
    subCategoryId?: true
    experienceYears?: true
  }

  export type ProviderServiceSumAggregateInputType = {
    mainCategoryId?: true
    subCategoryId?: true
    experienceYears?: true
  }

  export type ProviderServiceMinAggregateInputType = {
    id?: true
    providerId?: true
    mainCategoryId?: true
    subCategoryId?: true
    experienceYears?: true
    description?: true
    createdAt?: true
  }

  export type ProviderServiceMaxAggregateInputType = {
    id?: true
    providerId?: true
    mainCategoryId?: true
    subCategoryId?: true
    experienceYears?: true
    description?: true
    createdAt?: true
  }

  export type ProviderServiceCountAggregateInputType = {
    id?: true
    providerId?: true
    mainCategoryId?: true
    subCategoryId?: true
    experienceYears?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type ProviderServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderService to aggregate.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProviderServices
    **/
    _count?: true | ProviderServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProviderServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProviderServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderServiceMaxAggregateInputType
  }

  export type GetProviderServiceAggregateType<T extends ProviderServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateProviderService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProviderService[P]>
      : GetScalarType<T[P], AggregateProviderService[P]>
  }




  export type ProviderServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderServiceWhereInput
    orderBy?: ProviderServiceOrderByWithAggregationInput | ProviderServiceOrderByWithAggregationInput[]
    by: ProviderServiceScalarFieldEnum[] | ProviderServiceScalarFieldEnum
    having?: ProviderServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderServiceCountAggregateInputType | true
    _avg?: ProviderServiceAvgAggregateInputType
    _sum?: ProviderServiceSumAggregateInputType
    _min?: ProviderServiceMinAggregateInputType
    _max?: ProviderServiceMaxAggregateInputType
  }

  export type ProviderServiceGroupByOutputType = {
    id: string
    providerId: string
    mainCategoryId: number
    subCategoryId: number
    experienceYears: number | null
    description: string | null
    createdAt: Date
    _count: ProviderServiceCountAggregateOutputType | null
    _avg: ProviderServiceAvgAggregateOutputType | null
    _sum: ProviderServiceSumAggregateOutputType | null
    _min: ProviderServiceMinAggregateOutputType | null
    _max: ProviderServiceMaxAggregateOutputType | null
  }

  type GetProviderServiceGroupByPayload<T extends ProviderServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderServiceGroupByOutputType[P]>
        }
      >
    >


  export type ProviderServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    mainCategoryId?: boolean
    subCategoryId?: boolean
    experienceYears?: boolean
    description?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerService"]>

  export type ProviderServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    mainCategoryId?: boolean
    subCategoryId?: boolean
    experienceYears?: boolean
    description?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerService"]>

  export type ProviderServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    mainCategoryId?: boolean
    subCategoryId?: boolean
    experienceYears?: boolean
    description?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["providerService"]>

  export type ProviderServiceSelectScalar = {
    id?: boolean
    providerId?: boolean
    mainCategoryId?: boolean
    subCategoryId?: boolean
    experienceYears?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type ProviderServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "mainCategoryId" | "subCategoryId" | "experienceYears" | "description" | "createdAt", ExtArgs["result"]["providerService"]>
  export type ProviderServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }
  export type ProviderServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }
  export type ProviderServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
    mainCategory?: boolean | MainCategoryDefaultArgs<ExtArgs>
    subCategory?: boolean | SubCategoryDefaultArgs<ExtArgs>
  }

  export type $ProviderServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProviderService"
    objects: {
      provider: Prisma.$ServiceProviderPayload<ExtArgs>
      mainCategory: Prisma.$MainCategoryPayload<ExtArgs>
      subCategory: Prisma.$SubCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      mainCategoryId: number
      subCategoryId: number
      experienceYears: number | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["providerService"]>
    composites: {}
  }

  type ProviderServiceGetPayload<S extends boolean | null | undefined | ProviderServiceDefaultArgs> = $Result.GetResult<Prisma.$ProviderServicePayload, S>

  type ProviderServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderServiceCountAggregateInputType | true
    }

  export interface ProviderServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProviderService'], meta: { name: 'ProviderService' } }
    /**
     * Find zero or one ProviderService that matches the filter.
     * @param {ProviderServiceFindUniqueArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderServiceFindUniqueArgs>(args: SelectSubset<T, ProviderServiceFindUniqueArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProviderService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderServiceFindUniqueOrThrowArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindFirstArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderServiceFindFirstArgs>(args?: SelectSubset<T, ProviderServiceFindFirstArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProviderService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindFirstOrThrowArgs} args - Arguments to find a ProviderService
     * @example
     * // Get one ProviderService
     * const providerService = await prisma.providerService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProviderServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProviderServices
     * const providerServices = await prisma.providerService.findMany()
     * 
     * // Get first 10 ProviderServices
     * const providerServices = await prisma.providerService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderServiceFindManyArgs>(args?: SelectSubset<T, ProviderServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProviderService.
     * @param {ProviderServiceCreateArgs} args - Arguments to create a ProviderService.
     * @example
     * // Create one ProviderService
     * const ProviderService = await prisma.providerService.create({
     *   data: {
     *     // ... data to create a ProviderService
     *   }
     * })
     * 
     */
    create<T extends ProviderServiceCreateArgs>(args: SelectSubset<T, ProviderServiceCreateArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProviderServices.
     * @param {ProviderServiceCreateManyArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerService = await prisma.providerService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderServiceCreateManyArgs>(args?: SelectSubset<T, ProviderServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProviderServices and returns the data saved in the database.
     * @param {ProviderServiceCreateManyAndReturnArgs} args - Arguments to create many ProviderServices.
     * @example
     * // Create many ProviderServices
     * const providerService = await prisma.providerService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProviderServices and only return the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProviderService.
     * @param {ProviderServiceDeleteArgs} args - Arguments to delete one ProviderService.
     * @example
     * // Delete one ProviderService
     * const ProviderService = await prisma.providerService.delete({
     *   where: {
     *     // ... filter to delete one ProviderService
     *   }
     * })
     * 
     */
    delete<T extends ProviderServiceDeleteArgs>(args: SelectSubset<T, ProviderServiceDeleteArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProviderService.
     * @param {ProviderServiceUpdateArgs} args - Arguments to update one ProviderService.
     * @example
     * // Update one ProviderService
     * const providerService = await prisma.providerService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderServiceUpdateArgs>(args: SelectSubset<T, ProviderServiceUpdateArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProviderServices.
     * @param {ProviderServiceDeleteManyArgs} args - Arguments to filter ProviderServices to delete.
     * @example
     * // Delete a few ProviderServices
     * const { count } = await prisma.providerService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderServiceDeleteManyArgs>(args?: SelectSubset<T, ProviderServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProviderServices
     * const providerService = await prisma.providerService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderServiceUpdateManyArgs>(args: SelectSubset<T, ProviderServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProviderServices and returns the data updated in the database.
     * @param {ProviderServiceUpdateManyAndReturnArgs} args - Arguments to update many ProviderServices.
     * @example
     * // Update many ProviderServices
     * const providerService = await prisma.providerService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProviderServices and only return the `id`
     * const providerServiceWithIdOnly = await prisma.providerService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProviderService.
     * @param {ProviderServiceUpsertArgs} args - Arguments to update or create a ProviderService.
     * @example
     * // Update or create a ProviderService
     * const providerService = await prisma.providerService.upsert({
     *   create: {
     *     // ... data to create a ProviderService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProviderService we want to update
     *   }
     * })
     */
    upsert<T extends ProviderServiceUpsertArgs>(args: SelectSubset<T, ProviderServiceUpsertArgs<ExtArgs>>): Prisma__ProviderServiceClient<$Result.GetResult<Prisma.$ProviderServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProviderServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceCountArgs} args - Arguments to filter ProviderServices to count.
     * @example
     * // Count the number of ProviderServices
     * const count = await prisma.providerService.count({
     *   where: {
     *     // ... the filter for the ProviderServices we want to count
     *   }
     * })
    **/
    count<T extends ProviderServiceCountArgs>(
      args?: Subset<T, ProviderServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProviderService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProviderServiceAggregateArgs>(args: Subset<T, ProviderServiceAggregateArgs>): Prisma.PrismaPromise<GetProviderServiceAggregateType<T>>

    /**
     * Group by ProviderService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProviderServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderServiceGroupByArgs['orderBy'] }
        : { orderBy?: ProviderServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProviderServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProviderService model
   */
  readonly fields: ProviderServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProviderService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ServiceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProviderDefaultArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mainCategory<T extends MainCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MainCategoryDefaultArgs<ExtArgs>>): Prisma__MainCategoryClient<$Result.GetResult<Prisma.$MainCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subCategory<T extends SubCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubCategoryDefaultArgs<ExtArgs>>): Prisma__SubCategoryClient<$Result.GetResult<Prisma.$SubCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProviderService model
   */
  interface ProviderServiceFieldRefs {
    readonly id: FieldRef<"ProviderService", 'String'>
    readonly providerId: FieldRef<"ProviderService", 'String'>
    readonly mainCategoryId: FieldRef<"ProviderService", 'Int'>
    readonly subCategoryId: FieldRef<"ProviderService", 'Int'>
    readonly experienceYears: FieldRef<"ProviderService", 'Int'>
    readonly description: FieldRef<"ProviderService", 'String'>
    readonly createdAt: FieldRef<"ProviderService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProviderService findUnique
   */
  export type ProviderServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService findUniqueOrThrow
   */
  export type ProviderServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService findFirst
   */
  export type ProviderServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ProviderService findFirstOrThrow
   */
  export type ProviderServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderService to fetch.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ProviderService findMany
   */
  export type ProviderServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter, which ProviderServices to fetch.
     */
    where?: ProviderServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProviderServices to fetch.
     */
    orderBy?: ProviderServiceOrderByWithRelationInput | ProviderServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProviderServices.
     */
    cursor?: ProviderServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProviderServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProviderServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProviderServices.
     */
    distinct?: ProviderServiceScalarFieldEnum | ProviderServiceScalarFieldEnum[]
  }

  /**
   * ProviderService create
   */
  export type ProviderServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProviderService.
     */
    data: XOR<ProviderServiceCreateInput, ProviderServiceUncheckedCreateInput>
  }

  /**
   * ProviderService createMany
   */
  export type ProviderServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServiceCreateManyInput | ProviderServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProviderService createManyAndReturn
   */
  export type ProviderServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * The data used to create many ProviderServices.
     */
    data: ProviderServiceCreateManyInput | ProviderServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderService update
   */
  export type ProviderServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProviderService.
     */
    data: XOR<ProviderServiceUpdateInput, ProviderServiceUncheckedUpdateInput>
    /**
     * Choose, which ProviderService to update.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService updateMany
   */
  export type ProviderServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProviderServices.
     */
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProviderServices to update
     */
    where?: ProviderServiceWhereInput
    /**
     * Limit how many ProviderServices to update.
     */
    limit?: number
  }

  /**
   * ProviderService updateManyAndReturn
   */
  export type ProviderServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * The data used to update ProviderServices.
     */
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyInput>
    /**
     * Filter which ProviderServices to update
     */
    where?: ProviderServiceWhereInput
    /**
     * Limit how many ProviderServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProviderService upsert
   */
  export type ProviderServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProviderService to update in case it exists.
     */
    where: ProviderServiceWhereUniqueInput
    /**
     * In case the ProviderService found by the `where` argument doesn't exist, create a new ProviderService with this data.
     */
    create: XOR<ProviderServiceCreateInput, ProviderServiceUncheckedCreateInput>
    /**
     * In case the ProviderService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderServiceUpdateInput, ProviderServiceUncheckedUpdateInput>
  }

  /**
   * ProviderService delete
   */
  export type ProviderServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
    /**
     * Filter which ProviderService to delete.
     */
    where: ProviderServiceWhereUniqueInput
  }

  /**
   * ProviderService deleteMany
   */
  export type ProviderServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProviderServices to delete
     */
    where?: ProviderServiceWhereInput
    /**
     * Limit how many ProviderServices to delete.
     */
    limit?: number
  }

  /**
   * ProviderService without action
   */
  export type ProviderServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderService
     */
    select?: ProviderServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProviderService
     */
    omit?: ProviderServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderServiceInclude<ExtArgs> | null
  }


  /**
   * Model ServiceArea
   */

  export type AggregateServiceArea = {
    _count: ServiceAreaCountAggregateOutputType | null
    _avg: ServiceAreaAvgAggregateOutputType | null
    _sum: ServiceAreaSumAggregateOutputType | null
    _min: ServiceAreaMinAggregateOutputType | null
    _max: ServiceAreaMaxAggregateOutputType | null
  }

  export type ServiceAreaAvgAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type ServiceAreaSumAggregateOutputType = {
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type ServiceAreaMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    town: string | null
    areaDescription: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    address: string | null
    createdAt: Date | null
  }

  export type ServiceAreaMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    town: string | null
    areaDescription: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    address: string | null
    createdAt: Date | null
  }

  export type ServiceAreaCountAggregateOutputType = {
    id: number
    providerId: number
    town: number
    areaDescription: number
    latitude: number
    longitude: number
    address: number
    createdAt: number
    _all: number
  }


  export type ServiceAreaAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ServiceAreaSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type ServiceAreaMinAggregateInputType = {
    id?: true
    providerId?: true
    town?: true
    areaDescription?: true
    latitude?: true
    longitude?: true
    address?: true
    createdAt?: true
  }

  export type ServiceAreaMaxAggregateInputType = {
    id?: true
    providerId?: true
    town?: true
    areaDescription?: true
    latitude?: true
    longitude?: true
    address?: true
    createdAt?: true
  }

  export type ServiceAreaCountAggregateInputType = {
    id?: true
    providerId?: true
    town?: true
    areaDescription?: true
    latitude?: true
    longitude?: true
    address?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceArea to aggregate.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceAreas
    **/
    _count?: true | ServiceAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceAreaMaxAggregateInputType
  }

  export type GetServiceAreaAggregateType<T extends ServiceAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceArea[P]>
      : GetScalarType<T[P], AggregateServiceArea[P]>
  }




  export type ServiceAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceAreaWhereInput
    orderBy?: ServiceAreaOrderByWithAggregationInput | ServiceAreaOrderByWithAggregationInput[]
    by: ServiceAreaScalarFieldEnum[] | ServiceAreaScalarFieldEnum
    having?: ServiceAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceAreaCountAggregateInputType | true
    _avg?: ServiceAreaAvgAggregateInputType
    _sum?: ServiceAreaSumAggregateInputType
    _min?: ServiceAreaMinAggregateInputType
    _max?: ServiceAreaMaxAggregateInputType
  }

  export type ServiceAreaGroupByOutputType = {
    id: string
    providerId: string
    town: string
    areaDescription: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    address: string | null
    createdAt: Date
    _count: ServiceAreaCountAggregateOutputType | null
    _avg: ServiceAreaAvgAggregateOutputType | null
    _sum: ServiceAreaSumAggregateOutputType | null
    _min: ServiceAreaMinAggregateOutputType | null
    _max: ServiceAreaMaxAggregateOutputType | null
  }

  type GetServiceAreaGroupByPayload<T extends ServiceAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceAreaGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceAreaGroupByOutputType[P]>
        }
      >
    >


  export type ServiceAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    town?: boolean
    areaDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceArea"]>

  export type ServiceAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    town?: boolean
    areaDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceArea"]>

  export type ServiceAreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    town?: boolean
    areaDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    createdAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceArea"]>

  export type ServiceAreaSelectScalar = {
    id?: boolean
    providerId?: boolean
    town?: boolean
    areaDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    createdAt?: boolean
  }

  export type ServiceAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "town" | "areaDescription" | "latitude" | "longitude" | "address" | "createdAt", ExtArgs["result"]["serviceArea"]>
  export type ServiceAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type ServiceAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type ServiceAreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }

  export type $ServiceAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceArea"
    objects: {
      provider: Prisma.$ServiceProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      town: string
      areaDescription: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      address: string | null
      createdAt: Date
    }, ExtArgs["result"]["serviceArea"]>
    composites: {}
  }

  type ServiceAreaGetPayload<S extends boolean | null | undefined | ServiceAreaDefaultArgs> = $Result.GetResult<Prisma.$ServiceAreaPayload, S>

  type ServiceAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceAreaCountAggregateInputType | true
    }

  export interface ServiceAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceArea'], meta: { name: 'ServiceArea' } }
    /**
     * Find zero or one ServiceArea that matches the filter.
     * @param {ServiceAreaFindUniqueArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceAreaFindUniqueArgs>(args: SelectSubset<T, ServiceAreaFindUniqueArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceAreaFindUniqueOrThrowArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindFirstArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceAreaFindFirstArgs>(args?: SelectSubset<T, ServiceAreaFindFirstArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindFirstOrThrowArgs} args - Arguments to find a ServiceArea
     * @example
     * // Get one ServiceArea
     * const serviceArea = await prisma.serviceArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceAreas
     * const serviceAreas = await prisma.serviceArea.findMany()
     * 
     * // Get first 10 ServiceAreas
     * const serviceAreas = await prisma.serviceArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceAreaWithIdOnly = await prisma.serviceArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceAreaFindManyArgs>(args?: SelectSubset<T, ServiceAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceArea.
     * @param {ServiceAreaCreateArgs} args - Arguments to create a ServiceArea.
     * @example
     * // Create one ServiceArea
     * const ServiceArea = await prisma.serviceArea.create({
     *   data: {
     *     // ... data to create a ServiceArea
     *   }
     * })
     * 
     */
    create<T extends ServiceAreaCreateArgs>(args: SelectSubset<T, ServiceAreaCreateArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceAreas.
     * @param {ServiceAreaCreateManyArgs} args - Arguments to create many ServiceAreas.
     * @example
     * // Create many ServiceAreas
     * const serviceArea = await prisma.serviceArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceAreaCreateManyArgs>(args?: SelectSubset<T, ServiceAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceAreas and returns the data saved in the database.
     * @param {ServiceAreaCreateManyAndReturnArgs} args - Arguments to create many ServiceAreas.
     * @example
     * // Create many ServiceAreas
     * const serviceArea = await prisma.serviceArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceAreas and only return the `id`
     * const serviceAreaWithIdOnly = await prisma.serviceArea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceArea.
     * @param {ServiceAreaDeleteArgs} args - Arguments to delete one ServiceArea.
     * @example
     * // Delete one ServiceArea
     * const ServiceArea = await prisma.serviceArea.delete({
     *   where: {
     *     // ... filter to delete one ServiceArea
     *   }
     * })
     * 
     */
    delete<T extends ServiceAreaDeleteArgs>(args: SelectSubset<T, ServiceAreaDeleteArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceArea.
     * @param {ServiceAreaUpdateArgs} args - Arguments to update one ServiceArea.
     * @example
     * // Update one ServiceArea
     * const serviceArea = await prisma.serviceArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceAreaUpdateArgs>(args: SelectSubset<T, ServiceAreaUpdateArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceAreas.
     * @param {ServiceAreaDeleteManyArgs} args - Arguments to filter ServiceAreas to delete.
     * @example
     * // Delete a few ServiceAreas
     * const { count } = await prisma.serviceArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceAreaDeleteManyArgs>(args?: SelectSubset<T, ServiceAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceAreas
     * const serviceArea = await prisma.serviceArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceAreaUpdateManyArgs>(args: SelectSubset<T, ServiceAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceAreas and returns the data updated in the database.
     * @param {ServiceAreaUpdateManyAndReturnArgs} args - Arguments to update many ServiceAreas.
     * @example
     * // Update many ServiceAreas
     * const serviceArea = await prisma.serviceArea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceAreas and only return the `id`
     * const serviceAreaWithIdOnly = await prisma.serviceArea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceAreaUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceAreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceArea.
     * @param {ServiceAreaUpsertArgs} args - Arguments to update or create a ServiceArea.
     * @example
     * // Update or create a ServiceArea
     * const serviceArea = await prisma.serviceArea.upsert({
     *   create: {
     *     // ... data to create a ServiceArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceArea we want to update
     *   }
     * })
     */
    upsert<T extends ServiceAreaUpsertArgs>(args: SelectSubset<T, ServiceAreaUpsertArgs<ExtArgs>>): Prisma__ServiceAreaClient<$Result.GetResult<Prisma.$ServiceAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaCountArgs} args - Arguments to filter ServiceAreas to count.
     * @example
     * // Count the number of ServiceAreas
     * const count = await prisma.serviceArea.count({
     *   where: {
     *     // ... the filter for the ServiceAreas we want to count
     *   }
     * })
    **/
    count<T extends ServiceAreaCountArgs>(
      args?: Subset<T, ServiceAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAreaAggregateArgs>(args: Subset<T, ServiceAreaAggregateArgs>): Prisma.PrismaPromise<GetServiceAreaAggregateType<T>>

    /**
     * Group by ServiceArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceAreaGroupByArgs['orderBy'] }
        : { orderBy?: ServiceAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceArea model
   */
  readonly fields: ServiceAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ServiceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProviderDefaultArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceArea model
   */
  interface ServiceAreaFieldRefs {
    readonly id: FieldRef<"ServiceArea", 'String'>
    readonly providerId: FieldRef<"ServiceArea", 'String'>
    readonly town: FieldRef<"ServiceArea", 'String'>
    readonly areaDescription: FieldRef<"ServiceArea", 'String'>
    readonly latitude: FieldRef<"ServiceArea", 'Decimal'>
    readonly longitude: FieldRef<"ServiceArea", 'Decimal'>
    readonly address: FieldRef<"ServiceArea", 'String'>
    readonly createdAt: FieldRef<"ServiceArea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceArea findUnique
   */
  export type ServiceAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea findUniqueOrThrow
   */
  export type ServiceAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea findFirst
   */
  export type ServiceAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAreas.
     */
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea findFirstOrThrow
   */
  export type ServiceAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceArea to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAreas.
     */
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea findMany
   */
  export type ServiceAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter, which ServiceAreas to fetch.
     */
    where?: ServiceAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceAreas to fetch.
     */
    orderBy?: ServiceAreaOrderByWithRelationInput | ServiceAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceAreas.
     */
    cursor?: ServiceAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceAreas.
     */
    distinct?: ServiceAreaScalarFieldEnum | ServiceAreaScalarFieldEnum[]
  }

  /**
   * ServiceArea create
   */
  export type ServiceAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceArea.
     */
    data: XOR<ServiceAreaCreateInput, ServiceAreaUncheckedCreateInput>
  }

  /**
   * ServiceArea createMany
   */
  export type ServiceAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceAreas.
     */
    data: ServiceAreaCreateManyInput | ServiceAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceArea createManyAndReturn
   */
  export type ServiceAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceAreas.
     */
    data: ServiceAreaCreateManyInput | ServiceAreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceArea update
   */
  export type ServiceAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceArea.
     */
    data: XOR<ServiceAreaUpdateInput, ServiceAreaUncheckedUpdateInput>
    /**
     * Choose, which ServiceArea to update.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea updateMany
   */
  export type ServiceAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceAreas.
     */
    data: XOR<ServiceAreaUpdateManyMutationInput, ServiceAreaUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAreas to update
     */
    where?: ServiceAreaWhereInput
    /**
     * Limit how many ServiceAreas to update.
     */
    limit?: number
  }

  /**
   * ServiceArea updateManyAndReturn
   */
  export type ServiceAreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * The data used to update ServiceAreas.
     */
    data: XOR<ServiceAreaUpdateManyMutationInput, ServiceAreaUncheckedUpdateManyInput>
    /**
     * Filter which ServiceAreas to update
     */
    where?: ServiceAreaWhereInput
    /**
     * Limit how many ServiceAreas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceArea upsert
   */
  export type ServiceAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceArea to update in case it exists.
     */
    where: ServiceAreaWhereUniqueInput
    /**
     * In case the ServiceArea found by the `where` argument doesn't exist, create a new ServiceArea with this data.
     */
    create: XOR<ServiceAreaCreateInput, ServiceAreaUncheckedCreateInput>
    /**
     * In case the ServiceArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceAreaUpdateInput, ServiceAreaUncheckedUpdateInput>
  }

  /**
   * ServiceArea delete
   */
  export type ServiceAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
    /**
     * Filter which ServiceArea to delete.
     */
    where: ServiceAreaWhereUniqueInput
  }

  /**
   * ServiceArea deleteMany
   */
  export type ServiceAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceAreas to delete
     */
    where?: ServiceAreaWhereInput
    /**
     * Limit how many ServiceAreas to delete.
     */
    limit?: number
  }

  /**
   * ServiceArea without action
   */
  export type ServiceAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceArea
     */
    select?: ServiceAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceArea
     */
    omit?: ServiceAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceAreaInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    availableDays: string | null
    availableFrom: Date | null
    availableTo: Date | null
    is24_7: boolean | null
    isAvailableNow: boolean | null
    updatedAt: Date | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    availableDays: string | null
    availableFrom: Date | null
    availableTo: Date | null
    is24_7: boolean | null
    isAvailableNow: boolean | null
    updatedAt: Date | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    providerId: number
    availableDays: number
    availableFrom: number
    availableTo: number
    is24_7: number
    isAvailableNow: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityMinAggregateInputType = {
    id?: true
    providerId?: true
    availableDays?: true
    availableFrom?: true
    availableTo?: true
    is24_7?: true
    isAvailableNow?: true
    updatedAt?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    providerId?: true
    availableDays?: true
    availableFrom?: true
    availableTo?: true
    is24_7?: true
    isAvailableNow?: true
    updatedAt?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    providerId?: true
    availableDays?: true
    availableFrom?: true
    availableTo?: true
    is24_7?: true
    isAvailableNow?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    providerId: string
    availableDays: string | null
    availableFrom: Date | null
    availableTo: Date | null
    is24_7: boolean
    isAvailableNow: boolean
    updatedAt: Date
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    availableDays?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    availableDays?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    availableDays?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    providerId?: boolean
    availableDays?: boolean
    availableFrom?: boolean
    availableTo?: boolean
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "availableDays" | "availableFrom" | "availableTo" | "is24_7" | "isAvailableNow" | "updatedAt", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      provider: Prisma.$ServiceProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      availableDays: string | null
      availableFrom: Date | null
      availableTo: Date | null
      is24_7: boolean
      isAvailableNow: boolean
      updatedAt: Date
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ServiceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProviderDefaultArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly providerId: FieldRef<"Availability", 'String'>
    readonly availableDays: FieldRef<"Availability", 'String'>
    readonly availableFrom: FieldRef<"Availability", 'DateTime'>
    readonly availableTo: FieldRef<"Availability", 'DateTime'>
    readonly is24_7: FieldRef<"Availability", 'Boolean'>
    readonly isAvailableNow: FieldRef<"Availability", 'Boolean'>
    readonly updatedAt: FieldRef<"Availability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model VerificationDocument
   */

  export type AggregateVerificationDocument = {
    _count: VerificationDocumentCountAggregateOutputType | null
    _min: VerificationDocumentMinAggregateOutputType | null
    _max: VerificationDocumentMaxAggregateOutputType | null
  }

  export type VerificationDocumentMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    documentType: $Enums.DocumentType | null
    bucketKey: string | null
    status: $Enums.DocumentStatus | null
    uploadedAt: Date | null
  }

  export type VerificationDocumentMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    documentType: $Enums.DocumentType | null
    bucketKey: string | null
    status: $Enums.DocumentStatus | null
    uploadedAt: Date | null
  }

  export type VerificationDocumentCountAggregateOutputType = {
    id: number
    providerId: number
    documentType: number
    bucketKey: number
    status: number
    uploadedAt: number
    _all: number
  }


  export type VerificationDocumentMinAggregateInputType = {
    id?: true
    providerId?: true
    documentType?: true
    bucketKey?: true
    status?: true
    uploadedAt?: true
  }

  export type VerificationDocumentMaxAggregateInputType = {
    id?: true
    providerId?: true
    documentType?: true
    bucketKey?: true
    status?: true
    uploadedAt?: true
  }

  export type VerificationDocumentCountAggregateInputType = {
    id?: true
    providerId?: true
    documentType?: true
    bucketKey?: true
    status?: true
    uploadedAt?: true
    _all?: true
  }

  export type VerificationDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationDocument to aggregate.
     */
    where?: VerificationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: VerificationDocumentOrderByWithRelationInput | VerificationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationDocuments
    **/
    _count?: true | VerificationDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationDocumentMaxAggregateInputType
  }

  export type GetVerificationDocumentAggregateType<T extends VerificationDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationDocument[P]>
      : GetScalarType<T[P], AggregateVerificationDocument[P]>
  }




  export type VerificationDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationDocumentWhereInput
    orderBy?: VerificationDocumentOrderByWithAggregationInput | VerificationDocumentOrderByWithAggregationInput[]
    by: VerificationDocumentScalarFieldEnum[] | VerificationDocumentScalarFieldEnum
    having?: VerificationDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationDocumentCountAggregateInputType | true
    _min?: VerificationDocumentMinAggregateInputType
    _max?: VerificationDocumentMaxAggregateInputType
  }

  export type VerificationDocumentGroupByOutputType = {
    id: string
    providerId: string
    documentType: $Enums.DocumentType
    bucketKey: string
    status: $Enums.DocumentStatus
    uploadedAt: Date
    _count: VerificationDocumentCountAggregateOutputType | null
    _min: VerificationDocumentMinAggregateOutputType | null
    _max: VerificationDocumentMaxAggregateOutputType | null
  }

  type GetVerificationDocumentGroupByPayload<T extends VerificationDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationDocumentGroupByOutputType[P]>
        }
      >
    >


  export type VerificationDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    bucketKey?: boolean
    status?: boolean
    uploadedAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationDocument"]>

  export type VerificationDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    bucketKey?: boolean
    status?: boolean
    uploadedAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationDocument"]>

  export type VerificationDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    bucketKey?: boolean
    status?: boolean
    uploadedAt?: boolean
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationDocument"]>

  export type VerificationDocumentSelectScalar = {
    id?: boolean
    providerId?: boolean
    documentType?: boolean
    bucketKey?: boolean
    status?: boolean
    uploadedAt?: boolean
  }

  export type VerificationDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "documentType" | "bucketKey" | "status" | "uploadedAt", ExtArgs["result"]["verificationDocument"]>
  export type VerificationDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type VerificationDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }
  export type VerificationDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ServiceProviderDefaultArgs<ExtArgs>
  }

  export type $VerificationDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationDocument"
    objects: {
      provider: Prisma.$ServiceProviderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      documentType: $Enums.DocumentType
      bucketKey: string
      status: $Enums.DocumentStatus
      uploadedAt: Date
    }, ExtArgs["result"]["verificationDocument"]>
    composites: {}
  }

  type VerificationDocumentGetPayload<S extends boolean | null | undefined | VerificationDocumentDefaultArgs> = $Result.GetResult<Prisma.$VerificationDocumentPayload, S>

  type VerificationDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationDocumentCountAggregateInputType | true
    }

  export interface VerificationDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationDocument'], meta: { name: 'VerificationDocument' } }
    /**
     * Find zero or one VerificationDocument that matches the filter.
     * @param {VerificationDocumentFindUniqueArgs} args - Arguments to find a VerificationDocument
     * @example
     * // Get one VerificationDocument
     * const verificationDocument = await prisma.verificationDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationDocumentFindUniqueArgs>(args: SelectSubset<T, VerificationDocumentFindUniqueArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationDocumentFindUniqueOrThrowArgs} args - Arguments to find a VerificationDocument
     * @example
     * // Get one VerificationDocument
     * const verificationDocument = await prisma.verificationDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentFindFirstArgs} args - Arguments to find a VerificationDocument
     * @example
     * // Get one VerificationDocument
     * const verificationDocument = await prisma.verificationDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationDocumentFindFirstArgs>(args?: SelectSubset<T, VerificationDocumentFindFirstArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentFindFirstOrThrowArgs} args - Arguments to find a VerificationDocument
     * @example
     * // Get one VerificationDocument
     * const verificationDocument = await prisma.verificationDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocument.findMany()
     * 
     * // Get first 10 VerificationDocuments
     * const verificationDocuments = await prisma.verificationDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationDocumentWithIdOnly = await prisma.verificationDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationDocumentFindManyArgs>(args?: SelectSubset<T, VerificationDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationDocument.
     * @param {VerificationDocumentCreateArgs} args - Arguments to create a VerificationDocument.
     * @example
     * // Create one VerificationDocument
     * const VerificationDocument = await prisma.verificationDocument.create({
     *   data: {
     *     // ... data to create a VerificationDocument
     *   }
     * })
     * 
     */
    create<T extends VerificationDocumentCreateArgs>(args: SelectSubset<T, VerificationDocumentCreateArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationDocuments.
     * @param {VerificationDocumentCreateManyArgs} args - Arguments to create many VerificationDocuments.
     * @example
     * // Create many VerificationDocuments
     * const verificationDocument = await prisma.verificationDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationDocumentCreateManyArgs>(args?: SelectSubset<T, VerificationDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationDocuments and returns the data saved in the database.
     * @param {VerificationDocumentCreateManyAndReturnArgs} args - Arguments to create many VerificationDocuments.
     * @example
     * // Create many VerificationDocuments
     * const verificationDocument = await prisma.verificationDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationDocuments and only return the `id`
     * const verificationDocumentWithIdOnly = await prisma.verificationDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationDocument.
     * @param {VerificationDocumentDeleteArgs} args - Arguments to delete one VerificationDocument.
     * @example
     * // Delete one VerificationDocument
     * const VerificationDocument = await prisma.verificationDocument.delete({
     *   where: {
     *     // ... filter to delete one VerificationDocument
     *   }
     * })
     * 
     */
    delete<T extends VerificationDocumentDeleteArgs>(args: SelectSubset<T, VerificationDocumentDeleteArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationDocument.
     * @param {VerificationDocumentUpdateArgs} args - Arguments to update one VerificationDocument.
     * @example
     * // Update one VerificationDocument
     * const verificationDocument = await prisma.verificationDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationDocumentUpdateArgs>(args: SelectSubset<T, VerificationDocumentUpdateArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationDocuments.
     * @param {VerificationDocumentDeleteManyArgs} args - Arguments to filter VerificationDocuments to delete.
     * @example
     * // Delete a few VerificationDocuments
     * const { count } = await prisma.verificationDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDocumentDeleteManyArgs>(args?: SelectSubset<T, VerificationDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationDocuments
     * const verificationDocument = await prisma.verificationDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationDocumentUpdateManyArgs>(args: SelectSubset<T, VerificationDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationDocuments and returns the data updated in the database.
     * @param {VerificationDocumentUpdateManyAndReturnArgs} args - Arguments to update many VerificationDocuments.
     * @example
     * // Update many VerificationDocuments
     * const verificationDocument = await prisma.verificationDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationDocuments and only return the `id`
     * const verificationDocumentWithIdOnly = await prisma.verificationDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationDocument.
     * @param {VerificationDocumentUpsertArgs} args - Arguments to update or create a VerificationDocument.
     * @example
     * // Update or create a VerificationDocument
     * const verificationDocument = await prisma.verificationDocument.upsert({
     *   create: {
     *     // ... data to create a VerificationDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationDocument we want to update
     *   }
     * })
     */
    upsert<T extends VerificationDocumentUpsertArgs>(args: SelectSubset<T, VerificationDocumentUpsertArgs<ExtArgs>>): Prisma__VerificationDocumentClient<$Result.GetResult<Prisma.$VerificationDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentCountArgs} args - Arguments to filter VerificationDocuments to count.
     * @example
     * // Count the number of VerificationDocuments
     * const count = await prisma.verificationDocument.count({
     *   where: {
     *     // ... the filter for the VerificationDocuments we want to count
     *   }
     * })
    **/
    count<T extends VerificationDocumentCountArgs>(
      args?: Subset<T, VerificationDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationDocumentAggregateArgs>(args: Subset<T, VerificationDocumentAggregateArgs>): Prisma.PrismaPromise<GetVerificationDocumentAggregateType<T>>

    /**
     * Group by VerificationDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationDocumentGroupByArgs['orderBy'] }
        : { orderBy?: VerificationDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationDocument model
   */
  readonly fields: VerificationDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ServiceProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceProviderDefaultArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationDocument model
   */
  interface VerificationDocumentFieldRefs {
    readonly id: FieldRef<"VerificationDocument", 'String'>
    readonly providerId: FieldRef<"VerificationDocument", 'String'>
    readonly documentType: FieldRef<"VerificationDocument", 'DocumentType'>
    readonly bucketKey: FieldRef<"VerificationDocument", 'String'>
    readonly status: FieldRef<"VerificationDocument", 'DocumentStatus'>
    readonly uploadedAt: FieldRef<"VerificationDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationDocument findUnique
   */
  export type VerificationDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VerificationDocument to fetch.
     */
    where: VerificationDocumentWhereUniqueInput
  }

  /**
   * VerificationDocument findUniqueOrThrow
   */
  export type VerificationDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VerificationDocument to fetch.
     */
    where: VerificationDocumentWhereUniqueInput
  }

  /**
   * VerificationDocument findFirst
   */
  export type VerificationDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VerificationDocument to fetch.
     */
    where?: VerificationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: VerificationDocumentOrderByWithRelationInput | VerificationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationDocuments.
     */
    cursor?: VerificationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationDocuments.
     */
    distinct?: VerificationDocumentScalarFieldEnum | VerificationDocumentScalarFieldEnum[]
  }

  /**
   * VerificationDocument findFirstOrThrow
   */
  export type VerificationDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VerificationDocument to fetch.
     */
    where?: VerificationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: VerificationDocumentOrderByWithRelationInput | VerificationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationDocuments.
     */
    cursor?: VerificationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationDocuments.
     */
    distinct?: VerificationDocumentScalarFieldEnum | VerificationDocumentScalarFieldEnum[]
  }

  /**
   * VerificationDocument findMany
   */
  export type VerificationDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VerificationDocuments to fetch.
     */
    where?: VerificationDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationDocuments to fetch.
     */
    orderBy?: VerificationDocumentOrderByWithRelationInput | VerificationDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationDocuments.
     */
    cursor?: VerificationDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationDocuments.
     */
    distinct?: VerificationDocumentScalarFieldEnum | VerificationDocumentScalarFieldEnum[]
  }

  /**
   * VerificationDocument create
   */
  export type VerificationDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationDocument.
     */
    data: XOR<VerificationDocumentCreateInput, VerificationDocumentUncheckedCreateInput>
  }

  /**
   * VerificationDocument createMany
   */
  export type VerificationDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationDocuments.
     */
    data: VerificationDocumentCreateManyInput | VerificationDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationDocument createManyAndReturn
   */
  export type VerificationDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationDocuments.
     */
    data: VerificationDocumentCreateManyInput | VerificationDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationDocument update
   */
  export type VerificationDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationDocument.
     */
    data: XOR<VerificationDocumentUpdateInput, VerificationDocumentUncheckedUpdateInput>
    /**
     * Choose, which VerificationDocument to update.
     */
    where: VerificationDocumentWhereUniqueInput
  }

  /**
   * VerificationDocument updateMany
   */
  export type VerificationDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationDocuments.
     */
    data: XOR<VerificationDocumentUpdateManyMutationInput, VerificationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which VerificationDocuments to update
     */
    where?: VerificationDocumentWhereInput
    /**
     * Limit how many VerificationDocuments to update.
     */
    limit?: number
  }

  /**
   * VerificationDocument updateManyAndReturn
   */
  export type VerificationDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * The data used to update VerificationDocuments.
     */
    data: XOR<VerificationDocumentUpdateManyMutationInput, VerificationDocumentUncheckedUpdateManyInput>
    /**
     * Filter which VerificationDocuments to update
     */
    where?: VerificationDocumentWhereInput
    /**
     * Limit how many VerificationDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationDocument upsert
   */
  export type VerificationDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationDocument to update in case it exists.
     */
    where: VerificationDocumentWhereUniqueInput
    /**
     * In case the VerificationDocument found by the `where` argument doesn't exist, create a new VerificationDocument with this data.
     */
    create: XOR<VerificationDocumentCreateInput, VerificationDocumentUncheckedCreateInput>
    /**
     * In case the VerificationDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationDocumentUpdateInput, VerificationDocumentUncheckedUpdateInput>
  }

  /**
   * VerificationDocument delete
   */
  export type VerificationDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
    /**
     * Filter which VerificationDocument to delete.
     */
    where: VerificationDocumentWhereUniqueInput
  }

  /**
   * VerificationDocument deleteMany
   */
  export type VerificationDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationDocuments to delete
     */
    where?: VerificationDocumentWhereInput
    /**
     * Limit how many VerificationDocuments to delete.
     */
    limit?: number
  }

  /**
   * VerificationDocument without action
   */
  export type VerificationDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationDocument
     */
    select?: VerificationDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationDocument
     */
    omit?: VerificationDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MainCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iconUrl: 'iconUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type MainCategoryScalarFieldEnum = (typeof MainCategoryScalarFieldEnum)[keyof typeof MainCategoryScalarFieldEnum]


  export const SubCategoryScalarFieldEnum: {
    id: 'id',
    mainCategoryId: 'mainCategoryId',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type SubCategoryScalarFieldEnum = (typeof SubCategoryScalarFieldEnum)[keyof typeof SubCategoryScalarFieldEnum]


  export const ServiceProviderScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    mobileNumber: 'mobileNumber',
    mobileVerified: 'mobileVerified',
    whatsappNumber: 'whatsappNumber',
    email: 'email',
    nicNumber: 'nicNumber',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ServiceProviderScalarFieldEnum = (typeof ServiceProviderScalarFieldEnum)[keyof typeof ServiceProviderScalarFieldEnum]


  export const ProviderServiceScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    mainCategoryId: 'mainCategoryId',
    subCategoryId: 'subCategoryId',
    experienceYears: 'experienceYears',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type ProviderServiceScalarFieldEnum = (typeof ProviderServiceScalarFieldEnum)[keyof typeof ProviderServiceScalarFieldEnum]


  export const ServiceAreaScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    town: 'town',
    areaDescription: 'areaDescription',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    createdAt: 'createdAt'
  };

  export type ServiceAreaScalarFieldEnum = (typeof ServiceAreaScalarFieldEnum)[keyof typeof ServiceAreaScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    availableDays: 'availableDays',
    availableFrom: 'availableFrom',
    availableTo: 'availableTo',
    is24_7: 'is24_7',
    isAvailableNow: 'isAvailableNow',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const VerificationDocumentScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    documentType: 'documentType',
    bucketKey: 'bucketKey',
    status: 'status',
    uploadedAt: 'uploadedAt'
  };

  export type VerificationDocumentScalarFieldEnum = (typeof VerificationDocumentScalarFieldEnum)[keyof typeof VerificationDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'DocumentStatus'
   */
  export type EnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus'>
    


  /**
   * Reference to a field of type 'DocumentStatus[]'
   */
  export type ListEnumDocumentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MainCategoryWhereInput = {
    AND?: MainCategoryWhereInput | MainCategoryWhereInput[]
    OR?: MainCategoryWhereInput[]
    NOT?: MainCategoryWhereInput | MainCategoryWhereInput[]
    id?: IntFilter<"MainCategory"> | number
    name?: StringFilter<"MainCategory"> | string
    iconUrl?: StringNullableFilter<"MainCategory"> | string | null
    isActive?: BoolFilter<"MainCategory"> | boolean
    createdAt?: DateTimeFilter<"MainCategory"> | Date | string
    subCategories?: SubCategoryListRelationFilter
    providerServices?: ProviderServiceListRelationFilter
  }

  export type MainCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    subCategories?: SubCategoryOrderByRelationAggregateInput
    providerServices?: ProviderServiceOrderByRelationAggregateInput
  }

  export type MainCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MainCategoryWhereInput | MainCategoryWhereInput[]
    OR?: MainCategoryWhereInput[]
    NOT?: MainCategoryWhereInput | MainCategoryWhereInput[]
    name?: StringFilter<"MainCategory"> | string
    iconUrl?: StringNullableFilter<"MainCategory"> | string | null
    isActive?: BoolFilter<"MainCategory"> | boolean
    createdAt?: DateTimeFilter<"MainCategory"> | Date | string
    subCategories?: SubCategoryListRelationFilter
    providerServices?: ProviderServiceListRelationFilter
  }, "id">

  export type MainCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: MainCategoryCountOrderByAggregateInput
    _avg?: MainCategoryAvgOrderByAggregateInput
    _max?: MainCategoryMaxOrderByAggregateInput
    _min?: MainCategoryMinOrderByAggregateInput
    _sum?: MainCategorySumOrderByAggregateInput
  }

  export type MainCategoryScalarWhereWithAggregatesInput = {
    AND?: MainCategoryScalarWhereWithAggregatesInput | MainCategoryScalarWhereWithAggregatesInput[]
    OR?: MainCategoryScalarWhereWithAggregatesInput[]
    NOT?: MainCategoryScalarWhereWithAggregatesInput | MainCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MainCategory"> | number
    name?: StringWithAggregatesFilter<"MainCategory"> | string
    iconUrl?: StringNullableWithAggregatesFilter<"MainCategory"> | string | null
    isActive?: BoolWithAggregatesFilter<"MainCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MainCategory"> | Date | string
  }

  export type SubCategoryWhereInput = {
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    mainCategoryId?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    isActive?: BoolFilter<"SubCategory"> | boolean
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    mainCategory?: XOR<MainCategoryScalarRelationFilter, MainCategoryWhereInput>
    providerServices?: ProviderServiceListRelationFilter
  }

  export type SubCategoryOrderByWithRelationInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    mainCategory?: MainCategoryOrderByWithRelationInput
    providerServices?: ProviderServiceOrderByRelationAggregateInput
  }

  export type SubCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubCategoryWhereInput | SubCategoryWhereInput[]
    OR?: SubCategoryWhereInput[]
    NOT?: SubCategoryWhereInput | SubCategoryWhereInput[]
    mainCategoryId?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    isActive?: BoolFilter<"SubCategory"> | boolean
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
    mainCategory?: XOR<MainCategoryScalarRelationFilter, MainCategoryWhereInput>
    providerServices?: ProviderServiceListRelationFilter
  }, "id">

  export type SubCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: SubCategoryCountOrderByAggregateInput
    _avg?: SubCategoryAvgOrderByAggregateInput
    _max?: SubCategoryMaxOrderByAggregateInput
    _min?: SubCategoryMinOrderByAggregateInput
    _sum?: SubCategorySumOrderByAggregateInput
  }

  export type SubCategoryScalarWhereWithAggregatesInput = {
    AND?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    OR?: SubCategoryScalarWhereWithAggregatesInput[]
    NOT?: SubCategoryScalarWhereWithAggregatesInput | SubCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubCategory"> | number
    mainCategoryId?: IntWithAggregatesFilter<"SubCategory"> | number
    name?: StringWithAggregatesFilter<"SubCategory"> | string
    isActive?: BoolWithAggregatesFilter<"SubCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubCategory"> | Date | string
  }

  export type ServiceProviderWhereInput = {
    AND?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    OR?: ServiceProviderWhereInput[]
    NOT?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    id?: UuidFilter<"ServiceProvider"> | string
    fullName?: StringFilter<"ServiceProvider"> | string
    mobileNumber?: StringFilter<"ServiceProvider"> | string
    mobileVerified?: BoolFilter<"ServiceProvider"> | boolean
    whatsappNumber?: StringNullableFilter<"ServiceProvider"> | string | null
    email?: StringNullableFilter<"ServiceProvider"> | string | null
    nicNumber?: StringFilter<"ServiceProvider"> | string
    isActive?: BoolFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeFilter<"ServiceProvider"> | Date | string
    providerServices?: ProviderServiceListRelationFilter
    serviceAreas?: ServiceAreaListRelationFilter
    availability?: XOR<AvailabilityNullableScalarRelationFilter, AvailabilityWhereInput> | null
    verificationDocuments?: VerificationDocumentListRelationFilter
  }

  export type ServiceProviderOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    mobileVerified?: SortOrder
    whatsappNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    nicNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    providerServices?: ProviderServiceOrderByRelationAggregateInput
    serviceAreas?: ServiceAreaOrderByRelationAggregateInput
    availability?: AvailabilityOrderByWithRelationInput
    verificationDocuments?: VerificationDocumentOrderByRelationAggregateInput
  }

  export type ServiceProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobileNumber?: string
    nicNumber?: string
    AND?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    OR?: ServiceProviderWhereInput[]
    NOT?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    fullName?: StringFilter<"ServiceProvider"> | string
    mobileVerified?: BoolFilter<"ServiceProvider"> | boolean
    whatsappNumber?: StringNullableFilter<"ServiceProvider"> | string | null
    email?: StringNullableFilter<"ServiceProvider"> | string | null
    isActive?: BoolFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeFilter<"ServiceProvider"> | Date | string
    providerServices?: ProviderServiceListRelationFilter
    serviceAreas?: ServiceAreaListRelationFilter
    availability?: XOR<AvailabilityNullableScalarRelationFilter, AvailabilityWhereInput> | null
    verificationDocuments?: VerificationDocumentListRelationFilter
  }, "id" | "mobileNumber" | "nicNumber">

  export type ServiceProviderOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    mobileVerified?: SortOrder
    whatsappNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    nicNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceProviderCountOrderByAggregateInput
    _max?: ServiceProviderMaxOrderByAggregateInput
    _min?: ServiceProviderMinOrderByAggregateInput
  }

  export type ServiceProviderScalarWhereWithAggregatesInput = {
    AND?: ServiceProviderScalarWhereWithAggregatesInput | ServiceProviderScalarWhereWithAggregatesInput[]
    OR?: ServiceProviderScalarWhereWithAggregatesInput[]
    NOT?: ServiceProviderScalarWhereWithAggregatesInput | ServiceProviderScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ServiceProvider"> | string
    fullName?: StringWithAggregatesFilter<"ServiceProvider"> | string
    mobileNumber?: StringWithAggregatesFilter<"ServiceProvider"> | string
    mobileVerified?: BoolWithAggregatesFilter<"ServiceProvider"> | boolean
    whatsappNumber?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    email?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    nicNumber?: StringWithAggregatesFilter<"ServiceProvider"> | string
    isActive?: BoolWithAggregatesFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceProvider"> | Date | string
  }

  export type ProviderServiceWhereInput = {
    AND?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    OR?: ProviderServiceWhereInput[]
    NOT?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    id?: UuidFilter<"ProviderService"> | string
    providerId?: UuidFilter<"ProviderService"> | string
    mainCategoryId?: IntFilter<"ProviderService"> | number
    subCategoryId?: IntFilter<"ProviderService"> | number
    experienceYears?: IntNullableFilter<"ProviderService"> | number | null
    description?: StringNullableFilter<"ProviderService"> | string | null
    createdAt?: DateTimeFilter<"ProviderService"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
    mainCategory?: XOR<MainCategoryScalarRelationFilter, MainCategoryWhereInput>
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
  }

  export type ProviderServiceOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    mainCategoryId?: SortOrder
    subCategoryId?: SortOrder
    experienceYears?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    provider?: ServiceProviderOrderByWithRelationInput
    mainCategory?: MainCategoryOrderByWithRelationInput
    subCategory?: SubCategoryOrderByWithRelationInput
  }

  export type ProviderServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_subCategoryId?: ProviderServiceProviderIdSubCategoryIdCompoundUniqueInput
    AND?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    OR?: ProviderServiceWhereInput[]
    NOT?: ProviderServiceWhereInput | ProviderServiceWhereInput[]
    providerId?: UuidFilter<"ProviderService"> | string
    mainCategoryId?: IntFilter<"ProviderService"> | number
    subCategoryId?: IntFilter<"ProviderService"> | number
    experienceYears?: IntNullableFilter<"ProviderService"> | number | null
    description?: StringNullableFilter<"ProviderService"> | string | null
    createdAt?: DateTimeFilter<"ProviderService"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
    mainCategory?: XOR<MainCategoryScalarRelationFilter, MainCategoryWhereInput>
    subCategory?: XOR<SubCategoryScalarRelationFilter, SubCategoryWhereInput>
  }, "id" | "providerId_subCategoryId">

  export type ProviderServiceOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    mainCategoryId?: SortOrder
    subCategoryId?: SortOrder
    experienceYears?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProviderServiceCountOrderByAggregateInput
    _avg?: ProviderServiceAvgOrderByAggregateInput
    _max?: ProviderServiceMaxOrderByAggregateInput
    _min?: ProviderServiceMinOrderByAggregateInput
    _sum?: ProviderServiceSumOrderByAggregateInput
  }

  export type ProviderServiceScalarWhereWithAggregatesInput = {
    AND?: ProviderServiceScalarWhereWithAggregatesInput | ProviderServiceScalarWhereWithAggregatesInput[]
    OR?: ProviderServiceScalarWhereWithAggregatesInput[]
    NOT?: ProviderServiceScalarWhereWithAggregatesInput | ProviderServiceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ProviderService"> | string
    providerId?: UuidWithAggregatesFilter<"ProviderService"> | string
    mainCategoryId?: IntWithAggregatesFilter<"ProviderService"> | number
    subCategoryId?: IntWithAggregatesFilter<"ProviderService"> | number
    experienceYears?: IntNullableWithAggregatesFilter<"ProviderService"> | number | null
    description?: StringNullableWithAggregatesFilter<"ProviderService"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProviderService"> | Date | string
  }

  export type ServiceAreaWhereInput = {
    AND?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    OR?: ServiceAreaWhereInput[]
    NOT?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    id?: UuidFilter<"ServiceArea"> | string
    providerId?: UuidFilter<"ServiceArea"> | string
    town?: StringFilter<"ServiceArea"> | string
    areaDescription?: StringNullableFilter<"ServiceArea"> | string | null
    latitude?: DecimalNullableFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    address?: StringNullableFilter<"ServiceArea"> | string | null
    createdAt?: DateTimeFilter<"ServiceArea"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }

  export type ServiceAreaOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    town?: SortOrder
    areaDescription?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    provider?: ServiceProviderOrderByWithRelationInput
  }

  export type ServiceAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    OR?: ServiceAreaWhereInput[]
    NOT?: ServiceAreaWhereInput | ServiceAreaWhereInput[]
    providerId?: UuidFilter<"ServiceArea"> | string
    town?: StringFilter<"ServiceArea"> | string
    areaDescription?: StringNullableFilter<"ServiceArea"> | string | null
    latitude?: DecimalNullableFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    address?: StringNullableFilter<"ServiceArea"> | string | null
    createdAt?: DateTimeFilter<"ServiceArea"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }, "id">

  export type ServiceAreaOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    town?: SortOrder
    areaDescription?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ServiceAreaCountOrderByAggregateInput
    _avg?: ServiceAreaAvgOrderByAggregateInput
    _max?: ServiceAreaMaxOrderByAggregateInput
    _min?: ServiceAreaMinOrderByAggregateInput
    _sum?: ServiceAreaSumOrderByAggregateInput
  }

  export type ServiceAreaScalarWhereWithAggregatesInput = {
    AND?: ServiceAreaScalarWhereWithAggregatesInput | ServiceAreaScalarWhereWithAggregatesInput[]
    OR?: ServiceAreaScalarWhereWithAggregatesInput[]
    NOT?: ServiceAreaScalarWhereWithAggregatesInput | ServiceAreaScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ServiceArea"> | string
    providerId?: UuidWithAggregatesFilter<"ServiceArea"> | string
    town?: StringWithAggregatesFilter<"ServiceArea"> | string
    areaDescription?: StringNullableWithAggregatesFilter<"ServiceArea"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    address?: StringNullableWithAggregatesFilter<"ServiceArea"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServiceArea"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: UuidFilter<"Availability"> | string
    providerId?: UuidFilter<"Availability"> | string
    availableDays?: StringNullableFilter<"Availability"> | string | null
    availableFrom?: DateTimeNullableFilter<"Availability"> | Date | string | null
    availableTo?: DateTimeNullableFilter<"Availability"> | Date | string | null
    is24_7?: BoolFilter<"Availability"> | boolean
    isAvailableNow?: BoolFilter<"Availability"> | boolean
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    availableDays?: SortOrderInput | SortOrder
    availableFrom?: SortOrderInput | SortOrder
    availableTo?: SortOrderInput | SortOrder
    is24_7?: SortOrder
    isAvailableNow?: SortOrder
    updatedAt?: SortOrder
    provider?: ServiceProviderOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    availableDays?: StringNullableFilter<"Availability"> | string | null
    availableFrom?: DateTimeNullableFilter<"Availability"> | Date | string | null
    availableTo?: DateTimeNullableFilter<"Availability"> | Date | string | null
    is24_7?: BoolFilter<"Availability"> | boolean
    isAvailableNow?: BoolFilter<"Availability"> | boolean
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }, "id" | "providerId">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    availableDays?: SortOrderInput | SortOrder
    availableFrom?: SortOrderInput | SortOrder
    availableTo?: SortOrderInput | SortOrder
    is24_7?: SortOrder
    isAvailableNow?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Availability"> | string
    providerId?: UuidWithAggregatesFilter<"Availability"> | string
    availableDays?: StringNullableWithAggregatesFilter<"Availability"> | string | null
    availableFrom?: DateTimeNullableWithAggregatesFilter<"Availability"> | Date | string | null
    availableTo?: DateTimeNullableWithAggregatesFilter<"Availability"> | Date | string | null
    is24_7?: BoolWithAggregatesFilter<"Availability"> | boolean
    isAvailableNow?: BoolWithAggregatesFilter<"Availability"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
  }

  export type VerificationDocumentWhereInput = {
    AND?: VerificationDocumentWhereInput | VerificationDocumentWhereInput[]
    OR?: VerificationDocumentWhereInput[]
    NOT?: VerificationDocumentWhereInput | VerificationDocumentWhereInput[]
    id?: UuidFilter<"VerificationDocument"> | string
    providerId?: UuidFilter<"VerificationDocument"> | string
    documentType?: EnumDocumentTypeFilter<"VerificationDocument"> | $Enums.DocumentType
    bucketKey?: StringFilter<"VerificationDocument"> | string
    status?: EnumDocumentStatusFilter<"VerificationDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeFilter<"VerificationDocument"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }

  export type VerificationDocumentOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    bucketKey?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
    provider?: ServiceProviderOrderByWithRelationInput
  }

  export type VerificationDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationDocumentWhereInput | VerificationDocumentWhereInput[]
    OR?: VerificationDocumentWhereInput[]
    NOT?: VerificationDocumentWhereInput | VerificationDocumentWhereInput[]
    providerId?: UuidFilter<"VerificationDocument"> | string
    documentType?: EnumDocumentTypeFilter<"VerificationDocument"> | $Enums.DocumentType
    bucketKey?: StringFilter<"VerificationDocument"> | string
    status?: EnumDocumentStatusFilter<"VerificationDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeFilter<"VerificationDocument"> | Date | string
    provider?: XOR<ServiceProviderScalarRelationFilter, ServiceProviderWhereInput>
  }, "id">

  export type VerificationDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    bucketKey?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
    _count?: VerificationDocumentCountOrderByAggregateInput
    _max?: VerificationDocumentMaxOrderByAggregateInput
    _min?: VerificationDocumentMinOrderByAggregateInput
  }

  export type VerificationDocumentScalarWhereWithAggregatesInput = {
    AND?: VerificationDocumentScalarWhereWithAggregatesInput | VerificationDocumentScalarWhereWithAggregatesInput[]
    OR?: VerificationDocumentScalarWhereWithAggregatesInput[]
    NOT?: VerificationDocumentScalarWhereWithAggregatesInput | VerificationDocumentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VerificationDocument"> | string
    providerId?: UuidWithAggregatesFilter<"VerificationDocument"> | string
    documentType?: EnumDocumentTypeWithAggregatesFilter<"VerificationDocument"> | $Enums.DocumentType
    bucketKey?: StringWithAggregatesFilter<"VerificationDocument"> | string
    status?: EnumDocumentStatusWithAggregatesFilter<"VerificationDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeWithAggregatesFilter<"VerificationDocument"> | Date | string
  }

  export type MainCategoryCreateInput = {
    name: string
    iconUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: SubCategoryCreateNestedManyWithoutMainCategoryInput
    providerServices?: ProviderServiceCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUncheckedCreateInput = {
    id?: number
    name: string
    iconUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutMainCategoryInput
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUpdateManyWithoutMainCategoryNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUncheckedUpdateManyWithoutMainCategoryNestedInput
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryCreateManyInput = {
    id?: number
    name: string
    iconUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type MainCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MainCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    mainCategory: MainCategoryCreateNestedOneWithoutSubCategoriesInput
    providerServices?: ProviderServiceCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateInput = {
    id?: number
    mainCategoryId: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCategory?: MainCategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
    providerServices?: ProviderServiceUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryCreateManyInput = {
    id?: number
    mainCategoryId: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SubCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderCreateInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    serviceAreas?: ServiceAreaCreateNestedManyWithoutProviderInput
    availability?: AvailabilityCreateNestedOneWithoutProviderInput
    verificationDocuments?: VerificationDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    serviceAreas?: ServiceAreaUncheckedCreateNestedManyWithoutProviderInput
    availability?: AvailabilityUncheckedCreateNestedOneWithoutProviderInput
    verificationDocuments?: VerificationDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    serviceAreas?: ServiceAreaUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUpdateOneWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    serviceAreas?: ServiceAreaUncheckedUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUncheckedUpdateOneWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderCreateManyInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ServiceProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceCreateInput = {
    id?: string
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutProviderServicesInput
    mainCategory: MainCategoryCreateNestedOneWithoutProviderServicesInput
    subCategory: SubCategoryCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServiceUncheckedCreateInput = {
    id?: string
    providerId: string
    mainCategoryId: number
    subCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProviderServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutProviderServicesNestedInput
    mainCategory?: MainCategoryUpdateOneRequiredWithoutProviderServicesNestedInput
    subCategory?: SubCategoryUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    subCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceCreateManyInput = {
    id?: string
    providerId: string
    mainCategoryId: number
    subCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProviderServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    subCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaCreateInput = {
    id?: string
    town: string
    areaDescription?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    address?: string | null
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutServiceAreasInput
  }

  export type ServiceAreaUncheckedCreateInput = {
    id?: string
    providerId: string
    town: string
    areaDescription?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type ServiceAreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    areaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutServiceAreasNestedInput
  }

  export type ServiceAreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    areaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaCreateManyInput = {
    id?: string
    providerId: string
    town: string
    areaDescription?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type ServiceAreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    areaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    areaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    availableDays?: string | null
    availableFrom?: Date | string | null
    availableTo?: Date | string | null
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    providerId: string
    availableDays?: string | null
    availableFrom?: Date | string | null
    availableTo?: Date | string | null
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: Date | string
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availableTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is24_7?: BoolFieldUpdateOperationsInput | boolean
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    availableDays?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availableTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is24_7?: BoolFieldUpdateOperationsInput | boolean
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    providerId: string
    availableDays?: string | null
    availableFrom?: Date | string | null
    availableTo?: Date | string | null
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: Date | string
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availableTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is24_7?: BoolFieldUpdateOperationsInput | boolean
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    availableDays?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availableTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is24_7?: BoolFieldUpdateOperationsInput | boolean
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationDocumentCreateInput = {
    id?: string
    documentType: $Enums.DocumentType
    bucketKey: string
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutVerificationDocumentsInput
  }

  export type VerificationDocumentUncheckedCreateInput = {
    id?: string
    providerId: string
    documentType: $Enums.DocumentType
    bucketKey: string
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type VerificationDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    bucketKey?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutVerificationDocumentsNestedInput
  }

  export type VerificationDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    bucketKey?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationDocumentCreateManyInput = {
    id?: string
    providerId: string
    documentType: $Enums.DocumentType
    bucketKey: string
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type VerificationDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    bucketKey?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    bucketKey?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubCategoryListRelationFilter = {
    every?: SubCategoryWhereInput
    some?: SubCategoryWhereInput
    none?: SubCategoryWhereInput
  }

  export type ProviderServiceListRelationFilter = {
    every?: ProviderServiceWhereInput
    some?: ProviderServiceWhereInput
    none?: ProviderServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SubCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MainCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MainCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MainCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MainCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MainCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MainCategoryScalarRelationFilter = {
    is?: MainCategoryWhereInput
    isNot?: MainCategoryWhereInput
  }

  export type SubCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SubCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
  }

  export type SubCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SubCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type SubCategorySumOrderByAggregateInput = {
    id?: SortOrder
    mainCategoryId?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type ServiceAreaListRelationFilter = {
    every?: ServiceAreaWhereInput
    some?: ServiceAreaWhereInput
    none?: ServiceAreaWhereInput
  }

  export type AvailabilityNullableScalarRelationFilter = {
    is?: AvailabilityWhereInput | null
    isNot?: AvailabilityWhereInput | null
  }

  export type VerificationDocumentListRelationFilter = {
    every?: VerificationDocumentWhereInput
    some?: VerificationDocumentWhereInput
    none?: VerificationDocumentWhereInput
  }

  export type ServiceAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceProviderCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    mobileVerified?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    nicNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    mobileVerified?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    nicNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceProviderMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    mobileVerified?: SortOrder
    whatsappNumber?: SortOrder
    email?: SortOrder
    nicNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ServiceProviderScalarRelationFilter = {
    is?: ServiceProviderWhereInput
    isNot?: ServiceProviderWhereInput
  }

  export type SubCategoryScalarRelationFilter = {
    is?: SubCategoryWhereInput
    isNot?: SubCategoryWhereInput
  }

  export type ProviderServiceProviderIdSubCategoryIdCompoundUniqueInput = {
    providerId: string
    subCategoryId: number
  }

  export type ProviderServiceCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    mainCategoryId?: SortOrder
    subCategoryId?: SortOrder
    experienceYears?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderServiceAvgOrderByAggregateInput = {
    mainCategoryId?: SortOrder
    subCategoryId?: SortOrder
    experienceYears?: SortOrder
  }

  export type ProviderServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    mainCategoryId?: SortOrder
    subCategoryId?: SortOrder
    experienceYears?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderServiceMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    mainCategoryId?: SortOrder
    subCategoryId?: SortOrder
    experienceYears?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ProviderServiceSumOrderByAggregateInput = {
    mainCategoryId?: SortOrder
    subCategoryId?: SortOrder
    experienceYears?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ServiceAreaCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    town?: SortOrder
    areaDescription?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceAreaAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type ServiceAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    town?: SortOrder
    areaDescription?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceAreaMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    town?: SortOrder
    areaDescription?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceAreaSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    availableDays?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    is24_7?: SortOrder
    isAvailableNow?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    availableDays?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    is24_7?: SortOrder
    isAvailableNow?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    availableDays?: SortOrder
    availableFrom?: SortOrder
    availableTo?: SortOrder
    is24_7?: SortOrder
    isAvailableNow?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type EnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type VerificationDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    bucketKey?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type VerificationDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    bucketKey?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type VerificationDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    documentType?: SortOrder
    bucketKey?: SortOrder
    status?: SortOrder
    uploadedAt?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type EnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type SubCategoryCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutMainCategoryInput, SubCategoryUncheckedCreateWithoutMainCategoryInput> | SubCategoryCreateWithoutMainCategoryInput[] | SubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMainCategoryInput | SubCategoryCreateOrConnectWithoutMainCategoryInput[]
    createMany?: SubCategoryCreateManyMainCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProviderServiceCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<ProviderServiceCreateWithoutMainCategoryInput, ProviderServiceUncheckedCreateWithoutMainCategoryInput> | ProviderServiceCreateWithoutMainCategoryInput[] | ProviderServiceUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutMainCategoryInput | ProviderServiceCreateOrConnectWithoutMainCategoryInput[]
    createMany?: ProviderServiceCreateManyMainCategoryInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type SubCategoryUncheckedCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<SubCategoryCreateWithoutMainCategoryInput, SubCategoryUncheckedCreateWithoutMainCategoryInput> | SubCategoryCreateWithoutMainCategoryInput[] | SubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMainCategoryInput | SubCategoryCreateOrConnectWithoutMainCategoryInput[]
    createMany?: SubCategoryCreateManyMainCategoryInputEnvelope
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
  }

  export type ProviderServiceUncheckedCreateNestedManyWithoutMainCategoryInput = {
    create?: XOR<ProviderServiceCreateWithoutMainCategoryInput, ProviderServiceUncheckedCreateWithoutMainCategoryInput> | ProviderServiceCreateWithoutMainCategoryInput[] | ProviderServiceUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutMainCategoryInput | ProviderServiceCreateOrConnectWithoutMainCategoryInput[]
    createMany?: ProviderServiceCreateManyMainCategoryInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubCategoryUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutMainCategoryInput, SubCategoryUncheckedCreateWithoutMainCategoryInput> | SubCategoryCreateWithoutMainCategoryInput[] | SubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMainCategoryInput | SubCategoryCreateOrConnectWithoutMainCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: SubCategoryCreateManyMainCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutMainCategoryInput | SubCategoryUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProviderServiceUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutMainCategoryInput, ProviderServiceUncheckedCreateWithoutMainCategoryInput> | ProviderServiceCreateWithoutMainCategoryInput[] | ProviderServiceUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutMainCategoryInput | ProviderServiceCreateOrConnectWithoutMainCategoryInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutMainCategoryInput | ProviderServiceUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: ProviderServiceCreateManyMainCategoryInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutMainCategoryInput | ProviderServiceUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutMainCategoryInput | ProviderServiceUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubCategoryUncheckedUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<SubCategoryCreateWithoutMainCategoryInput, SubCategoryUncheckedCreateWithoutMainCategoryInput> | SubCategoryCreateWithoutMainCategoryInput[] | SubCategoryUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: SubCategoryCreateOrConnectWithoutMainCategoryInput | SubCategoryCreateOrConnectWithoutMainCategoryInput[]
    upsert?: SubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput | SubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: SubCategoryCreateManyMainCategoryInputEnvelope
    set?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    disconnect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    delete?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    connect?: SubCategoryWhereUniqueInput | SubCategoryWhereUniqueInput[]
    update?: SubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput | SubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: SubCategoryUpdateManyWithWhereWithoutMainCategoryInput | SubCategoryUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
  }

  export type ProviderServiceUncheckedUpdateManyWithoutMainCategoryNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutMainCategoryInput, ProviderServiceUncheckedCreateWithoutMainCategoryInput> | ProviderServiceCreateWithoutMainCategoryInput[] | ProviderServiceUncheckedCreateWithoutMainCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutMainCategoryInput | ProviderServiceCreateOrConnectWithoutMainCategoryInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutMainCategoryInput | ProviderServiceUpsertWithWhereUniqueWithoutMainCategoryInput[]
    createMany?: ProviderServiceCreateManyMainCategoryInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutMainCategoryInput | ProviderServiceUpdateWithWhereUniqueWithoutMainCategoryInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutMainCategoryInput | ProviderServiceUpdateManyWithWhereWithoutMainCategoryInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type MainCategoryCreateNestedOneWithoutSubCategoriesInput = {
    create?: XOR<MainCategoryCreateWithoutSubCategoriesInput, MainCategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSubCategoriesInput
    connect?: MainCategoryWhereUniqueInput
  }

  export type ProviderServiceCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProviderServiceCreateWithoutSubCategoryInput, ProviderServiceUncheckedCreateWithoutSubCategoryInput> | ProviderServiceCreateWithoutSubCategoryInput[] | ProviderServiceUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutSubCategoryInput | ProviderServiceCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProviderServiceCreateManySubCategoryInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type ProviderServiceUncheckedCreateNestedManyWithoutSubCategoryInput = {
    create?: XOR<ProviderServiceCreateWithoutSubCategoryInput, ProviderServiceUncheckedCreateWithoutSubCategoryInput> | ProviderServiceCreateWithoutSubCategoryInput[] | ProviderServiceUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutSubCategoryInput | ProviderServiceCreateOrConnectWithoutSubCategoryInput[]
    createMany?: ProviderServiceCreateManySubCategoryInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type MainCategoryUpdateOneRequiredWithoutSubCategoriesNestedInput = {
    create?: XOR<MainCategoryCreateWithoutSubCategoriesInput, MainCategoryUncheckedCreateWithoutSubCategoriesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutSubCategoriesInput
    upsert?: MainCategoryUpsertWithoutSubCategoriesInput
    connect?: MainCategoryWhereUniqueInput
    update?: XOR<XOR<MainCategoryUpdateToOneWithWhereWithoutSubCategoriesInput, MainCategoryUpdateWithoutSubCategoriesInput>, MainCategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type ProviderServiceUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutSubCategoryInput, ProviderServiceUncheckedCreateWithoutSubCategoryInput> | ProviderServiceCreateWithoutSubCategoryInput[] | ProviderServiceUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutSubCategoryInput | ProviderServiceCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutSubCategoryInput | ProviderServiceUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProviderServiceCreateManySubCategoryInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutSubCategoryInput | ProviderServiceUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutSubCategoryInput | ProviderServiceUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ProviderServiceUncheckedUpdateManyWithoutSubCategoryNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutSubCategoryInput, ProviderServiceUncheckedCreateWithoutSubCategoryInput> | ProviderServiceCreateWithoutSubCategoryInput[] | ProviderServiceUncheckedCreateWithoutSubCategoryInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutSubCategoryInput | ProviderServiceCreateOrConnectWithoutSubCategoryInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutSubCategoryInput | ProviderServiceUpsertWithWhereUniqueWithoutSubCategoryInput[]
    createMany?: ProviderServiceCreateManySubCategoryInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutSubCategoryInput | ProviderServiceUpdateWithWhereUniqueWithoutSubCategoryInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutSubCategoryInput | ProviderServiceUpdateManyWithWhereWithoutSubCategoryInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ProviderServiceCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type ServiceAreaCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceAreaCreateWithoutProviderInput, ServiceAreaUncheckedCreateWithoutProviderInput> | ServiceAreaCreateWithoutProviderInput[] | ServiceAreaUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutProviderInput | ServiceAreaCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceAreaCreateManyProviderInputEnvelope
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedOneWithoutProviderInput = {
    create?: XOR<AvailabilityCreateWithoutProviderInput, AvailabilityUncheckedCreateWithoutProviderInput>
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProviderInput
    connect?: AvailabilityWhereUniqueInput
  }

  export type VerificationDocumentCreateNestedManyWithoutProviderInput = {
    create?: XOR<VerificationDocumentCreateWithoutProviderInput, VerificationDocumentUncheckedCreateWithoutProviderInput> | VerificationDocumentCreateWithoutProviderInput[] | VerificationDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: VerificationDocumentCreateOrConnectWithoutProviderInput | VerificationDocumentCreateOrConnectWithoutProviderInput[]
    createMany?: VerificationDocumentCreateManyProviderInputEnvelope
    connect?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
  }

  export type ProviderServiceUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
  }

  export type ServiceAreaUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceAreaCreateWithoutProviderInput, ServiceAreaUncheckedCreateWithoutProviderInput> | ServiceAreaCreateWithoutProviderInput[] | ServiceAreaUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutProviderInput | ServiceAreaCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceAreaCreateManyProviderInputEnvelope
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedOneWithoutProviderInput = {
    create?: XOR<AvailabilityCreateWithoutProviderInput, AvailabilityUncheckedCreateWithoutProviderInput>
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProviderInput
    connect?: AvailabilityWhereUniqueInput
  }

  export type VerificationDocumentUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<VerificationDocumentCreateWithoutProviderInput, VerificationDocumentUncheckedCreateWithoutProviderInput> | VerificationDocumentCreateWithoutProviderInput[] | VerificationDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: VerificationDocumentCreateOrConnectWithoutProviderInput | VerificationDocumentCreateOrConnectWithoutProviderInput[]
    createMany?: VerificationDocumentCreateManyProviderInputEnvelope
    connect?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
  }

  export type ProviderServiceUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutProviderInput | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutProviderInput | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutProviderInput | ProviderServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ServiceAreaUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceAreaCreateWithoutProviderInput, ServiceAreaUncheckedCreateWithoutProviderInput> | ServiceAreaCreateWithoutProviderInput[] | ServiceAreaUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutProviderInput | ServiceAreaCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceAreaUpsertWithWhereUniqueWithoutProviderInput | ServiceAreaUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceAreaCreateManyProviderInputEnvelope
    set?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    disconnect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    delete?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    update?: ServiceAreaUpdateWithWhereUniqueWithoutProviderInput | ServiceAreaUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceAreaUpdateManyWithWhereWithoutProviderInput | ServiceAreaUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
  }

  export type AvailabilityUpdateOneWithoutProviderNestedInput = {
    create?: XOR<AvailabilityCreateWithoutProviderInput, AvailabilityUncheckedCreateWithoutProviderInput>
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProviderInput
    upsert?: AvailabilityUpsertWithoutProviderInput
    disconnect?: AvailabilityWhereInput | boolean
    delete?: AvailabilityWhereInput | boolean
    connect?: AvailabilityWhereUniqueInput
    update?: XOR<XOR<AvailabilityUpdateToOneWithWhereWithoutProviderInput, AvailabilityUpdateWithoutProviderInput>, AvailabilityUncheckedUpdateWithoutProviderInput>
  }

  export type VerificationDocumentUpdateManyWithoutProviderNestedInput = {
    create?: XOR<VerificationDocumentCreateWithoutProviderInput, VerificationDocumentUncheckedCreateWithoutProviderInput> | VerificationDocumentCreateWithoutProviderInput[] | VerificationDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: VerificationDocumentCreateOrConnectWithoutProviderInput | VerificationDocumentCreateOrConnectWithoutProviderInput[]
    upsert?: VerificationDocumentUpsertWithWhereUniqueWithoutProviderInput | VerificationDocumentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: VerificationDocumentCreateManyProviderInputEnvelope
    set?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    disconnect?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    delete?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    connect?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    update?: VerificationDocumentUpdateWithWhereUniqueWithoutProviderInput | VerificationDocumentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: VerificationDocumentUpdateManyWithWhereWithoutProviderInput | VerificationDocumentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: VerificationDocumentScalarWhereInput | VerificationDocumentScalarWhereInput[]
  }

  export type ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput> | ProviderServiceCreateWithoutProviderInput[] | ProviderServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProviderServiceCreateOrConnectWithoutProviderInput | ProviderServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ProviderServiceUpsertWithWhereUniqueWithoutProviderInput | ProviderServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProviderServiceCreateManyProviderInputEnvelope
    set?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    disconnect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    delete?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    connect?: ProviderServiceWhereUniqueInput | ProviderServiceWhereUniqueInput[]
    update?: ProviderServiceUpdateWithWhereUniqueWithoutProviderInput | ProviderServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProviderServiceUpdateManyWithWhereWithoutProviderInput | ProviderServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
  }

  export type ServiceAreaUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceAreaCreateWithoutProviderInput, ServiceAreaUncheckedCreateWithoutProviderInput> | ServiceAreaCreateWithoutProviderInput[] | ServiceAreaUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceAreaCreateOrConnectWithoutProviderInput | ServiceAreaCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceAreaUpsertWithWhereUniqueWithoutProviderInput | ServiceAreaUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceAreaCreateManyProviderInputEnvelope
    set?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    disconnect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    delete?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    connect?: ServiceAreaWhereUniqueInput | ServiceAreaWhereUniqueInput[]
    update?: ServiceAreaUpdateWithWhereUniqueWithoutProviderInput | ServiceAreaUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceAreaUpdateManyWithWhereWithoutProviderInput | ServiceAreaUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateOneWithoutProviderNestedInput = {
    create?: XOR<AvailabilityCreateWithoutProviderInput, AvailabilityUncheckedCreateWithoutProviderInput>
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProviderInput
    upsert?: AvailabilityUpsertWithoutProviderInput
    disconnect?: AvailabilityWhereInput | boolean
    delete?: AvailabilityWhereInput | boolean
    connect?: AvailabilityWhereUniqueInput
    update?: XOR<XOR<AvailabilityUpdateToOneWithWhereWithoutProviderInput, AvailabilityUpdateWithoutProviderInput>, AvailabilityUncheckedUpdateWithoutProviderInput>
  }

  export type VerificationDocumentUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<VerificationDocumentCreateWithoutProviderInput, VerificationDocumentUncheckedCreateWithoutProviderInput> | VerificationDocumentCreateWithoutProviderInput[] | VerificationDocumentUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: VerificationDocumentCreateOrConnectWithoutProviderInput | VerificationDocumentCreateOrConnectWithoutProviderInput[]
    upsert?: VerificationDocumentUpsertWithWhereUniqueWithoutProviderInput | VerificationDocumentUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: VerificationDocumentCreateManyProviderInputEnvelope
    set?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    disconnect?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    delete?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    connect?: VerificationDocumentWhereUniqueInput | VerificationDocumentWhereUniqueInput[]
    update?: VerificationDocumentUpdateWithWhereUniqueWithoutProviderInput | VerificationDocumentUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: VerificationDocumentUpdateManyWithWhereWithoutProviderInput | VerificationDocumentUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: VerificationDocumentScalarWhereInput | VerificationDocumentScalarWhereInput[]
  }

  export type ServiceProviderCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutProviderServicesInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type MainCategoryCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<MainCategoryCreateWithoutProviderServicesInput, MainCategoryUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutProviderServicesInput
    connect?: MainCategoryWhereUniqueInput
  }

  export type SubCategoryCreateNestedOneWithoutProviderServicesInput = {
    create?: XOR<SubCategoryCreateWithoutProviderServicesInput, SubCategoryUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProviderServicesInput
    connect?: SubCategoryWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceProviderUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutProviderServicesInput
    upsert?: ServiceProviderUpsertWithoutProviderServicesInput
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutProviderServicesInput, ServiceProviderUpdateWithoutProviderServicesInput>, ServiceProviderUncheckedUpdateWithoutProviderServicesInput>
  }

  export type MainCategoryUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<MainCategoryCreateWithoutProviderServicesInput, MainCategoryUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: MainCategoryCreateOrConnectWithoutProviderServicesInput
    upsert?: MainCategoryUpsertWithoutProviderServicesInput
    connect?: MainCategoryWhereUniqueInput
    update?: XOR<XOR<MainCategoryUpdateToOneWithWhereWithoutProviderServicesInput, MainCategoryUpdateWithoutProviderServicesInput>, MainCategoryUncheckedUpdateWithoutProviderServicesInput>
  }

  export type SubCategoryUpdateOneRequiredWithoutProviderServicesNestedInput = {
    create?: XOR<SubCategoryCreateWithoutProviderServicesInput, SubCategoryUncheckedCreateWithoutProviderServicesInput>
    connectOrCreate?: SubCategoryCreateOrConnectWithoutProviderServicesInput
    upsert?: SubCategoryUpsertWithoutProviderServicesInput
    connect?: SubCategoryWhereUniqueInput
    update?: XOR<XOR<SubCategoryUpdateToOneWithWhereWithoutProviderServicesInput, SubCategoryUpdateWithoutProviderServicesInput>, SubCategoryUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceProviderCreateNestedOneWithoutServiceAreasInput = {
    create?: XOR<ServiceProviderCreateWithoutServiceAreasInput, ServiceProviderUncheckedCreateWithoutServiceAreasInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutServiceAreasInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ServiceProviderUpdateOneRequiredWithoutServiceAreasNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutServiceAreasInput, ServiceProviderUncheckedCreateWithoutServiceAreasInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutServiceAreasInput
    upsert?: ServiceProviderUpsertWithoutServiceAreasInput
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutServiceAreasInput, ServiceProviderUpdateWithoutServiceAreasInput>, ServiceProviderUncheckedUpdateWithoutServiceAreasInput>
  }

  export type ServiceProviderCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<ServiceProviderCreateWithoutAvailabilityInput, ServiceProviderUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutAvailabilityInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServiceProviderUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutAvailabilityInput, ServiceProviderUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutAvailabilityInput
    upsert?: ServiceProviderUpsertWithoutAvailabilityInput
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutAvailabilityInput, ServiceProviderUpdateWithoutAvailabilityInput>, ServiceProviderUncheckedUpdateWithoutAvailabilityInput>
  }

  export type ServiceProviderCreateNestedOneWithoutVerificationDocumentsInput = {
    create?: XOR<ServiceProviderCreateWithoutVerificationDocumentsInput, ServiceProviderUncheckedCreateWithoutVerificationDocumentsInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutVerificationDocumentsInput
    connect?: ServiceProviderWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type EnumDocumentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DocumentStatus
  }

  export type ServiceProviderUpdateOneRequiredWithoutVerificationDocumentsNestedInput = {
    create?: XOR<ServiceProviderCreateWithoutVerificationDocumentsInput, ServiceProviderUncheckedCreateWithoutVerificationDocumentsInput>
    connectOrCreate?: ServiceProviderCreateOrConnectWithoutVerificationDocumentsInput
    upsert?: ServiceProviderUpsertWithoutVerificationDocumentsInput
    connect?: ServiceProviderWhereUniqueInput
    update?: XOR<XOR<ServiceProviderUpdateToOneWithWhereWithoutVerificationDocumentsInput, ServiceProviderUpdateWithoutVerificationDocumentsInput>, ServiceProviderUncheckedUpdateWithoutVerificationDocumentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusFilter<$PrismaModel> | $Enums.DocumentStatus
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentStatus | EnumDocumentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentStatus[] | ListEnumDocumentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DocumentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentStatusFilter<$PrismaModel>
    _max?: NestedEnumDocumentStatusFilter<$PrismaModel>
  }

  export type SubCategoryCreateWithoutMainCategoryInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryUncheckedCreateWithoutMainCategoryInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutSubCategoryInput
  }

  export type SubCategoryCreateOrConnectWithoutMainCategoryInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutMainCategoryInput, SubCategoryUncheckedCreateWithoutMainCategoryInput>
  }

  export type SubCategoryCreateManyMainCategoryInputEnvelope = {
    data: SubCategoryCreateManyMainCategoryInput | SubCategoryCreateManyMainCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProviderServiceCreateWithoutMainCategoryInput = {
    id?: string
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutProviderServicesInput
    subCategory: SubCategoryCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServiceUncheckedCreateWithoutMainCategoryInput = {
    id?: string
    providerId: string
    subCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProviderServiceCreateOrConnectWithoutMainCategoryInput = {
    where: ProviderServiceWhereUniqueInput
    create: XOR<ProviderServiceCreateWithoutMainCategoryInput, ProviderServiceUncheckedCreateWithoutMainCategoryInput>
  }

  export type ProviderServiceCreateManyMainCategoryInputEnvelope = {
    data: ProviderServiceCreateManyMainCategoryInput | ProviderServiceCreateManyMainCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SubCategoryUpsertWithWhereUniqueWithoutMainCategoryInput = {
    where: SubCategoryWhereUniqueInput
    update: XOR<SubCategoryUpdateWithoutMainCategoryInput, SubCategoryUncheckedUpdateWithoutMainCategoryInput>
    create: XOR<SubCategoryCreateWithoutMainCategoryInput, SubCategoryUncheckedCreateWithoutMainCategoryInput>
  }

  export type SubCategoryUpdateWithWhereUniqueWithoutMainCategoryInput = {
    where: SubCategoryWhereUniqueInput
    data: XOR<SubCategoryUpdateWithoutMainCategoryInput, SubCategoryUncheckedUpdateWithoutMainCategoryInput>
  }

  export type SubCategoryUpdateManyWithWhereWithoutMainCategoryInput = {
    where: SubCategoryScalarWhereInput
    data: XOR<SubCategoryUpdateManyMutationInput, SubCategoryUncheckedUpdateManyWithoutMainCategoryInput>
  }

  export type SubCategoryScalarWhereInput = {
    AND?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    OR?: SubCategoryScalarWhereInput[]
    NOT?: SubCategoryScalarWhereInput | SubCategoryScalarWhereInput[]
    id?: IntFilter<"SubCategory"> | number
    mainCategoryId?: IntFilter<"SubCategory"> | number
    name?: StringFilter<"SubCategory"> | string
    isActive?: BoolFilter<"SubCategory"> | boolean
    createdAt?: DateTimeFilter<"SubCategory"> | Date | string
  }

  export type ProviderServiceUpsertWithWhereUniqueWithoutMainCategoryInput = {
    where: ProviderServiceWhereUniqueInput
    update: XOR<ProviderServiceUpdateWithoutMainCategoryInput, ProviderServiceUncheckedUpdateWithoutMainCategoryInput>
    create: XOR<ProviderServiceCreateWithoutMainCategoryInput, ProviderServiceUncheckedCreateWithoutMainCategoryInput>
  }

  export type ProviderServiceUpdateWithWhereUniqueWithoutMainCategoryInput = {
    where: ProviderServiceWhereUniqueInput
    data: XOR<ProviderServiceUpdateWithoutMainCategoryInput, ProviderServiceUncheckedUpdateWithoutMainCategoryInput>
  }

  export type ProviderServiceUpdateManyWithWhereWithoutMainCategoryInput = {
    where: ProviderServiceScalarWhereInput
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyWithoutMainCategoryInput>
  }

  export type ProviderServiceScalarWhereInput = {
    AND?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
    OR?: ProviderServiceScalarWhereInput[]
    NOT?: ProviderServiceScalarWhereInput | ProviderServiceScalarWhereInput[]
    id?: UuidFilter<"ProviderService"> | string
    providerId?: UuidFilter<"ProviderService"> | string
    mainCategoryId?: IntFilter<"ProviderService"> | number
    subCategoryId?: IntFilter<"ProviderService"> | number
    experienceYears?: IntNullableFilter<"ProviderService"> | number | null
    description?: StringNullableFilter<"ProviderService"> | string | null
    createdAt?: DateTimeFilter<"ProviderService"> | Date | string
  }

  export type MainCategoryCreateWithoutSubCategoriesInput = {
    name: string
    iconUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUncheckedCreateWithoutSubCategoriesInput = {
    id?: number
    name: string
    iconUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryCreateOrConnectWithoutSubCategoriesInput = {
    where: MainCategoryWhereUniqueInput
    create: XOR<MainCategoryCreateWithoutSubCategoriesInput, MainCategoryUncheckedCreateWithoutSubCategoriesInput>
  }

  export type ProviderServiceCreateWithoutSubCategoryInput = {
    id?: string
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
    provider: ServiceProviderCreateNestedOneWithoutProviderServicesInput
    mainCategory: MainCategoryCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServiceUncheckedCreateWithoutSubCategoryInput = {
    id?: string
    providerId: string
    mainCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProviderServiceCreateOrConnectWithoutSubCategoryInput = {
    where: ProviderServiceWhereUniqueInput
    create: XOR<ProviderServiceCreateWithoutSubCategoryInput, ProviderServiceUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProviderServiceCreateManySubCategoryInputEnvelope = {
    data: ProviderServiceCreateManySubCategoryInput | ProviderServiceCreateManySubCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MainCategoryUpsertWithoutSubCategoriesInput = {
    update: XOR<MainCategoryUpdateWithoutSubCategoriesInput, MainCategoryUncheckedUpdateWithoutSubCategoriesInput>
    create: XOR<MainCategoryCreateWithoutSubCategoriesInput, MainCategoryUncheckedCreateWithoutSubCategoriesInput>
    where?: MainCategoryWhereInput
  }

  export type MainCategoryUpdateToOneWithWhereWithoutSubCategoriesInput = {
    where?: MainCategoryWhereInput
    data: XOR<MainCategoryUpdateWithoutSubCategoriesInput, MainCategoryUncheckedUpdateWithoutSubCategoriesInput>
  }

  export type MainCategoryUpdateWithoutSubCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateWithoutSubCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutMainCategoryNestedInput
  }

  export type ProviderServiceUpsertWithWhereUniqueWithoutSubCategoryInput = {
    where: ProviderServiceWhereUniqueInput
    update: XOR<ProviderServiceUpdateWithoutSubCategoryInput, ProviderServiceUncheckedUpdateWithoutSubCategoryInput>
    create: XOR<ProviderServiceCreateWithoutSubCategoryInput, ProviderServiceUncheckedCreateWithoutSubCategoryInput>
  }

  export type ProviderServiceUpdateWithWhereUniqueWithoutSubCategoryInput = {
    where: ProviderServiceWhereUniqueInput
    data: XOR<ProviderServiceUpdateWithoutSubCategoryInput, ProviderServiceUncheckedUpdateWithoutSubCategoryInput>
  }

  export type ProviderServiceUpdateManyWithWhereWithoutSubCategoryInput = {
    where: ProviderServiceScalarWhereInput
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyWithoutSubCategoryInput>
  }

  export type ProviderServiceCreateWithoutProviderInput = {
    id?: string
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
    mainCategory: MainCategoryCreateNestedOneWithoutProviderServicesInput
    subCategory: SubCategoryCreateNestedOneWithoutProviderServicesInput
  }

  export type ProviderServiceUncheckedCreateWithoutProviderInput = {
    id?: string
    mainCategoryId: number
    subCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProviderServiceCreateOrConnectWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput
    create: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput>
  }

  export type ProviderServiceCreateManyProviderInputEnvelope = {
    data: ProviderServiceCreateManyProviderInput | ProviderServiceCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ServiceAreaCreateWithoutProviderInput = {
    id?: string
    town: string
    areaDescription?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type ServiceAreaUncheckedCreateWithoutProviderInput = {
    id?: string
    town: string
    areaDescription?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type ServiceAreaCreateOrConnectWithoutProviderInput = {
    where: ServiceAreaWhereUniqueInput
    create: XOR<ServiceAreaCreateWithoutProviderInput, ServiceAreaUncheckedCreateWithoutProviderInput>
  }

  export type ServiceAreaCreateManyProviderInputEnvelope = {
    data: ServiceAreaCreateManyProviderInput | ServiceAreaCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityCreateWithoutProviderInput = {
    id?: string
    availableDays?: string | null
    availableFrom?: Date | string | null
    availableTo?: Date | string | null
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: Date | string
  }

  export type AvailabilityUncheckedCreateWithoutProviderInput = {
    id?: string
    availableDays?: string | null
    availableFrom?: Date | string | null
    availableTo?: Date | string | null
    is24_7?: boolean
    isAvailableNow?: boolean
    updatedAt?: Date | string
  }

  export type AvailabilityCreateOrConnectWithoutProviderInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutProviderInput, AvailabilityUncheckedCreateWithoutProviderInput>
  }

  export type VerificationDocumentCreateWithoutProviderInput = {
    id?: string
    documentType: $Enums.DocumentType
    bucketKey: string
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type VerificationDocumentUncheckedCreateWithoutProviderInput = {
    id?: string
    documentType: $Enums.DocumentType
    bucketKey: string
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type VerificationDocumentCreateOrConnectWithoutProviderInput = {
    where: VerificationDocumentWhereUniqueInput
    create: XOR<VerificationDocumentCreateWithoutProviderInput, VerificationDocumentUncheckedCreateWithoutProviderInput>
  }

  export type VerificationDocumentCreateManyProviderInputEnvelope = {
    data: VerificationDocumentCreateManyProviderInput | VerificationDocumentCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ProviderServiceUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput
    update: XOR<ProviderServiceUpdateWithoutProviderInput, ProviderServiceUncheckedUpdateWithoutProviderInput>
    create: XOR<ProviderServiceCreateWithoutProviderInput, ProviderServiceUncheckedCreateWithoutProviderInput>
  }

  export type ProviderServiceUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProviderServiceWhereUniqueInput
    data: XOR<ProviderServiceUpdateWithoutProviderInput, ProviderServiceUncheckedUpdateWithoutProviderInput>
  }

  export type ProviderServiceUpdateManyWithWhereWithoutProviderInput = {
    where: ProviderServiceScalarWhereInput
    data: XOR<ProviderServiceUpdateManyMutationInput, ProviderServiceUncheckedUpdateManyWithoutProviderInput>
  }

  export type ServiceAreaUpsertWithWhereUniqueWithoutProviderInput = {
    where: ServiceAreaWhereUniqueInput
    update: XOR<ServiceAreaUpdateWithoutProviderInput, ServiceAreaUncheckedUpdateWithoutProviderInput>
    create: XOR<ServiceAreaCreateWithoutProviderInput, ServiceAreaUncheckedCreateWithoutProviderInput>
  }

  export type ServiceAreaUpdateWithWhereUniqueWithoutProviderInput = {
    where: ServiceAreaWhereUniqueInput
    data: XOR<ServiceAreaUpdateWithoutProviderInput, ServiceAreaUncheckedUpdateWithoutProviderInput>
  }

  export type ServiceAreaUpdateManyWithWhereWithoutProviderInput = {
    where: ServiceAreaScalarWhereInput
    data: XOR<ServiceAreaUpdateManyMutationInput, ServiceAreaUncheckedUpdateManyWithoutProviderInput>
  }

  export type ServiceAreaScalarWhereInput = {
    AND?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
    OR?: ServiceAreaScalarWhereInput[]
    NOT?: ServiceAreaScalarWhereInput | ServiceAreaScalarWhereInput[]
    id?: UuidFilter<"ServiceArea"> | string
    providerId?: UuidFilter<"ServiceArea"> | string
    town?: StringFilter<"ServiceArea"> | string
    areaDescription?: StringNullableFilter<"ServiceArea"> | string | null
    latitude?: DecimalNullableFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"ServiceArea"> | Decimal | DecimalJsLike | number | string | null
    address?: StringNullableFilter<"ServiceArea"> | string | null
    createdAt?: DateTimeFilter<"ServiceArea"> | Date | string
  }

  export type AvailabilityUpsertWithoutProviderInput = {
    update: XOR<AvailabilityUpdateWithoutProviderInput, AvailabilityUncheckedUpdateWithoutProviderInput>
    create: XOR<AvailabilityCreateWithoutProviderInput, AvailabilityUncheckedCreateWithoutProviderInput>
    where?: AvailabilityWhereInput
  }

  export type AvailabilityUpdateToOneWithWhereWithoutProviderInput = {
    where?: AvailabilityWhereInput
    data: XOR<AvailabilityUpdateWithoutProviderInput, AvailabilityUncheckedUpdateWithoutProviderInput>
  }

  export type AvailabilityUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availableTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is24_7?: BoolFieldUpdateOperationsInput | boolean
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    availableDays?: NullableStringFieldUpdateOperationsInput | string | null
    availableFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    availableTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is24_7?: BoolFieldUpdateOperationsInput | boolean
    isAvailableNow?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationDocumentUpsertWithWhereUniqueWithoutProviderInput = {
    where: VerificationDocumentWhereUniqueInput
    update: XOR<VerificationDocumentUpdateWithoutProviderInput, VerificationDocumentUncheckedUpdateWithoutProviderInput>
    create: XOR<VerificationDocumentCreateWithoutProviderInput, VerificationDocumentUncheckedCreateWithoutProviderInput>
  }

  export type VerificationDocumentUpdateWithWhereUniqueWithoutProviderInput = {
    where: VerificationDocumentWhereUniqueInput
    data: XOR<VerificationDocumentUpdateWithoutProviderInput, VerificationDocumentUncheckedUpdateWithoutProviderInput>
  }

  export type VerificationDocumentUpdateManyWithWhereWithoutProviderInput = {
    where: VerificationDocumentScalarWhereInput
    data: XOR<VerificationDocumentUpdateManyMutationInput, VerificationDocumentUncheckedUpdateManyWithoutProviderInput>
  }

  export type VerificationDocumentScalarWhereInput = {
    AND?: VerificationDocumentScalarWhereInput | VerificationDocumentScalarWhereInput[]
    OR?: VerificationDocumentScalarWhereInput[]
    NOT?: VerificationDocumentScalarWhereInput | VerificationDocumentScalarWhereInput[]
    id?: UuidFilter<"VerificationDocument"> | string
    providerId?: UuidFilter<"VerificationDocument"> | string
    documentType?: EnumDocumentTypeFilter<"VerificationDocument"> | $Enums.DocumentType
    bucketKey?: StringFilter<"VerificationDocument"> | string
    status?: EnumDocumentStatusFilter<"VerificationDocument"> | $Enums.DocumentStatus
    uploadedAt?: DateTimeFilter<"VerificationDocument"> | Date | string
  }

  export type ServiceProviderCreateWithoutProviderServicesInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    serviceAreas?: ServiceAreaCreateNestedManyWithoutProviderInput
    availability?: AvailabilityCreateNestedOneWithoutProviderInput
    verificationDocuments?: VerificationDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutProviderServicesInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    serviceAreas?: ServiceAreaUncheckedCreateNestedManyWithoutProviderInput
    availability?: AvailabilityUncheckedCreateNestedOneWithoutProviderInput
    verificationDocuments?: VerificationDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutProviderServicesInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
  }

  export type MainCategoryCreateWithoutProviderServicesInput = {
    name: string
    iconUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: SubCategoryCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryUncheckedCreateWithoutProviderServicesInput = {
    id?: number
    name: string
    iconUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    subCategories?: SubCategoryUncheckedCreateNestedManyWithoutMainCategoryInput
  }

  export type MainCategoryCreateOrConnectWithoutProviderServicesInput = {
    where: MainCategoryWhereUniqueInput
    create: XOR<MainCategoryCreateWithoutProviderServicesInput, MainCategoryUncheckedCreateWithoutProviderServicesInput>
  }

  export type SubCategoryCreateWithoutProviderServicesInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    mainCategory: MainCategoryCreateNestedOneWithoutSubCategoriesInput
  }

  export type SubCategoryUncheckedCreateWithoutProviderServicesInput = {
    id?: number
    mainCategoryId: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type SubCategoryCreateOrConnectWithoutProviderServicesInput = {
    where: SubCategoryWhereUniqueInput
    create: XOR<SubCategoryCreateWithoutProviderServicesInput, SubCategoryUncheckedCreateWithoutProviderServicesInput>
  }

  export type ServiceProviderUpsertWithoutProviderServicesInput = {
    update: XOR<ServiceProviderUpdateWithoutProviderServicesInput, ServiceProviderUncheckedUpdateWithoutProviderServicesInput>
    create: XOR<ServiceProviderCreateWithoutProviderServicesInput, ServiceProviderUncheckedCreateWithoutProviderServicesInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutProviderServicesInput, ServiceProviderUncheckedUpdateWithoutProviderServicesInput>
  }

  export type ServiceProviderUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceAreas?: ServiceAreaUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUpdateOneWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutProviderServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceAreas?: ServiceAreaUncheckedUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUncheckedUpdateOneWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type MainCategoryUpsertWithoutProviderServicesInput = {
    update: XOR<MainCategoryUpdateWithoutProviderServicesInput, MainCategoryUncheckedUpdateWithoutProviderServicesInput>
    create: XOR<MainCategoryCreateWithoutProviderServicesInput, MainCategoryUncheckedCreateWithoutProviderServicesInput>
    where?: MainCategoryWhereInput
  }

  export type MainCategoryUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: MainCategoryWhereInput
    data: XOR<MainCategoryUpdateWithoutProviderServicesInput, MainCategoryUncheckedUpdateWithoutProviderServicesInput>
  }

  export type MainCategoryUpdateWithoutProviderServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUpdateManyWithoutMainCategoryNestedInput
  }

  export type MainCategoryUncheckedUpdateWithoutProviderServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    iconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subCategories?: SubCategoryUncheckedUpdateManyWithoutMainCategoryNestedInput
  }

  export type SubCategoryUpsertWithoutProviderServicesInput = {
    update: XOR<SubCategoryUpdateWithoutProviderServicesInput, SubCategoryUncheckedUpdateWithoutProviderServicesInput>
    create: XOR<SubCategoryCreateWithoutProviderServicesInput, SubCategoryUncheckedCreateWithoutProviderServicesInput>
    where?: SubCategoryWhereInput
  }

  export type SubCategoryUpdateToOneWithWhereWithoutProviderServicesInput = {
    where?: SubCategoryWhereInput
    data: XOR<SubCategoryUpdateWithoutProviderServicesInput, SubCategoryUncheckedUpdateWithoutProviderServicesInput>
  }

  export type SubCategoryUpdateWithoutProviderServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCategory?: MainCategoryUpdateOneRequiredWithoutSubCategoriesNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutProviderServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderCreateWithoutServiceAreasInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    availability?: AvailabilityCreateNestedOneWithoutProviderInput
    verificationDocuments?: VerificationDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutServiceAreasInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    availability?: AvailabilityUncheckedCreateNestedOneWithoutProviderInput
    verificationDocuments?: VerificationDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutServiceAreasInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutServiceAreasInput, ServiceProviderUncheckedCreateWithoutServiceAreasInput>
  }

  export type ServiceProviderUpsertWithoutServiceAreasInput = {
    update: XOR<ServiceProviderUpdateWithoutServiceAreasInput, ServiceProviderUncheckedUpdateWithoutServiceAreasInput>
    create: XOR<ServiceProviderCreateWithoutServiceAreasInput, ServiceProviderUncheckedCreateWithoutServiceAreasInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutServiceAreasInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutServiceAreasInput, ServiceProviderUncheckedUpdateWithoutServiceAreasInput>
  }

  export type ServiceProviderUpdateWithoutServiceAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUpdateOneWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutServiceAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUncheckedUpdateOneWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderCreateWithoutAvailabilityInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    serviceAreas?: ServiceAreaCreateNestedManyWithoutProviderInput
    verificationDocuments?: VerificationDocumentCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    serviceAreas?: ServiceAreaUncheckedCreateNestedManyWithoutProviderInput
    verificationDocuments?: VerificationDocumentUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutAvailabilityInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutAvailabilityInput, ServiceProviderUncheckedCreateWithoutAvailabilityInput>
  }

  export type ServiceProviderUpsertWithoutAvailabilityInput = {
    update: XOR<ServiceProviderUpdateWithoutAvailabilityInput, ServiceProviderUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<ServiceProviderCreateWithoutAvailabilityInput, ServiceProviderUncheckedCreateWithoutAvailabilityInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutAvailabilityInput, ServiceProviderUncheckedUpdateWithoutAvailabilityInput>
  }

  export type ServiceProviderUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    serviceAreas?: ServiceAreaUpdateManyWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    serviceAreas?: ServiceAreaUncheckedUpdateManyWithoutProviderNestedInput
    verificationDocuments?: VerificationDocumentUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ServiceProviderCreateWithoutVerificationDocumentsInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceCreateNestedManyWithoutProviderInput
    serviceAreas?: ServiceAreaCreateNestedManyWithoutProviderInput
    availability?: AvailabilityCreateNestedOneWithoutProviderInput
  }

  export type ServiceProviderUncheckedCreateWithoutVerificationDocumentsInput = {
    id?: string
    fullName: string
    mobileNumber: string
    mobileVerified?: boolean
    whatsappNumber?: string | null
    email?: string | null
    nicNumber: string
    isActive?: boolean
    createdAt?: Date | string
    providerServices?: ProviderServiceUncheckedCreateNestedManyWithoutProviderInput
    serviceAreas?: ServiceAreaUncheckedCreateNestedManyWithoutProviderInput
    availability?: AvailabilityUncheckedCreateNestedOneWithoutProviderInput
  }

  export type ServiceProviderCreateOrConnectWithoutVerificationDocumentsInput = {
    where: ServiceProviderWhereUniqueInput
    create: XOR<ServiceProviderCreateWithoutVerificationDocumentsInput, ServiceProviderUncheckedCreateWithoutVerificationDocumentsInput>
  }

  export type ServiceProviderUpsertWithoutVerificationDocumentsInput = {
    update: XOR<ServiceProviderUpdateWithoutVerificationDocumentsInput, ServiceProviderUncheckedUpdateWithoutVerificationDocumentsInput>
    create: XOR<ServiceProviderCreateWithoutVerificationDocumentsInput, ServiceProviderUncheckedCreateWithoutVerificationDocumentsInput>
    where?: ServiceProviderWhereInput
  }

  export type ServiceProviderUpdateToOneWithWhereWithoutVerificationDocumentsInput = {
    where?: ServiceProviderWhereInput
    data: XOR<ServiceProviderUpdateWithoutVerificationDocumentsInput, ServiceProviderUncheckedUpdateWithoutVerificationDocumentsInput>
  }

  export type ServiceProviderUpdateWithoutVerificationDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUpdateManyWithoutProviderNestedInput
    serviceAreas?: ServiceAreaUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUpdateOneWithoutProviderNestedInput
  }

  export type ServiceProviderUncheckedUpdateWithoutVerificationDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    mobileVerified?: BoolFieldUpdateOperationsInput | boolean
    whatsappNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    nicNumber?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutProviderNestedInput
    serviceAreas?: ServiceAreaUncheckedUpdateManyWithoutProviderNestedInput
    availability?: AvailabilityUncheckedUpdateOneWithoutProviderNestedInput
  }

  export type SubCategoryCreateManyMainCategoryInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ProviderServiceCreateManyMainCategoryInput = {
    id?: string
    providerId: string
    subCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type SubCategoryUpdateWithoutMainCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateWithoutMainCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerServices?: ProviderServiceUncheckedUpdateManyWithoutSubCategoryNestedInput
  }

  export type SubCategoryUncheckedUpdateManyWithoutMainCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUpdateWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutProviderServicesNestedInput
    subCategory?: SubCategoryUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServiceUncheckedUpdateWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUncheckedUpdateManyWithoutMainCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    subCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceCreateManySubCategoryInput = {
    id?: string
    providerId: string
    mainCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ProviderServiceUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ServiceProviderUpdateOneRequiredWithoutProviderServicesNestedInput
    mainCategory?: MainCategoryUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServiceUncheckedUpdateWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUncheckedUpdateManyWithoutSubCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceCreateManyProviderInput = {
    id?: string
    mainCategoryId: number
    subCategoryId: number
    experienceYears?: number | null
    description?: string | null
    createdAt?: Date | string
  }

  export type ServiceAreaCreateManyProviderInput = {
    id?: string
    town: string
    areaDescription?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    address?: string | null
    createdAt?: Date | string
  }

  export type VerificationDocumentCreateManyProviderInput = {
    id?: string
    documentType: $Enums.DocumentType
    bucketKey: string
    status?: $Enums.DocumentStatus
    uploadedAt?: Date | string
  }

  export type ProviderServiceUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mainCategory?: MainCategoryUpdateOneRequiredWithoutProviderServicesNestedInput
    subCategory?: SubCategoryUpdateOneRequiredWithoutProviderServicesNestedInput
  }

  export type ProviderServiceUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    subCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderServiceUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainCategoryId?: IntFieldUpdateOperationsInput | number
    subCategoryId?: IntFieldUpdateOperationsInput | number
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    areaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    areaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceAreaUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    town?: StringFieldUpdateOperationsInput | string
    areaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationDocumentUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    bucketKey?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationDocumentUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    bucketKey?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationDocumentUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    bucketKey?: StringFieldUpdateOperationsInput | string
    status?: EnumDocumentStatusFieldUpdateOperationsInput | $Enums.DocumentStatus
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}